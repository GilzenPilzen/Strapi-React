import Text from "../blocks/Text"
import useFetch from "../hooks/useFetch"


function Home() {

    const {loading, error, data} = useFetch('http://localhost:1337/api/home?populate=blocks')

    if(loading) return <p>Loading...</p>
    if(error) return <p>Error: {error}</p>

    return (
        <div>
            <h1>{data.data.Title}</h1>

            {
                data.data.blocks.map(block => {
                    if(block.__component === "blocks.text") {
                        return (
                            <Text key={block.id} block={block}/>
                        )
                    }
                })
            }

            
        </div>
    )
}

export default Home