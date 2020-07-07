import React, { Component } from 'react'

const API_KEY = process.env.PIXABAY_API_KEY
const URL = `https://pixabay.com/api/?key=${API_KEY}&q=`


export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      images: []
    }
    this.handleSearch = this.handleSearch.bind(this)
  }

  componentDidMount() {
    this.getImages(URL+'food')
  }

  getImages(url) {
    return fetch(url)
    .then(response => response.json())
    .then(images => {
      this.setState({images: images.hits.slice(0,12)})
    })
    .catch(err => {
      console.log('Error:', err)
    })
  }

  handleSearch(e) {
    e.preventDefault()
    const data = new FormData(e.target)
    const keywords = data.get('keywords')
    this.getImages(URL+keywords)
  }

  render() {
    return (
      <div>
        <form className="container" onSubmit={this.handleSearch}>
          <div className="form-group row">
            <div className="col-sm-10">
              <input className="form-control" type="text" name="keywords" aria-label="Search" />
            </div>
            <button className="btn btn-primary">Search
            </button>
          </div>
        </form>
        <div>

        </div>
        <div className="container">
          <div className="row text-center">
            {this.state.images.map((img, i) => (
            <div id={'img-'+i} key={i} className="col-lg-3 col-md-4 col-4">
              <span class="d-block mb-4 h-100">
                <img src={img.previewURL} className="img-thumbnail"/>
              </span>
            </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}
