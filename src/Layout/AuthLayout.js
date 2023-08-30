import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { auth } from '../Firebase/firebase';
import { useNavigate } from 'react-router-dom';

const AuthLayout = ({ children }) => {

    const [mount, setMount] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                navigate('/dashboard');
            } else {
                setMount(false);
            }
        })
    })

    if (mount) {
        return <div>loading...</div>
    }
    return (
        <>
            {children}
        </>
    )
}

export default AuthLayout
