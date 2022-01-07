import React from 'react'
import $ from "jquery";

const HeaderNav = () => { 
        
    $(document).ready(function () {
        $(".nav-Style2").click(function () {
          $(".nav-Style2").toggleClass("change");
        });
      });

      $(window).scroll(function () {
        const position = $(this).scrollTop();
        if (position >= 200) {
          $(".nav-Style1").addClass("nav-Style1-custom");
        } else {
          $(".nav-Style1").removeClass("nav-Style1-custom");
        }
      });
      

    return (
        <>
            <header id='Home' className='Header-Style'>
                <nav className="navbar navbar-expand-lg fixed-top  nav-Style1  ">
                    <button className=' navbar-toggler nav-Style2' data-bs-toggle="collapse" data-bs-target='#mynav'>
                        <div className='line1 bg-white'></div>
                        <div className='line2 bg-white'></div>
                        <div className='line3 bg-white'></div>
                    </button>
                    <div className='collapse navbar-collapse rtl' id='mynav'>
                        <ul className='navbar-nav list-unstyled '>
                            <li className='nav-item'>
                                <a href='#Home' className='nav-link m-2 nav-Style3'>خانه</a>
                            </li>
                            <li className='nav-item'>
                                <a href='#Description' className='nav-link m-2 nav-Style3'>افتخارات</a>
                            </li >
                            <li className='nav-item'>
                                <a href='#Services' className='nav-link m-2 nav-Style3'>خدمات</a>
                            </li>
                            <li className='nav-item'>
                                <a href='#Gallery' className='nav-link m-2 nav-Style3'>محیط باشگاه</a>
                            </li>
                            <li className='nav-item'>
                                <a href='#Trainers' className='nav-link m-2 nav-Style3'>مربی ها</a>
                            </li>
                            <li className='nav-item'>
                                <a href='#Highlight' className='nav-link m-2 nav-Style3'>پلن ها</a>
                            </li>
                            <li className='nav-item'>
                                <a href='#Contact' className='nav-link m-2 nav-Style3'>ارتبات با ما</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className=' text-white fw-bold text-start baner-Style1'>
                    <h1 className=' display-1 baner-Style2'>STAR GYM </h1>
                    <p className='h1 mt-3 baner-Style3'><span>NO PAIN </span><span className='mr-4'> NO GAIN</span></p>
                </div>
            </header>
        </>
    )
}

export default HeaderNav
