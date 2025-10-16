import { useState } from "react";
import { Link } from "react-router-dom";
import { HiEye, HiEyeOff } from "react-icons/hi";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

function SignUpUI() {
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        console.log({
            name: form.name.value,
            email: form.email.value,
            password: form.password.value,
            photoURL: form.photoURL.value,
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center ">
            <div className="card w-full max-w-md bg-white shadow-xl rounded-2xl p-6 ">
                <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-6">
                    Create Account
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="form-control">
                        <label className="label text-gray-600 font-medium">Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            className="input input-bordered w-full rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                            required
                        />
                    </div>

                    <div className="form-control">
                        <label className="label text-gray-600 font-medium">Photo URL</label>
                        <input
                            type="text"
                            name="photoURL"
                            placeholder="Photo URL"
                            className="input input-bordered w-full rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                        />
                    </div>

                    <div className="form-control">
                        <label className="label text-gray-600 font-medium">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="input input-bordered w-full rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                            required
                        />
                    </div>

                    <div className="form-control relative">
                        <label className="label text-gray-600 font-medium">Password</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Password"
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
                            Sign Up
                        </button>
                    </div>
                </form>

                <p className="text-center text-gray-500 mt-4">
                    Already registered?{" "}
                    <Link to="/login" className="text-yellow-500 font-semibold hover:underline">
                        Go to Login
                    </Link>
                </p>

                <div className="divider text-gray-400">OR</div>

                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
}

export default SignUpUI;
