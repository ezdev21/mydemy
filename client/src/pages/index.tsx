import Head from "next/head";
import { FormEvent, useState, useEffect } from "react";
import {useRouter} from 'next/router'
import api from '../libs/api'
import CarouselDefault from "../components/carousel";
const Home = () => {
  const router = useRouter()
  const [type,setType]=useState<string>('');
  const [categories,setCategories] = useState<Array<Object>|null>([])
  const [category,setCategory]=useState<string>('');
  const [query,setQuery]=useState<string>('');

  useEffect(()=>{
    api.post('/category')
    .then(res=>{
     setCategories(res.data)
    })
    .catch(err=>{
      console.log(err)
    })
  })

  const search =(e:FormEvent)=>{
    e.preventDefault()
    router.push(`search?type=${type}category=${category}&query=${query}`)
  }
  return (
    <div>
      <Head>
        <title>Mydemy</title>
        <link rel="icon" href="../../public/favicon.ico" sizes="any" />
      </Head>
      <div className='bg-white flex justify-between px-3'>
       <div className='flex items-center p-2 space-x-5'>
        <a href="/" className='text-xl'>Mydemy</a>
        <form onSubmit={search}>
          <div className="mx-3 p-1 rounded-3xl bg-gray-200 px-5 border-2 border-primary flex items-stretch">
            <select onChange={(e)=>setType(e.target.value)} v-model="categoryId" className="bg-gray-200 px-5">
              <option value="">Any</option>
              <option value="course">Course </option>
              <option value="instructor">Instructor</option>
            </select>
            <select onChange={(e)=>setCategory(e.target.value)} v-model="categoryId" className="bg-gray-200 px-5">
              <option value="all">Category</option>
              {categories?.map((category:any)=>(
                <option key={category.id} value={category.name}>{category.name}</option>
              ))}
            </select>
            <input type="search" onChange={(e)=>setQuery(e.target.value)} required placeholder="search anything" className="px-2 bg-gray-200 w-60 rounded outline-none placeholder-gray-700 focus:border-0"/>
            <button type="submit" className="text-primary text-xl bg-gray-200 lg:mx-1 xl:mx-1 2xl:mx-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            </button>
          </div>
        </form>
           <a href="/business" className='font-bold'>Business</a>
           <a href="/teach" className='font-bold'>Teach</a> 
        </div>
        <div className='flex items-center p-2 space-x-5'>
          <a href="/login" className='border-2 border-primary px-5 py-1 font-bold rounded-md box-border'>Log in</a>
          <a href="/signup" className='text-white border-2 border-primary bg-primary px-5 py-1 font-bold rounded-md'>Sign up</a>
        </div>
      </div>
      <div className="h-1/2 overflow-clip">
      <CarouselDefault/>
      </div>
      <div className='text-center bg-white p-3 my-3 mx-5'>
        <h1 className='text-2xl font-bold'>A broad selection of courses</h1>
        <p className='text-xl'>Choose from over 1000 online video courses with new additions published every month</p>
      </div>
      <div className='flex items-stretch flex-wrap bg-white my-5 mx-5'>
        <div className='lg:w-1/2 p-5 flex flex-col space-y-3 justify-center'>
           <h1 className='text-2xl font-bold'>Upskill your team with Our Business</h1>
           <ul style={{listStyle:"circle inside black"}} className='text-xl'>
            <li>Unlimited access to 1000+ top Our courses, anytime, anywhere</li>
            <li>International course collection in different languages</li>
            <li>Top certifications in tech and business</li>
           </ul>
        </div>
        <img src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400" 
        className='lg:w-1/2' alt="" />
      </div>
      <div className='flex flex-wrap bg-white my-5 mx-5'>
        <img src="https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=400" 
        className='lg:w-1/2 h-96' alt="" />
        <div className='lg:w-1/2 p-5 flex flex-col space-y-3 justify-center'>
           <h1 className='text-2xl font-bold'>Become an instructor</h1>
           <p className='text-xl'>Instructors from around the world teach millions of students on Our. We provide the tools and skills to teach what you love.</p>
        </div>
      </div>
      <footer className='bg-primary p-5'>
             
      </footer>
  </div>
  )
}
export default Home;