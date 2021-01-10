import { AppContextProvider} from '../components/AppContext'
import React, {useState} from 'react';
import ProfilePg from '../components/SignIn';


function Profile() {
 
  
  return (
    <>
  <AppContextProvider >
    <ProfilePg />
  </AppContextProvider>
    
      

    </>
  );
}

export default Profile;
