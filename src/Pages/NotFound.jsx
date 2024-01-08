import React from 'react'

import BackButton from '../components/BackButton'


const NotFound = () => {
    return (
        <>
            <header
                style={{
                    width: '100%'
                }}
                className="header--sticky header--coin-page"
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