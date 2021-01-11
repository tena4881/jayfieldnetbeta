import { AppContextProvider} from '../components/AppContext'
import React, {useState} from 'react';
import Media from '../components/Media';


function VideoPage() {
 
  
  return (
    <>
  <AppContextProvider >
    <Media />
  </AppContextProvider>
    
      

    </>
  );
}

export default VideoPage;
