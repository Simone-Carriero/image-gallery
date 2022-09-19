import './Photo.css'
import { FaHeart } from 'react-icons/fa'

const Photo = ({photo}) => {
  return (
    <div className='photo'>
      <img className='photo-image' src={photo.urls.full} alt="" />
      <div className='photo-wrapper'>
        <div>
          <h3 className='photo-title'>{photo.user.username}</h3>
          <FaHeart />
          <span className='photo-likes'>{photo.likes}</span>
        </div>
        <img className='photo-user' src={photo.user.profile_image.medium} />
      </div>
    </div>
  )
}

export default Photo