import styled from 'styled-components'

interface headerProps {
    nome: string
    github: string
    job: string
    banner: string
}

const StyledHeader = styled.div`
    background-color: ${({ theme }) => theme.backgroundLevel1};

    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .user-info {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
`

const Header = (props: headerProps) => {
    const StyledBanner = styled.div`
        background-image: url(${props.banner});
        background-position: center;
        height: 230px;
    `

  return (
      <StyledHeader>
        <StyledBanner />
        
        <section className='user-info'>
            <img src={`https://github.com/${props.github}.png`} alt="Foto GitHub" />
            <div>
                <h2>{props.nome}</h2>
                <p>{props.job}</p>
            </div>
        </section>
    </StyledHeader>
  )
}


export default Header