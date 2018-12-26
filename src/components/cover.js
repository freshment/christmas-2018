import React, { Component } from 'react'
// import { createHashHistory  } from 'history'
import Music from './music'
import '../css/cover.less'


class Cover extends Component {

  constructor(props) {
    super(props)
    this.goHomePage = this.goHomePage.bind(this)
  }

  goHomePage() {
    console.log(this.props)
    console.log(window.location)
    setTimeout(() => { window.location.hash = '/home' }, 1000)
    // window.location.hash = '/home'
    // this.props.history.push('/home')
    // console.log(window.reactRouter)
    // createHashHistory().push('/home')
    // window.history.pushState('/home')
  }

  render() {
    return (
      <div className="cover-container" onClick={ this.goHomePage }>
        <Music />
        {/* <a href="#/home">Go Home Page</a> */}
      </div>
    )
  }
}

export default Cover