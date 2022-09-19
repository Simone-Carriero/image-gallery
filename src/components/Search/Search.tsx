import { useState } from "react"
import { FaSearch } from 'react-icons/fa'
import './Search.css'

const Search = () => {
  const [search, setSearch] = useState('')
  return (
    <section className="search">
      <form className="search-form">
        <input
          type="search"
          value={search}
          placeholder='Search image...'
          onChange={({ target }) => setSearch(target.value)}
          className='search-input'
        />
        <button type="submit" className="search-button">
          <FaSearch />
        </button>
      </form>
    </section>
  )
}

export default Search