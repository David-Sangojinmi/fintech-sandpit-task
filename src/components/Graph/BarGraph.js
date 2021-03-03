import React, { useState } from 'react';
import Title from "./Title";

const BarGraph = (props) => {
    const graphHeight = 500;
    const graphWidth = 800;
    const numOfValues = props.values.length;
    const [maxValue, setMaxValue] = useState({
        value: 0
    })
    var i;
    for (i = 0; i < numOfValues; i++) {
        if (maxValue.value < props.values[i]) {
            setMaxValue({
                ...maxValue,
                value: props.values[i]
            })
        }
    }

    return (
        <>
            <Title title={props.title} />
            <div>The max value is {maxValue.value}.</div>
            <svg className="graph" height={graphHeight} width={graphWidth}>
                <title>A line chart showing some information</title>
                <g>
                    <text x="400" y="450" className="line-graph-title">X-Axis</text>
                </g>
                <g class="grid grid-lines">
                    <line x1="90" x2="90" y1="5" y2="371"></line>
                </g>
                <g class="grid grid-lines">
                    <line x1="90" x2="705" y1="370" y2="370"></line>
                </g>
                <g>
                    {props.values.map((value, index) =>
                    <circle cx={(100 + ((584/(numOfValues - 1)) * index)).toString()} cy={(373 - ((358/maxValue.value) * value)).toString()} r="5" stroke="white" strokeWidth="5" fill="blue" />)}
                </g>
                <g className="labels x-labels">
                    {props.values.map((value, index) =>
                        <text x={(100 + ((584/(numOfValues - 1)) * index)).toString()} y="400">{index}</text>)}
                </g>
                <g className="labels y-labels">
                    {(new Array(6)).fill(0).map((_, n) =>
                        <text x="80" y={(15 + (71 * n)).toString()}>{maxValue.value - (maxValue.value/5) * n}</text>)}
                </g>
            </svg>
        </>
    )
}

export default BarGraph;