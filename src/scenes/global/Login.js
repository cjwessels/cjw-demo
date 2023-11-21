import { useRef, useState, useEffect, useContext } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

import useAuth from '../../hooks/useAuth';
import api from '../../api/apiRoot';
import {
  useTheme,
  Box,
  Button,
  TextField,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormControl,
  InputLabel,
  Grid,
} from '@mui/material';
import { Formik, Form } from 'formik';
import { tokens } from '../../theme';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const LOGIN_URL = 'Authorization/login';

const formValues = {
  userName: '',
  password: '',
};
const Login = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { setAuth } = useAuth();
  const enqNotification = useAuth().Notification;

  const navigate = useNavigate();
  const location = useLocation();

  const from = localStorage.getItem('from')
    ? localStorage.getItem('from')
    : '/';

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleFormSubmit = async (values) => {
    try {
      const response = await api.post(LOGIN_URL, values);

      const accessToken = await response?.data?.token;
      const accessExpiration = await response?.data?.expiration;
      setAuth({
        user: values?.userName,
        accessToken,
        accessExpiration,
      });
      localStorage.setItem(
        'user',
        values?.userName,
        accessToken,
        accessExpiration
      );
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem(
        'accessExpiration',

        accessExpiration
      );
      //   localStorage.setItem('type', parsed.userdetails.type);
      //   localStorage.setItem('user', parsed.userdetails.permissions.username);
      enqNotification('logged In', 'success');
      navigate(from, { replace: true });
    } catch (err) {
      if (!err?.response) {
        enqNotification('No Server Response', 'error');
      } else if (err.response?.status === 400) {
        enqNotification('Missing Username or Password', 'error');
      } else if (err.response?.status === 401) {
        enqNotification('Unauthorized user details', 'error');
      } else {
        enqNotification('Login Failed', 'error');
      }
    }
  };
  useEffect(() => {
    setAuth({});
  }, []);

  return (
    <Box
      display='flex'
      alignItems='center'
      justifyContent='center'
      width='100%'
      margin='0 auto'
      height='80%'
    >
      <Formik
        enableReinitialize
        onSubmit={(values) => handleFormSubmit(values)}
        initialValues={formValues}
      >
        {({ values, handleBlur, handleChange, handleSubmit }) => (
          // <form >
          <Form onSubmit={handleSubmit}>
            <Grid
              container
              direction='column'
              rowSpacing={2}
              style={{ display: 'flex', justifyContent: 'flex-end' }}
              gap='30px'
            >
              <Grid item></Grid>
              <Box
                component='img'
                sx={{
                  margin: '0 auto',
                  width: '100%',
                  maxWidth: { xs: 350 },
                }}
                alt='Nashua Cape Town'
                src='NashuaFranchiseLogo.png'
              />
              <TextField
                autoFocus
                autoComplete='off'
                fullWidth
                variant='outlined'
                type='text'
                label='Username'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.userName}
                name='userName'
                // error={!!touched.userName && !!errors.userName}
                // helperText={touched.userName && errors.userName}
                sx={{ gridColumn: 'span 6' }}
              />
              <FormControl
                sx={{ gridColumn: 'span 6' }}
                fullWidth
                variant='outlined'
              >
                <InputLabel htmlFor='outlined-adornment-password'>
                  Password
                </InputLabel>
                <OutlinedInput
                  id='outlined-adornment-password'
                  name='password'
                  fullWidth
                  autoComplete='off'
                  type={showPassword ? 'text' : 'password'}
                  label='Password'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.password}
                  // error={!!touched.password && !!errors.password}
                  // helperText={touched.password && errors.password}
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton
                        aria-label='toggle password visibility'
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge='end'
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  sx={{ gridColumn: 'span 6' }}
                />
              </FormControl>
              <Button
                type='submit'
                variant='contained'
                color='secondary'
                size='small'
                sx={{
                  fontWeight: 'bold',
                  color: colors.primary[900],
                  float: 'right',
                }}
              >
                Login
              </Button>
            </Grid>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default Login;
