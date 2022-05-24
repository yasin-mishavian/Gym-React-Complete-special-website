import React from 'react'
import "./Contact.scss";

const Contact = () => {
    return (
        <>
            <section id='Contact' className='contact-Style1 p-5 mt-5'>
                <div className='container-fluid'>
                    <div className='row '>
                        <div className='col-lg-5 pb-4 rtl'>
                            <h3 className=' text-white mb-5'>با ما در ارتباط باشید</h3>
                            <form>
                                <div className='py-4'>
                                    <input className='form-control mb-5 mt-3 p-2 text-light input-Style' id='name' placeholder='نام را وارد کنید' type='text'/>
                                    <label htmlFor='#name' className=' form-label label-Style'>نام</label>
                                </div>
                                <div className='py-4'>
                                    <input className='form-control my-5 p-2 text-light input-Style' id='email' placeholder='ایمیل را وارد کنید' type='email'/>
                                    <label htmlFor='#email' className=' form-label label-Style'>ایمیل</label>
                                </div>
                                <div className='py-4'>
                                    <input id='checkbox' type='checkbox' />
                                    <label htmlFor='checkbox' className=' text-white my-5 pt-2 mx-3 '> من را از اطلاعیه ها مطلع کن </label>
                                </div>
                                <button style={{width:'100%'}} className=' btn p-2 contact-Style3'>عضویت</button>
                            </form>                           
                        </div>
                    </div>
                </div>
            </section>            
        </>
    )
}

export default Contact
