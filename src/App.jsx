import AboutMe from "./component/About";
import Appointment from "./component/Appointment";
import Data from "./component/Data";
import TestimonialSlider from "./component/emonial";
import Footer from "./component/Footer";
import Hero from "./component/Header";
import PaymentSelector from "./component/Payment";
import Gallery from "./component/slider";


export default function App() {
  return (
    <div className="bg-gray-200 min-h-screen">
      <div className=" relative max-w-4xl min-h-screen mx-auto bg-white p-4">
   <Hero />
   <Data />
   <AboutMe />
   <Gallery />
   <Appointment />
   <TestimonialSlider /> 
   <PaymentSelector />
   <Footer />
    </div>
    
    </div>
  )
}