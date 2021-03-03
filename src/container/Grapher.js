import React, { useState } from 'react';   // useEffect, setState 
import Generator from '../components/Generator/Generator';
// import Generator1 from '../components/Generator/Generator1';
import LineGraph from '../components/Graph/LineGraph';
import BarGraph from '../components/Graph/BarGraph';

const Grapher = () => {
    const [graphData, setGraphData] = useState({
        title: "",
        values: [],
        type: 0
    })

    const [formData, setFormData] = useState({
        title: "",
        values: [],
        type: 0
    })

    const [graphsVisible, setGraphsVisible] = useState({
        name: "Graphs",
        showHideBarGraph: false,
        showHideLineGraph: false
    })

    const handleChange = (e) => {
        console.log(e);

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    // const handleTitleChange = (e) => {
    //     // console.log(e);

    //     setFormData({
    //         ...formData,
    //         title: e.target.value
    //     })
    // }

    // const handleValuesChange = (e) => {
    //     // console.log(e);

    //     setFormData({
    //         ...formData,
    //         values: e.target.value
    //     })
    // }

    // const handleTypeChange = (e) => {
    //     // console.log(e);

    //     setFormData({
    //         ...formData,
    //         type: e.target.value
    //     })
    // }

    const onSubmit = (e) => {
        e.preventDefault();

        console.log(e);
        
        let valuesArray = formData.values.split(",");
        valuesArray = valuesArray.map(x => parseInt(x));

        // setGraphData({
        //     ...graphData,
        //     type: formData.type
        // })

        // if (graphData.type === 0) {
        //     setGraphsVisible({
        //         showHideLineGraph: !graphsVisible.showHideLineGraph
        //     });
        // } else {
        //     setGraphsVisible({
        //         showHideBarGraph: !graphsVisible.showHideBarGraph
        //     });
        // }

        console.log(e.target[2].value);

        setGraphData({
            ...graphData,
            title: formData.title,
            values: valuesArray,
            type: formData.type   // e.target[2].value
        })

        console.log("Form data type is: " + formData.type);
        console.log("Graph data type is: " + graphData.type);

        if (formData.type === 0 || graphData.type === 0) {
            if (graphsVisible.showHideBarGraph === false) {
                setGraphsVisible({
                    ...graphsVisible,
                    showHideBarGraph: true,
                    showHideLineGraph: false
                });
            }
            // setGraphData({
            //     ...graphData,
            //     type: 0
            // })
            // setGraphsVisible({
            //     ...graphsVisible,
            //     showHideBarGraph: true,
            //     showHideLineGraph: false
            // });
        } else {
            if (graphsVisible.showHideLineGraph === false) {
                setGraphsVisible({
                    ...graphsVisible,
                    showHideBarGraph: false,
                    showHideLineGraph: true
                });
            }
            // setGraphData({
            //     ...graphData,
            //     type: 1
            // })
            // setGraphsVisible({
            //     ...graphsVisible,
            //     showHideBarGraph: false,
            //     showHideLineGraph: true
            // });
        }

        console.log("Form Data Value: " + formData.type);
        console.log("Graph Data Value: " + graphData.type);
        console.log("Graph Visible Bar: " + graphsVisible.showHideBarGraph);
        console.log("Graph Visible Line: " + graphsVisible.showHideLineGraph);
    }

    const hideComponent = e => {
        console.log(e);

        switch(e) {
            case "showHideLineGraph":
                setGraphsVisible({
                    showHideLineGraph: !graphsVisible.showHideLineGraph
                });
                console.log("Current graph data type: " + graphData.type);
                console.log("Hide Bar" + graphsVisible.showHideBarGraph);
                console.log("Hide Line" + graphsVisible.showHideLineGraph);
                break;
            case "showHideBarGraph":
                // setGraphData({
                //     ...graphData,
                //     type: 0
                // })
                setGraphsVisible({
                    showHideBarGraph: !graphsVisible.showHideBarGraph
                });
                console.log("Current graph data type: " + graphData.type);
                console.log("Hide Bar" + graphsVisible.showHideBarGraph);
                console.log("Hide Line" + graphsVisible.showHideLineGraph);
                break;
            default:
                break;
        }
    }

    return (
        <div className="App">
            <Generator value={[formData, graphData]} onChange={handleChange} onSubmit={onSubmit}/>
            <div>
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
                {graphsVisible.showHideBarGraph && <BarGraph title={graphData.title} values={graphData.values}/>}
                {graphsVisible.showHideLineGraph && <LineGraph title={graphData.title} values={graphData.values}/>}
            </div>
        </div>
    );
}

export default Grapher;