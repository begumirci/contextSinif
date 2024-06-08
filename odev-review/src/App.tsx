import { useAuth } from './store/context';
import { Erhan } from './erhan';
import { Container, Stack, TextField } from '@mui/material';
import { useSnackbar } from 'notistack';
import './App.css';

function App(): JSX.Element {
  const { userID, setUserID } = useAuth();
  const { enqueueSnackbar } = useSnackbar();

  return (
    <Container maxWidth='lg'>
      <Stack gap={3}>
        <TextField
          variant='outlined'
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
      </Stack>
    </Container>
  );
}

export default App;
