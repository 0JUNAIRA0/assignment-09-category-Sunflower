import React, { createContext } from 'react';
import React, { createUserWithEmailAndPassword } from 'firebase/auth';
import auth from '../firebase/firebase.config';

// eslint-disable-next-line react-refresh/only-export-components
export const Authcontext = createContext();


const AuthProvider = ({children}) => {

 const registerwithEmailPassword = (email,pass) => {

    return createUserWithEmailAndPassword(auth,email,pass)
 }


    const authData = {

        registerwithEmailPassword

    }

    return <Authcontext value={authData}>
            {children}
         </Authcontext>
         
         
};

export default AuthProvider;