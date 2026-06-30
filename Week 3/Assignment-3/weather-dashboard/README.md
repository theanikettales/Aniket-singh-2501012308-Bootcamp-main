# Weather Dashboard

A React weather dashboard built with Vite. Search any city or use your current
location to see live conditions and a 5-day forecast. Powered by the free
[Open-Meteo](https://open-meteo.com/) API (no API key required).

## Features
- City search (geocoding) and "use my location" (browser geolocation)
- Current conditions: temperature, feels-like, humidity, wind speed
- 5-day forecast with daily highs/lows
- Celsius / Fahrenheit toggle
- Background gradient and icon shift based on current weather conditions
- Loading and error states

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL shown in your terminal (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

## Notes

This app calls the Open-Meteo geocoding and forecast APIs directly from the
browser, so an internet connection is required at runtime. No API key or
environment variables are needed.
