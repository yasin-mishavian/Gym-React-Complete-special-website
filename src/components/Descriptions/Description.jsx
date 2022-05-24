import React from 'react'
import {FaMedal} from 'react-icons/fa'
import {FaTrophy} from 'react-icons/fa'
import {RiMedalLine} from 'react-icons/ri'
import slide1 from '../../img/47.jpg'
import $ from "jquery";
import "./Description.scss";

const Description = () => {

    $(window).scroll(function () {
        const position = $(this).scrollTop();
        if (position >= 400) {
          $(".icon-target1").addClass("opacity-Style");
          $(".icon-target2").addClass("opacity-Style");
          $(".icon-target3").addClass("opacity-Style");
        } else {
          $(".icon-target1").removeClass("opacity-Style");
          $(".icon-target2").removeClass("opacity-Style");
          $(".icon-target3").removeClass("opacity-Style");
        }
      });
      
      $(window).scroll(function () {
        const position = $(this).scrollTop();
        if (position >= 800) {
          $(".target2").addClass("description-Style2");
          $(".target3").addClass("description-Style3");
        } else {
          $(".target2").removeClass("description-Style2");
          $(".target3").removeClass("description-Style3");
        }
      });
      
    return (
        <>
            <section id='Description' className='p-5 description-Style'>
                <div className='container-fluid'>
                    <div className='row justify-content-center text-center mb-5'>
                        <div className='col-xl-6 col-lg-8 col-md-10 '>
                            <h2 className='h1 mb-5 text-white'>افتخارات</h2>
                            <p className='text-muted LH-Style-2 h5'>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ 
                                و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون 
                                و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                            </p>
                        </div>
                    </div>
                    <div className='row my-5 rtl'>
                        <div className='col-md-4 text-center p-5'>
                            <i className='text-danger opacity-Style icon-target1'>{<FaMedal className='icon_Style'/>}</i>
                            <h3 className='text-white mb-3 h1'>مدال ها</h3>
                            <p className='text-muted LH-Style-2'>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها 
                                و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است 
                                و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای با هدف بهبود ابزارهای کاربردی می باشد
                            </p>
                        </div>
                        <div className='col-md-4 text-center p-5'>
                            <i className='text-warning opacity-Style icon-target2'>{<FaTrophy className='icon_Style'/>}</i>
                            <h3 className='text-white mb-3 h1'>مدال ها</h3>
                            <p className='text-muted LH-Style-2'>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها 
                                و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است 
                                و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای با هدف بهبود ابزارهای کاربردی می باشد
                            </p>
                        </div>
                        <div className='col-md-4 text-center p-5 '>
                            <i className='text-info opacity-Style icon-target3'>{<RiMedalLine className='icon_Style'/>}</i>
                            <h3 className='text-white mb-3 h1'>مدال ها</h3>
                            <p className='text-muted LH-Style-2'>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها 
                                و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است 
                                و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای با هدف بهبود ابزارهای کاربردی می باشد
                            </p>
                        </div>
                    </div>
                    <div className='container mt-3'>
                        <div className='row rtl'>
                            <div className='col-lg-6 text-white text-center text-lg-right description-Style3 target3'>
                                <h1 className='mb-4'>با کیفیت ترین تجهیزات</h1>
                                <p className='LH-Style-2 '>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و 
                                متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و 
                                کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده
                                </p>
                            </div>
                            <div className='col-lg-6'>
                                <img className='img-fluid description-Style2 target2' src={slide1} alt='Gym'/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Description
