import React, { Component } from 'react'

const API_KEY = process.env.PIXABAY_API_KEY
const URL = `https://pixabay.com/api/?key=${API_KEY}&per_page=96&q=`
const defaultAmount = 12

export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      images: [],
      results: [],
      user: '',
      userURL: '',
      imageURL: '',
      amount: defaultAmount,
      maxAmount: 96,
      defaultKeyword: 'food'
    }
    this.handleSearch = this.handleSearch.bind(this)
    this.handleMore = this.handleMore.bind(this)
  }

  componentDidMount() {
    this.getImages(URL+this.state.defaultKeyword)
  }

  getImages(url) {
    return fetch(url)
    .then(response => response.json())
    .then(images => {
      this.setState({
        results: images.hits,
        images: images.hits.slice(0,this.state.amount)
      })
    })
    .catch(err => {
      console.log('Error:', err)
    })
  }

  handleSearch(e) {
    e.preventDefault()
    this.setState({amount: defaultAmount})
    const data = new FormData(e.target)
    let keywords = data.get('keywords')
    if (!keywords.length) {
      keywords = this.state.defaultKeyword
    }
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

  handleMore() {
    let newAmount = this.state.amount + 12
    this.setState({amount: newAmount}, () => {
      this.setState({images: this.state.results.slice(0,newAmount)})
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
          {/* --- More Images--- */}
          {this.state.results.length > 0 ?
            (this.state.amount <= this.state.maxAmount - 12 && this.state.results.length > this.state.amount) ?
              <button className="btn btn-primary btn-sm mb-2" onClick={this.handleMore}>More Images</button>
              :
              <h6 className="mb-5">You've reached the max number of results. Please try searching another keyword.</h6>
            :
            <h6 className="mb-5">No results found. Please try another keyword.</h6>
          }
        </div>
      </div>
    )
  }
}
