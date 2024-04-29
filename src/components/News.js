import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './News.css';

function News()  {
    const settings ={
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    }
  return (
    <div className='all'>
        <div class="full">
        <div class="heading">
            <p className='tech-heading'>TECH ARTICLES</p>
        </div>
        {/* <div class="more">
            <button class="more1">More tech articles <span class="material-symbols-outlined">
                chevron_right
                </span>
            </button>
        </div> */}
        </div>
        <div className='all1'>
        <Slider {...settings} className='custom-slider'>
            {data.map((d) => (
                <div className="card">
                    <div className='card1'>
                        <img src={d.img} alt="" className='card-inside'/>
                    </div>

                    <div className='para'>
                        <p className='font'>{d.name}</p>
                        <p className='review'>{d.review}</p><br/>
                        <a href={d.readMoreLink}><button className='bt'>Read More</button></a>
                        <br/>
                    </div>
                </div>

            ))}
            </Slider>
        </div>
        {/* <div class="more">
            <button class="more1">More Tech Articles <span class="material-symbols-outlined">
                chevron_right
                </span>
            </button>
        </div>  */}
    </div>
    
  )
}

const data = [
    {
        name: 'Header',
        img: 'https://media.istockphoto.com/id/178447404/photo/modern-business-buildings.jpg?s=612x612&w=0&k=20&c=MOG9lvRz7WjsVyW3IiQ0srEzpaBPDcc7qxYsBCvAUJs=',
        review: 'xEV,ADAS and Industrial automation drive the need for cutting edge ASICs.High performance read out for MEMS pressure sensors.',
        readMoreLink: '/'
    },
    {
        name: 'Header',
        img: 'https://media.istockphoto.com/id/178447404/photo/modern-business-buildings.jpg?s=612x612&w=0&k=20&c=MOG9lvRz7WjsVyW3IiQ0srEzpaBPDcc7qxYsBCvAUJs=',
        review: 'xEV,ADAS and Industrial automation drive the need for cutting edge ASICs.High performance read out for MEMS pressure sensors.',
        readMoreLink: '/'
    },
    {
        name: 'Header',
        img: 'https://media.istockphoto.com/id/178447404/photo/modern-business-buildings.jpg?s=612x612&w=0&k=20&c=MOG9lvRz7WjsVyW3IiQ0srEzpaBPDcc7qxYsBCvAUJs=',
        review: 'xEV,ADAS and Industrial automation drive the need for cutting edge ASICs.High performance read out for MEMS pressure sensors.',
        readMoreLink: '/techarticles/article-1'
    },
    {
        name: 'Header',
        img: 'https://media.istockphoto.com/id/178447404/photo/modern-business-buildings.jpg?s=612x612&w=0&k=20&c=MOG9lvRz7WjsVyW3IiQ0srEzpaBPDcc7qxYsBCvAUJs=',
        review: 'xEV,ADAS and Industrial automation drive the need for cutting edge ASICs.High performance read out for MEMS pressure sensors.',
        readMoreLink: '/techarticles/article-1'
    },
    {
        name: 'Header',
        img: 'https://media.istockphoto.com/id/178447404/photo/modern-business-buildings.jpg?s=612x612&w=0&k=20&c=MOG9lvRz7WjsVyW3IiQ0srEzpaBPDcc7qxYsBCvAUJs=',
        review: 'xEV,ADAS and Industrial automation drive the need for cutting edge ASICs.High performance read out for MEMS pressure sensors.',
        readMoreLink: '/techarticles/article-1'
    },
    {
        name: 'Header',
        img: 'https://media.istockphoto.com/id/178447404/photo/modern-business-buildings.jpg?s=612x612&w=0&k=20&c=MOG9lvRz7WjsVyW3IiQ0srEzpaBPDcc7qxYsBCvAUJs=',
        review: 'xEV,ADAS and Industrial automation drive the need for cutting edge ASICs.High performance read out for MEMS pressure sensors.',
        readMoreLink: '/techarticles/article-1'
    },
    {
        name: 'Header',
        img: 'https://media.istockphoto.com/id/178447404/photo/modern-business-buildings.jpg?s=612x612&w=0&k=20&c=MOG9lvRz7WjsVyW3IiQ0srEzpaBPDcc7qxYsBCvAUJs=',
        review: 'xEV,ADAS and Industrial automation drive the need for cutting edge ASICs.High performance read out for MEMS pressure sensors.',
        readMoreLink: '/techarticles/article-1'
    },
    {
        name: 'Header',
        img: 'https://media.istockphoto.com/id/178447404/photo/modern-business-buildings.jpg?s=612x612&w=0&k=20&c=MOG9lvRz7WjsVyW3IiQ0srEzpaBPDcc7qxYsBCvAUJs=',
        review: 'xEV,ADAS and Industrial automation drive the need for cutting edge ASICs.High performance read out for MEMS pressure sensors.',
        readMoreLink: '/techarticles/article-1'
    },
]

export default News

