import { getAuth, createUserWithEmailAndPassword, updateProfile, signOut, signInWithEmailAndPassword } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { db } from '../firebase/config';

export const useAuthentication = () => {
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(null)
  const [cancelled, setCancelled] = useState(false)
  const auth = getAuth()

  function checkIfIsCancelled() {
    if (cancelled) {
      return;
    }
  }

  const createUser = async (data) => {
    checkIfIsCancelled()
    setLoading(true)
    setError(null)
    try {
      const {user} = await createUserWithEmailAndPassword(auth, data.email, data.password)
      await updateProfile(user, {displayName: data.displayName})
      return user
    } catch (error) {
      console.log(error.message)
      console.log(typeof error.message)

      let systemErrorMessage;

      if (error.message.includes("Password")) {
        systemErrorMessage = "A senha precisa conter pelo menos 6 caracteres.";
      } else if (error.message.includes("email-already")) {
        systemErrorMessage = "E-mail já cadastrado. Favor, realize o login.";
      } else {
        systemErrorMessage = "Ocorreu um erro, por favor, tente novamente mais tarde.";
      }
      setLoading(false);
      setError(systemErrorMessage);
    }
  };

  const logout = () => {
    checkIfIsCancelled();
    signOut(auth);
    console.log("cliclou");

  };

  const login = async (data) => {
    checkIfIsCancelled();

    setLoading(true);
    setError(false);

    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
    } catch (error) {
      console.log(error.message);
      console.log(typeof error.message);
      console.log(error.message.includes("user-not"));

      let systemErrorMessage;

      if (error.message.includes("user-not-found")) {
        systemErrorMessage = "Usuário não encontrado. Tente realizar cadastro ou verifique se o email está correto.";
      } else if (error.message.includes("wrong-password")) {
        systemErrorMessage = "Senha incorreta.";
      } else {
        systemErrorMessage = "Ocorreu um erro, por favor tenta mais tarde.";
      }

      console.log(systemErrorMessage);

      setError(systemErrorMessage);
    }

    console.log(error);

    setLoading(false);
  };


  useEffect(() => { return () => setCancelled(true) }, []);

  return { auth, createUser, error, loading, logout, login };


};