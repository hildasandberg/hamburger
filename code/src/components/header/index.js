import React from "react"
import Grid from "lib/grid"

import "./style.css"

class Header extends React.Component {

  render() {
    return (
      <header>

        <input id="hamburger" type="checkbox" className="hamburger-cb" />

        <div className="headerRow">
          <label className="hamburger" For="hamburger">
            <div className="bar1" />
            <div className="bar2" />
            <div className="bar3" />
          </label>
        </div>

        <ul className="menu">
          <li><a href="http://technigo.io">Technigo</a></li>
          <li><a href="http://technigo.io">Boot Camp</a></li>
          <li><a href="http://technigo.io">Stories</a></li>
          <li><a href="http://technigo.io">About</a></li>
        </ul>

        <Grid className="header-grid">
          <a href="http://technigo.io">Technigo</a>
          <a href="http://technigo.io">Boot Camp</a>
          <a href="http://technigo.io">Stories</a>
          <a href="http://technigo.io">About</a>
        </Grid>

      </header>
    )
  }

}

export default Header
