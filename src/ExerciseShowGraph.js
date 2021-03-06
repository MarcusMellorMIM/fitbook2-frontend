import React, { Component } from "react";
import {
    XYPlot,
    XAxis,
    YAxis,
    LabelSeries,
    ChartLabel,
    HorizontalGridLines,
    VerticalGridLines,
    MarkSeries
  } from "react-vis";
  
class ExerciseShowGraph extends Component {

    returnColor =(id) => {
        // Display the colour of the meal, depending on type
        return id===3 ? "red" : 
            id===2 ? "yellow" : "green"
    }

    timeString = (date) => {
        // Used by the time part of a date item .. will return the HH:MI bit of a date
          return !!date ? date.toString().slice(11,13) : 12 
        }
    
    categoriseCalories = (calories) => {
        return calories<250 ? 5 : 
            calories<1000 ? 10 : 15
    }
 
    genGraphData = () => {
        // Render the exercise object into a form the graph object understands
        let data = this.props.exercises.map(exercise => {
          return { x: Date.parse(exercise.exercise_date), 
                    y: this.timeString(exercise.exercise_date), 
                    label:exercise.detail,
                    size: this.categoriseCalories(exercise.totalCalories), 
                    style:{ color:this.returnColor(exercise.exercise_type_id) }, 
                    id:exercise.id };
        });    
        return data;
      };
    
  render() {
    return ( 
        <div>
        
        <h2>Click on the graph, to select an activity to update or delete</h2>
        <XYPlot
        xType="time"
        height={500}
        width={500}
        margin={{ left: 120, right: 20, top: 20, bottom: 120 }}
        >
        <HorizontalGridLines />
        <VerticalGridLines />
        <XAxis title="Date"/>
        <YAxis title="Time" width={100} />
        <MarkSeries
            sizeRange={[5,15]}
            data={this.genGraphData()}
            onValueClick= {(datapoint,event) => this.props.selectExercise(datapoint,event)}
        />
      </XYPlot>
      </div>
    );

}
}

export default ExerciseShowGraph;