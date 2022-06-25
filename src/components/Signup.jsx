import axios from 'axios';
import React, { useState } from 'react';

const Signup = () => {
  const [userRegistration, setUserRegistration] = useState({
    username: '',
    password: '',
    repassword: '',
    school_name: '',
    school_class: '',
    student_number: '',
  });

  const [records, setRecords] = useState([]);

  const handleInput = (e) => {
    const { name } = e.target;
    const { value } = e.target;

    setUserRegistration({ ...userRegistration, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecord = {
      ...userRegistration,
      id: new Date().getTime().toString(),
    };
    setRecords([...records, newRecord]);

    setUserRegistration({
      username: '',
      password: '',
      school_name: '',
      school_class: '',
      student_number: '',
    });
  };

  const register = () => {
    axios
      .post('http://localhost:8000/register', {
        username: userRegistration.username,
        password: userRegistration.password,
        repassword: userRegistration.repassword,
        school_name: userRegistration.school_name,
        school_class: userRegistration.school_class,
        student_number: userRegistration.student_number,
      })
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div className="w-full hperso flex justify-center items-center">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-60 w-60 mr-6 text-red-700"
          viewBox="0 0 20 20"
          fill="currentColor">
          <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
        </svg>
      </div>
      <div className="flex justify-center items-center back rounded-3xl mt-10 relative p-16">
        <form action="" onSubmit={handleSubmit} className="text-center pr-4">
          <div>
            <input
              type="text"
              autoComplete="off"
              placeholder="Nom d'Utilisateur"
              value={userRegistration.username}
              onChange={handleInput}
              name="username"
              id="username"
              className="block rounded-lg m-2 w-full p-2 mb-4 bg-transparent text-white border-2 placeholder-white"
            />
          </div>
          <div>
            <input
              type="password"
              autoComplete="off"
              placeholder="Mot De Passe"
              value={userRegistration.password}
              onChange={handleInput}
              name="password"
              id="password"
              className="block rounded-lg m-2 w-full p-2 mb-4 bg-transparent text-white border-2 placeholder-white"
            />
          </div>
          <div>
            <input
              type="password"
              autoComplete="off"
              placeholder="Confirmer Mot De Passe"
              value={userRegistration.repassword}
              onChange={handleInput}
              name="repassword"
              id="repassword"
              className="block rounded-lg m-2 w-full p-2 mb-4 bg-transparent text-white border-2 placeholder-white"
            />
          </div>
          <div>
            <input
              type="text"
              autoComplete="off"
              placeholder="Nom de l'école"
              value={userRegistration.school_name}
              onChange={handleInput}
              name="school_name"
              id="school_name"
              className="block rounded-lg m-2 w-full p-2 mb-4 bg-transparent text-white border-2 placeholder-white"
            />
          </div>
          <div>
            <input
              type="text"
              autoComplete="off"
              placeholder="Classe"
              value={userRegistration.school_class}
              onChange={handleInput}
              name="school_class"
              id="school_class"
              className="block rounded-lg m-2 w-full p-2 mb-4 bg-transparent text-white border-2 placeholder-white"
            />
          </div>
          <div>
            <input
              type="number"
              autoComplete="off"
              placeholder="Nombre d'élèves"
              value={userRegistration.student_number}
              onChange={handleInput}
              name="student_number"
              id="student_number"
              className="block rounded-lg m-2 w-full p-2 mb-4 bg-transparent text-white border-2 placeholder-white"
            />
          </div>
          <button
            onClick={register}
            type="submit"
            className="p-2 bg-white m-2 rounded-lg text-red-600 w-full">
            S'enregistrer
          </button>
        </form>

        <div>
          {records.map((curElem) => {
            const { id, username, password, school_name, school_class, student_number } =
              curElem;
            return (
              <div className="showDataStyle" key={id}>
                <p>{username}</p>
                <p>{password}</p>
                <p>{school_name}</p>
                <p>{school_class}</p>
                <p>{student_number}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Signup;
