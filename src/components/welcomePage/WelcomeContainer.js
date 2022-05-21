import React, { useState } from 'react'
import GetDetails from './GetDetails'
import ShowDetails from './ShowDetails'
import aiImage from "../../ai.svg"
import logoimage from "../../logoai.svg"
import "./welcome.css"

const WelcomeContainer = () => {

    const [isNew, setIsNew] = useState(true)
    return (
        <div className="welcome-container">
            <img className="logo-image" src={logoimage} alt="logoai" />
            <img className="robot-image" src={aiImage} alt="ai" />
            {isNew ? <GetDetails setIsNew={setIsNew} /> : <ShowDetails setIsNew={setIsNew} />}
        </div>
    )
}

export default WelcomeContainer
