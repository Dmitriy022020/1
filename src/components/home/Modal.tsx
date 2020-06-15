import React, {useState} from 'react';
import './modal.css';
import {useDispatch} from "react-redux";
import {signinProfil} from "../../stores/actions";

function Modal() {
  const dispatch = useDispatch()
  const [state, setState] = useState(false);
  const [value, setValue] = useState(' ');

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
          <button type="submit" className="modal-button">ОК</button>
          <button onClick={() => setState(false)} className="modal-button">
            Отмена
          </button>
        </div>
      </form>
    </div>

  return (
    <React.Fragment>
      <button className="button" onClick={() => setState(true)}>Войти</button>
      {state && modal}
    </React.Fragment>
  )
}

export default Modal