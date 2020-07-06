import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Search from './Search.jsx'

export default class Layout extends Component {

  render() {
    return (
      <div>
        <h1>Image Finder</h1>
        <Search />
      </div>
    )
  }
}
