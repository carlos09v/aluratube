import { ThemeProvider } from 'styled-components'
import { useContext } from 'react';

import ColorModeProvider, { ColorModeContext } from '../src/components/Colors/ColorMode';
import RegisterVideo from '../src/components/RegisterVideo';
import { CSSReset } from '../styles/CSSReset'

const theme = {
  light: {
      backgroundBase: "#f9f9f9",
      backgroundLevel1: "#ffffff",
      backgroundLevel2: "#f0f0f0",
      borderBase: "#e5e5e5",
      textColorBase: "#222222",
  },
  dark: {
      backgroundBase: "#181818",
      backgroundLevel1: "#202020",
      backgroundLevel2: "#313131",
      borderBase: "#383838",
      textColorBase: "#FFFFFF",
  }
};

function ProviderWrapper(props) {
  return (
    <ColorModeProvider initialMode='dark'>
      {props.children}
    </ColorModeProvider>
  )
}

// _app.tsx -> Definições globais do NextJS
// ThemeProvider -> Prover o tema pra app toda
// ColorModeProvider -> Prover o state de light ou dark mode pra todo mundo
function MyApp({ Component, pageProps }) {
  const contexto = useContext(ColorModeContext)

  return (
    <ThemeProvider theme={theme[contexto.mode]}>
      <Component {...pageProps} />
      <CSSReset />
      <RegisterVideo />
    </ThemeProvider> 
  )
}

export default function App(props) {
  return (
    <ProviderWrapper>
      <MyApp {...props} />
    </ProviderWrapper>
  )
}
