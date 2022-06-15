import './home.css';
import { useNavigate } from "react-router-dom";

export const Home = () => {
  let navigate = useNavigate();
  
  const startWizard = () => {
    navigate('/user-info');
  }

  return(
    <div className='start__screen'>
    <h1>Hello There!</h1>
    <p>Let's buy some insurance. It is going to take only a few steps</p>
    <button onClick={startWizard} className='start__button'>Start</button>
  </div>
  )
}