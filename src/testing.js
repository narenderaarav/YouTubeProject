import React, { Component } from "react";
import "./HomeSlider.css";
import Swiper from "swiper";
import ReactPlayer from 'react-player'

class HomeSlider extends Component {
  // images = [
  //   {
  //     thumbnail: process.env.PUBLIC_URL + "chhotaBheem.jpg",
  //     embedUrl: process.env.PUBLIC_URL + "chhotaBhim.mp4",
  //     title: "Title 1"
  //   },
  //   {
  //     thumbnail: process.env.PUBLIC_URL + "spiderman.jpg",
  //     embedUrl: process.env.PUBLIC_URL + "Spiderman.mp4",
  //     title: "Title 2"
  //   },
  //   {
  //     thumbnail: process.env.PUBLIC_URL + "supermanandbatman.jpg",
  //     embedUrl: process.env.PUBLIC_URL + "thor.mp4",
  //     title: "Title 3"
  //   }
  // ];

  state={
    videos:[],
    titles:[],
    descriptions:[]
  }

  
  componentDidMount() {

    fetch('http://localhost:7000/api')
      .then(res => res.json())
      .then(
        (result) => {

        const  videos=[]
        const  titles=[]
        const  descriptions=[]

        console.log(JSON.parse(result.body).length);

        for(var i=0;i<JSON.parse(result.body).length;i++)
        {
          videos.push(JSON.parse(result.body)[i].videoUrl);
          titles.push(JSON.parse(result.body)[i].title);
          descriptions.push(JSON.parse(result.body)[i].description);
        }
         
        console.log(videos);       
          this.setState({
            videos:videos
          })
          console.log(titles); 
          this.setState({
            titles:titles
          })
          console.log(descriptions); 
          this.setState({
            descriptions:descriptions
          })



          console.log(this.state.videos);
          console.log(this.state.titles);
          console.log(this.state.descriptions);
        },
        // error handler
          (error) => {
          this.setState({
            error
          });
        }
      )
  

    this.galleryThumbs = new Swiper(".gallery-thumbs", {
      spaceBetween: 10,
      slidesPerView: 3,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true
    });
    this.galleryTop = new Swiper(".gallery-top", {
      spaceBetween: 10,
      autoplay: {
        delay: 6500,
        disableOnInteraction: false
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      thumbs: {
        swiper: this.galleryThumbs
      }
    });
  }

  render() {
    return (
      <>
        <div className="swiper-container gallery-top">
          <div className="swiper-wrapper">
            {this.state.videos.map(item => (
              <div className="swiper-slide">
                <div className="overlay">
                  <h2>{item.title}</h2>
                </div>
                {/* <video width="100%" height="100%" controls>
                  <source src={item.embedUrl} type="video/mp4" />
                </video> */}
                <div className='player-wrapper'>
                    <ReactPlayer
                      url={item}
                      className='react-player'
                      playing
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
