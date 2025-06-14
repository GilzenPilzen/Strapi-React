import RichText from '../components/RichText';

function Text({block}) {

    console.log('in text block')

    return (
        <div className='blockText'>
            <RichText body={block.Body}/>
        </div>
    )
}

export default Text