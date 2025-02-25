import React from 'react'

export default function Register() {
  return (
    <div>
      <div className="mainbox">
        <form action="" style={{display:"flex",flexDirection:"column",width:"250px"}}>
          <input type="text" placeholder='Enter your full name' required />
          <input type="text" placeholder='Enter your team name' required />
          <input type="text" placeholder='Enter your teammate name' required />
          <input type="text" placeholder='Enter your phone number' required />
          <input type="email" placeholder='Enter email' required/>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}
