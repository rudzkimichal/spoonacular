
import {useState, useEffect} from 'react';
import axios from 'axios';

const SearchInput = () => {

  const [data, setData] = useState([]);
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    axios.get(`https://api.spoonacular.com/food/ingredients/search?query=${value}&number=10&apiKey=${process.env.API_URL}`)
    .then(resp => resp.data)
    .then(data => data.results)
    .then(data => setData(data))
    .catch(err => console.log(err));
  }

  const handleChange = e => {
    setValue(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} value={value} type='text' name='search' id='search' />
      <button type='submit'>Search ingredients</button>
    </form>
  );
}

export default SearchInput;
