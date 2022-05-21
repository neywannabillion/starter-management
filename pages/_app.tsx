import React from "react";
import { NextPage } from 'next'
import type { AppProps } from "next/app";
import MenuSideBar from "../components/MenuSideBar"
import AuthenProvider from "../components/AuthenProvider"
import { Box } from "@mui/material";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../public/static/scss/global.scss'


function MyApp({ Component, pageProps }: AppProps): JSX.Element {

  return (
    <>
      <ToastContainer
        theme="dark"
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
      />
      <AuthenProvider >
        <MenuSideBar />
        <Box className="container-body">
          <Component {...pageProps} />
        </Box>

      </AuthenProvider>
    </>
  )
}

export default MyApp;