import React, { Component } from 'react';
import  DataPoints  from '../util/DataPoints';
import CanvasJSReact from './assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


const SplineChart = (props: any) => {

		const options = {
			animationEnabled: true,
			title:{
				text: props.titleText
			},
			axisX: {
				valueFormatString: "MMM"
			},
			axisY: {
				suffix:props.axisYsuffix,
				includeZero: false
			},
			data: [{
				yValueFormatString: "#,###Kg",
				xValueFormatString: "MMMM",
				type: "spline",
				dataPoints: props.dataPoints
				
			}]
		}
		
		return (
		<div>
			<CanvasJSChart options = {options} />
		</div>
		);
	
}

export default SplineChart;       
