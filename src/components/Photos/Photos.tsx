import { PhotosData } from '../../App'
import Photo from '../Photo/Photo'
import './Photos.css'

type PhotosProps = {
  photos: PhotosData[]
  loading: boolean
}

const Photos = ({ photos, loading }: PhotosProps) => { 
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