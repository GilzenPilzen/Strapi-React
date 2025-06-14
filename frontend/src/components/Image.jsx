export default function Image({size = "medium", formats}) {

    const host = process.env.NEXT_PUBLIC_STRAPI_URL;
    console.log(size);
    return (
        <div className="imgwrapper">
            {
                (() => {
                    switch(size) {
                        case 'small':
                            return <img src={`${host}${formats.small.url}`} width={formats.small.width} height={formats.small.height} alt={formats.small.name}/>
                        
                        case 'medium':
                            console.log('test')
                            return <img src={`${host}${formats.medium.url}`} width={formats.medium.width} height={formats.medium.height} alt={formats.medium.name}/>

                        case 'large':
                            return <img src={`${host}${formats.large.url}`} width={formats.large.width} height={formats.large.height} alt={formats.large.name}/>

                        default:
                            return <p>Geen afbeelding gevonden</p>;
                    }
                })()
            }
        </div>
    )
}