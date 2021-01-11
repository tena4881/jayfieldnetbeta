import { AppContextProvider} from '../components/AppContext'
import React, {useState} from 'react';
import Lesson from '../components/Lesson/Lesson';
import Media from '../components/Media';


function Profile() {
 
  
  return (
    <>
  <AppContextProvider >
    <Media />
  </AppContextProvider>
    
      

    </>
  );
}

export default Profile;
