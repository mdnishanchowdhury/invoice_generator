import { useState } from "react";
import { Link } from "react-router-dom";
import { HiEye, HiEyeOff } from "react-icons/hi";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

function Login() {
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);
    };

    return (
        <div className="min-h-screen flex items-center justify-center ">
            <div className="card w-full max-w-md bg-white shadow-xl rounded-2xl p-6 md:p-10">
                <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-6">Sign in</h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="form-control">
                        <label className="label text-gray-600 font-medium">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            className="input input-bordered w-full rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                            required
                        />
                    </div>

                    <div className="form-control relative">
                        <label className="label text-gray-600 font-medium">Password</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Enter your password"
                            className="input input-bordered w-full rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none pr-10"
                            required
                        />
                        <span
                            className="absolute right-3 top-[38px] cursor-pointer text-gray-500"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <HiEyeOff size={20} /> : <HiEye size={20} />}
                        </span>
                    </div>

                    <div className="form-control mt-4">
                        <button
                            type="submit"
                            className="btn bg-yellow-500 hover:bg-yellow-600 text-white font-semibold w-full rounded-lg transition-all duration-300"
                        >
                            Login
                        </button>
                    </div>
                </form>

                <p className="text-center text-gray-500 mt-4">
                    New here?{" "}
                    <Link to="/signUp" className="text-yellow-500 font-semibold hover:underline">
                        Create a New Account
                    </Link>
                </p>

                <div className="divider text-gray-400">OR</div>

                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
}

export default Login;
