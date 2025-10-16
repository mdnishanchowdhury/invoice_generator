import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../Hook/useAuth';
import SocialLogin from '../../components/SocialLogin/SocialLogin';
import { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

function Login() {
    const { userSignIn } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        userSignIn(email, password)
            .then(result => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Successfully Login",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(from, { replace: true });
            })
            .catch(error => {
                Swal.fire({
                    title: `${error.message}`,
                    icon: "error",
                    draggable: true
                });
            });
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className='text-4xl font-bold text-center'>Login</h2>
                <form className="card-body" onSubmit={handleSubmit}>
                    {/* email */}
                    <div className="form-control">
                        <label className="label">Email</label>
                        <input
                            name="email"
                            type="email"
                            className="input input-bordered w-full"
                            placeholder="Email"
                            required
                        />
                    </div>

                    {/* password */}
                    <div className="form-control relative">
                        <label className="label">Password</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            className="input input-bordered w-full"
                            placeholder="Password"
                            required
                        />
                        <span
                            className="absolute right-3 top-8 cursor-pointer text-xl"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                        </span>
                    </div>

                    {/* submit */}
                    <div className="form-control">
                        <input
                            className="btn btn-neutral bg-indigo-600 hover:bg-white hover:text-black w-full mt-4"
                            type="submit"
                            value="Login"
                        />
                    </div>
                </form>

                <h2 className='font-semibold text-center mb-2 text-[#D1A054]'>
                    <span className='font-normal'>New here? </span>
                    <Link to='/signUp'>Create a New Account</Link>
                </h2>

                <SocialLogin />
            </div>
        </div>
    );
}

export default Login;
