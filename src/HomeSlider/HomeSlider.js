import React, { Component } from "react";
import "./HomeSlider.css";
import Swiper from "swiper";
import ReactPlayer from 'react-player';
import axios from 'axios';


class HomeSlider extends Component {

  state = {
    videoList:[],
    playingIndex: 0
  }
  constructor(props){
    super(props)
    this.myRef = React.createRef();
  }

  componentDidMount() {
    axios({
      method: 'get',
      url: 'http://localhost:9000/api'
    })
    .then(res => {
      this.setState({videoList:JSON.parse(res.data.body)})
    })
    .catch(err => console.error(err));
    
    let callMeBack = () => {
      this.callMe();
    }

    this.galleryThumbs = new Swiper(".gallery-thumbs", {
      spaceBetween: 10,
      slidesPerView: 3,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true
    });
    this.galleryTop = new Swiper(".gallery-top", {
      
      autoplay: {
        delay: 6500,
        disableOnInteraction: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      thumbs: {
        swiper: this.galleryThumbs
      },
      on : {
        slideChange: function(a){
          callMeBack();
        }
      }

    });
  }

  callMe = () => {
    this.setState({playingIndex: this.galleryTop.activeIndex})
  }

  componentDidUpdate() {
    this.myRef.current.seekTo(0);
  }
  
  getPlaying = (index) => {
    if(index == this.state.playingIndex) {
      return {playing:true, ref:this.myRef}
    }
    return {playing:false}
  }

  render() {
    return (
      <>
        <div className="swiper-container gallery-top">
          <div className="swiper-wrapper">
            {this.state.videoList.map((item, index) => (
              <div className="swiper-slide" key={item._id}>
                <div className="overlay">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                </div>
                <div className='player-wrapper'>
                    <ReactPlayer
                      url={item.videoUrl}
                      className='react-player'
                      {...this.getPlaying(index)}
                      width='100%'
                      height='100%'
                      controls={true}
                    />
                </div>

              </div>
            ))}
          </div>
          <div className="swiper-button-next swiper-button-white"></div>
          <div className="swiper-button-prev swiper-button-white"></div>
          <div className="swiper-container gallery-thumbs">
            {/* <div className="swiper-wrapper">
              {this.images.map(item => (
                <div
                  className="swiper-slide"
                  style={{ backgroundImage: `url(${item.thumbnail})` }}
                ></div>
              ))}
            </div> */}
          </div>
        </div>

        <div></div>
      </>
    );
  }
}

export default HomeSlider;
