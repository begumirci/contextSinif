import { type ReactNode, useState } from 'react';
import { AuthContext } from './context';

type ProviderProps = {
  children?: ReactNode;
};

export const AuthProvider: React.FC<ProviderProps> = ({ children }) => {
  const [_userID, set_UserID] = useState('');

  return (
    <AuthContext.Provider
      value={{
        token: null,
        userID: _userID,
        setUserID: set_UserID,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
