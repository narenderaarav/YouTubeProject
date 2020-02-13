import React, {Component} from "react";
import './HomeSlider.css';
import Swiper from 'swiper'
class HomeSlider extends Component{
  // images = [
  //   {      
  //     thumbnail: process.env.PUBLIC_URL + 'chhotaBheem.jpg',
  //     embedUrl: process.env.PUBLIC_URL + 'chhotaBhim.mp4'
  //   },
  //   {     
  //     thumbnail: process.env.PUBLIC_URL + 'spiderman.jpg',
  //     embedUrl: process.env.PUBLIC_URL + 'Spiderman.mp4'
  //   },
  //   {  
  //     thumbnail: process.env.PUBLIC_URL + 'supermanandbatman.jpg',
  //     embedUrl: process.env.PUBLIC_URL + 'thor.mp4'
  //   },    
    
  // ];

  constructor(){
    super();
    this.state = {
      videoData:[]
    }
  }

  //var body = JSON.parse(result.body);


  componentDidMount(){
      this.galleryThumbs = new Swiper('.gallery-thumbs', {
      spaceBetween: 10,
      slidesPerView: 3,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
       navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    this.galleryTop = new Swiper('.gallery-top', {
      spaceBetween: 10,
      //  autoplay: {
      //   delay: 6500,
      //   disableOnInteraction: false,
      // },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      thumbs: {
        swiper: this.galleryThumbs
      }
    });

    fetch('http://159.89.160.172:3000/api')
    .then(resp => resp.json())
    .then(result => {
        console.warn(result.data)
        this.setState({videoData:result.data})
    })
  }

  
  
  render(){
    return (
        
  <> 
  <div style={{position:"relative"}}>
      <div className="swiper-container gallery-top">
        <div className="overlay">
          <h2>Heading Here</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </p>
        </div>
        
          <div className="swiper-wrapper">
            {this.state.videoData.map(item => (
                <div className="swiper-slide"> 
                    <video controls>
                        <source src={item.videoUrl} type="video/mp4"/>
                    </video>

              {/* <iframe width="100%" height="100%" src={item.embedUrl} 
              frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe> */}
                </div>
            ))}    	
          </div>
          
          <div className="swiper-button-next swiper-button-white"></div>
          <div className="swiper-button-prev swiper-button-white"></div>
      </div>

        <div className="swiper-container gallery-thumbs">
          <div className="swiper-wrapper">
          {this.state.videoData.map(item => (
               <div className="swiper-slide"
               style ={ { backgroundImage: `url(${item.contentType})`} }></div>
            ))}  

          </div>
        </div>  
          <div className="swiper-button-next swiper-button-white"></div>
          <div className="swiper-button-prev swiper-button-white"></div>
          <div>
      </div>
      
      </div>
  </>
  
    )
    
  // } 
  // componentDidMount(){
  //   this.playCurrentVideo();
  // }

  // _onSlide=  (data) => {
  //   // console.log("on slide -- ", data);
  //   this.playCurrentVideo();
  // }

  // playCurrentVideo(){
  //   let videosList = document.querySelectorAll(".image-gallery-image video")
  //   videosList.forEach(videoElement => {
  //     videoElement.pause()
  //   })
  //   videosList = document.querySelectorAll(".center video");
  //   videosList.forEach(videoEl => {
  //     videoEl.play()
  //   })
  }
   
}



export default HomeSlider;