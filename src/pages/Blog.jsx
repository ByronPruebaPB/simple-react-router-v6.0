import { useFetch } from '../hooks/useFetch';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const Blog = () => {
    //cuando se utilizan parametros de busqueda se coloca el signo de interrogacion
    //por ejemplo
    //http://localhost:5173/blog?name=ignacio

    const [searchParams, setSearchParams] = useSearchParams();

    // useEffect(() => {
    //     //En este caso obtengo el parametro de busqueda que se llama name
    //     //que para el ejemplo coloque http://localhost:5173/blog?name=ignacio
    //     //por lo tanto cuando visualice en consola aparecera ignacio
    //     //console.log(searchParams.get('name'));
    //     setSearchParams({ filter: 'prueba' });
    //     console.log(searchParams.get('filter'));
    // }, [searchParams]);

    const { data, loading, error } = useFetch(
        'https://jsonplaceholder.typicode.com/posts'
    );

    if (loading) return <p>Loading Data...</p>;

    if (error) return <p>error...</p>;

    const handleChange = (e) => {
        let filter = e.target.value;

        if (filter) {
            setSearchParams({ filter: filter });
        } else {
            setSearchParams({});
        }

        //console.log(e.target.value);
        //console.log('se ejecuta el evento OnChange');
    };

    return (
        <>
            <h1>Blog</h1>
            <input
                type="text"
                onChange={handleChange}
                className="form-control my-3"
                value={searchParams.get('filter') || ''}
            ></input>
            <ul className="list-group">
                {data
                    .filter((item) => {
                        let filter = searchParams.get('filter');
                        if (!filter) return true;
                        let name = item.title.toLowerCase();
                        return name.startsWith(filter.toLowerCase());
                    })

                    .map((item) => (
                        <Link
                            to={`/blog/${item.id}`}
                            key={item.id}
                            className="list-group-item"
                        >
                            {item.id} - {item.title}
                        </Link>
                    ))}
            </ul>
        </>
    );
};

export default Blog;
