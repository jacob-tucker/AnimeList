import React, { useEffect, useState } from 'react'
import './App.css';

import mhawallpaper from './wallpapers/mhapic.png'
import aotwallpaper from "./wallpapers/aotpic.jpeg"
import jujutsukaisenwallpaper from "./wallpapers/jujutsukaisenpic.jpg"
import mushokutenseiwallpaper from "./wallpapers/mushokutenseipic.jpeg"
import vinlandsagawallpaper from "./wallpapers/vinlandsagapic.jpeg"
import demonslayerwallpaper from "./wallpapers/demonslayerpic.jpg"
import tpnwallpaper from './wallpapers/tpnpic.png'
import jojowallpaper from './wallpapers/jojopic.jpeg'
import opmwallpaper from './wallpapers/opmpic.png'
import tgowwallpaper from './wallpapers/tgowpic.jpeg'
import asvwallpaper from './wallpapers/asvpic.png'
import codegeasswallpaper from './wallpapers/codegeasspic.jpeg'
import yournamewallpaper from './wallpapers/yournamepic.png'
import deathnotewallpaper from './wallpapers/deathnotepic.jpeg'

var classNames = require('classnames');

function App() {
  const [navbar, setNavbar] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', listenToScroll)
  }, [])

  const listenToScroll = () => {
    if (window.pageYOffset > window.innerHeight) {
      setNavbar(true)
    } else if (window.pageYOffset < window.innerHeight) {
      setNavbar(false)
    }
  }

  const scrollIt = (target) => {
    var selectBox = document.getElementById("animeselector");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
    const anchor = document.querySelector(`#${selectedValue}`)
    anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  const zoom = () => {
    const anchor = document.querySelector('#intro')
    anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  return (
    <div className="AnimeList">
      <div className={classNames({ "Navbar-none": !navbar, "Navbar": navbar })}>
        <button onClick={() => zoom()}>Zoom to top ↑</button>
      </div>
      <div className="Intro">
        <div className="Intro-Top" id="intro">
          <h1>Jacob's Anime List</h1>
          <select name="animes" id="animeselector" onChange={() => scrollIt()}>
            <option selected disabled>Choose an anime...</option>
            <option value="mha">My Hero Academia</option>
            <option value="tpn">The Promised Neverland</option>
            <option value="aot">Attack on Titan</option>
            <option value="jujutsukaisen">Jujutsu Kaisen</option>
            <option value="demonslayer">Demon Slayer</option>
            <option value="vinlandsaga">Vinland Saga</option>
            <option value="mushokutensei">Mushoku Tensei</option>
            <option value="jojo">Jojo's Bizarre Adventure</option>
            <option value="opm">One Punch Man</option>
            <option value="tgow">The Garden of Words</option>
            <option value="asv">A Silent Voice</option>
            <option value="yourname">Your Name</option>
            <option value="codegeass">Code Geass</option>
            <option value="deathnote">Death Note</option>
          </select>
        </div>
        <h3>Total # of anime: 14</h3>
        <p>Listed in the order that I watched them.</p>
      </div>
      <div className="List">
        {/* My Hero Academia */}
        <div className="ListElement" id="mha">
          <img src={mhawallpaper} alt="mha wallpaper" />
          <div className="Details">
            <p className="Rating">9/10</p>
            <h1 style={{ color: "lightgreen" }}>My Hero Academia</h1>
            <p className="Reasoning">My first ever anime.</p>
          </div>
        </div>
        {/* The Promised Neverland */}
        <div className="ListElement" id="tpn">
          <img src={tpnwallpaper} alt="tpn wallpaper" />
          <div className="Details">
            <p style={{ color: "darkgrey" }} className="Rating">8/10</p>
            <h1 style={{ color: "grey" }}>The Promised Neverland</h1>
            <p style={{ color: "darkgrey" }} className="Reasoning">Cool, sweet, & creepy plot.</p>
          </div>
        </div>
        {/* Attack on Titan */}
        <div className="ListElement" id="aot">
          <img src={aotwallpaper} alt="aot wallpaper" />
          <div className="Details">
            <p style={{ color: "lightcoral" }} className="Rating">9.5/10</p>
            <h1 style={{ color: "white" }}>Attack on Titan</h1>
            <p style={{ color: "lightcoral" }} className="Reasoning">Incredible plot, characters, story progression, and fighting.</p>
          </div>
        </div>
        {/* Jujutsu Kaisen */}
        <div className="ListElement" id="jujutsukaisen">
          <img src={jujutsukaisenwallpaper} alt="jujutsu kaisen wallpaper" />
          <div className="Details">
            <p className="Rating">10/10</p>
            <h1 style={{ color: "black" }}>Jujutsu Kaisen</h1>
            <p className="Reasoning">My favorite anime show of all time.</p>
          </div>
        </div>
        {/* Demon Slayer */}
        <div className="ListElement" id="demonslayer">
          <img src={demonslayerwallpaper} alt="demon slayer wallpaper" />
          <div className="Details">
            <p style={{ color: "#2392A8" }} className="Rating">7.5/10</p>
            <h1 style={{ color: "#2ED7F9" }}>Demon Slayer</h1>
            <p style={{ color: "#2392A8" }} className="Reasoning">Beautiful animation, cool fights & moves.</p>
          </div>
        </div>
        {/* Vinland Saga */}
        <div className="ListElement" id="vinlandsaga">
          <img src={vinlandsagawallpaper} alt="vinland saga wallpaper" />
          <div className="Details">
            <p className="Rating">8.5/10</p>
            <h1 style={{ color: "yellow" }}>Vinland Saga</h1>
            <p className="Reasoning">Deep themes and great character arcs.</p>
          </div>
        </div>
        {/* Mushoku Tensei */}
        <div className="ListElement" id="mushokutensei">
          <img src={mushokutenseiwallpaper} alt="mushoku tensei wallpaper" />
          <div className="Details">
            <p className="Rating">8.5/10</p>
            <h1 style={{ color: "lightblue" }}>Mushoku Tensei</h1>
            <p className="Reasoning">Unbelievably good animation and a nice adventure.</p>
          </div>
        </div>
        {/* Jojo's Bizarre Adventure */}
        <div className="ListElement" id="jojo">
          <img src={jojowallpaper} alt="jojo wallpaper" />
          <div className="Details">
            <p className="Rating">7.5/10</p>
            <h1><span style={{ color: "pink" }}>Jojo's </span><span style={{ color: "lightgreen" }}>Bizarre </span><span style={{ color: "yellow" }}>Adventure.</span></h1>
            <p style={{ color: "blue" }} className="Reasoning">A truly bizarre show.</p>
          </div>
        </div>
        {/* One Punch Man */}
        <div className="ListElement" id="opm">
          <img src={opmwallpaper} alt="opm wallpaper" />
          <div className="Details">
            <p style={{ color: 'orange' }} className="Rating">8/10</p>
            <h1>One Punch Man</h1>
            <p style={{ color: 'orange' }} className="Reasoning">Hysterical and sick fights.</p>
          </div>
        </div>
        {/* The Garden of Words */}
        <div className="ListElement" id="tgow">
          <img src={tgowwallpaper} alt="tgow wallpaper" />
          <div className="Details">
            <p className="Rating">7.5/10</p>
            <h1 style={{ color: "lightgreen" }}>The Garden of Words</h1>
            <p className="Reasoning">Wonderfully animated and meaningful story.</p>
          </div>
        </div>
        {/* A Silent Voice */}
        <div className="ListElement" id="asv">
          <img src={asvwallpaper} alt="asv wallpaper" />
          <div className="Details">
            <p style={{ color: "#DB7093" }} className="Rating">10/10</p>
            <h1 style={{ color: "white" }}>A Silent Voice</h1>
            <p style={{ color: "#DB7093" }} className="Reasoning">My favorite anime movie. Made me sob and beautiful story.</p>
          </div>
        </div>
        {/* Your Name */}
        <div className="ListElement" id="yourname">
          <img src={yournamewallpaper} alt="your name wallpaper" />
          <div className="Details">
            <p className="Rating">8/10</p>
            <h1 style={{ color: "#3EEAED" }}>Your Name</h1>
            <p className="Reasoning">Romance movies always get me.</p>
          </div>
        </div>
        {/* Code Geass */}
        <div className="ListElement" id="codegeass">
          <img src={codegeasswallpaper} alt="code geass wallpaper" />
          <div className="Details">
            <p style={{ color: "black" }} className="Rating">9/10</p>
            <h1 style={{ color: "white" }}>Code Geass</h1>
            <p style={{ color: "black" }} className="Reasoning">Extremely well thought-out, every single character is good, no plot-holes.</p>
          </div>
        </div>
        {/* Death Note */}
        <div className="ListElement" id="deathnote">
          <img src={deathnotewallpaper} alt="death note wallpaper" />
          <div className="Details">
            <p style={{ color: "black" }} className="Rating">8.75/10</p>
            <h1 style={{ color: "brown" }}>Death Note</h1>
            <p style={{ color: "black" }} className="Reasoning">L is sick and the case is so fun to watch them solve.</p>
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
