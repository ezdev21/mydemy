import { FormEvent, useState } from "react";
import Head from "next/head";
import api from '../libs/api'
import { useRouter } from "next/router";

const Login = () => {
    const router = useRouter()
    const [email,setEmail]= useState<string>('')
    const [password,setPassword] = useState<string>('')
    const submit = (e:FormEvent)=>{
      e.preventDefault() 
      const data = {
        email,password
      }
      api.post('/auth/login',data)
      .then(res=>{
        if(res.status==200){
          localStorage.setItem('token',res.data.token)
          router.push("/dashboard");
        }
      })
      .catch(err=>{
        console.log(err)
      }) 
    }
    return ( 
    <div>
      <Head><title>login - Mydemy</title></Head>
      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full bg-white p-5 rounded-xl">
        <div>
        <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-sm leading-5 text-gray-600 max-w">
          Don't Have an Account?
          <a href="/signup" className="text-primary font-medium focus:outline-none focus:underline transition ease-in-out duration-150">
            Sign up
          </a>
        </p>
      </div>
      <form className="mt-8" onSubmit={submit}>
        <input type="hidden" name="remember" value="true" />
        <div className="rounded-md shadow-sm">
          <div>
            <input onChange={(e)=>setEmail(e.target.value)} aria-label="Email address" name="email" type="email" required className="appearance-none rounded-none relative block w-full px-3 py-3 border my-5 border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:shadow-outline-blue focus:border-primary focus:z-10 sm:text-sm sm:leading-5" placeholder="Email address" />
          </div>
          <div className="mt-2">
            <input onChange={(e)=>setPassword(e.target.value)} aria-label="Password" name="password" type="password" required className="appearance-none rounded-none relative block w-full px-3 py-3 border my-5 border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:shadow-outline-blue focus:ring-primary focus:border-primary focus:z-10 sm:text-sm sm:leading-5" placeholder="Password" />
          </div>
        </div>
        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center">
            <input v-model="remember" type="checkbox" className="form-checkbox h-4 w-4 text-primary bg-primary transition duration-150 ease-in-out" />
            <label htmlFor="remember_me" className="ml-2 block text-sm leading-5 text-gray-900">
              Remember me
            </label>
          </div>
          <div className="text-sm leading-5">
            <a href="/password-reset" className="font-medium focus:outline-none focus:underline transition ease-in-out duration-150">
              Forgot your password?
            </a>
          </div>
        </div>

        <div className="my-6">
          <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary focus:outline-none focus:border-primary focus:shadow-outline-primary transition duration-150 ease-in-out">
            <span className="absolute left-0 inset-y pl-3">
              <svg className="h-5 w-5 text-primary transition ease-in-out duration-150" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
            </span>
            Sign in
          </button>
        </div>
      </form>  
    </div>
    </div>
  </div>
  );
}

export default Login;