import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <>
            <h1>Error 404 página no existe</h1>
            <Link to="/" className="btn btn-outline-primary">
                Regresar al Inicio
            </Link>
        </>
    );
};

export default NotFound;
