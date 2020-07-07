import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Search from './Search.jsx'

export default class Layout extends Component {

  render() {
    return (
      <div className="container">
        <h1 className="font-weight-light text-center mt-4 mb-2">
          Image Finder
        </h1>
        <hr class="mt-2 mb-5"/>
        <Search />
      </div>
    )
  }
}
