import React from 'react';
import './profile.styles.css';

const Profile = ({name, age, image})=>{

  return (
    <div className='profile'>
      <img src={ image } alt={name} />
      <div className="profile-info">
        <h4>{name}</h4>
        <p>{age} years old.</p>
      </div>
    </div>
  )
}

export default Profile;