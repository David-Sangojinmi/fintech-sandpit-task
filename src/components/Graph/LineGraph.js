import React from 'react';
import Title from "./Title";

const LineGraph = (props) => {
    const graphHeight = 500;
    const graphWidth = 800;
    const gridHeight = 358;
    const gridWidth = 584;
    const gridYOrigin = 373;
    const numOfValues = props.values.length;
    const maxValue = Math.max(...props.values);

    return (
        <>
            <Title title={props.title} />
            <div className="graph-container">
                <svg className="graph-content graph" viewBox={"0 0 " + graphWidth + " " + graphHeight} preserveAspectRatio="xMinYMin meet">
                    <title>{props.title} line graph.</title>
                    <g class="grid grid-lines">
                        <line x1="90" x2="90" y1="5" y2="371"></line>
                    </g>
                    <g class="grid grid-lines">
                        <line x1="90" x2="705" y1="370" y2="370"></line>
                    </g>
                    <g class="grid grid-values">
                        <polyline
                            points={props.values.map((value, index) =>
                                (91 + ((gridWidth/(numOfValues + 1)) * (index * 1.1)) + ((gridWidth/(numOfValues + 1))/2))
                                + "," + (gridYOrigin - ((gridHeight/maxValue) * value))).toString()}
                        />
                        {props.values.map((value, index) =>
                        <circle class="grid grid-values grid-values-circles"
                            cx={(91 + ((gridWidth/(numOfValues + 1)) * (index * 1.1))
                                + ((gridWidth/(numOfValues + 1))/2)).toString()}
                            cy={(gridYOrigin - ((gridHeight/maxValue) * value)).toString()}
                        />)}
                    </g>
                    <g className="labels x-labels">
                        {props.values.map((_, index) =>
                            <text x={(91 + ((gridWidth/(numOfValues + 1)) * (index * 1.1))
                                + ((gridWidth/(numOfValues + 1))/2)).toString()} y="400">{index}</text>)}
                    </g>
                    <g className="labels y-labels">
                        {(new Array(6)).fill(0).map((_, n) =>
                            <text x="80" y={(15 + (71 * n)).toString()}>
                                {Math.round((maxValue - (maxValue/5) * n)*10)/10}
                            </text>)}
                    </g>
                </svg>
            </div>
        </>
    )
}

export default LineGraph;