import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Nosotros from './pages/Nosotros';
import Contacto from './pages/Contacto';
import Blog from './pages/Blog';
import LayoutPublic from './layouts/LayoutPiblic';
import NotFound from './pages/NotFound';
import BlogDetails from './pages/BlogDetails';

/*
<Route element={<Nosotros></Nosotros>} path="/"></Route>
<Route element={<Contacto></Contacto>} path="/"></Route>
<Route element={<Blog></Blog>} path="/"></Route>
*/

const App = () => {
    return (
        <>
            <Router>
                <Navbar></Navbar>
                <Routes>
                    {/*Se crea una ruta contenedora en la que devuelve siempre el LayoutPublic que contiene 
                     el footer, es decir para todas las rutas que estan adentro Inicio Nostros Contacto Blog
                     siempre devuelve el mismo LayoutPublic

                     Cuando no existe una pagina usa el componente que esta en la pagina NotFound
                    */}
                    <Route path="/" element={<LayoutPublic></LayoutPublic>}>
                        <Route element={<Inicio></Inicio>} index></Route>
                        <Route
                            element={<Nosotros></Nosotros>}
                            path="/nosotros"
                        ></Route>
                        <Route
                            element={<Contacto></Contacto>}
                            path="/contacto"
                        ></Route>
                        <Route element={<Blog></Blog>} path="/blog"></Route>
                        <Route
                            element={<BlogDetails></BlogDetails>}
                            path="/blog/:id"
                        ></Route>
                        <Route element={<NotFound></NotFound>} path="*"></Route>
                    </Route>
                </Routes>
            </Router>
        </>
    );
};

export default App;
