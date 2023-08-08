import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { makeSearchRequest } from '../utils/makeSearchRequest';
import { changeCity } from '../redux/city.slice';
import { BiSearchAlt } from 'react-icons/bi';

const Search = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const search = makeSearchRequest(input);

    if (!search) {
      return;
    }

    dispatch(changeCity(search));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center items-center mt-5"
    >
      <div className="relative text-3xl font-light">
        <input
          type="text"
          placeholder="Enter your city..."
          value={input}
          onChange={({ target }) => setInput(target.value)}
          className="py-1 pl-4 pr-12 w-fit outline-none border rounded-md focus:shadow-md shadow-white text-gray-500 leading-10"
        />
        <button type="submit" className="w-6 h-6 absolute bottom-1/4 right-4">
          <BiSearchAlt className="text-green-400" />
        </button>
      </div>
    </form>
  );
};

export default Search;
