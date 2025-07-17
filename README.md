# Dog Walking Calculator

A web app to calculate safe walk times for dogs based on size, energy, coat, gear, and weather. Tailored for Princess Cynthia (75 lbs, high-energy, medium-thick coat) with Celsius default and Fahrenheit toggle.

## Setup

### Prerequisites
- Node.js and npm/yarn installed
- Firebase account (for storing dog profiles)
- OpenWeatherMap API key (for weather data)

### Configuration
1. Update Firebase configuration in `frontend/firebase.js` with your actual Firebase project details
2. Update OpenWeatherMap API key in `backend/index.js`

### Installation
From the root directory, install all dependencies:
```powershell
yarn install
```

### Running the Application
You need to run both the frontend and backend in separate PowerShell windows:

#### Frontend
In the first PowerShell window:
```powershell
cd frontend
yarn vite
```

#### Backend
In the second PowerShell window:
```powershell
cd backend
node index.js
```

The frontend will be available at http://localhost:5173 and the backend will run on http://localhost:3000.

## Features
- Calculate safe walk times based on dog characteristics and weather
- Save dog profiles to Firebase
- Toggle between Celsius and Fahrenheit
- Weather warnings for extreme temperatures
