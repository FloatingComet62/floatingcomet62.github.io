export type Social = {
    link: string;
    image: string;
    alt: string
};

function create(name: string, link: string): Social {
    return {
        link,
        alt: name,
        image: `/${name.toLowerCase()}.png`
    }
}

export default [
    create('Youtube', 'https://www.youtube.com/@FloatingComet62'),
    create('Github', 'https://www.github.com/FloatingComet62'),
    create('Linkedin', 'https://www.linkedin.com/in/aargh-rai-40900524a/'),
    create('Tumblr', 'https://floatingcomet62.tumblr.com/'),
    create('Twitter', 'https://x.com/FloatingComet62'),
] as Social[]