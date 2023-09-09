import Head from "next/head";
import {
  Carousel,
  initTE,
} from "tw-elements";

export default function Home() {
  const categories=[
    {id:1,name:'Course'},
    {id:2,name:'Teacher'}
  ];
  return (
    <div>
      <Head>
        <title>Mydemy</title>
        <link rel="icon" href="../../public/favicon.ico" sizes="any" />
      </Head>
      <div className='bg-white flex justify-between px-3'>
       <div className='flex items-center p-2 space-x-5'>
        <a href="/" className='text-xl'>Mydemy</a>
          <div className="mx-3 p-1 rounded-3xl bg-gray-200 px-5 border-2 border-primary flex items-stretch">
            <select v-model="categoryId" required className="bg-gray-200 px-5">
              <option value="all">Any</option>
              {categories.map((category:any)=>(
                <option key={category.id}>{category.name}</option>
              ))}
            </select>
            <input type="text" required placeholder="search anything" className="px-2 bg-gray-200 w-60 rounded outline-none placeholder-gray-700"/>
            <button type="submit" className="text-primary text-xl bg-gray-200 lg:mx-1 xl:mx-1 2xl:mx-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            </button>
          </div>
           <a href="/business" className='font-bold'>Business</a>
           <a href="/teach" className='font-bold'>Teach</a> 
        </div>
        <div className='flex items-center p-2 space-x-5'>
          <a href="/login" className='border-2 border-primary px-5 py-1 font-bold rounded-md box-border'>Log in</a>
          <a href="/signup" className='text-white border-2 border-primary bg-primary px-5 py-1 font-bold rounded-md'>Sign up</a>
        </div>
      </div>
      <div className="">
        <div
        id="carouselExampleControls"
        className="relative"
        data-te-carousel-init
        data-te-carousel-slide>
        <div
          className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
        <div
          className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-te-carousel-item
          data-te-carousel-active>
          <img
            src="https://media.istockphoto.com/id/1320160546/nl/foto/jongen-die-thuis-e-learning-bestudeert.jpg?s=612x612&w=0&k=20&c=aEPDGyEb1Q3pfYlWXUvkOQPSNuHuInHiM1cDHjmpQIs="
            className="block w-full h-72 object-cover"
            alt="Image 1" />
        </div>
        <div
          className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-te-carousel-item>
          <img
            src="https://cdn.pixabay.com/photo/2019/05/20/13/15/webinar-4216601_640.jpg"
            className="block h-64"
            alt="Image 2" />
        </div>
        <div
          className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-te-carousel-item>
          <img
            src="https://cdn.pixabay.com/photo/2020/05/02/12/38/homeschooling-5121262_1280.jpg"
            className="block h-64"
            alt="Image 3" />
        </div>
      </div>
      <button
        className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        data-te-target="#carouselExampleControls"
        data-te-slide="prev">
        <span className="inline-block h-8 w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-6 w-6">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </span>
        <span
          className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Previous</span>
      </button>
      <button
        className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        data-te-target="#carouselExampleControls"
        data-te-slide="next">
        <span className="inline-block h-8 w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-6 w-6">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </span>
        <span
          className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
          >Next
        </span>
        </button>
        </div>
      </div>
      <div className='text-center bg-white p-3 my-3 mx-5'>
        <h1 className='text-2xl font-bold'>A broad selection of courses</h1>
        <p className='text-xl'>Choose from over 1000 online video courses with new additions published every month</p>
      </div>
      <div className='flex bg-white my-5 mx-5'>
        <div className='p-5 flex flex-col space-y-3 justify-center'>
           <h1 className='text-2xl font-bold'>Upskill your team with Our Business</h1>
           <ul style={{listStyle:"circle inside black"}} className='text-xl'>
            <li>Unlimited access to 1000+ top Our courses, anytime, anywhere</li>
            <li>International course collection in different languages</li>
            <li>Top certifications in tech and business</li>
           </ul>
        </div>
        <img src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400" 
        className='w-1/2 h-96' alt="" />
      </div>
      <div className='flex bg-white my-5 mx-5'>
        <img src="https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=400" 
        className='w-1/2 h-96' alt="" />
        <div className='w-1/2 p-5 flex flex-col space-y-3 justify-center'>
           <h1 className='text-2xl font-bold'>Become an instructor</h1>
           <p className='text-xl'>Instructors from around the world teach millions of students on Our. We provide the tools and skills to teach what you love.</p>
        </div>
      </div>
      <footer className='bg-gray-800 p-5'>
             
      </footer>
  </div>
  )
}
