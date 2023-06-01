import { Link, useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

const BlogDetails = () => {
    const parms = useParams();
    console.log(parms);
    const { data, loading, error } = useFetch(
        `https://jsonplaceholder.typicode.com/posts/${parms.id}`
    );

    if (loading) return <p>Loading Data...</p>;

    if (error) return <p>error...</p>;

    return (
        <>
            <h1>Blog Detalle</h1>
            <h1>
                {data.id} - {data.title}
            </h1>
            <p>{data.body}</p>
            <Link to="/blog">Regresar</Link>
        </>
    );
};

export default BlogDetails;
