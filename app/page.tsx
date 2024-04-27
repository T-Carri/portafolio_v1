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
      <main className="  min-h-max md:relative lg:flex  lg:flex-col isolate px-6 mpt-20 lg:px-8 ">
  <div className="w-full pt-5  lg:flex  lg:flex-row">
  <Tarjeta/>
  
  <Slider  />
  </div>
 
  <div w-full >
   <Tecnologias/>
   
       <Contacto   />



  </div>
   

</main>
  </>
  );
}
     



      
      
  
