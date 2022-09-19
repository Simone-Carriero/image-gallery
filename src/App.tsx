import { useEffect, useState } from 'react'
import './App.css'
import Photos from './components/Photos/Photos'
import Search from './components/Search/Search'

const client_id = '?client_id=oI60ywb5uBNiyeMeFXCtEVgq1-CGX8w-f8Rc9OYLiUE'
const baseUrl = 'https://api.unsplash.com/photos/random/'
const searchUrl = 'https://api.unsplash.com/search/photos/'

type Data = {
  likes: number,
  full: string,
  username: string,
  medium: string
}

function App() {
  const [query, setQuery] = useState('')
  const [photos, setPhotos] = useState<Data[]>([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)

  const fetchPhotos = async () => {
    const options = {
      method: 'GET',
      'Accept-Version': 'v1'
    };

    let url;
    
    const urlQuery = `&query=${query}`
    const urlPage = `&page=${page}`
    const urlCount = '&count=20'
    const urlFit = '&fit=clamp'
   
    
 
    if (!query) {
      
      url = `${baseUrl}${client_id}${urlCount}`
    } else {
      url = `${searchUrl}${client_id}${urlQuery}${urlPage}`

    }

    setLoading(true)

    try {
      const response = await fetch(`${url}`, options)

      const data = await response.json()

      

      if (!query) {
        setPhotos(data)
      } else {
        
        setPhotos(data.results)
      }
     
      
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchPhotos()
  }, [query, page])

  console.log(photos);


  return (
    <main className="App">
      <Search setQuery={setQuery} />
      <Photos photos={photos} loading={loading} />
    </main>
  )
}

export default App
