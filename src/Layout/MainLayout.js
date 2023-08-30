import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { auth } from '../Firebase/firebase';
import { useNavigate } from 'react-router-dom';

const MainLayout = ({ children }) => {

    const [mount, setMount] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setMount(false);
            } else {
                navigate('/login');
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

export default MainLayout
