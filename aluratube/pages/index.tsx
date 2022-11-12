import { useEffect, useState } from 'react';
import config from '../src/api/config.json'

import Header from "../src/components/Header";
import TimeLine from '../src/components/TimeLine';
import Menu from '../src/components/Menu';
import { videoService } from '../src/services/videoService';


export default function Home() {
  const service = videoService()
  const [valorDoFiltro, setValorDoFiltro] = useState('')
  const [playlists, setPlaylists] = useState({})

  // Efeito Colateral
  /* - Supabase - (Desativado no MOMENTO !!)
  useEffect(() => {
    service.getAllVideos()
      .then(dados => {
        const novasPlaylists = { ...playlists }
        dados.data.forEach(video => {
            if (!novasPlaylists[video.playlist]) novasPlaylists[video.playlist] = []
          
            novasPlaylists[video.playlist].push(video)
        })
        setPlaylists(novasPlaylists)
  })
  }, [])
  */

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
