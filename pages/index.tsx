import styles from '@pstyles/index.module.scss'
import Image from 'next/image'

interface Spotify {
  name: string
  artist: string
  link: string
  isplaying: boolean
}

export default function Home({ domain, spotify, discord }: { domain: string, spotify: Spotify, discord: string }) {  
  return (
  <div className={ styles.body }>
    <div className={ styles.msg }>
        Welcome to { domain }<br />Profile Website of FloatingComet62
    </div>
    <div className={ spotify.isplaying ? styles.spotify : styles.off }  >
        <Image src="/Spotify.svg" alt="spotify" width={50} height={50} />
        <div>
            <a href={ spotify.link }>{ spotify.name }</a>
            { spotify.artist }
        </div>
    </div>
    <Image src={`/discord/${ discord }.svg`} alt={ discord } width={300} height={300} />
  </div>
  )
}

export async function getServerSideProps({ req }){
  const data = await lanyard();
  return {
    props: {
      domain: req.headers.host,
      spotify: data.spotify,
      discord: data.discord
    }
  }
}

async function lanyard(): Promise<{ spotify: Spotify, discord: string }>{
  const data = await (await fetch('http://localhost:3000/api/lanyard')).json()
  return {
    spotify: data.spotify,
    discord: data.discord
  }
}