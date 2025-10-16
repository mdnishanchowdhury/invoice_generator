import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAuth from '../../Hook/useAuth';
import SocialLogin from '../../components/SocialLogin/SocialLogin';
import { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

function SignUp() {
    const { createUser, updatedProfile } = useAuth();
    const navigate = useNavigate();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false);

    const onSubmit = async (data) => {
        try {
            await createUser(data.email, data.password);
            await updatedProfile(data.name);
            reset();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Successfully Signed Up",
                showConfirmButton: false,
                timer: 1500
            });

            navigate('/login');
        } catch (error) {
            console.error(error.message);
            Swal.fire({
                icon: "error",
                title: "Sign Up Failed",
                text: error.message
            });
        }
    };

    return (
        <div className="hero bg-base-200 min-h-screen ">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className='text-4xl font-bold text-center'>Sign Up</h2>
                <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                    {/* name */}
                    <div className="form-control">
                        <label className="label">Name</label>
                        <input
                            type="text"
                            placeholder="Name"
                            className="input input-bordered w-full"
                            {...register("name", { required: true })}
                        />
                        {errors.name && <span className='text-red-600'>Name is required</span>}
                    </div>

                    {/* email */}
                    <div className="form-control">
                        <label className="label">Email</label>
                        <input
                            type="email"
                            placeholder="Email"
                            className="input input-bordered w-full"
                            {...register("email", { required: true })}
                        />
                        {errors.email && <span className='text-red-600'>Email is required</span>}
                    </div>

                    {/* password */}
                    <div className="form-control relative">
                        <label className="label">Password</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            className="input input-bordered w-full"
                            {...register("password", {
                                required: true,
                                minLength: 6,
                                maxLength: 20,
                                pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{6,}$/
                            })}
                        />
                        <span
                            className="absolute right-3 top-8 cursor-pointer text-xl"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                        </span>
                        {errors.password?.type === 'minLength' && <span className='text-red-600'>Password must be at least 6 characters</span>}
                        {errors.password?.type === 'maxLength' && <span className='text-red-600'>Password must be less than 20 characters</span>}
                        {errors.password?.type === 'pattern' && <span className='text-red-600'>Password must have one uppercase, one lowercase & one number</span>}
                    </div>

                    {/* submit button */}
                    <div className="form-control">
                        <input
                            type="submit"
                            value="Sign Up"
                            className="btn btn-neutral bg-indigo-600 hover:bg-white hover:text-black w-full mt-4"
                        />
                    </div>
                </form>

                <h2 className='font-semibold text-center mb-2 text-[#D1A054]'>
                    <span className='font-normal'>Already registered? </span>
                    <Link to='/login'>Go to log in</Link>
                </h2>

                <SocialLogin />
            </div>
        </div>
    );
}

export default SignUp;
