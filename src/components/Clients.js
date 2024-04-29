import React ,{Component} from 'react'
import Slider from 'react-slick';
import Img1 from './brand1.png';
import Img2 from './brand2.png';
import Img3 from './brand3.png';
import Img4 from './brand4.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Clients.css'

class Clients extends Component{
    render(){
        const settings={
            dots: false,
            infinite: true,
            slidesToShow: 3,
            sliderToScroll: 1,
            autoplay: true,
            speed: 3000,
            autoplaySpeed: 3000,
            cssEase: "linear"
        };
        return(
            <div className='top'>
        <div class="full1">
        <div class="heading2">
        <h1 className='client-head'>CLIENTS</h1>
        </div>
        <br/>
        <br/>
        </div>
            <div className="mainContainer">
                <Slider {...settings}>
                    <div className='container11'>
                        <img className='img-changer' src={Img1} alt='main1'/>
                    </div>
                    <div className='container11'>
                        <img src={Img2} alt='main2'/>
                    </div>
                    <div className='container11'>
                        <img src={Img3} alt='main3'/>
                    </div>
                    <div className='container11'>
                        <img src={Img4} alt='main4'/>
                    </div>
                </Slider>
            </div>
            
            </div>
        );
    }
}

export default Clients;
