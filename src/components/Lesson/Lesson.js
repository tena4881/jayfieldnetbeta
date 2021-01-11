import React,{useState} from 'react'
import ResponsivePlayer from '../Video/ResponsiveVidPlayer'


const Lesson = () => {

    const [videoDone, setVideoDone] = useState(false)

    const handleVideoDone = state => {
        console.log(state)
    }


    return (
        <>
            <ResponsivePlayer 
            url="https://www.youtube.com/watch?v=Rq5SEhs9lws"
            onProgress={handleVideoDone}/>
        </>
    )
}

export default Lesson