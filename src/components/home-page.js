import React, { Component } from 'react'
import Music from './music'
import '../css/home-page.less'
import bg1 from '../resource/images/bg1.jpg'
import bg2 from '../resource/images/bg2.jpg'
import bg3 from '../resource/images/bg3.jpg'
import bg4 from '../resource/images/bg4.jpg'
import bg5 from '../resource/images/bg5.jpg'
import bg6 from '../resource/images/bg6.jpg'

class HomePage extends Component {
  constructor() {
    super()
    this.changeBackground = this.changeBackground.bind(this)
  }

  componentDidMount() {
    this.changeBackground()
  }

  changeBackground() {
    const homeContainer = document.querySelector('.home-container')
    const bgList = [bg1, bg2, bg3, bg6, bg5, bg4]
    let i = 1
    setTimeout(() => {
      setInterval(() => {
        homeContainer.style.opacity = '0'
        // const i = Math.floor(Math.random() * 6)
        console.log('i', i)
        setTimeout(() => {
          if(i > 5) i = 0
          homeContainer.style.opacity = '1'
          homeContainer.style.background = `url(${bgList[i]}) no-repeat`
          homeContainer.style.backgroundSize = 'cover'
          i++
        }, 1700)
      }, 5000)
    }, 10000)

  }

  render() {
    return (
      <div className="home-container">
        <Music />
      </div>
    )
  }
}

export default HomePage