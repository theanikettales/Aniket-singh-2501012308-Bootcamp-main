// WMO Weather interpretation codes (used by Open-Meteo)
// https://open-meteo.com/en/docs

const codeMap = {
  0: { label: 'Clear sky', icon: '☀️', mood: 'clear' },
  1: { label: 'Mainly clear', icon: '🌤️', mood: 'clear' },
  2: { label: 'Partly cloudy', icon: '⛅', mood: 'cloudy' },
  3: { label: 'Overcast', icon: '☁️', mood: 'cloudy' },
  45: { label: 'Fog', icon: '🌫️', mood: 'fog' },
  48: { label: 'Depositing rime fog', icon: '🌫️', mood: 'fog' },
  51: { label: 'Light drizzle', icon: '🌦️', mood: 'rain' },
  53: { label: 'Moderate drizzle', icon: '🌦️', mood: 'rain' },
  55: { label: 'Dense drizzle', icon: '🌧️', mood: 'rain' },
  56: { label: 'Light freezing drizzle', icon: '🌧️', mood: 'rain' },
  57: { label: 'Dense freezing drizzle', icon: '🌧️', mood: 'rain' },
  61: { label: 'Slight rain', icon: '🌦️', mood: 'rain' },
  63: { label: 'Moderate rain', icon: '🌧️', mood: 'rain' },
  65: { label: 'Heavy rain', icon: '🌧️', mood: 'rain' },
  66: { label: 'Light freezing rain', icon: '🌧️', mood: 'rain' },
  67: { label: 'Heavy freezing rain', icon: '🌧️', mood: 'rain' },
  71: { label: 'Slight snow fall', icon: '🌨️', mood: 'snow' },
  73: { label: 'Moderate snow fall', icon: '🌨️', mood: 'snow' },
  75: { label: 'Heavy snow fall', icon: '❄️', mood: 'snow' },
  77: { label: 'Snow grains', icon: '❄️', mood: 'snow' },
  80: { label: 'Slight rain showers', icon: '🌦️', mood: 'rain' },
  81: { label: 'Moderate rain showers', icon: '🌧️', mood: 'rain' },
  82: { label: 'Violent rain showers', icon: '⛈️', mood: 'storm' },
  85: { label: 'Slight snow showers', icon: '🌨️', mood: 'snow' },
  86: { label: 'Heavy snow showers', icon: '❄️', mood: 'snow' },
  95: { label: 'Thunderstorm', icon: '⛈️', mood: 'storm' },
  96: { label: 'Thunderstorm, slight hail', icon: '⛈️', mood: 'storm' },
  99: { label: 'Thunderstorm, heavy hail', icon: '⛈️', mood: 'storm' },
}

export function describeWeatherCode(code) {
  return codeMap[code] || { label: 'Unknown', icon: '🌡️', mood: 'clear' }
}

export const moodGradients = {
  clear: 'linear-gradient(160deg, #ff9a56 0%, #ffd56b 45%, #6fb1e8 100%)',
  cloudy: 'linear-gradient(160deg, #7e8fa6 0%, #aab8c9 50%, #d8dee6 100%)',
  fog: 'linear-gradient(160deg, #8d99a6 0%, #b9c2cb 50%, #dde2e6 100%)',
  rain: 'linear-gradient(160deg, #2c3e50 0%, #4a6178 50%, #7c97ab 100%)',
  snow: 'linear-gradient(160deg, #4f6f8f 0%, #a9c4dd 50%, #eaf2f8 100%)',
  storm: 'linear-gradient(160deg, #1b1f2b 0%, #34384a 50%, #5b5f73 100%)',
}
