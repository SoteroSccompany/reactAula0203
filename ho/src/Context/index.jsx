import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {





    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [signed, setSigned] = useState(false)

    const states = {
        name,
        email,
        password,
        signed
    }

    const setters = {
        setName,
        setEmail,
        setPassword,
        setSigned
    }

    const dadosdeconferencia = {
        email: 'gabriel@gabriel.com',
        password: '123456'
    }

    const login = () => {
        if (email === dadosdeconferencia.email && password === dadosdeconferencia.password) {
            setSigned(true)
        } else {
            setSigned(false)
            alert('Email ou senha inválidos')
        }
    }




    return (
        <AuthContext.Provider value={{ states, setters, login }}>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthProvider;