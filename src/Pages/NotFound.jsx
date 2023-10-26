import React from 'react'

import Header from '../components/common/Header';
import BackButton from '../components/BackButton'


const NotFound = () => {
    return (
        <>
            <Header />
            <main>
                <BackButton />

                <section className='notfound-section'>

                    <h1 className='section-heading'>
                        Sorry,
                        <br />
                        <span>Page not found!</span>
                    </h1>

                </section>
            </main>
        </>
    )
}

export default NotFound