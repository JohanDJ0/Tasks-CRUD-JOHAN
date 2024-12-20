import { useForm } from 'react-hook-form'
import { useAuth } from '../context/AuthContext'
import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom'
function RegisterPages() {
    const { register, handleSubmit, formState: {
        errors
    } } = useForm();
    const { signup, isAuthenticated, errors: registerErrors } = useAuth();
    const navigate = useNavigate()
    useEffect(() => {
        if (isAuthenticated) {
            navigate("/tasks");
        }
    }, [isAuthenticated]);


    const onSubmit = handleSubmit(async (values) => {
        signup(values);

    });

    return (
        <div className='flex h-[calc(100vh-100px)] items-center justify-center'>
            <div className="bg-zinc-800 max-w-md p-10 rounded-md">
                {
                    registerErrors.map((error, i) => (
                        <div className='bg-red-500 p-2 text-white' key={i}>
                            {error}
                        </div>
                    ))
                }
                <h1 className='text-3xl font-bold my-2 '>Register</h1>

                <form
                    onSubmit={onSubmit}>
                    <input type="text"{...register("username", { required: true })}
                        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                        placeholder='username'
                    />
                    {errors.username && (
                        <p className='text-red-500'>Username is require</p>
                    )}
                    <input type="email" {...register("email", { required: true })}
                        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                        placeholder='email'
                    />
                    {errors.email && (
                        <p className='text-red-500'>email is require</p>
                    )}
                    <input type="password" {...register("password", { required: true })}
                        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                        placeholder='password'
                    />
                    {errors.password && (
                        <p className='text-red-500'>password is require</p>
                    )}

                    <button type="submit"
                    className='bg-sky-500 text-white px-4 py-2 rounded-md my-2'
                    >Register
                    </button>
                </form>

                <p className='flex gap-x-2 justify-between'>
                    ¿Ya tienes una cuenta?  <Link to="/Login" className='text-sky-500'> Login</Link>
                </p>
            </div>
        </div>
    )
}

export default RegisterPages
