import { useState } from 'react';
import { GoogleLogo } from "phosphor-react";

import { signInWithPopup, GoogleAuthProvider, User } from "firebase/auth";
import { auth } from './firebase';

import './styles.scss';

export function SignIn() {
  const [user, setUser] = useState<User>({} as User);

  function signInWithGoogle() {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);

      }).catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="container">

      <div className="user">
        {user.photoURL && <img src={user.photoURL} alt="Foto do usuário" />}

        <strong>{user.displayName}</strong>
        <small>{user.email}</small>
      </div>

      <button type="button" onClick={signInWithGoogle} className="button">
        <GoogleLogo />
        SignIn with Google
      </button>
    </div>
  )
}