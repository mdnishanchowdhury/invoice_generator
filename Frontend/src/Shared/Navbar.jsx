import { NavLink } from "react-router-dom";
import { AiOutlineMenuUnfold } from "react-icons/ai";
function Navbar() {
    return (
        <div>
            <div className="fixed top-0 w-full z-50 navbar shadow-sm bg-white px-6 md:px-10">
                <div className="navbar-start">
                    <NavLink to="/" className="btn btn-ghost text-xl uppercase">Invoice</NavLink>
                </div>

                {/* Mobile menu icon */}
                <div className="navbar-end lg:hidden relative">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} className="btn btn-ghost">
                            <AiOutlineMenuUnfold className="w-6 h-6" />
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-2 p-2 shadow w-48 absolute left-1/2 -translate-x-1/2 text-center"
                        >
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        isActive ? "text-blue-500 font-semibold" : ""
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/save"
                                    className={({ isActive }) =>
                                        isActive ? "text-blue-500 font-semibold" : ""
                                    }
                                >
                                    Save Document
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Desktop menu */}
                <div className="navbar-end hidden lg:flex gap-2">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? "text-blue-500 font-semibold" : ""
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/save"
                                className={({ isActive }) =>
                                    isActive ? "text-blue-500 font-semibold" : ""
                                }
                            >
                                Save Document
                            </NavLink>
                        </li>
                    </ul>
                    <NavLink to="/logIn" className="btn">Login</NavLink>
                    <NavLink to="/signUp" className="btn">SignUp</NavLink>
                </div>
            </div>

            {/* Page content spacing */}
            <div className="mt-16"></div>
        </div>
    );
}

export default Navbar;
