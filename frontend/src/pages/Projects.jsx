import useFetch from "../hooks/useFetch"
import useSlug from "../hooks/useSlug"
import { Link } from 'react-router-dom';

function Projects() {
    const {loading, error, data} = useFetch('http://localhost:1337/api/projects/')

    console.log(data)

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error} </p>
    return (
        <div>
            {
                data.data.map(project => {
                    const slug = useSlug(project.Title);

                    return (
                    <div key={project.documentId}>
                        <Link to={`/projects/${slug}`} state={{ id: project.documentId }}>
                        {project.Title}
                        </Link>
                    </div>
                    );
                })
            }
        </div>
    )
}

export default Projects