import React from 'react'

import '../styles/notfound.css'

import BackButton from '../components/BackButton'


const NotFound = () => {
    return (
        <main>
            <section className='notfound-section'>

                <BackButton />

                <h1 className='section-heading'>
                    Sorry,
                    <br />
                    <span>Page not found!</span>
                </h1>

            </section>
        </main>
    )
}

export default NotFound