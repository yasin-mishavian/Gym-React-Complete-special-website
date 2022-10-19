import React from 'react'
import "./Highlight.scss";

const Highlight = () => {

      
    return (
        <>
            <section id='Highlight'>
                <div className=' container-fluid p-5 text-center'>
                    <div className='row justify-content-center text-center mb-5'>
                        <div className='col-xl-6 col-lg-8 col-md-10 '>
                            <h2 className='h1 mb-5 text-muted'>پلن ها</h2>
                            <p className='text-muted LH-Style-2 h5'>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ 
                                و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون 
                                و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className=' col-lg-4'>
                            <div className=' card text-light py-4 my-4 border-0 mx-auto highlight-Style1'>
                                <div className=' card-body'>
                                    <h4 className=' mb-5 h2 text-warning'>پلن ماهانه</h4>
                                    <h3 className=''>%20</h3>
                                    <ul className=' list-unstyled'>
                                        <li className='py-3 list-Style'>مربی تمرین</li>
                                        <li className='py-3 list-Style'>مربی تغذیه</li>
                                        <li className='py-3 list-Style'>سالن هوازی</li>
                                        <li className='py-3 list-Style border-0'>سالن آبی</li>
                                    </ul>
                                    <a  className=' btn text-light btn-Style'>ثبت نام</a>
                                </div>
                            </div>
                        </div>
                        <div className=' col-lg-4'>
                            <div className=' card text-light py-4 my-4 border-0 mx-auto highlight-Style2'>
                                <div className=' card-body'>
                                    <h4 className=' mb-5 h2 text-warning'>پلن سالانه</h4>
                                    <h3 className=''>%50</h3>
                                    <ul className=' list-unstyled'>
                                        <li className='py-3 list-Style'>مربی تمرین</li>
                                        <li className='py-3 list-Style'>مربی تغذیه</li>
                                        <li className='py-3 list-Style'>سالن هوازی</li>
                                        <li className='py-3 list-Style border-0'>سالن آبی</li>
                                    </ul>
                                    <a className=' btn text-light btn-Style'>ثبت نام</a>
                                </div>
                            </div>
                        </div>
                        <div className=' col-lg-4'>
                            <div className=' card text-light py-4 my-4 border-0 mx-auto highlight-Style3'>
                                <div className=' card-body'>
                                    <h4 className=' mb-5 h2 text-warning'>پلن سه ماهه</h4>
                                    <h3 className=''>%30</h3>
                                    <ul className=' list-unstyled'>
                                        <li className='py-3 list-Style'>مربی تمرین</li>
                                        <li className='py-3 list-Style'>مربی تغذیه</li>
                                        <li className='py-3 list-Style'>سالن هوازی</li>
                                        <li className='py-3 list-Style border-0'>سالن آبی</li>
                                    </ul>
                                    <a className=' btn text-light btn-Style'>ثبت نام</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Highlight
