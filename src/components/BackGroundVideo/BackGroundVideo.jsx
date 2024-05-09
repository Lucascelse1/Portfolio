import fondo from '../BackGroundVideo/fondo.mp4'
import './BackGroundVideo.css'

const BackGroundVideo = () => {
  return (
    <video autoPlay loop muted className='absolute -z-50'>
        <source src={fondo} type='video/mp4' />
    </video>
  )
}

export default BackGroundVideo