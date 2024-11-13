import React, { useState } from 'react'
import { toast } from 'react-toastify';

const Contact = () => {

    const [result, setResult] = React.useState('')

    const onSubmit = async ( e ) => {
      e.preventDefault();
      setResult("Sending....");
      const formData = new FormData(e.target);
  
      formData.append("access_key", "b11cfa3b-5012-47d9-a054-d66c802febef");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("");
        toast.success("Form Submitted Successfully.")
        e.target.reset();
      } else {
        console.log("Error", data);
        toast.error(data.message);
      }
    };
  return (
    <div className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden' id='Contact'>
         <h1 className='text-2xl sm:text-4xl font-semibold mb-2 text-center'>Get a   <span className='underline underline-offset-4 decoration-1 under font-light'>Call Back</span></h1>
         <p className='text-gray-500 max-w-80 text-center mb-4 mx-auto'>Ready to Make a Move? Let’s Build Your Future Together</p>

         <p className='text-gray-500 '>If you're looking to invest in Lucknow’s vibrant real estate market, Nirman Real Estate is here to help you every step of the way. Get in touch with us today to explore our latest properties or to schedule a consultation with our real estate experts.

</p>

         <form onSubmit={onSubmit}
         className='max-w-2xl mx-auto text-gray-600 pt-8' >
            <div className='flex flex-wrap'>
                <div className='w-full md:w-1/2 text-left'>Your Name
                    <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type="text" name='Name' placeholder='Enter Your Name'  required/>
                </div>
                <div className='w-full md:w-1/2 text-left md:pl-4'>Your Email
                    <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type="email" name='Email' placeholder='Enter Your Email'  required/>
                </div>
            </div>
            <div className='my-6 text-left'>
                Message
                <textarea className='w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none ' name="Message" placeholder='Message' required></textarea>
            </div>
            <button  className='bg-blue-600 text-white py-2 px-12 mb-10 rounded' type='submit'>{result ? result : "Send Message"}</button>
         </form>
    </div>
  )
}

export default Contact