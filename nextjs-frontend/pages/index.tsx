import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

import { Formik, Form, Field, ErrorMessage } from 'formik';

import {
  Box,
  Card,
  Container,
  CssBaseline,
  CircularProgress,
  Button,
  TextField,
  InputAdornment,
  IconButton
} from '@mui/material';
import {
  LoginOutlined,
  VisibilityOutlined,
  VisibilityOffOutlined
} from '@mui/icons-material';

import { setAuthState } from '@/redux/auth.slice';
import { updateStackBar } from '@/redux/alert.slice';
import { AppState, store } from '@/redux/store';

import { useLogin } from '@/hooks/auth/useLogin';
// import { useLogout } from '@/hooks/auth/useLogout';

import ShowAlertMessage from '@/components/Stackbar';
import { alertMessage, appInfo } from '@/utilities/constants/application';

import authLoginValues from '@/sources/pages/Auth';

const endPoint = authLoginValues.makeEndPoint();
const pageValues = authLoginValues.makePageValues();
const initialValues = authLoginValues.makeInitialValues();
const validationSchema = authLoginValues.makeSchemaValues();

function LoginPage() {
  const router = useRouter();
  const { login } = useLogin();

  const { showAlert, severity, description } = useSelector(
    (state: AppState) => state?.alert.stackBar
  );

  const [hostname, setHostname] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSubmit = async (values: any) => {
    setIsLoading(true);

    const updatedValues = { ...values, hostname };

    try {
      const res = await login(endPoint.default, updatedValues);

      if (res) {
        store?.dispatch(setAuthState(res));
        router.push('/dashboard/admin-1');
        return;
      }

      store?.dispatch(
        updateStackBar({
          severity: alertMessage.WARNING,
          description: 'Incorrect access!'
        })
      );
      setIsLoading(false);
    } catch (_error) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setHostname(window.location.hostname);
  }, []);

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh'
      }}
    >
      <CssBaseline />
      <Card sx={{ p: 4 }}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <Box
              mx={1}
              sx={{
                m: 1,
                p: 1,
                textAlign: 'center',
                fontSize: '26px'
              }}
            >
              {/* <Image
                src="/logo/logo.png"
                alt={appInfo.NAME}
                width={80}
                height={80}
              /> */}
              Login
            </Box>

            <Field
              sx={{ my: 1 }}
              name="username"
              as={TextField}
              label="Username"
              variant="outlined"
              autoComplete="off"
              fullWidth
              helperText={
                <span style={{ color: '#FF1943' }}>
                  <ErrorMessage name="username" />
                </span>
              }
            />

            <Field
              sx={{ my: 1 }}
              name="password"
              as={TextField}
              label="Password"
              type={showPassword ? 'text' : 'password'}
              variant="outlined"
              fullWidth
              helperText={
                <span style={{ color: '#FF1943' }}>
                  <ErrorMessage name="password" />
                </span>
              }
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleShowPassword} edge="end">
                      {showPassword ? (
                        <VisibilityOffOutlined />
                      ) : (
                        <VisibilityOutlined />
                      )}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />

            <Box sx={{ my: 1, position: 'relative' }}>
              <Button
                size="large"
                type="submit"
                color="primary"
                variant="contained"
                // disabled={isLoading}
                fullWidth
                startIcon={
                  isLoading ? (
                    <CircularProgress size={22} sx={{ color: '#FFF' }} />
                  ) : (
                    <LoginOutlined fontSize="small" />
                  )
                }
              >
                {pageValues.loginText}
              </Button>
            </Box>
          </Form>
        </Formik>
        <ShowAlertMessage
          showAlert={showAlert}
          severity={severity}
          description={description}
        />
      </Card>
    </Container>
  );
}

export default LoginPage;
