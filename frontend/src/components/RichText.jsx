import { Link } from 'react-router-dom';

function RichText({block}) {
    
    return (
        <>
            {
                block.Body.map((el, i) => {

                    console.log(el)
                    return el.children.map((child, j) => {

                        if(child.type === "text"){
                            return <p key={`${i}-${j}`}>{child.text}</p>
                        }else if(child.type === "link"){
                            console.log(child)
                            return <Link key={`${i}-${j}`} to={child.url}>{child.children[0].text}</Link>
                        }else {
                            return null;
                        }
                        
                    })
                })
            }
        </>
    )
}

export default RichText