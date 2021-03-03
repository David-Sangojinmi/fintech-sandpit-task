import React from 'react';

const Generator = (props) => {
    const formData = props.value[0];
    const handleChange = props.onChange;
    // const [handleTitleChange, handleValuesChange, handleTypeChange] = props.onChange;
    const handleSubmit = props.onSubmit;

    return(
        <div>
            <form onSubmit={handleSubmit} className="form-section" id="graph-form">
                <label className="form-component">
                    Title
                    <input
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
                    Values
                    <input
                        type="text"
                        minLength="1"
                        name="values"
                        placeholder="10,90,30,50..."
                        value={formData.values}
                        onChange={handleChange}
                    ></input>
                    <br />
                </label>
                <label className="form-component" form="graph-form" required>
                    Type of Graph
                    <select
                        name="type"
                        onChange={handleChange}
                        required
                    >
                        <option
                            value="0"
                            name="bar-graph"
                        >Bar Graph</option>
                        <option
                            value="1"
                            name="line-graph"
                        >Line Graph</option>
                    </select>
                </label>
                <input type="submit" value="Generate" />
            </form>
        </div>
    )
}

export default Generator;