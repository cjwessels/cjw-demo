import { createContext, useState, useCallback } from 'react';

import { useSnackbar } from 'notistack';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect } from 'react';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});

  useEffect(() => {
    const user = localStorage.getItem('user');
    const accessToken = localStorage.getItem('accessToken');
    const accessExpiration = localStorage.getItem('accessExpiration');

    accessToken &&
      setAuth({
        user: user,
        accessToken: accessToken,
        accessExpiration: accessExpiration,
      });
  }, []);

  const Notification = DisplayNotification();

  return (
    <AuthContext.Provider value={{ auth, setAuth, Notification }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

function DisplayNotification() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const returnFunc = useCallback(
    (message, variant = 'success') => {
      enqueueSnackbar(message, {
        variant,
        action: (key) => (
          <>
            <IconButton
              onClick={() => {
                closeSnackbar(key);
              }}
            >
              <CloseIcon fontSize='small' sx={{ color: 'white' }} />
            </IconButton>
          </>
        ),
      });
    },
    [enqueueSnackbar, closeSnackbar]
  );

  return returnFunc;
}
