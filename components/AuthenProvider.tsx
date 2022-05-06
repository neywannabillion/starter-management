import React, { FC, useState, useEffect } from 'react';
import { AuthenProps } from '../models/global.model'
import Lottie from 'lottie-react';
import { Box } from '@mui/material';
import FaceScaning from '../public//static/lotties/face-scanning.json'

const AuthenProvider: FC = ({ children }: AuthenProps) => {
    const [authenticating, setAuthenticating] = useState(true);
    const [authorized, setAuthorized] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setAuthenticating(false)
            setAuthorized(true)
        }, 2000)
    }, [])

    return (
        <Box style={{zIndex: 99999}}>
            {authenticating ?
                <>
                    <Box
                        style={{
                            width: '100vw',
                            height: '100vh',
                            overflow: 'hidden',
                            background: 'linear-gradient(to right, #232526, #414345)'
                        }}>
                        <Box
                            className="center-page"
                            style={{
                                textAlign: 'center'
                            }}
                            sx={{
                                width: {
                                    lg: 200,
                                    md: 200,
                                    sm: 200,
                                    xs: 100
                                }
                            }}>
                            <Lottie
                                animationData={FaceScaning}
                                loop
                            />
                            <Box
                                className="amimate-loading-text"
                                style={{
                                    marginTop: 20
                                }}
                                sx={{
                                    fontSize: {
                                        lg: 18,
                                        md: 18,
                                        sm: 16,
                                        xs: 14
                                    }
                                }}
                            >
                                กำลังยืนยันตัวตน</Box>
                        </Box>
                    </Box>
                </>
                :
                authorized ?
                    children
                    :
                    <Box>

                    </Box>
            }
        </Box>
    )
}

export default AuthenProvider