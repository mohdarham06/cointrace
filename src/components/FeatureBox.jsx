import React from 'react'

const FeatureBox = ({ icon, title, info }) => {
    return (
        <div className="feature-box">
            <div className="feature-icon">{icon}</div>
            <h3 className='feature-title'>{title}</h3>
            <p className="feature-info">{info}</p>
        </div>
    )
}

export default FeatureBox