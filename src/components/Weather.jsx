import { useSelector } from 'react-redux';
import { useGetWeatherQuery } from '../redux/weather.api';
import WeatherCard from './WeatherCard';
import Loader from './Loader';
import Search from './Search';

const Weather = () => {
  const city = useSelector((state) => state.city.city);
  const { isError, isLoading, data } = useGetWeatherQuery(city);

  if (isError) {
    return (
      <div className="mx-auto flex flex-col justify-center items-center mt-[100px]">
        <h2 className="text-2xl mb-2">Smth went wrong</h2>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <Search />
      {isLoading ? <Loader /> : <WeatherCard data={data} />}
    </div>
  );
};

export default Weather;
