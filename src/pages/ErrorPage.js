import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom'
export const ErrorPage = () => {
    return (
        <Hero>
            <Banner title='error 404' subtitle='page not found'>
                <Link to='/' className='btn-primary'>
                    return home
                </Link>
            </Banner>
        </Hero>
    )
}
export default ErrorPage;