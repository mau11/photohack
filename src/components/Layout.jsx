import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Search from './Search.jsx'
import Footer from './Footer.jsx'

export default class Layout extends Component {

  render() {
    return (
      <div className="container text-center">
        <h1 className="font-weight-light mt-4 mb-2">
          Image Finder
        </h1>
        <h6 className="font-weight-light text-center"> Search millions of royalty free images
        </h6>
        <hr className="mt-2 mb-5"/>
        <Search />
        <Footer />
      </div>
    )
  }
}
