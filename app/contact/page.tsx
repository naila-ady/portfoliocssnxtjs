import "../../style/contact.css";
import Link from "next/link"


export default function Contact() {
    return (
      <div className="main">
      {/* <section className="section"> */}
  <div className="container">
    <h2>
        Contact-Information
    </h2>
    <div className="P">
      <p className="P">
     I'm available to hear from you! Whether you have a question, feedback,
  feel free to reach out. I strive to respond to all messages as quickly
   as possible, and I value every opportunity to connect.
    Don’t hesitate to get in touch—let’s start a conversation!
    </p>  
      
        <button className="btn">
          SEND MESSAGE
        </button>
        <div className="b">
        <Link href={"#"}>
          email:    bholoady@gmail.com<br/>
          call:     111-000-111
         
        </Link>
        </div>
      </div>
    </div>
    </div>
  



  
    );
  }
  