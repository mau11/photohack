import React, { Component } from 'react'

export default class Footer extends Component {

  render() {
    return (
      <div>
        <footer className="footer">
          <p className="container mb-10">Search results brought to you by <a href="https://pixabay.com/">Pixabay.</a>
          </p>
          <small>Site created by Maureen <img src="./icons/smiley.svg" />
            <div className="container">
              <a href="https://www.linkedin.com/in/mau11/">
                <img className="icons" alt="linkedin profile" src="./icons/linkedin.svg" />
              </a>
              <a href="https://github.com/mau11/image-finder">
                <img className="icons" alt="github source code" src="./icons/github.png" />
              </a>
            </div>
          </small>
        </footer>
      </div>
    )
  }
}
