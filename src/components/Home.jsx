import React from 'react'
import "../App.css"
// import Navbar from './components/Navbar'
import logo from "../assets/Hackjunior_logo.png"
import Navbar from './Navbar'
export default function Home() {
    return (
        <>
            <Navbar />

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
