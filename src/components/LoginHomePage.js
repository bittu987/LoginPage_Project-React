import React, { useState } from 'react'

const LoginHomePage = () => {
    const [name , setname] = useState("");
    const [email , setemail] = useState("");
    const [password , setpassword] = useState("");
    const [allEntry, setAllEntry] = useState([])

    const Submitdata = (e)=>{
        e.preventDefault()
        let newEntry = { id:new Date().getTime().toString, Name:name,Email:email,Password:password };
         setAllEntry([...allEntry,newEntry]);
         console.log(allEntry);
         setname("");
         setemail("");
         setpassword("");
      }

  return (
    <>
    <form onSubmit={Submitdata} style={{display:'flex',flexDirection:'column',alignItems:'center',padding:'10px',backgroundColor:"lightblue"}}>
        <div >
        <label htmlFor='name' style={{fontWeight:"bold"}}>Customer Name :-</label> <br/>
        <input type='text' value={name} id="name"style={{outline:"none",width:"230px"}} onChange={(e)=>{setname(e.target.value)}}/> 
        </div>
        <div>
        <label htmlFor='email' style={{fontWeight:"bold"}}>Email ID :-</label> <br/>
        <input type='email' value={email} id="email" style={{outline:"none",width:"230px"}} onChange={(e)=>{setemail(e.target.value)}}/> 
        </div>
        <div>
        <label htmlFor='psd' style={{fontWeight:"bold"}}>Password :-</label> <br/>
        <input type='password' value={password} id="psd" style={{outline:"none",width:"230px"}} onChange={(e)=>{setpassword(e.target.value)}}/> 
        </div>
        <button>Submit</button>
    </form>
    <hr/>
      <>
        <h4 style={{textAlign:'center'}}>User Details</h4>
          {
            allEntry.map((val,id)=>{
              return(
                <div key={val.id} style={{backgroundColor:'lightcyan',padding:"2px 0px 2px 10px", marginBottom:"4px"}}>
                  <ol>
                    <li>
                    <p> <strong>Name :-</strong> {val.Name}</p>
                    <p><strong>Email :-</strong> {val.Email}</p>
                    <p><strong>Password :-</strong> {val.Password}</p>
                    </li>
                  </ol>
                </div>
              )
                  
            })
          }
     </>
    </>
  )
}

export default LoginHomePage