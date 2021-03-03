import React from 'react';

const Generator = (props) => {
    const formData = props.value[0];
    const handleChange = props.onChange;
    const handleSubmit = props.onSubmit;

    return(
        <div>
            <form onSubmit={handleSubmit} className="form-section" id="graph-form">
                <h2>Welcome to Grapher!</h2>
                <p>Enter a title for your graph, and the values to be plotted. Values should be in integer or decimal form with a comma seperating individual values. Then press 'Generate'. Use the blue buttons to toggle the type of graph.</p>
                <label className="form-component">
                    <span className="input-text">Title</span>
                    <input
                        className="input-entry"
                        type="text"
                        minLength="1"
                        maxLength="50"
                        name="title"
                        placeholder="Cars sold in Feb..."
                        value={formData.title}
                        onChange={handleChange}
                        required
                    ></input>
                    <br />
                </label>
                <label className="form-component">
                <span className="input-text">Values</span>
                    <input
                        className="input-entry"
                        type="text"
                        minLength="1"
                        name="values"
                        placeholder="10,90,30,50..."
                        value={formData.values}
                        onChange={handleChange}
                    ></input>
                    <br />
                </label>
                <span className="form-component">
                    <button id="input-submit" type="submit" value="Generate">Generate</button>
                </span>
            </form>
        </div>
    )
}

export default Generator;