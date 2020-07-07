import React, { Component } from 'react'

const API_KEY = process.env.PIXABAY_API_KEY
const URL = `https://pixabay.com/api/?key=${API_KEY}&q=`


export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      images: [],
      user: '',
      userURL: '',
      imageURL: '',
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

  handleClick(i) {
    let img = this.state.images[i]
    let userURL = 'https://pixabay.com/users/'+ img.user_id
    this.setState({
      user: img.user,
      userURL: userURL,
      imageURL: img.largeImageURL
    })
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
            <div id={'img-'+i} key={i} className="col-lg-3 col-md-4 col-4" onClick={() => {this.handleClick(i)}} data-toggle="modal" data-target="#imageModal">
              <span className="d-block mb-4 h-100">
                <img src={img.previewURL} className="img-thumbnail"/>
              </span>
            </div>
            ))}
          </div>
          {/* --- Image Modal --- */}
          <div className="modal fade" id="imageModal" tabIndex="-1" role="dialog" aria-labelledby="imageModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-body pt-0">
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                  <img src={this.state.imageURL} className="img-thumbnail"/>
                </div>
                <div className="modal-footer pt-0">
                Photo by Pixabay user: <a href={this.state.userURL}>{this.state.user}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
