import { useAuth } from './store/context';
import { Erhan } from './erhan';
import { useSnackbar } from 'notistack';
import './App.css';

function App(): JSX.Element {
  const { userID, setUserID } = useAuth();
  const { enqueueSnackbar } = useSnackbar();

  return (
    <>
      <input
        type='text'
        value={userID}
        onChange={(e) => {
          const newValue = e.target.value;
          if (userID !== newValue) {
            setUserID(newValue);
            enqueueSnackbar(`UserID ${newValue} olarak değiştirildi!`, {
              variant: 'info',
            });
          }
        }}
      />
      <Erhan />
    </>
  );
}

export default App;
