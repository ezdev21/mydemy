import { useRouter } from 'next/router'
import Head from "next/head";
import { FormEvent, useState } from "react";
import axios from '../libs/axios'

const Signup = () => {
    const router = useRouter()
    const [name,setName] = useState<string>('')
    const [username,setUserName] = useState<string>('')
    const [email,setEmail] = useState<string>('')
    const [password,setPassword] = useState<string>('')
    const [passwordConfirmation,setPasswordConfirmation] = useState<string>('')
    const signup = (e:FormEvent)=>{
      e.preventDefault()
      const data = {
        name,username,email,password
      }
      axios.post('/auth/signup',data)
      .then(res=>{
        console.log(res)
        if(res.status==201){
          router.push("/login");
        }
        else{

        }
      })
      .catch(err=>{
        console.log(err)
      }) 
    }
    return ( 
      <div>
        <Head><title>sign up - Mydemy</title></Head>
        <div className="min-h-screen flex items-center justify-center py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full bg-white p-5 rounded-xl">
          <div>
            <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
              Create Account
            </h2>
            <p className="mt-2 text-center text-sm leading-5 text-gray-600 max-w">
              Already Have an Account?
              <a href='/login' className="text-primary font-medium focus:outline-none focus:underline transition ease-in-out duration-150">
                Sign in
              </a>
            </p>
          </div>
          <form className="mt-8" onSubmit={signup}>
            <div className="flex flex-wrap -mx-3 my-3">
              <div className="w-full px-3 mb-2 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                  Name
                </label>
                <input onChange={(e)=>setName(e.target.value)} className="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10" id="grid-first-name" type="text" placeholder="Jane" name="name" required/>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 my-3">
              <div className="w-full px-3 mb-2 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-user">
                  Username
                </label>
                <input onChange={(e)=>setUserName(e.target.value)} className="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10" id="grid-username" type="text" placeholder="Jane123" name="username" required/>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 my-3">
              <div className="w-full px-3 mb-3 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-email">
                  Email address
                </label>
                <input onChange={(e)=>setEmail(e.target.value)} className="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10" id="grid-email" type="email" placeholder="example@example.com" name="email" required/>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-3">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                  Password
                </label>
                <input onChange={(e)=>setPassword(e.target.value)} className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10" id="grid-password" type="password" placeholder="******************" name="password" required/>
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password-confirmation">
                  Confirmation Password
                </label>
                <input onChange={(e)=>setPasswordConfirmation(e.target.value)} className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10" id="grid-password-confirmation" type="password" placeholder="******************" name="password_confirmation" required/>
              </div>
            </div>
            <div className="my-6">
              <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary focus:outline-none transition duration-150 ease-in-out">
                <span className="absolute left-0 inset-y pl-3">
                  <svg className="h-5 w-5 transition ease-in-out duration-150" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                </span>Sign up
              </button>
            </div>
          </form>
        </div>
      </div>   
    </div>
  );
}
 
export default Signup;