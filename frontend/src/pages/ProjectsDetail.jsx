import { useParams, useLocation } from 'react-router-dom';

function ProjectsDetail() {

    console.log('werkt')

    const { slug } = useParams();
    const location = useLocation();
    const id = location.state?.id;

    return (
        <div>
        <h1>{slug}</h1>
        <p>ID vanuit state: {id}</p>
        </div>
    );
}

export default ProjectsDetail