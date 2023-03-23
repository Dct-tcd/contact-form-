import React, { useState } from 'react'

const Form = () => {
  
  const [user, setuser] = useState({
    name:"",
    email:"",
    message:"",
  });

  const  getUserData =  (event) => {
        let name,value;

         name  = event.target.name;
         value =  event.target.value;

         setuser({ ... user , [name] : value });
 }
 const postData = async (e) => {
  const {name , email , message } = user ;  

  e.preventDefault();
  
  const res = await fetch("https://react-21427-default-rtdb.firebaseio.com//Devreact.json" ,
   {
    method : "POST" , 
    headers : {
      "Content-Type" : "application/json",
    },
    body:JSON.stringify({
    name,
    email,
    message,
  }),
  }
 )
 if (res) { setuser({name:"" , email:"" ,message:""});
  alert("data stored ");}
  else alert("Failed to load data");
  

 }

  return (
      <div className="container" style={{display:"flex",justifyContent:"center",padding:"30px"}}>
  <form method="POST">
<div>
    <label htmlFor="fname">First Name</label>
    <input type="text" id="name" name="name" onChange={getUserData} value={user.name}  required placeholder="Your name.." />
    </div>
    <div>
    <label htmlFor="lname">Email</label>
    <input type="text" id="email" name="email" onChange={getUserData} value={user.email}  required placeholder="Your email"  />
    </div>
    <div>
    <label htmlFor="subject">Message</label>
    <textarea id="message" name="message" onChange={getUserData} value={user.message}  required placeholder="Write your message"></textarea>

    <input type="submit" value="Submit" onClick={postData} />
    </div>
  </form>
    </div>
  )
}

export default Form
