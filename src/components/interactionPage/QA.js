import React from 'react'

const QA = ({ input, handleTextInput, addDialog, loadingState, setInput }) => {

    const setExampleText = () => {
        setInput("What is the best holiday location?")
    }

    return (
        <>
            <h5 className="steps-to-take">Steps To Take</h5>
            <div className="instruction-cards">
                <div className="card">
                    <div className="card-number">
                        1
                            </div>
                    <p>Type in the question you would like to ask</p>
                </div>
                <div className="card">
                    <div className="card-number">
                        2
                            </div>
                    <p>Wait for the AI Response...</p>
                </div>
                <div className="card">
                    <div className="card-number">
                        3
                            </div>
                    <p>Get a response and continue the conversation as shown in <strong>STEP 1 </strong></p>
                </div>
            </div>
            <button className="grey-button" onClick={setExampleText}> Use Sample Text Prompt</button>
            <textarea className="interaction-text-area" value={input} id="w3review" name="w3review" onChange={handleTextInput} placeholder="Enter your request" />

            <button className="black-button" onClick={addDialog}>{loadingState ? "Loading.." : "Enter"}</button>
        </>
    )
}

export default QA
