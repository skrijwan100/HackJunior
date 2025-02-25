import React from 'react'
import "../App.css"
import "../media.css"
import { Link } from 'react-router-dom'
// import Navbar from './components/Navbar'
<<<<<<< HEAD
import logo from "../assets/Hackjunior_logo.png"
import Navbar from './Navbar'
export default function Home() {
    return (
        <>
            <Navbar />
=======
import logo from "../assets/Hackjunior logo.png"
import Footar from './Footar'
export default function Home() {
    return (
        <>
            <nav>
                {/* <div style={{ display: "flex", justifyContent: "space-between", backgroundColor: "#0a1029", alignItems: "center",height: "90px" }}>
                    <div className='logopic' style={{ width: "90px", height: "90px" }}>

                        <img style={{ width: "100%", height: "100%", borderRadius: "50%" }} src={logo} alt="This is logo" />
                    </div>
                    <div className="allnavigation">
                        <ul style={{ display: "flex",justifyContent:"space-between", listStyle: "none", fontSize: "25px", fontFamily: "Jost", color: "white", marginRight: "19px" }}>
                            <li className='navlink' style={{ cursor: "pointer" }}>Home</li>
                            <li className='navlink' style={{ cursor: "pointer" }}>About</li>
                            <li className='navlink' style={{ cursor: "pointer" }}>Q.&.A</li>
                            <li className='navlink' style={{ cursor: "pointer" }}>Register</li>
                        </ul>
                    </div>
                </div> */}
                <div className='mainNavBox'>
                    <div className='logopic' style={{ width: "90px", height: "90px" }}>

                        <img style={{ width: "100%", height: "100%", borderRadius: "50%" }} src={logo} alt="This is logo" />
                    </div>
                    <div className="allnavigation">
                        <ul style={{ display: "flex",justifyContent:"space-between", listStyle: "none", fontSize: "25px", fontFamily: "Tektur", color: "white", marginRight: "19px" }}>
                            <li className='navlink' style={{ cursor: "pointer" }}>Home</li>
                            <li className='navlink' style={{ cursor: "pointer" }}>About</li>
                            <li className='navlink' style={{ cursor: "pointer" }}>Q.&.A</li>
                            <li className='navlink' style={{ cursor: "pointer" }}>Register</li>
                        </ul>
                    </div>
                </div>


            </nav>
>>>>>>> e3bb28fc564e7eea2a1537565b1cc29661a71d00

            <div id='home'>
                <header className='headertext' style={{ fontSize: "70px", fontWeight: "400", textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" ,textShadow:"3px 9px 6px #000000db"}}>
                    <p style={{ fontFamily: "Tektur", color: "#0093ff" }}>HACKJUNIOR</p>
                    <div style={{ width: "150px", height: "140px" }}>

                        <img style={{ width: "100%", height: "100%", borderRadius: "50%" }} src={logo} alt="This is logo" />
                    </div>
                </header>


            </div>
            <div className="registerbtn" style={{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"25px"}}>
              <Link to="/register">
              <button className='regbtn' style={{height:"60px",width:"200px",borderRadius:"10px",outline:"none",border:"none",fontFamily:"Tektur",fontSize:"20px"}}>Register</button>
              </Link>  
            </div>
            <Footar/>
        </>
    )
}
