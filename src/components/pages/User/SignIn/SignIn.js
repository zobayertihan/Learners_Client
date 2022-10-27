import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle, } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { AuthContext } from '../../../../context/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const SignIn = () => {
    const { loginUser, providerLogin, setLoading } = useContext(AuthContext);
    const [error, setError] = useState('');
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';
    const navigate = useNavigate();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error))
    }

    const handleGithubSignIn = () => {
        providerLogin(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error))
    }

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const pass = form.pass.value;
        console.log(email, pass);
        loginUser(email, pass)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();
                navigate(from, { replace: true });

            })
            .catch(e => setError(e.message))
            .finally(() => {
                setLoading(false);
            })
    }
    return (
        <div className='h-full w-screen flex justify-center mt-6'>
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Email
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" name='email' type="email" placeholder="Email" required />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name='pass' id="password" type="password" placeholder="Password" required />
                    </div>
                    <p className="text-red-500 text-xs italic mb-5">{error}</p>
                    <div className="flex items-center justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Sign In
                        </button>
                        <button className=' ml-10 '>Forgot Password?</button>
                    </div>
                    <p className='my-5'>Don't have an account? <Link to='/register'>Sign Up</Link></p>
                </form>
                <br />
                <p className='my-5'>------- OR -------</p>
                <p>Continue with: </p>
                <div className='flex justify-around mt-2'>
                    <button onClick={handleGoogleSignIn}><FcGoogle className='h-8 w-8' /></button>
                    <button onClick={handleGithubSignIn}><FaGithub className='h-8 w-8' /></button>
                </div>
            </div>
        </div>
    );
};

export default SignIn;