import styles from '@cstyles/sidebar.module.scss'
import Image from 'next/image'

interface SidebarItem {
    title: string
    icon: string
    link: string
    class?: string
}

export default function sidebar() {
    const items: SidebarItem[] = [
        {
            icon: '/sidebar/Arrow.svg',
            title: 'FloatingComet62',
            class: 'arrow',
            link: '/'
        },
        {
            icon: '/sidebar/Home.svg',
            title: 'Home',
            link: '/'
        },
        {
            icon: '/sidebar/Projects.svg',
            title: 'Projects',
            link: '/projects'
        },
        {
            icon: '/sidebar/About me.svg',
            title: 'About me',
            link: '/about'
        },
        {
            icon: '/sidebar/Contact.svg',
            title: 'Contact',
            class: 'contact',
            link: '/contact'
        }
    ]

    return (
        <div className={ styles.navbar }>
            {  items.map((item) => {
                return (
                    <>
                    <div className={ item.class ? styles.item + " " + styles[item.class] : styles.item } key={ item.title } onClick={() => location.href=item.link}>
                        <Image className={ item.class ? styles[item.class+"image"]: '' } src={ item.icon } alt={ item.title } width={50} height={50} />
                        <div className={ styles.text }>{ item.title }</div>
                    </div>
                    </>
                )
                })
            }
        </div>
    )
}