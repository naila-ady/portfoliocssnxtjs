
import Image from "next/image";
import img from "../../public/assets/her02.webp";
import "../style/pages.css";
import  {} from "react-icons/fa";
import {FaFacebook, FaYoutubeSquare,FaTwitterSquare,FaTiktok, FaInstagramSquare} from "react-icons/fa";
import {FaBarsProgress} from "react-icons/fa6";
import Link from "next/link";
import { FaHome } from "react-icons/fa"
// import { WiMoonAltWaxingCrescent1 } from "react-icons/wi";
import { GrServices } from "react-icons/gr";
import { MdOutlinePriceCheck , MdContacts } from "react-icons/md";
// import { SiHyperskill } from "react-icons/si";


   export default function Home() {
  return (
    <div> 
      <div className="full-page">
          {/* right-container */}
      <div className="panel-container">
            <div className="panel-image">
            <Image src={img} alt="img" width={150} height={150}  objectFit="cover"></Image></div>
            <div className="panel-container-head">
                    <h6>NAILA ADNAN
                        <span className="spn1">  Front-End</span>Developer
                    </h6>
                    </div>
                    {/* icons section */}
                    <div className="icons">
                        <h1><FaFacebook/></h1>
                   <h1 ><FaYoutubeSquare/></h1>
                   <h1><FaTwitterSquare /></h1>
                   <h1><FaInstagramSquare /></h1>
                   <h1><FaTiktok/></h1>
                            </div>
                       {/* profile section */}
                    <div className="details">
                    
                        <h2>Profile</h2>
                        <h3>Residence:<span className="spn2" >   Pakistan</span></h3>
                        <h3>Freelance:<span className="spn2" >    Available</span></h3>
                        </div>
                        <div className="lang">
                        <h2>Languages</h2>
                        <p> English  90%</p>
                        <h1>< FaBarsProgress/></h1>
                        <p> Urdu             100%</p>
                        <h1>< FaBarsProgress/></h1>
                        </div>
                    </div> 
        {/* center-container */}
      <section className="main-container"> 
                {/* hero 1st div */}
                <div className="main-container-left">
                    <h6>I'm NAILA  ADNAN
                        <span className="spn">  Front-End</span> Developer
                    </h6>
                    <p>Excel to create websites with
                     complete clean code along with 
                     interactive UI & UX and fully
                   responsive,accessible to all users!</p>
                   <button className="bttn1">HIRE ME</button>
                </div>
                {/* hero 2nd div */}
                <div className="main-container-right">
                  
                <Image src={img} alt="image" width={410} height={999}></Image>
                </div>
                    </section>


                  {/* {/left-container */}
      <div className="left">

  <ul className="header-links">
   {/* <li>
    <Link href="/"><h1>< WiMoonAltWaxingCrescent1/></h1></Link>
 </li> */}

    <li>
      <Link href="/"><h1><FaHome/></h1>Home</Link>
   </li>
    {/* <li>
    <Link href="/skills"><h1><SiHyperskill/></h1>Skills</Link>
 </li> */}
   <li>
    <Link href="/services"><h1><GrServices/></h1>Services</Link>
   </li>
   <li>
    <Link href="/price"><h1>< MdOutlinePriceCheck /></h1>Price Plan</Link>
 </li>
  <li>
    <Link href="/contact"><h1><MdContacts/></h1>Contact-Me</Link>
  </li>
 </ul>
  </div>   
    </div>
    </div>
    
  );
}
