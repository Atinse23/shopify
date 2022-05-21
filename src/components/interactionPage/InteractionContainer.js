import React, { useState } from 'react'
import Classification from './Classification'
import "./interaction.css"
import logoimage from "../../logoai.svg"
import QA from './QA'

const InteractionContainer = () => {

    //Get data from local storage and set as dialogArea initial data
    let userDialog = JSON.parse(localStorage?.getItem("dialogData"))
    let username = localStorage?.getItem("username")

    const [activeButton, setActiveButton] = useState("QA")
    const [loadingState, setLoadingState] = useState(false)
    const [dialogData, setDialogData] = useState(userDialog ? userDialog : [])

    const [input, setInput] = useState("")

    const handleTextInput = (e) => {
        setInput(e.target.value)
    }

    const API_KEY = process.env.REACT_APP_SHOPIFY


    const addDialog = async () => {

        setLoadingState(true)

        const data = {
            prompt: input,
            temperature: 0.5,
            max_tokens: 64,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        };

        //call API
        fetch("https://api.openai.com/v1/engines/text-curie-001/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${API_KEY}`,
            },
            body: JSON.stringify(data),
        }).then(response => response.json()).then(data => {
            let dialogObject = { prompt: input, response: data["choices"][0]["text"] }
            console.log(dialogObject)
            //save to local storage
            localStorage.setItem("dialogData", JSON.stringify([dialogObject, ...dialogData]))
            //save to state
            setDialogData([dialogObject, ...dialogData])
        }).finally(() => {
            setLoadingState(false)
        })


    }


    return (
        <div className="interaction-container">

            <div className="interaction-dialog">
                <img className="logo-image-inner" src={logoimage} alt="logoai" />
                <h3>Welcome, {username ? username : "USER"}</h3>
                <p>To interact with our AI platform, below are fun ways to get started. Click either of the buttons below to see steps and examples</p>
                <div>
                    <div className="sample-buttons">
                        <button className={activeButton === "QA" ? "active" : "alternate"} onClick={() => setActiveButton("QA")}>Q/A</button>
                        <button className={activeButton === "classification" ? "active" : "alternate"} onClick={() => setActiveButton("classification")}>Classification</button>
                    </div>
                    {activeButton === "QA" ? <QA input={input} handleTextInput={handleTextInput} addDialog={addDialog} loadingState={loadingState} setInput={setInput} /> :
                        <Classification input={input} handleTextInput={handleTextInput} addDialog={addDialog} loadingState={loadingState} setInput={setInput} />}
                </div>
            </div>
            <div className="interaction-view">
                <h5>Conversations Appear Here</h5>
                <div className="interactions">
                    {dialogData.map((dialog, index) => (
                        <div key={index}>
                            <div className="interactions-prompt">
                                <h6>Prompt</h6>
                                <p>{dialog?.prompt}</p>
                            </div>
                            <div className="interactions-response">
                                <h6>AI Response</h6>
                                <p>{dialog?.response}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default InteractionContainer
