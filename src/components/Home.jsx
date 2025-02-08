import React from 'react'
import "../App.css"
// import Navbar from './components/Navbar'
import logo from "../assets/Hackjunior logo.png"
export default function Home() {
    return (
        <>
            <nav>
                <div style={{ display: "flex", justifyContent: "space-between", backgroundColor: "#0a1029", alignItems: "center" }}>
                    <div style={{ width: "90px", height: "90px" }}>

                        <img style={{ width: "100%", height: "100%", borderRadius: "50%" }} src={logo} alt="This is logo" />
                    </div>
                    <div className="allnavigation">
                        <ul style={{ display: "flex", gap: "28px", listStyle: "none", fontSize: "25px", fontFamily: "Jost", color: "white", marginRight: "19px" }}>
                            <li className='navlink' style={{ cursor: "pointer" }}>Home</li>
                            <li className='navlink' style={{ cursor: "pointer" }}>About</li>
                            <li className='navlink' style={{ cursor: "pointer" }}>Q.&.A</li>
                            <li className='navlink' style={{ cursor: "pointer" }}>Register</li>
                        </ul>
                    </div>
                </div>

            </nav>

            <div id='home'>
                <header style={{ fontFamily: "Bebas Neue", fontSize: "100px", fontWeight: "400", textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                    <p>HACKJUNIOR</p>
                    <div style={{ width: "150px", height: "140px" }}>

                        <img style={{ width: "100%", height: "100%", borderRadius: "50%" }} src={logo} alt="This is logo" />
                    </div>
                </header>

            </div>
        </>
    )
}
