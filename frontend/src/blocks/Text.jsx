import { Link } from 'react-router-dom';
import TextEditor from '../components/RichText';
import RichText from '../components/RichText';

function Text({block}) {

    console.log('in text block')

    return (
        <div className='textwrapper'>
            <RichText block={block}/>
        </div>
    )
}

export default Text