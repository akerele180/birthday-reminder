import React, { useState} from 'react';
// import Button from '../button/button.component';
import './container.styles.css';
import Data from '../../Data';
import Profile from '../profile/profile.component';

function Container(){

  const [ user, setUser ] = useState(Data);

  return( 
    <div className='container'>
      <h2>{ user.length } birthdays today.</h2>

      {
        user.map(({id, image, name, age})=>{
          return (
            <Profile key={id} image={image} name={name} age={age} />
          )
        })
      }

      {/* <Button data={Data}/> */}
      <button 
        type="submit" 
        className='btn' 
        onClick={ ()=>setUser([]) }
      > 
        Clear All
      </button>
    </div>
  )
}
export default Container;