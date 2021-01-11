import ReactPlayer from 'react-player'
import './VidPlayerElements.css'

const ResponsivePlayer = ({url, onProgress}) => {
      return (
        <>
          <ReactPlayer
            className='react-player'
            url={url}
            width='100%'
            height='100%'
            onProgress= {onProgress}
          />
          </>
      )
    
}
  
export default ResponsivePlayer