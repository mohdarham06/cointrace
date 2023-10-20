import React from 'react'


import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";


const BackButton = () => {
    const navigate = useNavigate();

    const navigateBack = () => {
        navigate(-1);
    }


    return (
        <div className='back-button' onClick={navigateBack}>
            <BiArrowBack />
        </div>
    )
}

export default BackButton