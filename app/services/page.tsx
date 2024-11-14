
import "../style/services.css";
import {PiLaptopBold   } from "react-icons/pi";
import { FaLaptopCode, FaBlog ,FaFigma   } from "react-icons/fa";
import { MdDomainAdd } from "react-icons/md";
import { TbApiApp } from "react-icons/tb";

export default function Services(){
return(
    <div>
{/* services div  */}
<section className="service-section">
<h2>My Services</h2>

<p className="service-heading-para">High quality code and design standards along with
    customized solution tailored to your project</p>
    {/* service-boxes */}

  <div className="boxes">
    <h1><PiLaptopBold /></h1>
    <h4>Web Development</h4>
    <p>Specialize in designing and building custom websites tailored to business or personal needs.</p>
    </div>
 <div className="boxes">
 <h1><FaLaptopCode/></h1>
 <h4>UI/UX Design</h4>
<p>Offer UI/UX design services to create aesthetically pleasing and user-friendly interfaces for Mobile App & Website Design.</p>
 </div>
    <div className="boxes">
    <h1> <FaBlog /></h1>
    <h4>Blog,E-Commerce</h4>
    <p>Create a unique, responsive, and user-friendly E-commerce Website that aligns with your brand's identity.</p>
    </div>
    <div className="boxes">
    <h1><FaFigma/></h1> 
        <h4> Interactive Prototypes in Figma</h4>
    <p> Create fully interactive prototypes in Figma that simulate real-world</p>
    </div>
    <div className="boxes">
        <h1><MdDomainAdd/></h1>
        <h4>Web Hosting & Domain Services</h4>
    <p>Offer reliable web hosting and domain registration services to get your website online with ease.</p>
    </div>
    <div className="boxes">
        <h1><TbApiApp/></h1>
        <h4>API Integration & Development</h4>
    <p>Integrate various third-party APIs into your website or application to enhance its functionality. </p>
    <p><span className="spn2">ORDER NOW -</span></p></div>
    </section>
    </div>
)
}