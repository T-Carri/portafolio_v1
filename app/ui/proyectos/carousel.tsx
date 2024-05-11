"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Kanit} from "next/font/google";
import { images } from "./constants";





const kanit = Kanit({
  weight: '600', // Aquí especifica el peso deseado, por ejemplo, '400' para regular.
  subsets: ['latin'],
});


const Slider = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [activeImage, setActiveImage] = useState(0);

  const clickNext = () => {

console.log('op',activeImage === images.length - 1)
console.log('dato',activeImage )
    activeImage === images.length - 1
      ? setActiveImage(0)
      : setActiveImage(activeImage + 1);
  };
  const clickPrev = () => {
    activeImage === 0
      ? setActiveImage(images.length - 1)
      : setActiveImage(activeImage - 1);
  };



  
  return (
    <>
    <div className="  rounded-xl m-2  lg:w-full  md:w-full md:mt-3 xl:w-full   flex items-center justify-center ">
    <div id="controls-carousel" className="relative w-full  " data-carousel="static">
    
    <div className="dejameVerte relative w-full overflow-hidden rounded-lg  ">
         
    
   
   {images.map((elem, idx) => (
     <div key={idx}       className={`${
        idx === activeImage
          ?"flex flex-col-reverse xl:flex-row items-center  justify-center":"hidden" }`}>
     <div
      
       className={`${
         idx === activeImage
           ? "block w-full     "
           : "hidden"
       }`}
     >
       

     <div   className={`${
        idx === activeImage
          ? " cardi mx-auto mt-10 ": "hidden"}`}>
  <div className={`${
        idx === activeImage
          ? " bg ": "hidden"}`}>
<div className={`${
        idx === activeImage
          ? "flex flex-row center-items": "hidden"}`}>
  <div   className={`${
        idx === activeImage
          ? "m-2": "hidden"}`} >  
<Image className={`${
        idx === activeImage
          ? "": "hidden"}`} src={elem.logo} alt="sij" width={100} height={100}/>
        
     </div>
  <div>
<h3 className={`text-black text-center pt-7 ${kanit.className}`}>{elem.title}</h3>

  </div>
</div>


<hr className="card-divider1 mx-auto "></hr>
<p className={`text-black text-center  `}> {elem.desc}</p>
<hr className="card-divider mx-auto "></hr>


<div className="flex flex-row items-end  justify-center mt-3">   
  {elem.tecnologia?.map((item, index) => (
    <div className="mx-auto " key={index}><Image src={item} alt="go" width={50} height={50}/></div>
  ))}

  
<a
  className="group mx-auto relative inline-flex items-center overflow-hidden rounded bg-black px-5 py-1 text-white focus:outline-none focus:ring active:bg-indigo-500"
  onClick={() => setShowModal(true)}
>
  <span className="absolute -start-full transition-all group-hover:start-4">
    <svg
      className="size-5 rtl:rotate-180"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </svg>
  </span>

  <span className="text-sm font-medium transition-all group-hover:ms-4"> Go </span>
</a>






</div>

          </div>
  <div  className={`${
        idx === activeImage
          ? " blob": "hidden"}`}></div>
</div>

      
     </div>
     <div className="block w-full "  >   <Image
    
           src={elem.src}
           alt={elem.title}
           width={700}
           height={700}
           quality={100}
           priority={true}
           className={`${
            idx === activeImage
              ? "w-full  object-cover  md:rounded-3xl": "hidden m-5"}`}
 />

</div>
</div>
   ))}
 



   
       
         
       
    

    </div>
    

    <button type="button"  onClick={clickNext} className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span className="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" onClick={clickPrev} className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span className="sr-only">Next</span>
        </span>
    </button>






 
</div>
      
      
</div> 


{showModal ? (
  <>
    <div
      className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
    >
      <div className="relative w-auto my-6 mx-auto max-w-3xl ">
        {/*content*/}
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
     
          {/*body*/}
          <div className="relative p-6 flex-auto">
            <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
              I always felt like I could do anything. That’s the main
              thing people are controlled by! Thoughts- their perception
              of themselves! They're slowed down by their perception of
              themselves. If you're taught you can’t do anything, you
              won’t do anything. I was taught I could do everything.
            </p>
          </div>
          {/*footer*/}
          <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
            <button
              className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
            <button
              className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => setShowModal(false)}
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
  </>
) : null}
</> 
  );
};

export default Slider;