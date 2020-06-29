import React, {useState} from 'react';
import './modal.css';
import {useDispatch, useSelector} from "react-redux";
import {signinProfil} from "../../stores/app/appActions";
import i18next from 'i18next';
import {RootState} from "../../types/common";


function Modal() {
  const dispatch = useDispatch()
  const [state, setState] = useState(false);
  const [value, setValue] = useState(' ');
  const language = useSelector((state: RootState) => state.app.language)
  i18next.init({
    resources: require(`./../../${language}.json`),
    lng: language,
  });

  function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (value.trim()) {
      dispatch(signinProfil(value))
      setValue('')
      setState(false)
    }
  }

  const modal =
    <div className="modal">
      <form onSubmit={submitHandler} className="modal-body">
        <label>Логин</label>
        <input
          type='text'
          value={value}
          onChange={event => setValue(event.target.value)}/>
        <label>Пароль (не важно)</label>
        <input type='password'/>
        <div>
          <button type="submit" className="modal-button">
            {i18next.t('ok')}
          </button>
          <button onClick={() => setState(false)} className="modal-button">
            {i18next.t('cancel')}
          </button>
        </div>
      </form>
    </div>

  return (
    <React.Fragment>
      <button className="button" onClick={() => setState(true)}>
        {i18next.t('signIn')}
      </button>
      {state && modal}
    </React.Fragment>
  )
}

export default Modal