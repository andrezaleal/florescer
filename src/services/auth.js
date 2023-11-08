import { useState, useEffect, createContext } from 'react';
import { auth, db } from './firebaseConnections';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { message } from 'antd';

import { useHistory } from 'react-router-dom';


export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loadingAuth, setLoadingAuth] = useState(false);
    const [loading, setLoading] = useState(true);

    const history = useHistory();

    useEffect(() => {
        async function loadUser() {
            const storageUser = localStorage.getItem('@florescer');

            if (storageUser) {
                setUser(JSON.parse(storageUser));
                setLoading(false);
            }
            setLoading(false);
        }
        loadUser();
    }, [])

    function changeUser(user){
        storageUser(user);
        setUser(user);
    }

    async function signIn(email, password) {
        setLoadingAuth(true);
        await signInWithEmailAndPassword(auth, email, password)
            .then(async (value) => {

                let uid = value.user.uid;

                const docRef = doc(db, "users", uid);
                const docSnap = await getDoc(docRef);
                const  dados = docSnap.data();
                let data = {
                    uid: uid,
                    nome: dados.nome,
                    email: value.user.email,
                    favoritos: dados.favoritos
                }
                setUser(data);
                storageUser(data);  
                setLoadingAuth(false);
                message.success("Bem vindo(a) de volta!");
                history.push("/pagina inicial");

            }).catch((error) => {
                console.log(error);

                if (error.message.includes("user-not-found")) {
                    message.error("Usuário não encontrado. Tente realizar cadastro ou verifique se o email está correto.");
                  } else if (error.message.includes("wrong-password")) {
                    message.error("Senha incorreta.");
                  } else if(error.message.includes("auth/invalid-login-credentials")){
                    message.error("Formatação da senha ou email digitadas de forma inválida!");
                  }
                  else {
                    message.error("Ocorreu um erro ao tentar realizar o login, por favor tente mais tarde.");
                  }
                setLoadingAuth(false);
            })
    }

    async function signUp(email, password, nome) {
        setLoadingAuth(true);
        await createUserWithEmailAndPassword(auth, email, password)
            .then(async (value) => {
                let uid = value.user.uid
                await setDoc(doc(db, "users", uid), {
                    nome: nome,
                    favoritos: [],
                    uid:uid,
                }).then(() => {
                    let data = {
                        uid: uid,
                        nome: nome,
                        email: email,
                        favoritos:[],
                    }
                    setUser(data);
                    storageUser(data);
                    setLoadingAuth(false);
                    message.success("Seja bem vindo ao florescer");
                    history.push("/pagina inicial");
                })
            }).catch((error) => {
                console.log(error);
                if (error.message.includes("Password")) {
                    message.error("A senha precisa conter pelo menos 6 caracteres.");
                } else if (error.message.includes("email-already")) {
                    message.error("E-mail já cadastrado. Favor, realize o login.");
                } else {
                    message.error('Ocorreu um erro durante o cadastro. Tente novamente mais tarde.');
                }
                setLoadingAuth(false);
            })
    }

    function storageUser(data) {
        localStorage.setItem('@florescer', JSON.stringify(data))
    }

    async function logout() {
        await signOut(auth);
        localStorage.removeItem('@florescer');
        setUser(null);
    }
    return (
        <AuthContext.Provider value={{ signed: !!user, user, signIn, signUp, logout, loadingAuth, loading, setUser: changeUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;