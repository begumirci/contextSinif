import React, { useState } from 'react';
import { useAuth } from './store/context';

export default function Merhaba() {
  const [name, setName] = useState('erhan');
  const { userID } = useAuth();
  return <div>Merhaba Componenti: {userID}</div>;
}
