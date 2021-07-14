import React from 'react';
import Button from '../button/button.component';
import './container.styles.css';
import Data from '../../Data';
import Profile from '../profile/profile.component'

function Container(){
  // console.log(Data)
  return(
    <div className='container'>
      <h2>{ Data.length } birthdays today.</h2>
      {
        Data.map(({id, image, name, age})=>{
          return (
            <Profile key={id} image={image} name={name} age={age} />
          )
        })
      }
      <Button />
    </div>
  )
}
export default Container;