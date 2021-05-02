import useContext from 'react';
import reactHashAvatar from 'react-hash-avatar'
import renderHTML from 'react-render-html'
import UserContext from '../../components/User/user';
 
 export default function ProfileIcon({account}) {
    return (
    <div>
        {renderHTML(reactHashAvatar({account}, { size: 50, radius: 100 } ))}
    </div>
    )
    }