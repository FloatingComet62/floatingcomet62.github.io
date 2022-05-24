import styles from '@pstyles/about.module.scss'
import { lanyard } from "public/dry"
import Image from 'next/image'

export default function Home({ discord, content }: { discord: string, content: string }) {
    return (
        <div className={ styles.body }>
          <div className={ styles.head }>
            <div></div>
            <div className={ styles.title }>About me</div>
            <Image className={ styles.discord } src={`/discord/${ discord }.svg`} alt={ discord } width={50} height={50} />
          </div>
          <div className={ styles.content }>
            <div className={ styles.text }>
              { content }
            </div>
            <Image className={ styles.image } src="/Comet.png" alt="Comet" width={300} height={200} layout="fixed" />
          </div>
        </div>
    )
}
export async function getServerSideProps() {  
  const data = await lanyard()
  return {
    props: {
      content: "Hello! I am Aargh Rai aka FloatingComet62. I am a Game, frontend web and Open Source developer. I am 15 years old. I am a highschool junior and I am an expert in Javascript and Typescipt.",
      discord: data.discord
    }
  }
}