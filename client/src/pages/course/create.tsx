import { FormEvent, useEffect, useState } from "react"
import api from '../../libs/api'
import Head from "next/head";

const Create = ()=>{
  const [categories,setCategories] = useState<Array<Object>|null>([])
  const [category,setCategory] = useState('')
  const [title,setTitle] = useState('')
  const [description,setDescription] = useState('')
  const [thumbnail,setThumbnail] = useState('')
  useEffect(()=>{
    api.get('/category')
    .then(res=>{
      setCategories(res.data)
    })
    .catch(err=>{
      console.log(err)
    })
  })
  const createCourse = (e:FormEvent)=>{
    e.preventDefault()
    const data = {title,description,category,thumbnail}
    api.post('/course',data)
    .then(res=>{
      
    })
    .catch(err=>{
      console.log(err)
    })
  }  
  return(
    <div>
        <Head><title>Create Course - Mydemy</title></Head>
        <div className="min-h-screen flex items-center justify-center py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full bg-white p-5 rounded-xl">
          <div>
            <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
              Create New Course
            </h2>
            <p className="mt-2 text-center text-sm leading-5 text-gray-600 max-w">
              Fill all the required fields to create course
            </p>
          </div>
          <form className="mt-8" onSubmit={createCourse}>
            <div className="flex flex-wrap -mx-3 my-3">
              <div className="w-full px-3 mb-2 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="title">
                  Title*
                </label>
                <input onChange={(e)=>setTitle(e.target.value)} className="box-border appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10" id="title" type="text" placeholder="title" name="title" required/>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 my-3">
              <div className="w-full px-3 mb-2 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="description">
                  Description*
                </label>
                <input onChange={(e)=>setDescription(e.target.value)} className="box-border appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10" id="description" type="text" placeholder="Description" name="description" required/>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 my-3">
              <div className="w-full px-3 mb-3 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="category">
                  Category*
                </label>
                <select onChange={(e)=>setCategory(e.target.value)} className="focus:outline-none focus:outline-shadow-blue focus:border-blue-300 focus:z-10 bg-white appearance-none block w-full border rounded py-3 px-4 mb-3 leading-tight" name="category" id="category">
                  <option value="any" selected className="text-gray-700">Category</option>
                  {categories?.map((category:any)=>(
                     <option className="text-gray-700" key={category.id} value={category.id}>{category.name}</option>      
                  ))}
                </select>              
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 my-3">
              <div className="w-full px-3 mb-2 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-user">
                  Upload Thumbnail*
                </label>
                <input type="file" onChange={(e)=>setThumbnail(e.target.value)} className="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10" id="grid-thumbnail" placeholder="Thumbnail" name="thumbnail" required/>
              </div>
            </div>
            <div className="my-6">
              <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary focus:outline-none transition duration-150 ease-in-out">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>   
    </div>
  )
}
export default Create