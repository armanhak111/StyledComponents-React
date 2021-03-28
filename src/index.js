import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'

const Global = createGlobalStyle`
*{
  margin:0px;
  padding:0px;
  box-sizing:border-box;
  font-family:consolas;
}
`

const theme = {
    colors:{
      primary:'green',
      secondary:"red"
    }
}

ReactDOM.render(
  <ThemeProvider theme = {theme}>
    <Global/>
    <App />,
  </ThemeProvider>,
  document.getElementById('root')
);

