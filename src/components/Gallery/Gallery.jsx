import React from 'react'
import slide1 from '../../img/40.jpg'
import slide2 from '../../img/41.jpg'
import slide3 from '../../img/42.jpg'
import slide4 from '../../img/43.jpg'
import slide5 from '../../img/44.jpg'
import slide6 from '../../img/45.jpg'
import slide7 from '../../img/46.jpg'
import slide8 from '../../img/47.jpg'
import slide10 from '../../img/48.jpg'
import slide11 from '../../img/49.jpg'
import slide12 from '../../img/50.jpg'
import slide13 from '../../img/51.jpg'
import slide14 from '../../img/5.jpg'
import slide15 from '../../img/7.jpg'
import slide16 from '../../img/4.jpg'
import slide17 from '../../img/16.jpg'
import {Carousel} from 'react-bootstrap'
import "./Gallery.scss";

const Gallery = () => {

    return (
        <>
            <section id='Gallery' className='my-5'>
                <div className='container-fluid'>
                    <div className='row justify-content-center text-center mb-5'>
                        <div className='col-xl-6 col-lg-8 col-md-10 '>
                            <h2 className='h1 mb-5'>محیط باشگاه</h2>
                            <p className=' text-muted LH-Style-2 h5'>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ 
                                و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون 
                                و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                            </p>
                        </div>
                    </div>
                    <Carousel fade variant="dark" >
                        <Carousel.Item>
                            <div className='d-flex flex-wrap justify-content-center'>
                                <div className='filter cat-1 p-1'>
                                    <img width={400} height={230} src={slide1} alt=''/>
                                </div>
                                <div className='filter cat-2 cat-3 p-1'>
                                    <img width={400} height={230} src={slide2} alt=''/>
                                </div>
                                <div className='filter cat-1 p-1'>
                                    <img width={400} height={230} src={slide3} alt=''/>
                                </div>
                                <div className='filter cat-2 cat-3 p-1'>
                                    <img width={400} height={230} src={slide4} alt=''/>
                                </div>
                                <div className='filter cat-1 p-1'>
                                    <img width={400} height={230} src={slide5} alt=''/>
                                </div>
                                <div className='filter cat-2 p-1'>
                                    <img width={400} height={230} src={slide6} alt=''/>
                                </div>
                                <div className='filter cat-1 p-1'>
                                    <img width={400} height={230} src={slide7} alt=''/>
                                </div>
                                <div className='filter cat-2 cat-3 p-1'>
                                    <img width={400} height={230} src={slide8} alt=''/>
                                </div>
                                <div className='filter cat-1 p-1'>
                                    <img width={400} height={230} src={slide10} alt=''/>
                                </div>
                            </div>                   
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className='d-flex flex-wrap justify-content-center'>
                                <div className='filter cat-1 p-1'>
                                    <img width={400} height={230} src={slide11} alt=''/>
                                </div>
                                <div className='filter cat-2 cat-3 p-1'>
                                    <img width={400} height={230} src={slide16} alt=''/>
                                </div>
                                <div className='filter cat-1 p-1'>
                                    <img width={400} height={230} src={slide12} alt=''/>
                                </div>
                                <div className='filter cat-2 cat-3 p-1'>
                                    <img width={400} height={230} src={slide8} alt=''/>
                                </div>
                                <div className='filter cat-1 p-1'>
                                    <img width={400} height={230} src={slide2} alt=''/>
                                </div>
                                <div className='filter cat-2 p-1'>
                                    <img width={400} height={230} src={slide14} alt=''/>
                                </div>
                                <div className='filter cat-1 p-1'>
                                    <img width={400} height={230} src={slide15} alt=''/>
                                </div>
                                <div className='filter cat-2 cat-3 p-1'>
                                    <img width={400} height={230} src={slide13} alt=''/>
                                </div>
                                <div className='filter cat-1 p-1'>
                                    <img width={400} height={230} src={slide17} alt=''/>
                                </div>
                            </div>     
                        </Carousel.Item>
                    </Carousel>
                </div>
            </section>
        </>
    )
}

export default Gallery
