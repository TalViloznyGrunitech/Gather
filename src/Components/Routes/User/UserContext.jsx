import { createContext, useState, useEffect } from "react";
import { auth } from "../../FireBase/FireBase";
import { onAuthStateChanged } from "firebase/auth";


export const UserContext = createContext();

export function UserProvider({ children }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, (firebaseUser) => {
            if (firebaseUser) {
                setUser(firebaseUser);
            } else {
                setUser(null);
            }
        });

        return () => unsubcribe();
    }, []); 

    return (
        <UserContext.Provider value={{ user }}>
            {children}
        </UserContext.Provider>
    ); 

}

