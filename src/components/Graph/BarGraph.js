import React from "react";
import Title from "./Title";
import XAxis from "./XAxis";
import YAxis from "./YAxis";

const BarGraph = (props) => {
    return (
        <>
            <Title title={props.title} />
            <div>{props.values.map((i, n) => <div>Value is {i} and index is {n}</div>)}</div>
            <svg>
                <g>
                    {props.values.map((i, n) => <text x={((50 * n)).toString()} y="50">{n}</text>)}
                    <text x="400" y="450" className="line-graph-title">X-Axis</text>
                </g>
            </svg>
            <p>This will be a bar graph.</p>
            <XAxis values={props.values} />
            <YAxis values={props.values} />
        </>
    )
}

export default BarGraph;