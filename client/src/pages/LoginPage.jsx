import { useForm } from 'react-hook-form'
import { data, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext';
import {Link} from 'react-router-dom'
import { useEffect } from 'react';

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signin, errors: signinErrors, isAuthenticated} = useAuth();
  const navigate = useNavigate()
  const onSubmit = handleSubmit((data) => {
    signin(data);
  });
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/tasks");
    }
  }, [isAuthenticated]);

  return (
    <div className='flex h-[calc(100vh-100px)] items-center justify-center'>
      <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md'>
        {
          signinErrors.map((error, i) => (
            <div className='bg-red-500 p-2 text-white text-center my-2' key={i}>
              {error}
            </div>
          ))
        }
        <h1 className='text-3xl font-bold my-2'>Login</h1>

        <form
          onSubmit={onSubmit}>
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
          >Login
          </button>
        </form>

        <p className='flex gap-x-2 justify-between'>
        ¿No tienes una cuenta aun?  <Link to="/register" className='text-sky-500'> sing up</Link>     
        </p>
      </div>
    </div>
  )
}

export default LoginPage
