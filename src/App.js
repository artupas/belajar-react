import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';

function App() {


  async function logMovies() {
    console.log("fetch mulai")
    const response = await fetch("https://665f411a1e9017dc16f37e78.mockapi.io/users");
    const movies = await response.json();
    console.log(movies);
    console.log("fetch selesai")
  }

  const RegexPass = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,64})/;

  const [dataForm, dataFormState] = useState({
    username: '',
    email: '',
    password: '',
  });

  function changeHandler(event) {
    dataFormState({
      ...dataForm,
      [event.target.name]: event.target.value,
    });
  }

  function submitHandler(event) {
    event.preventDefault();
    alert(dataForm.password);
    if (RegexPass.test(dataForm.password)) {
      alert('password bener');
    } else {
      alert('password gak bener');
    }

    if (dataForm.username.length < 4){
      alert('username gak bener');
    }
    else{
      alert('username bener')
    }
    logMovies();

    console.log("melakukan hal lain");
  }

  return (
    <div className="container mt-3">
      <h1>Form Sederhana</h1>
      <form onSubmit={submitHandler}>
        <div className="mb-1">
          <label htmlFor="username" className="form-label">
            Username:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={changeHandler}
            value={dataForm.username}
            className="form-control"
            required
          />
        </div>
        <div className="mb-1">
          <label htmlFor="email" className="form-label">
            Email address:
          </label>
          <input onChange={changeHandler} type="email" id="email" name="email" className="form-control" required />
        </div>
        <div className="mb-1">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-control"
            required
            onChange={changeHandler}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
