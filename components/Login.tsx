import React, { FC, useState } from 'react';
import { Box } from "@mui/material";
import { Input } from '@nextui-org/react';
import styles from '../public/static/scss/login.module.scss'
import { RiLoginBoxFill } from "react-icons/ri";
import { LoginProps } from '../models/global.model'
import { toast } from 'react-toastify';

const Login = ({ _loginAction }: LoginProps) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const LoginAction = () => {
    if (username == 'test' && password == 'test') {
      localStorage.setItem('authKey', 'test')
      _loginAction()
    } else {
      toast.error('Username or password was wrong');
    }
  }

  return (
    <>
      <Box
        className={`${styles["login-form"]}`}>
        <Box
          className={`${styles["container-login-form"]}`}>
          <Box className={`${styles["header-login-form"]}`}>Login</Box>
          <Box className={`${styles["body-login-form"]}`}>
            <Box>
              <Input
                className={styles["input-3rd"]}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                clearable
                type="text"
                label="Username"
                placeholder="Enter your username"
              />
            </Box>
            <Box style={{ marginTop: 10 }}>
              <Input.Password
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                clearable
                type="password"
                label="Password"
                placeholder="Enter your password"
              />
            </Box>
            <Box className={styles['button-login']}>
              <button className="button" style={{ marginTop: 20 }} onClick={LoginAction}>
                Login <Box style={{ display: 'flex', marginLeft: 5, fontSize: 18 }}><RiLoginBoxFill /></Box>
              </button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Login