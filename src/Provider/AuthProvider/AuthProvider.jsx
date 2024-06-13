// import React from 'react';

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../../Firebase/Firebase.config";

 export const AuthContext=createContext()
 const auth=getAuth(app)
const AuthProvider = ({children}) => {

const [user,setUser]=useState(null)
const [loading,setLoading]=useState(true)




const authRegister=(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
    // setLoading(true)
    
    }

useEffect(()=>{

   const unsubscribe=  onAuthStateChanged(auth,(currentUser)=>{

        setUser(currentUser)
        setLoading(false)

    })

return()=>{

    return unsubscribe();
}


},[])

const signin=(email,password)=>{

return signInWithEmailAndPassword( auth,email,password)

}



const logout=()=>{

signOut(auth)

}
const authInfo={

    user,
    loading,
    authRegister,
    signin,
    logout
}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;