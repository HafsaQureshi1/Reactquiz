import  Herosection  from './Herosection';
import  Skills  from './Skills';
import  About  from './About';
import  Contact  from './Contact';
import  AllPortfolio  from './AllPortfolio';
import Carousal from './Carousal';
export default function Welcome(){
    return(
        <div>
        <Carousal />
      
        <Herosection />
      <Skills />
      <AllPortfolio />     
      <About />
      <Contact />
      <Carousal />
      
      </div>
    )
}