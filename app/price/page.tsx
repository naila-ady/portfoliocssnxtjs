
import "../style/services.css";

export default function Price(){
    return(


 /* price plan */
 <div className="price-plan-section">
  <h2>Price Plans</h2>
   <p className="price-plan-para">High quality code and design standards along with
 customized solution tailored to your project</p>
 {/* price-boxes */}
 {/* 1st plan */}
 <div className="plans">
    <div className="plan1">
     <h3>Silver</h3>
     <h4 className="rate">$0.00/Hour</h4>
     <p>For most buisness that optimize web queries</p>
     <ul>
         <li>UI Design</li>
         <li>Web development</li>
         <li>Logo Design</li>
         <li>SEO Optimization</li>
         <li>WordPress Integration</li>
         <li>5 Websites</li>
         <li>Unlimitied Users</li>
         <li>20 GB Bandwith</li>
        </ul>
        <button className="bttn">Order Now</button>
       </div>
  {/* 2nd plan */}
       <div className="plan1">
     <h3>Gold</h3>
     <h4 className="rate">$50.00/Hour</h4>
     <p>For most buisness that optimize web queries</p>
     <ul>
         <li>UI Design</li>
         <li>Web development</li>
         <li>Logo Design</li>
         <li>SEO Optimization</li>
         <li>WordPress Integration</li>
         <li>5 Websites</li>
         <li>Unlimitied Users</li>
         <li>20 GB Bandwith</li>
        </ul>
        <button  className="bttn">Order Now</button>
          </div>
 {/* 3rdplan */}
       <div className="plan1">
     <h3>Diamod</h3>
     <h4 className="rate">$80.00/Hour</h4>
     <p>For most buisness that optimize web queries</p>
     <ul>
         <li>UI Design</li>
         <li>Web development</li>
         <li>Logo Design</li>
         <li>SEO Optimization</li>
         <li>WordPress Integration</li>
         <li>5 Websites</li>
         <li>Unlimitied Users</li>
         <li>20 GB Bandwith</li>
        </ul>
        <button  className="bttn">Order Now</button>
      </div>
       </div>
    //    </div>
 
    )
}
