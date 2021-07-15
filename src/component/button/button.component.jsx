import React, {useState} from 'react';
import './button.styles.css';
import Data from '../../Data'

const Button = (props) => {
  // console.log(user)
  // const [user, setUser] = useState(user)
  // const [people, setPeople] = useState(Data);

  console.log(props);
  // console.log(people)
  
  return (
    <button 
      type="submit" 
      className='btn' 
      // onClick={ ()=>setPeople([]) }
    > 
      Clear All
    </button>
  )
}

export default Button;