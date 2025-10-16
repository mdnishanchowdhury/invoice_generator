import { NavLink, useNavigate } from "react-router-dom";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import useAuth from "../Hook/useAuth";
import Swal from 'sweetalert2';

function Navbar() {
    const { user, userLogOut } = useAuth();
    const navigate =useNavigate();

    const handleLogout = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You will be logged out from your account!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, logout!",
        }).then((result) => {
            if (result.isConfirmed) {
                userLogOut()
                navigate('/login')
                    .then(() => {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Successfully logged out!",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    })
                    .catch(err => {
                        console.error(err);
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: "Logout failed!",
                        });
                    });
            }
        });
    };

    const menuItems = (
        <>
            <li>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? "text-blue-500 font-semibold text-[15px]" : ""
                    }
                >
                    Home
                </NavLink>
            </li>
            {
                user && <li>
                    <NavLink
                        to="/saveDocuments"
                        className={({ isActive }) =>
                            isActive ? "text-blue-500 font-semibold" : ""
                        }
                    >
                        Save Document
                    </NavLink>
                </li>
            }
            {!user ? (
                <>
                    <li>
                        <NavLink to="/logIn" className="btn btn-sm text-[15px]">
                            Login
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/signUp" className="btn btn-sm text-[15px]">
                            SignUp
                        </NavLink>
                    </li>
                </>
            ) : (
                <li>
                    <button onClick={handleLogout} className="btn btn-sm">
                        Logout
                    </button>
                </li>
            )}
        </>
    );

    return (
        <div>
            <div className="fixed top-0 w-full z-50 navbar shadow-sm bg-white px-6 md:px-10">
                <div className="navbar-start">
                    <NavLink to="/" className="btn btn-ghost text-xl uppercase">
                        Invoice
                    </NavLink>
                </div>

                {/* mobile menu */}
                <div className="navbar-end lg:hidden relative">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} className="btn btn-ghost">
                            <AiOutlineMenuUnfold className="w-6 h-6" />
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-2 p-2 shadow w-80 text-center gap-3 "
                        >
                            {menuItems}
                        </ul>
                    </div>
                </div>

                {/* desktop menu */}
                <div className="navbar-end hidden lg:flex gap-2">
                    <ul className="menu menu-horizontal px-1 gap-2">{menuItems}</ul>
                </div>
            </div>

            <div className="mt-16"></div>
        </div>
    );
}

export default Navbar;
