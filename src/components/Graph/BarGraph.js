import React from 'react';
import Title from "./Title";

const BarGraph = (props) => {
    const graphHeight = 500;
    const graphWidth = 800;
    const gridHeight = 358;
    const gridWidth = 584;
    const numOfValues = props.values.length;
    const maxValue = Math.max(...props.values);

    return (
        <>
            <Title title={props.title} />
            <div className="graph-container">
                <svg className="graph-content graph" viewBox={"0 0 " + graphWidth + " " + graphHeight} preserveAspectRatio="xMinYMin meet">
                    <title>{props.title} line graph.</title>
                    <g className="grid grid-lines">
                        <line x1="90" x2="90" y1="5" y2="371"></line>
                    </g>
                    <g className="grid grid-lines">
                        <line x1="90" x2="705" y1="370" y2="370"></line>
                    </g>
                    <g className="grid grid-values">
                        {props.values.map((value, index) =>
                            <g key={index.toString()} className="grid grid-values grid-values-bars"
                                transform={"translate(" + (91 + ((gridWidth/(numOfValues + 1)) * (index * 1.1))).toString() +
                                "," + (11 + (gridHeight/maxValue) * (maxValue - value)).toString() + ")"}>
                                <rect height={((gridHeight/maxValue) * value).toString()}
                                    width={(gridWidth/(numOfValues + 1)).toString()}></rect>
                            </g>        
                        )}
                    </g>
                    <g className="labels x-labels">
                        {props.values.map((_, index) =>
                            <text key={index.toString()} x={(91 + ((gridWidth/(numOfValues + 1)) * (index * 1.1))
                            + ((gridWidth/(numOfValues + 1))/2)).toString()} y="400">{index}</text>)}
                    </g>
                    <g className="labels y-labels">
                        {(new Array(6)).fill(0).map((_, n) =>
                            <text key={n.toString()} x="80" y={(15 + (71 * n)).toString()}>
                                {Math.round((maxValue - (maxValue/5) * n)*10)/10}
                            </text>)}
                    </g>
                </svg>
            </div>
        </>
    )
}

export default BarGraph;