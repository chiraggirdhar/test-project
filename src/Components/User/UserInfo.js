import { useReducer, useRef, useState } from "react";
import './userinfo.css';
import { useNavigate } from "react-router-dom";

export const UserInfo = () => {
  let navigate = useNavigate();
  const [userForm, setUserForm] = useState({
    name: '',
    age: '',
    country: '',
    rate: 1,
    premium: '',
    package: ''
  })

  const packagePremium = useRef(0);
  const [premiumCurrency, setPremiumCurrency] = useState('HKD');
  const handleSelectCountry = (event) => {
    const user = {...userForm};
    user['country'] = event.target.value;
    user['premium'] = 0;
    switch (event.target.value) {
      case 'Hong Kong':
        setPremiumCurrency('HKD');
        user['rate'] = 1;
        break;
      case 'USA':
        setPremiumCurrency('USD');
        user['rate'] = 2;
        break;
      case 'Australia':
        setPremiumCurrency('AUD');
        user['rate'] = 3;
        break;
    }

    user['premium'] = user['rate'] * user['age'] * 10;
    packagePremium.current = user['premium'];
    setUserForm(user);
  }

  const handleUserInput = (value, property) => {
    const user = {...userForm};
    user[property] = value;
    setUserForm(user);
  }

  const showForm = () => {
    if(parseInt(userForm.age) > 100) {
      navigate('/error');
    } else {
      navigate('/summary', {state: { userForm, currency: premiumCurrency}});
    }
  }

  const handleSelectedPackage = (e) => {
    const user = {...userForm};
    user['package'] = e.target.value;
    let age = parseInt(userForm.age);
    let premium = 0;
    if(age > 0) {
      premium = user.rate * age * 10;
    }

    if(e.target.value === 'safe') {
      premium = (premium * 3) / 2;
    } else if(e.target.value === 'supersafe') {
      premium = (premium * 7) / 4;
    }
    user['premium'] = premium;
    setUserForm(user);
  }

  const handleBackClick = () => {
    navigate('/');
  }

  return (
    <div className="user__form">
      <h1 className="heading__title">Tell us about yourself</h1>
      <div className="form__row">
        <label>Name</label>
        <input onChange={(e) =>handleUserInput(e.target.value, 'name')} className="user__input" type={"text"} placeholder="Add text" />
      </div>
      <div className="form__row">
        <label>Age</label>
        <input onChange={(e) =>handleUserInput(e.target.value, 'age')} className="user__input" 
        type="number" placeholder="Enter your age" />
      </div>
      <div className="form__row">
        <label>Where do you live</label>
        <select className="select__input" name="country" id="country" onChange={handleSelectCountry}>
          <option value="none" selected disabled hidden>Select Country</option>
          <option value="Hong Kong">Hong Kong</option>
          <option value="USA">USA</option>
          <option value="Australia">Australia</option>
        </select>
      </div>
      <div className="shadow__box">
      <div className="radio__container">
      <div className="radio__group">
        <input onChange={handleSelectedPackage} className="radio__input" type="radio" name="package" value="standard" id="standard" />
        <label htmlFor="standard">Standard</label>
    </div>
    <div className="radio__group">
        <input onChange={handleSelectedPackage} className="radio__input" type="radio" id="safe-package" name="package" value="safe"/>
        <label htmlFor="safe">Safe(+{packagePremium.current / 2}{premiumCurrency}, 50%)</label>
    </div>
    <div className="radio__group">
        <input  onChange={handleSelectedPackage} className="radio__input" type="radio" id="supersafe-package" name="package" value="supersafe"/>
        <label htmlFor="supersafe">Super Safe(+{(packagePremium.current * 3) / 4}{premiumCurrency}, 75%)</label>
    </div>
        </div>
    <h3>Your Premium is: {userForm.premium} {premiumCurrency}</h3>
    <div className="button__group">
      <button onClick={handleBackClick} className='back__button'>Back</button>
      <button onClick={showForm} className='start__button'>Next</button>
    </div>
    </div>
    </div>

  )
}