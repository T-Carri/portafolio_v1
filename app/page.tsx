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
      <main className="flex min-h-screen flex-col items-center p-2 ">
  
  
   
  <div className="flex w-full h-full flex-row items-center">
   <Tarjeta/>
   <Tecnologias/>
  </div>
   

    <div className="flex w-full flex-row items-center">
     

      <Slider  />
      
      
      {/* space blur stuff */}
       <Contacto   />
   
    </div>

</main>
  </>
  );
}
     



      
      
  
