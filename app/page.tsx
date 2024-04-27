import Image from "next/image";
import Navbar from "@/app/ui/navbar";
import { Kanit} from "next/font/google";
import Slider from "@/app/ui/proyectos/carousel";
import Tarjeta from "./ui/presentacion/Tarjeta";
import Tecnologias from "./ui/tecnologia/Tecnologias";
import Contacto from "./ui/contacto/Contacto";

const kanit = Kanit({
  weight: '500', // Aquí especifica el peso deseado, por ejemplo, '400' para regular.
  subsets: ['latin'],
});


export default function Home() {

  return (
  <> 
   <Navbar/>
      <main className=" lg:h-full xl:flex  xl:flex-col mt-3 ">
  <div className="w-full lg:h-1/3 lg:flex  lg:flex-row">
  <Tarjeta/>
  
  <Slider  />
  </div>
 
  <div className="w-full 	lg:h-full lg:flex  lg:flex-row" >
   <Tecnologias/>
   
       <Contacto   />



  </div>
   

</main>
  </>
  );
}
     



      
      
  
