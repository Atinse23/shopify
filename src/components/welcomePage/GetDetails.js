import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const GetDetails = () => {

    const navigate = useNavigate()
    const [input, setInput] = useState("")

    const handleInput = (e) => {
        setInput(e.target.value)
    }
    const handleClick = () => {
        localStorage.setItem("username", input)
        navigate("/ai")
    }

    return (
        <div className="get-details-container" >

            <div className="get-details-info">
                <h3>Shopify / Open AI</h3>
                <p>Welcome to your personalized AI assistant, by Shopify. Please provide your <strong>name</strong> below</p>
            </div>

            <div className="get-details">
                <input placeholder="Enter your name" type="text" onChange={handleInput} />
                <button onClick={handleClick}>Enter</button>
            </div>
        </div>
    )
}

export default GetDetails
