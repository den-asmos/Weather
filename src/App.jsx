import { useEffect, useState } from 'react';
import { logo, layer1, layer2, layer5, layer6 } from './assets';
//eslint-disable-next-line
import animateRain from './utils/rain';
import Weather from './components/Weather';

const App = () => {
  const [mousePosition, setMousePosition] = useState({});

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({
        x: (event.clientX - window.innerWidth / 2) * -0.005,
        y: (event.clientY - window.innerHeight / 2) * -0.01,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    Object.assign(document.documentElement, {
      style: `--move-x: ${mousePosition.x}deg; --move-y: ${mousePosition.y}deg;`,
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mousePosition]);

  return (
    <div>
      <div className="logo" style={{ backgroundImage: `url(${logo})` }}></div>

      <section className="layers">
        <div className="layers__container">
          <div
            className="layers__item layer-1"
            style={{ backgroundImage: `url(${layer1})` }}
          ></div>
          <div
            className="layers__item layer-2"
            style={{ backgroundImage: `url(${layer2})` }}
          ></div>
          <div className="layers__item layer-3">
            <div className="hero-content">
              <Weather />
            </div>
          </div>
          <div className="layers__item layer-4">
            <canvas className="rain"></canvas>
          </div>
          <div
            className="layers__item layer-5"
            style={{ backgroundImage: `url(${layer5})` }}
          ></div>
          <div
            className="layers__item layer-6"
            style={{ backgroundImage: `url(${layer6})` }}
          ></div>
        </div>
      </section>
    </div>
  );
};

export default App;
