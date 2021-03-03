import React, { useState } from 'react';
import Generator from '../components/Generator/Generator';
import LineGraph from '../components/Graph/LineGraph';
import BarGraph from '../components/Graph/BarGraph';

const Grapher = () => {
    const [graphData, setGraphData] = useState({
        title: "",
        values: []
    })

    const [formData, setFormData] = useState({
        title: "",
        values: []
    })

    const [graphsVisible, setGraphsVisible] = useState({
        name: "Graphs",
        showHideBarGraph: true,
        showHideLineGraph: false
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        
        let valuesArray = formData.values.split(",");
        valuesArray = valuesArray.map(x => parseInt(x));

        setGraphData({
            ...graphData,
            title: formData.title,
            values: valuesArray,
        })

        // if (formData.type === 0 || graphData.type === 0) {
        //     if (graphsVisible.showHideBarGraph === false) {
        //         setGraphsVisible({
        //             ...graphsVisible,
        //             showHideBarGraph: true,
        //             showHideLineGraph: false
        //         });
        //     }
        // } else {
        //     if (graphsVisible.showHideLineGraph === false) {
        //         setGraphsVisible({
        //             ...graphsVisible,
        //             showHideBarGraph: false,
        //             showHideLineGraph: true
        //         });
        //     }
        // }
    }

    const hideComponent = (e) => {
        switch(e) {
            case "showHideLineGraph":
                setGraphsVisible({
                    showHideLineGraph: !graphsVisible.showHideLineGraph
                });
                break;
            case "showHideBarGraph":
                setGraphsVisible({
                    showHideBarGraph: !graphsVisible.showHideBarGraph
                });
                break;
            default:
                break;
        }
    }

    return (
        <div className="App">
            <div>
                <Generator value={[formData, graphData]} onChange={handleChange} onSubmit={onSubmit}/>
                <div>
                    <button
                        id="bar-button"
                        className="button"
                        onClick={() => hideComponent("showHideBarGraph")}
                    >
                        BAR GRAPH
                    </button>
                    <button
                        id="line-button"
                        className="button"
                        onClick={() => hideComponent("showHideLineGraph")}
                    >
                        LINE GRAPH
                    </button>
                </div>
            </div>
            <div className="graph-wrapper">
                {graphsVisible.showHideBarGraph && <BarGraph title={graphData.title} values={graphData.values}/>}
                {graphsVisible.showHideLineGraph && <LineGraph title={graphData.title} values={graphData.values}/>}
            </div>
            
        </div>
    );
}

export default Grapher;