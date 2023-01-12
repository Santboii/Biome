import React, { createContext, useState } from 'react';
import { User } from '../../interfaces';

export const UserContext = createContext<{ user: User, setUser: React.Dispatch<React.SetStateAction<User>> }>({ user: {} as User, setUser: () => {} });

interface UserProviderProps {
  children: React.ReactNode
}

export const UserProvider: React.FC<UserProviderProps> = ({children}) => {
  const [user, setUser] = useState<User>({} as User);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

