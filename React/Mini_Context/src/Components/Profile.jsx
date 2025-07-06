import React , {useContext} from 'react'
import UserContext from '../Context/UserContext';
const Profile = () => {
    const {user}=useContext(UserContext);
    
    if(!user) return <div>Please enter the user</div>
    return <div>Welcome  {user.username}</div>
    
    // console.log(user.password);
    // console.log(user.userName);

}

export default Profile