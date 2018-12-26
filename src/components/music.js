import React, { Component } from 'react'

import '../css/music.less'
import roundClaus from '../resource/images/round-claus.png'
import musicalNotation from '../resource/images/musicalNotation.png'
import musicUrl from '../resource/music/lastChritmas.mp3'

class Music extends Component {
  constructor() {
    super()

    this.state = {
      musicFlag: true
    }

    this.handleMusicShow = this.handleMusicShow.bind(this)
    this.handleMusicHide = this.handleMusicHide.bind(this)
    this.handleMusic = this.handleMusic.bind(this)
  }

  handleMusicShow(e) {
    e.stopPropagation()
    const img = e.currentTarget
    img.style.left = 0;
  }

  handleMusicHide(e) {
    e.stopPropagation()
    const img = e.currentTarget
    img.style.left = '-30px';
  }

  handleMusic(e) {
    e.stopPropagation()
    const roundClaus = document.querySelector('.round-claus')
    const musicalNotation = document.querySelector('.musical-notation')
    const music = document.querySelector('#music')
    // musicFlag: true  ->  正在播放，  musicFlag: false -> 暂停
    if(this.state.musicFlag) {
      setTimeout(() => {
        roundClaus.className += 'round-claus'
        music.pause()
      }, 1000)
      musicalNotation.style.animation = 'none'
      musicalNotation.style.transform = 'rotate(-22deg)'
    }else {
      setTimeout(() => {
        roundClaus.className += ' rotate'
        music.play()
        musicalNotation.style.animation = 'shrink 3s linear infinite'
      }, 1000)
      musicalNotation.style.transform = 'rotate(22deg)'
    }
    // 改变musicFlag的值
    this.setState(() => {
      return {
        musicFlag: !this.state.musicFlag
      }
    })
  }

  render() {
    return(
      <section className="music-container" onMouseEnter={ this.handleMusicShow } onMouseLeave={ this.handleMusicHide } onClick={ this.handleMusic }>
        <img src={ roundClaus } alt="" className="round-claus rotate"/>
        <img src={ musicalNotation } alt="" className="musical-notation"/>
        <audio src={ musicUrl } id="music" autoPlay></audio>
      </section>
    )
  }
}

export default Music