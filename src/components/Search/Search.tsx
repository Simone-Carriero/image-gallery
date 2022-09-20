import { useState } from "react"
import { FaSearch } from 'react-icons/fa'
import './Search.css'

type SearchProps = {
  setQuery: (search: string) => void
}

const Search = ({setQuery}: SearchProps) => {
  const [search, setSearch] = useState('')
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!search) return
    setQuery(search)
  }

  return (
    <section className="search">
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="search"
          value={search}
          placeholder='Search image...'
          onChange={({ target }) => setSearch(target.value)}
          className='search-input'
        />
        <button type="submit" className="search-button" title="Search Photos">
          <FaSearch />
        </button>
      </form>
    </section>
  )
}

export default Search