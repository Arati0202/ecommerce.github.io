import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <>

            <nav className=" navbar navbar-expand-lg navbar-dark bg-dark px-5  py-3 ">
                <NavLink  className="navbar-brand fw-bold fs-4" to="/">Match The Style</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse mr-auto" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <NavLink  className="nav-link fs-5" to="/">Home <span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink  className="nav-link fs-5" to="/products">Product</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink  className="nav-link fs-5" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink  className="nav-link fs-5" to="/contact">Contact</NavLink>
                        </li>


                    </ul>

                </div>
                <div className="buttons float-right">
                    <NavLink  to="/login" className="btn btn-outline-primary my-2 my-sm-0">
                        <i className="fNavLink  fa-sign-in" aria-hidden="true"></i>Login
                    </NavLink>
                    <NavLink  to="/registration" className="btn btn-outline-primary my-2 my-sm-0  ms-2">
                    <i className="fNavLink  fa-user-plus"  aria-hidden="true"></i>Register
                    </NavLink>
                    <NavLink  to="/cart" className="btn btn-outline-primary my-2 my-sm-0  ms-2">
                        <i className="fNavLink  fa-shopping-cart" aria-hidden="true"></i> Cart
                        <span className="badge bg-dark text-white ms-1 rounded-pill">0</span>
                    </NavLink>

                </div>
            </nav>

        </>
    );
}
export default Navbar;