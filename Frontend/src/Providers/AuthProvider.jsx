import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react"

import { app } from "../Firebase/firebase.config";

export const AuthContext = createContext(null)

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    
    //create signIn
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    //signin 
    const userSignIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    //logOut
    const userLogOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    //updated profile
    const updatedProfile = (name) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
        })
    }
    //save user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        });
        return () => {
            unsubscribe()
        }
    }, []);

    //social login

    const userGoogleLogin = () => {
        return signInWithPopup(auth, provider)
    }

    const authInfo = {
        user,
        loading,
        userSignIn,
        createUser,
        updatedProfile,
        userLogOut,
        setUser,
        userGoogleLogin
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>

    )
}

export default AuthProvider