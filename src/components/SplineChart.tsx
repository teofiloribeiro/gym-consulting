import React, { Component } from 'react';
import  DataPoints  from '../util/DataPoints';
import CanvasJSReact from './assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


const SplineChart = (props: any) => {

		let dataPointsList = props.dataPoints;

		const options = {
			animationEnabled: true,
			title:{
				text: "Histórico de peso"
			},
			axisX: {
				valueFormatString: "MMM"
			},
			axisY: {
				suffix:"Kg",
				includeZero: false
			},
			data: [{
				yValueFormatString: "#,###Kg",
				xValueFormatString: "MMMM",
				type: "spline",
				dataPoints: dataPointsList
				
			}]
		}
		
		return (
		<div>
			<CanvasJSChart options = {options} />
		</div>
		);
	
}

export default SplineChart;       
