import React from "react";
import Title from "./Title";
import XAxis from "./XAxis";
import YAxis from "./YAxis";

const LineGraph = (props) => {
    return (
        <>
            <Title title={props.title} />
            <p>This will be a line graph.</p>
            <svg className="graph">
                <g className="grid x-grid" id="xGrid">
                    <line x1="113" x2="113" y1="10" y2="380"></line>
                    <line x1="259" x2="259" y1="10" y2="380"></line>
                    <line x1="405" x2="405" y1="10" y2="380"></line>
                    <line x1="551" x2="551" y1="10" y2="380"></line>
                    <line x1="697" x2="697" y1="10" y2="380"></line>
                </g>
                <g className="grid y-grid" id="yGrid">
                    <line x1="86" x2="697" y1="10" y2="10"></line>
                    <line x1="86" x2="697" y1="68" y2="68"></line>
                    <line x1="86" x2="697" y1="126" y2="126"></line>
                    <line x1="86" x2="697" y1="185" y2="185"></line>
                    <line x1="86" x2="697" y1="243" y2="243"></line>
                    <line x1="86" x2="697" y1="301" y2="301"></line>
                    <line x1="86" x2="697" y1="360" y2="360"></line>
                </g>
                <g className="surfaces">
                    <path className="first_set" d="M113,360 L113,192 L259,171 L405,179 L551,200 L697,204 L697,360 Z"></path>
                </g>
                <use className="grid double" ></use>
                <use className="grid double" ></use>
                <g className="first_set points" data-setname="Our first data set">
                    <circle cx="113" cy="192" data-value="7.2" r="5"></circle>
                    <circle cx="259" cy="171" data-value="8.1" r="5"></circle>
                    <circle cx="405" cy="179" data-value="7.7" r="5"></circle>
                    <circle cx="551" cy="200" data-value="6.8" r="5"></circle>
                    <circle cx="697" cy="204" data-value="6.7" r="5"></circle>
                </g>
                <g className="labels x-labels">
                    <text x="113" y="400">2008</text>
                    <text x="259" y="400">2009</text>
                    <text x="405" y="400">2010</text>
                    <text x="551" y="400">2011</text>
                    <text x="697" y="400">2012</text>
                </g>
                <g className="labels y-labels">
                    <text x="80" y="15">15</text>
                    <text x="80" y="131">10</text>
                    <text x="80" y="248">5</text>
                    <text x="80" y="365">0</text>
                    <text x="50" y="15">Weeks</text>
                </g>    
            </svg>
            <XAxis values={props.values} />
            <YAxis values={props.values} />
        </>
    )
}

export default LineGraph;