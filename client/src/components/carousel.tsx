import { useEffect } from "react"

 const CarouselDefault = ()=>{
    if(typeof window !== 'undefined') {
        const buttons = document.querySelectorAll("[data-carousel-button]")
        buttons.forEach(button => {
        button.addEventListener("click", () => {
          const offset = button.dataset.carouselButton === "next" ? 1 : -1
          const slides = button.closest("[data-carousel]").querySelector("[data-slides]")
          const activeSlide = slides.querySelector("[data-active]")
          let newIndex = [...slides.children].indexOf(activeSlide) + offset
          if (newIndex < 0) newIndex = slides.children.length - 1
          if (newIndex >= slides.children.length) newIndex = 0
          slides.children[newIndex].dataset.active = true
          delete activeSlide.dataset.active
        })
      })  
      useEffect(()=>{
        setInterval(()=>{
            const slides = document.querySelector("[data-slides]")
            const activeSlide = slides?.querySelector("[data-active]")
            let newIndex = [...slides?.children].indexOf(activeSlide) + 1
            if (newIndex < 0) newIndex = slides.children.length - 1
            if (newIndex >= slides?.children.length) newIndex = 0
            slides.children[newIndex].dataset.active = true
            delete activeSlide?.dataset.active
        },4000)
    },[])
    }
  return (
    <div className="carousel  text-4xl text-white" data-carousel>
      <button className="carousel-button prev outline-none" data-carousel-button="prev">&lsaquo;</button>
      <button className="carousel-button next" data-carousel-button="next">&rsaquo;</button>
      <ul data-slides>
        <li className="slide relative" data-active>
          <div className="absolute inset-0 flex justify-center items-center">
            <h1 className="w-1/2">Learn creative skills to achieve your personal and professional goals.</h1>
          </div>  
          <img 
            src="https://media.istockphoto.com/id/1320160546/nl/foto/jongen-die-thuis-e-learning-bestudeert.jpg?s=612x612&w=0&k=20&c=aEPDGyEb1Q3pfYlWXUvkOQPSNuHuInHiM1cDHjmpQIs=" 
            alt="Nature Image #1"/>
        </li>
        <li className="slide relative">
          <div className="absolute inset-0 flex justify-center items-center">
            <h1 className="w-1/2">Tune in and level up at your own pace</h1>
          </div> 
          <img 
            src="https://cdn.pixabay.com/photo/2019/05/20/13/15/webinar-4216601_640.jpg"
            alt="Nature Image #2"/>
        </li>
        <li className="slide relative">
          <div className="absolute inset-0 flex justify-center items-center">
            <h1 className="w-1/2">Connect with a global community of curious creatives</h1>
          </div> 
          <img 
            src="https://cdn.pixabay.com/photo/2020/05/02/12/38/homeschooling-5121262_1280.jpg"
            alt="Nature Image #3"/>
        </li>
      </ul>
    </div>
  );
}
export default CarouselDefault