import styles from '@pstyles/index.module.scss'
import Image from 'next/image'
import { Spotify, lanyard } from 'public/dry'

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

export async function getServerSideProps({ req }) {
  const data = await lanyard()
  return {
    props: {
      domain: req.headers.host,
      spotify: data.spotify,
      discord: data.discord
    }
  }
}