interface Spotify {
    name: string
    artist: string
    link: string
    isplaying: boolean
}
interface Projects{
    title: string;
    description: string;
    tryLink: string;
    codeLink: string;
    image: string;
}

async function lanyard(): Promise<{ spotify: Spotify, discord: string }>{
    // require('dotenv').config();
    const data = await (await fetch(`${process.env.DOMAIN}/api/lanyard`)).json()
    return {
        spotify: data.spotify,
        discord: data.discord
    }
}

export {
    lanyard
};
export type {
    Projects,
    Spotify
};
