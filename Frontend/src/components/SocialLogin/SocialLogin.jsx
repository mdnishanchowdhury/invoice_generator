import { FaGithub, FaGoogle } from 'react-icons/fa'
function SocialLogin() {
    const handleGoogle = () => {
        console.log()
    }
    return (
        <div className='flex flex-col justify-center items-center gap-3 pb-5'>

            <h2 className='text-xl font-medium '>Or sign in with</h2>
            <div className='flex gap-5 '>
                <button onClick={handleGoogle} className="btn btn-circle">
                    <FaGoogle></FaGoogle>
                </button>
                <button className="btn btn-circle">
                    <FaGithub></FaGithub>
                </button>
            </div>
        </div>
    )
}

export default SocialLogin;