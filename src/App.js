import './App.css';
import { CurrentWeatherLoader } from './components/CurrentWeatherLoader';
import { ThemeSwitch } from './components/ThemeSwitch';

function App() {
  return (
    <>
        <header>
          <h1>
            skyze
          </h1>
          <h2>
            weather for you
          </h2>
          <div>
            <ThemeSwitch/>
          </div>
        </header>
        <CurrentWeatherLoader />
    </>
  );
}

export default App;
