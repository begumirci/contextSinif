import { useAuth } from './store/context';

export const Erhan = () => {
  const { userID } = useAuth();
  return <>Erhan Componenti:{userID}</>;
};
