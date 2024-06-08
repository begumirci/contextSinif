import { Typography, Stack } from '@mui/material';
import { useAuth } from './store/context';

export const Erhan = () => {
  const { userID } = useAuth();
  return (
    <Stack direction='row' alignItems='center' justifyContent='center'>
      <Typography variant='h6' component='h2'>
        Erhan Componenti:
      </Typography>
      <Typography variant='body1' component='span'>
        {userID}
      </Typography>
    </Stack>
  );
};
