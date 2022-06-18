import styles from '@pstyles/contact.module.scss'
import Image from 'next/image';
import { lanyard } from 'public/dry';

interface Contact {
    name: string
    link: string
    icon: string
}

export default function Home({ contacts, discord }: { contacts: Contact[],  discord: string }) {
    const onSmallScreen = process.browser ? window.innerWidth < 700 : false;
    const contactList = contacts.map((item) => {
        return (
            <div key={ item.name } className={ styles.contact } onClick={() => location.href = item.link}>
                <Image src={`/contacts/${ item.icon }.svg`} alt={ item.name } width={100} height={100} />
                <div className={ styles.text }>{ item.name }</div>
            </div>
        )
    })

    return (
        <div className={ styles.body }>
            <div className={ styles.head }>
                <div></div>
                <div className={ styles.title }>About me</div>
                { onSmallScreen ? <div /> : <Image className={ styles.discord } src={`/discord/${ discord }.svg`} alt={ discord } width={50} height={50} /> }
            </div>
            <div className={ styles.contacts }>
                { contactList }
            </div>
        </div>
    )
}

export async function getServerSideProps() {
    const contacts: Contact[] = [
        {
            name: 'Youtube',
            icon: 'youtube',
            link: 'https://www.youtube.com/channel/UCzg9zTUN9x-C-REPN_0jk6Q'
        },
        {
            name: 'Twitter',
            icon: 'twitter',
            link: 'https://twitter.com/FloatingComet62'
        },
        {
            name: 'Github',
            icon: 'github',
            link: 'https://github.com/FloatingComet62'
        },
        {
            name: 'Reddit',
            icon: 'reddit',
            link: 'https://www.reddit.com/user/FloatingComet62'
        },
        {
            name: 'Twitch',
            icon: 'twitch',
            link: 'https://www.twitch.tv/floatingcomet62'
        }
    ]
    
    const data = await lanyard()
    return {
      props: {
        contacts: contacts,
        discord: data.discord
      }
    }
}