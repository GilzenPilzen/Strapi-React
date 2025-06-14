import Blocks from "@/sections/Blocks";
import Text from "../blocks/Text"
// import useFetch from "../hooks/useFetch"
import { fetchHomepage} from "@/lib/strapi";

// Get info of homepage
export async function getStaticProps() {
    const home = await fetchHomepage();

    return {
        props: { home },
        revalidate : 60
    }
}

export default function Home({home}) {

    console.log('Home:' + home)
    // const {loading, error, data} = useFetch('http://localhost:1337/api/home?populate=blocks')

    return (
        <div>
            <h1>Dit is de {home.Title}</h1>

            <Blocks blocks={home.blocks} />
        </div>
    )
}