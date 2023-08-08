import PropTypes from 'prop-types';

const WeatherCard = ({ data }) => {
  return (
    <div className="flex flex-col justify-center items-center mt-[50px] min-w-[320px] border border-white backdrop-blur-md bg-white/30 py-4 px-4 rounded-xl text-3xl">
      <h2>
        Currently in{' '}
        <span className="py-0.5 px-1.5 bg-green-500 rounded-lg">
          {data.name}
        </span>
      </h2>
      <img
        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
        alt="weather"
        className="-mb-8"
      />
      <p>{Math.round(data.main.temp)} &#8451;</p>
      <div className="flex flex-col w-full justify-center items-start mt-4 text-lg"></div>
    </div>
  );
};

WeatherCard.propTypes = {
  data: PropTypes.object,
};

export default WeatherCard;
