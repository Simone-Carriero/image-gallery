import Photo from '../Photo/Photo'
import './Photos.css'

const Photos = ({ photos, loading }) => { 
  if (loading) return <div>Loading...</div>
  return (
    <div className='photos'>
      {loading && <div>Loading...</div>}
      
      {

        photos?.map(photo => <Photo key={photo.id} photo={photo} />
        
        )
      
      }
    </div>
  )
}

export default Photos