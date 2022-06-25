import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [response, setResponse] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [allEntry, setAllEntry] = useState([]);
  const [loginStatus, setLoginStatus] = useState(false);

  axios.defaults.withCredentials = true;

  const login = () => {
    axios
      .post('http://localhost:8000/login', {
        username,
        password,
      })
      .then((response) => {
        if (!response.data.auth) {
          setLoginStatus(false);
        } else {
          localStorage.setItem('token', response.data.token);
          setLoginStatus(true);
        }
      });
  };

  const userAuthenticated = () => {
    axios
      .get('http://localhost:8000/isUserAuth', {
        headers: {
          'x-acces-token': localStorage.getItem('token'),
        },
      })
      .then((response) => {
        console.log(response);
      });
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (username && password) {
      const newEntry = { id: new Date().getTime().toString(), username, password };

      setAllEntry([...allEntry, newEntry]);

      setUsername('');
      setPassword('');
    } else {
      alert('Remplissez tous les champs');
    }
  };

  return (
    <div className="w-full hperso flex justify-center items-center">
      <div className="flex justify-center items-center back rounded-3xl mt-10 relative p-16">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-60 w-60 mr-6 text-white"
            viewBox="0 0 20 20"
            fill="currentColor">
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        <form action="" onSubmit={submitForm} className="text-center pr-10">
          <div>
            <input
              type="text"
              name="username"
              id="username"
              autoComplete="off"
              value={username}
              placeholder="Nom d'Utilisateur"
              onChange={(e) => setUsername(e.target.value)}
              className="block rounded-lg m-2 w-full p-2 mb-4 bg-transparent text-white border-2 placeholder-white"
            />
            <input
              type="password"
              name="password"
              id="password"
              autoComplete="off"
              value={password}
              placeholder="Mot de passe"
              onChange={(e) => setPassword(e.target.value)}
              className="block m-2 rounded-lg w-full p-2 mb-10 bg-transparent placeholder-white text-white border-2"
            />
          </div>
          <button
            type="submit"
            onClick={login}
            className="p-2 bg-white m-2 rounded-lg text-red-600 w-full">
            Se connecter
          </button>
          <a href="/enregistrer" className="text-white">
            Créer un compte
          </a>
        </form>

        <div>
          {loginStatus && (
            <button onClick={userAuthenticated}>
              Vérifier que vous êtes authentifié
            </button>
          )}
          {allEntry.map((curElem) => {
            const { id, username, password } = curElem;
            return (
              <div className="showDataStyles" key={id}>
                <p>{username}</p>
                <p>{password}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Login;
