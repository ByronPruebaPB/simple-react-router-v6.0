//import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

// Cuando se utiliza href cada vez que se realiza click se recarga la aplicacion
// en lugar de utilizar href se puede utilizar el linl de react es el código
//que esta más abajo
// const Navbar = () => {
//     return (
//         <div className="navbar navbar-dark bg-dark">
//             <div className="container">
//                 <a href="/" className="btn btn-outline-primary">
//                     Inicio
//                 </a>
//                 <a href="/nosotros" className="btn btn-outline-primary">
//                     Nosotros
//                 </a>
//                 <a href="/contacto" className="btn btn-outline-primary">
//                     Contacto
//                 </a>
//                 <a href="/blog" className="btn btn-outline-primary">
//                     Blog
//                 </a>
//             </div>
//         </div>
//     );
// };

{
    /*
Cuando se utiliza el Link se permite la navegacion pero el boton no se queda marcado
<Link className="btn btn-outline-primary" to="/">
Inicio
</Link>

<Link to="/nosotros" className="btn btn-outline-primary">
Nosotros
</Link>
<Link to="/contacto" className="btn btn-outline-primary">
Contacto
</Link>
<Link to="/blog" className="btn btn-outline-primary">
Blog
</Link> */
    /*En lugar de utilizar Link se utilizaría NavLink que va a crear una clase
que hace que se mantenga seleccionado en la ocpion que se haya dado
*/
}

const Navbar = () => {
    return (
        <div className="navbar navbar-dark bg-dark">
            <div className="container">
                <NavLink className="btn btn-outline-primary" to="/">
                    Inicio
                </NavLink>

                <NavLink to="/nosotros" className="btn btn-outline-primary">
                    Nosotros
                </NavLink>
                <NavLink to="/contacto" className="btn btn-outline-primary">
                    Contacto
                </NavLink>
                <NavLink to="/blog" className="btn btn-outline-primary">
                    Blog
                </NavLink>
            </div>
        </div>
    );
};

export default Navbar;
