import { useNavigate } from "react-router-dom";
import React, { useEffect } from 'react';
import {useLocation} from 'react-router-dom';

export const Summary = (props) => {
  const location = useLocation();
  let navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/user-info');
  }
  const goToHome = () => {
    navigate('/');
  }
  return(
    <>
    <div className='error__screen'>
      <h1>Summary</h1>
      <p>Name: {location.state.userForm.name}</p>
      <p>Age: {location.state.userForm.age}</p>
      <p>Where do you live: {location.state.userForm.country}</p>
      <p>Package: {location.state.userForm.package}</p>
      <p>Premium: {location.state.userForm.premium}{location.state.currency}</p>
      <div className="button__group">
      <button onClick={handleBackClick} className='back__button'>Back</button>
      <button onClick={goToHome} className='start__button'>Next</button>
    </div>
    </div>
    </>
  )
}