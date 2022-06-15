import { useNavigate } from "react-router-dom";
import './error.css';

export const Error = () => {
  let navigate = useNavigate();
  
  const startWizard = () => {
    navigate('/user-info');
  }
  return(
    <div className='error__screen'>
    <h1>Ooops</h1>
    <p className="age__error__text">Your age is over our accepted limit.</p>
    <p className="age__error__text">We are sorry but we cannot insure you now.</p>
    <button onClick={startWizard} className='start__button'>Ok :(</button>
  </div>
  )
}