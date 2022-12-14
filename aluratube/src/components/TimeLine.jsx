import styled from "styled-components";

const StyledTimeline = styled.div`
  flex: 1;
  width: 100%;
  padding: 16px;
  overflow: hidden;
  h2 {
    font-size: 16px;
    margin-bottom: 16px;
    text-transform: capitalize;
  }
  img {
    aspect-ratio: 16/9;
    font-weight: 500;
    object-fit: cover;
    width: 100%;
    max-width: 210px;
    height: auto;
  }
  section {
    width: 100%;
    padding: 0;
    overflow: hidden;
    padding: 16px;
    div {
      
      width: calc(100vw - 16px * 4);
      display: grid;
      grid-gap: 16px;
      grid-template-columns: repeat(auto-fill,minmax(200px,1fr));
      grid-auto-flow: column;
      grid-auto-columns: minmax(200px,1fr);
      overflow-x: auto;
      scroll-snap-type: x mandatory;
      a {
        scroll-snap-align: start;
        span {
          padding-top: 8px;
          display: block;
          padding-right: 24px;
          color: ${({ theme }) => theme.textColorBase || "#222222"};
        }
      }
      ::-webkit-scrollbar {
        width: 16px;
      } 
      ::-webkit-scrollbar-track {
        background: ${({ theme }) => theme.backgroundScrollbarTrack};
        border-radius: 10px;
      }
      ::-webkit-scrollbar-thumb {
        background: rgb(179, 178, 179);
        border-radius: 10px;
      }
    }
  }
`;

const TimeLine = ({ playlists, searchValue }) => {
  const playlistNames = Object.keys(playlists)

  return (
    <StyledTimeline>
      {playlistNames.map(playlistName => {
        const videos = playlists[playlistName]

        return (
          <section key={playlistName}>
            <h2>{playlistName}</h2>
            <div>
              {videos
                .filter(video => {
                  const titleNormalized = video.title.toLowerCase()
                  const searchNormalized = searchValue.toLowerCase()
                  return titleNormalized.includes(searchNormalized)

                })
                .map(video => (
                  <a key={video.url} href={video.url} target='_blank'>
                    <img src={video.thumb} alt="Thumb" />
                    <span>{video.title}</span>
                  </a>
                ))}
            </div>
          </section>
        )
      })}
    </StyledTimeline>
  )
}

export default TimeLine

/*  tsx
interface TimeLineProps {
  playlists: {}
}


const TimeLine = ({ playlists }: TimeLineProps) => {
  const playlistNames = Object.keys(playlists)
  const videos = playlists[playlistNames]

  return (
    <div>
      {playlistNames.map((nome: ) => {
        
        
      })}
    </div>
  )
}

export default TimeLine
*/