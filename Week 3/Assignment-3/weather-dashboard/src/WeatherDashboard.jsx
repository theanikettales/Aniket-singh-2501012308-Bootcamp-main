import { useState, useCallback } from 'react'
import { describeWeatherCode, moodGradients } from './weatherCodes.js'

const GEOCODE_URL = 'https://geocoding-api.open-meteo.com/v1/search'
const FORECAST_URL = 'https://api.open-meteo.com/v1/forecast'

const dayFormatter = new Intl.DateTimeFormat(undefined, { weekday: 'short' })

function celsiusToFahrenheit(c) {
  return (c * 9) / 5 + 32
}

function formatTemp(celsius, unit) {
  const value = unit === 'F' ? celsiusToFahrenheit(celsius) : celsius
  return Math.round(value)
}

function WeatherDashboard() {
  const [query, setQuery] = useState('')
  const [unit, setUnit] = useState('C')
  const [status, setStatus] = useState('idle') // idle | loading | error | ready
  const [errorMessage, setErrorMessage] = useState('')
  const [place, setPlace] = useState(null)
  const [current, setCurrent] = useState(null)
  const [daily, setDaily] = useState([])

  const loadWeatherForCoords = useCallback(async (latitude, longitude, label) => {
    setStatus('loading')
    setErrorMessage('')

    try {
      const params = new URLSearchParams({
        latitude,
        longitude,
        current: 'temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m',
        daily: 'weather_code,temperature_2m_max,temperature_2m_min',
        timezone: 'auto',
      })

      const response = await fetch(`${FORECAST_URL}?${params.toString()}`)
      if (!response.ok) throw new Error('Could not load weather for that location.')
      const data = await response.json()

      setCurrent(data.current)
      setPlace(label)

      const days = data.daily.time.map((date, index) => ({
        date,
        weatherCode: data.daily.weather_code[index],
        max: data.daily.temperature_2m_max[index],
        min: data.daily.temperature_2m_min[index],
      }))
      setDaily(days)
      setStatus('ready')
    } catch (err) {
      setStatus('error')
      setErrorMessage(err.message || 'Something went wrong fetching the weather.')
    }
  }, [])

  const handleSearch = useCallback(
    async (event) => {
      event.preventDefault()
      const trimmed = query.trim()
      if (!trimmed) return

      setStatus('loading')
      setErrorMessage('')

      try {
        const params = new URLSearchParams({ name: trimmed, count: '1' })
        const response = await fetch(`${GEOCODE_URL}?${params.toString()}`)
        if (!response.ok) throw new Error('Could not search for that city.')
        const data = await response.json()

        if (!data.results || data.results.length === 0) {
          setStatus('error')
          setErrorMessage(`No results found for "${trimmed}".`)
          return
        }

        const result = data.results[0]
        const label = [result.name, result.admin1, result.country]
          .filter(Boolean)
          .join(', ')

        await loadWeatherForCoords(result.latitude, result.longitude, label)
      } catch (err) {
        setStatus('error')
        setErrorMessage(err.message || 'Something went wrong searching for that city.')
      }
    },
    [query, loadWeatherForCoords],
  )

  const handleUseLocation = useCallback(() => {
    if (!navigator.geolocation) {
      setStatus('error')
      setErrorMessage('Geolocation is not supported by this browser.')
      return
    }

    setStatus('loading')
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords
        loadWeatherForCoords(latitude, longitude, 'Your location')
      },
      () => {
        setStatus('error')
        setErrorMessage('Could not access your location.')
      },
    )
  }, [loadWeatherForCoords])

  const weatherInfo = current ? describeWeatherCode(current.weather_code) : null
  const background = weatherInfo ? moodGradients[weatherInfo.mood] : moodGradients.clear

  return (
    <div className="dashboard" style={{ background }}>
      <div className="dashboard-inner">
        <header className="header">
          <h1>Weather dashboard</h1>
          <button
            type="button"
            className="unit-toggle"
            onClick={() => setUnit((u) => (u === 'C' ? 'F' : 'C'))}
          >
            °{unit === 'C' ? 'F' : 'C'}
          </button>
        </header>

        <form className="search" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search a city, e.g. Jaipur"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit">Search</button>
          <button type="button" className="ghost" onClick={handleUseLocation}>
            Use my location
          </button>
        </form>

        {status === 'loading' && <p className="status-text">Loading weather…</p>}
        {status === 'error' && <p className="status-text error-text">{errorMessage}</p>}

        {status === 'ready' && current && weatherInfo && (
          <>
            <section className="hero">
              <div className="hero-icon">{weatherInfo.icon}</div>
              <div className="hero-main">
                <p className="place">{place}</p>
                <p className="temp">{formatTemp(current.temperature_2m, unit)}°{unit}</p>
                <p className="label">{weatherInfo.label}</p>
              </div>
            </section>

            <section className="stats">
              <div className="stat-card">
                <span className="stat-label">Feels like</span>
                <span className="stat-value">
                  {formatTemp(current.apparent_temperature, unit)}°{unit}
                </span>
              </div>
              <div className="stat-card">
                <span className="stat-label">Humidity</span>
                <span className="stat-value">{Math.round(current.relative_humidity_2m)}%</span>
              </div>
              <div className="stat-card">
                <span className="stat-label">Wind</span>
                <span className="stat-value">{Math.round(current.wind_speed_10m)} km/h</span>
              </div>
            </section>

            <section className="forecast">
              {daily.map((day, index) => {
                const info = describeWeatherCode(day.weatherCode)
                const label = index === 0 ? 'Today' : dayFormatter.format(new Date(day.date))
                return (
                  <div className="forecast-card" key={day.date}>
                    <span className="forecast-day">{label}</span>
                    <span className="forecast-icon">{info.icon}</span>
                    <span className="forecast-temps">
                      <span className="forecast-max">{formatTemp(day.max, unit)}°</span>
                      <span className="forecast-min">{formatTemp(day.min, unit)}°</span>
                    </span>
                  </div>
                )
              })}
            </section>
          </>
        )}

        {status === 'idle' && (
          <p className="status-text">Search a city or use your location to see the forecast.</p>
        )}
      </div>
    </div>
  )
}

export default WeatherDashboard
