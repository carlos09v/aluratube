import React from 'react'

type ColorModeProps = {
  children: React.ReactNode
  initialMode: string
}

export const ColorModeContext = React.createContext({
  mode: '',
  setMode: (mode: string) => { alert('Você precisa me configurar primeiro!') },
  toggleMode: () => { alert('Você precisa me configurar primeiro!') }
})

const ColorModeProvider = (props: ColorModeProps) => {
  const [mode, setMode] = React.useState(props.initialMode)

  function toggleMode() {
    if (mode === 'dark') setMode('light')
    if (mode === 'light') setMode('dark')
  }

  return (
    <ColorModeContext.Provider value={{ mode: mode, setMode: setMode, toggleMode: toggleMode }}>
      {props.children}
    </ColorModeContext.Provider>
  )
}

export default ColorModeProvider