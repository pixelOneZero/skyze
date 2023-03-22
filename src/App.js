import './App.css';
import { CurrentWeatherLoader } from './components/CurrentWeatherLoader';

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
        </header>
        <CurrentWeatherLoader />
    </>
  );
}

export default App;
