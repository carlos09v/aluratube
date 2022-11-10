import { useState } from 'react';
import config from '../src/api/config.json'

import Header from "../src/components/Header";
import TimeLine from '../src/components/TimeLine';
import Menu from '../src/components/Menu';

export default function Home() {
  const [valorDoFiltro, setValorDoFiltro] = useState('')

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      flex: 1
      // backgroundColor: "red",
    }}>
      {/* Prop Drilling -> passar prop entre varios componentes */}
      <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
      <Header
        nome={config.name}
        github={config.github}
        job={config.job}
        banner={config.bg}
      />

      <TimeLine searchValue={valorDoFiltro} playlists={config.playlists} />
    </div>
  )
}
