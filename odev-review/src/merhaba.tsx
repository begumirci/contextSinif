import { useAuth } from './store/context';

export default function Merhaba() {
  const { userID } = useAuth();
  return <div>Merhaba Componenti: {userID}</div>;
}
