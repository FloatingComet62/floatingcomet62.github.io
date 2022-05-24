import styles from '@pstyles/projects.module.scss'
import Image from 'next/image'
import { useState } from 'react'
import { Projects, lanyard } from 'public/dry'

export default function Home({ projects, discord }: { projects: Projects[], discord: string }) {
    const [ current, setCurrent ] = useState<number>(0);

    function change(direction: boolean){
        if (direction){
            if (current+1>=projects.length) setCurrent(0);
            else setCurrent(current + 1);
        } else {
            if (current<1) setCurrent(projects.length-1)
            else setCurrent(current - 1);
        }
    }
    
    function goto(link: string){
        if (link!='') location.href = link;
    }

    return (
    <>
    <div className={ styles.body }>
    <div className={ styles.head }>
      <div></div>
      <div className={ styles.title }>Actual Good Content I make</div>
      <Image className={ styles.discord } src={`/discord/${ discord }.svg`} alt={ discord } width={50} height={50} />
    </div>
    <div className={ styles.projects }>
        <div className={ styles.mover } onClick={() => change(false)} >
            <Image src="/ProjectArrow.svg" alt="Arrow" className={`${ styles.arrow } ${ styles.left }`} width={40} height={40} />
        </div>
        <div className={ styles.project }>
            <div className={ styles.projectTitle }>{ projects[current].title }</div>
            <div className={ styles.description }>
                <div className={ styles.info }>{ projects[current].description }</div>
                <Image src={ projects[current].image } alt="Logo" id="logo" width={200} height={200} />
            </div>
            <div className={ styles.buttons }>
                <div className={ styles.button } onClick={ () => goto(projects[current].tryLink) }>Try It</div>
                <div className={ styles.button } onClick={ () => goto(projects[current].codeLink) }>Source Code</div>
            </div>
        </div>
        <div className={ styles.mover } onClick={ () => change(true) }>
            <Image src="/ProjectArrow.svg" alt="Arrow" className={`${ styles.arrow } ${ styles.right }`} width={40} height={40} />
        </div>
    </div>
    </div>
    </>
    )
}

export async function getServerSideProps() {
  const projects: Projects[] = [
        {
          title: 'PainScript',
          description: 'A programming language pain to code in and inspired by brainf**k.',
          tryLink: 'https://github.com/FloatingComet62/PainScript/releases/tag/v1.1.0',
          codeLink: 'https://github.com/FloatingComet62/PainScript',
          image: '/projects/PainScript.png'
        },
        {
          title: 'UniverseSafe',
          description: 'A discord bot that will help you keep your server safe',
          tryLink: 'https://github.com/FloatingComet62/UniverseSafe',
          codeLink: 'https://github.com/FloatingComet62/UniverseSafe',
          image: '/projects/UniverseSafe.png'
        },
        {
          title: 'RealBox',
          description: 'My First Game. (Yes it is very bad)',
          tryLink: 'https://floatingcomet62.github.io/Real-box/',
          codeLink: 'https://github.com/FloatingComet62/Real-Box',
          image: '/projects/RealBox.png'
        },
        {
          title: 'Enver',
          description: 'An env editor as a donwloadable npm package',
          tryLink: 'https://www.npmjs.com/package/handle-env',
          codeLink: 'https://github.com/FloatingComet62/enver',
          image: '/projects/Enver.png'
        },
        {
          title: 'Hashing API',
          description: 'A simple hashing API',
          tryLink: 'https://hashing-api-production.up.railway.app/',
          codeLink: 'https://github.com/FloatingComet62/Hashing-API',
          image: '/projects/HashingAPI.png'
        },
        {
          title: 'FluidDB',
          description: 'Fluid DB is a no-sql database service',
          tryLink: '',
          codeLink: 'https://github.com/FloatingComet62/FluidDB',
          image: '/projects/FluidDB.png'
        },
        {
          title: 'PrimeFinder',
          description: 'A prime number finder',
          tryLink: 'https://github.com/FloatingComet62/PrimeFinder/releases/tag/v1',
          codeLink: 'https://github.com/FloatingComet62/PrimeFinder',
          image: '/projects/PrimeFinder.png'
        },
        {
          title: 'Chess',
          description: 'A chess game in your command line',
          tryLink: '',
          codeLink: 'https://github.com/FloatingComet62/Chess',
          image: '/projects/Chess.png'
        }
  ]
  const data = await lanyard()
  return {
    props: {
      projects: projects,
      discord: data.discord
    }
  }
}