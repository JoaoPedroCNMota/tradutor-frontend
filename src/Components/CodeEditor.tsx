import React from "react";
import {sendCodeToApi} from '../Services/translator'
import { AppBar, Button, Container, Stack } from "@mui/material";
import { PlayArrow, Stop } from "@material-ui/icons";

import AceEditor from 'react-ace';
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-xcode";


const CodeEditor = () => {

    const [code, setCode] = React.useState('');

    const sendCode = () =>{
        console.log(code);
        sendCodeToApi(code);
    }



    const cancelCode = () =>{
        console.log('caneling code')
    }

    return(
        <>
            <Container style={{marginTop: '1%'}}>
                <AceEditor 
                    mode="java"
                    theme="xcode"
                    width="100%"
                    onChange={(e) => setCode(e)}
                />
            </Container>
            
            <AppBar position="fixed" color="secondary" sx={{ top: 'auto', bottom: 0 }}>
                <Container style={{padding:'0.2% 0%'}}>
                    <Stack direction="row" justifyContent="flex-end" alignItems="center" spacing={2}>
                        <Button variant="contained" color="error" size="large" onClick={() => cancelCode()}>
                            Parar <Stop /> 
                        </Button>
                        <Button variant="contained" color="primary" size="large" onClick={() => sendCode()}>
                            Executar <PlayArrow />
                        </Button>
                    </Stack>
                </Container>
            </AppBar>
        </>
    );
}

export default CodeEditor;