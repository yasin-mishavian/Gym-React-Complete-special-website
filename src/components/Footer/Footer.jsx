import React from 'react'
import {RiInstagramFill} from 'react-icons/ri'
import {BsTwitter} from 'react-icons/bs'
import {BsYoutube} from 'react-icons/bs'
import {BsTelegram} from 'react-icons/bs'
import "./Footer.scss";

const Footer = () => {
    return (
        <>
            <footer className=' bg-dark px-5 pt-5 '>
                <div className=' container-fluid '>
                    <div className='row text-light py-4 '>
                        <div className='col-lg-4 col-sm-8 rtl '>
                            <h5 className=' pb-3'>درباره ما</h5>
                            <p className='LH-Style-1'>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                            </p>
                        </div>
                        <div className='col-lg-2 col-sm-6 rtl'>
                            <h5 className='pb-3'> صفحات </h5>
                            <ul className=' list-unstyled'>
                                <li>
                                    <a className='footer-Style' href='#'>خانه</a>
                                </li>
                                <li>
                                    <a className='footer-Style' href='#'>افتخارات</a>
                                </li>
                                <li>
                                    <a className='footer-Style' href='#'>گالری</a>
                                </li>
                                <li>
                                    <a className='footer-Style' href='#'>مربی ها</a>
                                </li>
                                <li>
                                    <a className='footer-Style' href='#'>پلن ها</a>
                                </li>
                                <li>
                                    <a className='footer-Style' href='#'>ارتباط با ما</a>
                                </li>
                            </ul>
                        </div>
                        <div className='col-lg-2 col-sm-6 rtl'>
                            <h5 className='pb-3'>صفحات</h5>
                            <ul className=' list-unstyled'>
                                <li>
                                    <a className='footer-Style' href='#'>پشتیبانی</a>
                                </li>
                                <li>
                                    <a className='footer-Style' href='#'>مشاور تغذیه</a>
                                </li>
                                <li>
                                    <a className='footer-Style' href='#'>برنامه لاغری</a>
                                </li>
                                <li>
                                    <a className='footer-Style' href='#'>اطلاعیه ها</a>
                                </li>
                                <li>
                                    <a className='footer-Style' href='#'>StarGYM@Gmail.com</a>
                                </li>
                            </ul>
                        </div>
                        <div className='col-lg-4 col-sm-6 '>
                            <h5 className=' pb-3 rtl'>درباره ما</h5>
                            <p className='LH-Style-1 rtl'>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                            </p>
                            <form className='mb-3 '>
                                <div className="input-group">
                                    <button className="input-group-text btn-danger" id="btnGroupAddon">ارسال</button>
                                    <input type="text" className="form-control rtl" placeholder="ایمیل" aria-label="Input group example"
                                     aria-describedby="btnGroupAddon"/>
                                </div>
                            </form>
                            <ul className=' list-inline text-center '>
                                <li className=' list-inline-item'>
                                    <i className=' text-primary px-4'>{<BsTelegram className='img-Style '/>}</i>
                                </li>
                                <li className=' list-inline-item'>
                                    <i className=' text-danger px-4'>{<RiInstagramFill className='img-Style'/>}</i>
                                </li>
                                <li className=' list-inline-item'>
                                    <i className=' text-info px-4'>{<BsTwitter className='img-Style'/>}</i>
                                </li>
                                <li className=' list-inline-item'>
                                    <i className=' text-danger px-4'>{<BsYoutube className='img-Style'/>}</i>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
