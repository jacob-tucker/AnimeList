import React, { useEffect, useState } from 'react'
import './App.css';

import mhawallpaper from './wallpapers/mhapic.png'
import aotwallpaper from "./wallpapers/aotpic.jpeg"
import jujutsukaisenwallpaper from "./wallpapers/jujutsukaisenpic.jpg"
import mushokutenseiwallpaper from "./wallpapers/mushokutenseipic.jpeg"
import vinlandsagawallpaper from "./wallpapers/vinlandsagapic.jpeg"
import demonslayerwallpaper from "./wallpapers/demonslayerpic.jpg"

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
    const anchor = document.querySelector('#' + `${selectedValue}`)
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
      <div className="Intro" id="intro">
        <h1>Jacob's Anime List</h1>
        <select name="animes" id="animeselector" onChange={() => scrollIt()}>
          <option selected disabled>Choose an anime...</option>
          <option value="mha">My Hero Academia</option>
          <option value="aot">Attack on Titan</option>
          <option value="jujutsukaisen">Jujutsu Kaisen</option>
          <option value="mushokutensei">Mushoku Tensei</option>
          <option value="vinlandsaga">Vinland Saga</option>
          <option value="demonslayer">Demon Slayer</option>
        </select>
      </div>
      <div className="List">
        {/* My Hero Academia */}
        <div className="ListElement" id="mha">
          <img src={mhawallpaper} />
          <div className="Details">
            <p className="Rating">10/10</p>
            <h1 style={{ color: "lightgreen" }}>My Hero Academia</h1>
            <p className="Reasoning">My favorite anime of all time.</p>
          </div>
        </div>
        {/* Attack on Titan */}
        <div className="ListElement" id="aot">
          <img src={aotwallpaper} />
          <div className="Details">
            <p className="Rating">10/10</p>
            <h1 style={{ color: "lightcoral" }}>Attack on Titan</h1>
            <p className="Reasoning">Incredible plot, characters, story progression, and fighting.</p>
          </div>
        </div>
        {/* Jujutsu Kaisen */}
        <div className="ListElement" id="jujutsukaisen">
          <img src={jujutsukaisenwallpaper} />
          <div className="Details">
            <p className="Rating">10/10</p>
            <h1 style={{ color: "black" }}>Jujutsu Kaisen</h1>
            <p className="Reasoning">Sick fights, music, and animation.</p>
          </div>
        </div>
        {/* Mushoku Tensei */}
        <div className="ListElement" id="mushokutensei">
          <img src={mushokutenseiwallpaper} />
          <div className="Details">
            <p className="Rating">9/10</p>
            <h1 style={{ color: "lightblue" }}>Mushoku Tensei</h1>
            <p className="Reasoning">Unbelievably good animation and cool story.</p>
          </div>
        </div>
        {/* Vinland Saga */}
        <div className="ListElement" id="vinlandsaga">
          <img src={vinlandsagawallpaper} />
          <div className="Details">
            <p className="Rating">8/10</p>
            <h1 style={{ color: "yellow" }}>Vinland Saga</h1>
            <p className="Reasoning">Deep themes and great character arcs.</p>
          </div>
        </div>
        {/* Demon Slayer */}
        <div className="ListElement" id="demonslayer">
          <img src={demonslayerwallpaper} />
          <div className="Details">
            <p className="Rating">8/10</p>
            <h1 style={{ color: "blue" }}>Demon Slayer</h1>
            <p className="Reasoning">Beautiful animation.</p>
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
