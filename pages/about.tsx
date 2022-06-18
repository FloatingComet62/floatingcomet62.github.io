import styles from '@pstyles/about.module.scss'
import { lanyard } from 'public/dry'
import Image from 'next/image'

interface stackInterface {
  title: string
  stacks: {
    name: string
    link: string
    icon: string
  }[]
}
interface Props {
  discord: string
  content: string
  stacks: { 
    goodat: stackInterface
    havetried: stackInterface
  }
}

function goto(link: string) {
    if (link!='') location.href = link;
}

export default function Home({ discord, content, stacks }: Props) {
    const onSmallScreen = process.browser ? window.innerWidth < 1000 : false;

    return (
        <div className={ styles.body }>
          <div className={ styles.head }>
            <div></div>
            <div className={ styles.title }>About me</div>
            { onSmallScreen ? <div /> : <Image className={ styles.discord } src={`/discord/${ discord }.svg`} alt={ discord } width={50} height={50} /> }
          </div>
          <div className={ styles.content }>
            <div className={ styles.text }>
              { content }
            </div>
            { 
              onSmallScreen
              ? <Image className={ styles.image } src="/Comet.png" alt="Comet" width={150} height={100} layout="fixed" />
              : <Image className={ styles.image } src="/Comet.png" alt="Comet" width={300} height={200} layout="fixed" />
            }
          </div>
          <div className={ styles.stacks }>
            <div className={ styles.group }>
              <div className={ styles.head }>{ stacks.goodat.title }</div>
              <div className={ styles.stacklist }>
                { stacks.goodat.stacks.map(stack => (
                  <div className={ styles.stack } key={ stack.name } onClick={ () => goto(stack.link) }>
                    <div className={ styles.icon }>
                      <Image src={ stack.icon } alt={ stack.name } width={50} height={50} />
                    </div>
                    <div className={ styles.name }>
                      { stack.name }
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={ styles.group }>
              <div className={ styles.head }>{ stacks.havetried.title }</div>
              <div className={ styles.stacklist }>
                { stacks.havetried.stacks.map(stack => (
                  <div className={ styles.stack } key={ stack.name } onClick={ () => goto(stack.link) }>
                    <div className={ styles.icon }>
                      <Image src={ stack.icon } alt={ stack.name } width={50} height={50} />
                    </div>
                    <div className={ styles.name }>
                      { stack.name }
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
    )
}
export async function getServerSideProps() {  
  const data = await lanyard()
  return {
    props: {
      content: "Hello! I am Aargh Rai aka FloatingComet62. I am a Fullstack Web and Open Source developer. I am 15 years old. I am a highschool junior and I am an expert in Javascript and Typescipt.",
      discord: data.discord,
      stacks: {
        goodat: {
          title: "Technologies I am good at",
          stacks: [
            {
              name: "JavaScript",
              link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
              icon: "/stacks/js.svg"
            },
            {
              name: "TypeScript",
              link: "https://www.typescriptlang.org/",
              icon: "/stacks/ts.svg"
            },
            {
              name: "Vue",
              link: "https://vuejs.org/",
              icon: "/stacks/vue.svg"
            },
            {
              name: "Nuxtjs",
              link: "https://nuxtjs.org/",
              icon: "/stacks/nuxt.svg"
            },
            {
              name: "Angular",
              link: "https://angular.io/",
              icon: "/stacks/angular.svg"
            },
            {
              name: "MongoDB",
              link: "https://www.mongodb.com/",
              icon: "/stacks/mongo.svg"
            },
            {
              name: "Express",
              link: "https://expressjs.com/",
              icon: "/stacks/express.svg"
            },
            {
              name: "Nodejs",
              link: "https://nodejs.org/en/",
              icon: "/stacks/node.svg"
            },
            {
              name: "React",
              link: "https://reactjs.org/",
              icon: "/stacks/react.svg"
            },
            {
              name: "Nextjs",
              link: "https://nextjs.org/",
              icon: "/stacks/next.svg"
            },
            {
              name: "C#",
              link: "https://docs.microsoft.com/en-us/dotnet/csharp/",
              icon: "/stacks/csharp.svg"
            }
          ]
        },
        havetried: {
          title: "Technologies I have tried",
          stacks: [
            {
              name: "Python",
              link: "https://www.python.org/",
              icon: "/stacks/python.svg"
            },
            {
              name: "Java",
              link: "https://www.java.com/en/",
              icon: "/stacks/java.svg"
            },
            {
              name: "C++",
              link: "https://en.wikipedia.org/wiki/C%2B%2B",
              icon: "/stacks/cpp.svg"
            },
            {
              name: "Rust",
              link: "https://www.rust-lang.org/",
              icon: "/stacks/rust.svg"
            },
            {
              name: "MySQL",
              link: "https://www.mysql.com/",
              icon: "/stacks/sql.svg"
            },
            {
              name: "Pygame",
              link: "https://www.pygame.org/docs/",
              icon: "/stacks/pygame.svg"
            },
            {
              name: "Unity",
              link: "https://unity.com/",
              icon: "/stacks/unity.svg"
            },
            {
              name: "React Native",
              link: "https://reactnative.dev/",
              icon: "/stacks/react.svg"
            },
            {
              name: "Firebase",
              link: "https://firebase.google.com/",
              icon: "/stacks/firebase.svg"
            }
          ]
        }
      }
    }
  }
}