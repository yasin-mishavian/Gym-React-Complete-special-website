import React from 'react'
import slide1 from '../../img/36.jpg'
import slide2 from '../../img/34.jpg'
import slide3 from '../../img/35.jpg'
import $ from "jquery";
import "./Services.scss";

const Services = () => {

    $(window).scroll(function () {
        const position = $(this).scrollTop();
        if (position >= 1400) {
          $(".active-service1").addClass("right-active");
          $(".active-service2").addClass("down-active");
          $(".active-service3").addClass("left-active");
        } else {
          $(".active-service1").removeClass("right-active");
          $(".active-service2").removeClass("down-active");
          $(".active-service3").removeClass("left-active");
        }
      });
      
    return (
        <>
            <section id='Services' className='bg-secondary py-4'>
                <div className='container-fluid'>
                    <div className='row justify-content-center text-center mb-5'>
                        <div className='col-xl-6 col-lg-8 col-md-10 '>
                            <h2 className='h1 text-white mb-5'>خدمات</h2>
                            <p className=' text-white LH-Style-2 h5'>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ 
                                و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون 
                                و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</p>
                        </div>
                    </div>
                    <div className='row justify-content-sm-center rtl '>
                        <div className='col-lg-4 col-sm-8 my-5 active-service1'>
                            <div className='card border-0 card-Style1'>
                                <img style={{height:'45vh'}} src={slide1} alt=''/>
                                <div className='card-img-overlay'>
                                    <h5 className=' text-white card-Style2'>برنامه تمرینی</h5>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-sm-8 my-5 active-service2'>
                            <div className='card border-0 card-Style1'>
                                <img style={{height:'45vh'}} src={slide3} alt=''/>
                                <div className='card-img-overlay'>
                                    <h5 className=' text-white card-Style2'>رژیم غذایی</h5>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-sm-8 my-5 active-service3'>
                            <div className='card border-0 card-Style1'>
                                <img style={{height:'45vh'}} src={slide2} alt=''/>
                                <div className='card-img-overlay'>
                                    <h5 className=' text-white card-Style2'>مربی شخصی</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services
