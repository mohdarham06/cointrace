import React from 'react'

import BackButton from '../components/BackButton'


const NotFound = () => {
    return (
        <>
            <header
                className="header header--sticky header--go-back"
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