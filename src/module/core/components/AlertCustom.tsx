import { Alert, Snackbar } from '@mui/material';

interface AlertCustomProps {
  open: boolean;
  onClose: () => void;
  text: string;
}

export const AlertCustom = ({
  open,
  onClose,
  text,
}: AlertCustomProps): JSX.Element => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={onClose}
      anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
    >
      <Alert onClose={onClose} severity="error" sx={{ width: '100%' }}>
        {text}
      </Alert>
    </Snackbar>
  );
};
