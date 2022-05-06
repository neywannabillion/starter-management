import React from "react";
import { NextPage } from 'next'
import type { AppProps } from "next/app";
import MenuSideBar from "../components/MenuSideBar"
import AuthenProvider from "../components/AuthenProvider"
import { Box } from "@mui/material";
import '../public/static/scss/global.scss'


function MyApp({ Component, pageProps }: AppProps): JSX.Element {

  return (
    <>
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