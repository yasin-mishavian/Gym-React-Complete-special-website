import React from 'react'
import slide13 from './../assets/img/55.jpg'
import slide14 from './../assets/img/56.jpg'
import slide15 from './../assets/img/57.jpg'
import {AiFillStar , AiOutlineStar} from 'react-icons/ai'
import {FaStarHalfAlt} from 'react-icons/fa'

const Trainers = () => {
    return (
        <>
            <section id='Trainers' className='Trainer-Style'>
                <div className=' container-fluid '>
                    <div className='row justify-content-center text-center mb-5'>
                        <div className='col-xl-6 col-lg-8 col-md-10 '>
                            <h2 className='h1 my-5 text-white'>مربی ها</h2>
                            <p className=' text-muted LH-Style-2 h5'>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ 
                                و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون 
                                و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                            </p>
                        </div>
                    </div>
                    <div className='row justify-content-center'>
                        <div className='col-md-6'>
                            <div className='carousel slide' id='trainers'>
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#trainers" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#trainers" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#trainers" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                                <div className=' carousel-inner'>
                                    <div className=' carousel-item text-center active'>
                                        <img className=' img-fluid rounded-circle m-5' style={{width:'300px',height:'300px'}} src={slide13} alt='trainer' />
                                        <blockquote className=' blockquote text-white'>
                                            <p className='mb-5'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با 
                                                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه 
                                                و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
                                            </p>
                                        </blockquote>
                                        <h5 className=' text-light my-3'> مینا سروری ( مربی رسمی ) </h5>
                                        <ul className=' list-inline mb-5'>
                                            <li className=' list-inline-item text-warning'>{<AiFillStar/>}</li>
                                            <li className=' list-inline-item text-warning'>{<AiFillStar/>}</li>
                                            <li className=' list-inline-item text-warning'>{<AiFillStar/>}</li>
                                            <li className=' list-inline-item text-warning'>{<AiFillStar/>}</li>
                                            <li className=' list-inline-item text-warning'>{<FaStarHalfAlt/>}</li>
                                        </ul>
                                    </div>
                                    <div className=' carousel-item text-center'>
                                        <img className=' img-fluid rounded-circle m-5' style={{width:'300px',height:'300px'}} src={slide15} alt='trainer' />
                                        <blockquote className=' blockquote text-white'>
                                            <p className='mb-5'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با 
                                                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه 
                                                و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
                                            </p>
                                        </blockquote>
                                        <h5 className=' text-light my-3'> مسعود نعمتی ( مربی رسمی ) </h5>
                                        <ul className=' list-inline mb-5'>
                                            <li className=' list-inline-item text-warning'>{<AiFillStar/>}</li>
                                            <li className=' list-inline-item text-warning'>{<AiFillStar/>}</li>
                                            <li className=' list-inline-item text-warning'>{<AiFillStar/>}</li>
                                            <li className=' list-inline-item text-warning'>{<AiFillStar/>}</li> 
                                            <li className=' list-inline-item text-warning'>{<AiFillStar/>}</li>                                           
                                        </ul>
                                    </div>
                                    <div className=' carousel-item text-center'>
                                        <img className=' img-fluid rounded-circle m-5' style={{width:'300px',height:'300px'}} src={slide14} alt='trainer' />
                                        <blockquote className=' blockquote text-white'>
                                            <p className='mb-5'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با 
                                                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه 
                                                و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
                                            </p>
                                        </blockquote>
                                        <h5 className=' text-light my-3'> سامان محمدی ( مربی رسمی ) </h5>
                                        <ul className=' list-inline mb-5'>
                                            <li className=' list-inline-item text-warning'>{<AiFillStar/>}</li>
                                            <li className=' list-inline-item text-warning'>{<AiFillStar/>}</li>
                                            <li className=' list-inline-item text-warning'>{<AiFillStar/>}</li>
                                            <li className=' list-inline-item text-warning'>{<AiFillStar/>}</li>
                                            <li className=' list-inline-item text-warning'>{<AiOutlineStar/>}</li>
                                        </ul>
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#trainers" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#trainers" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Trainers
