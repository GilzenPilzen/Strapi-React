import Link from 'next/link'


function RichText({body}) {
    
    return (
        <div className="textwrapper">
            {
                body.map((el, i) => {

                    console.log(el)
                    return el.children.map((child, j) => {

                        if(child.type === "text"){
                            return <p key={`${i}-${j}`}>{child.text}</p>
                        }else if(child.type === "link"){
                            console.log(child)
                            return <Link key={`${i}-${j}`} href={child.url}>{child.children[0].text}</Link>
                        }else {
                            return null;
                        }
                        
                    })
                })
            }
        </div>
    )
}

export default RichText