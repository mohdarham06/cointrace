import React from 'react'

import BackButton from '../components/BackButton'


const NotFound = () => {
    return (
        <>
            <header
                className="header header--sticky"
                style={{
                    zIndex: '50',
                    padding: '1.5rem 1.2rem'
                }}
            >
                <BackButton />
            </header>

            <main>
                <section className='notfound-section'>

                    <h1 className='section__heading'>
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