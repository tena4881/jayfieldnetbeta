import ReactPlayer from 'react-player'
import './VidPlayerElements.css'

const ResponsivePlayer = ({url, onProgress}) => {
      return (
        <div className='player-wrapper'>
          <ReactPlayer
            className='react-player'
            url={url}
            width='100%'
            height='100%'
            onProgress= {onProgress}
          />
        </div>
      )
    
}
  
export default ResponsivePlayer