import React, { createContext, useEffect, useState } from 'react';
import { User } from '../../interfaces';
import { getAuth } from "firebase/auth";


export const UserContext = createContext<{ user: User, setUser: React.Dispatch<React.SetStateAction<User>> }>({ user: {} as User, setUser: () => { } });

interface UserProviderProps {
  children: React.ReactNode
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User>({} as User);

  useEffect(() => {
    const fetchAuthenticatedUser = async () => {
      try {
        const auth = await getAuth()
        auth.onAuthStateChanged(authUser => {
          if (authUser) {
            setUser({
              id: authUser.uid,
              displayName: authUser.displayName ?? '',
              email: authUser.email ?? '',
            })
          }
        });
      } catch (error) {
        console.log(error)
      }
    }
    fetchAuthenticatedUser()
  }, [])



  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

