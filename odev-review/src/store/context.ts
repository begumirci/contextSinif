import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  type Key,
} from 'react';

type ContextProps = {
  token: Key | null;
  userID: string;
  setUserID: Dispatch<SetStateAction<string>>;
} | null;

export const AuthContext = createContext<ContextProps>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) throw new Error('useAuth is not in scope');

  return context;
};
