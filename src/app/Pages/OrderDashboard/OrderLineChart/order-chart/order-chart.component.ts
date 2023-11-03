import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-order-chart',
  templateUrl: './order-chart.component.html',
  styleUrls: ['./order-chart.component.css']
})
export class OrderChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  chartOptions = {
		animationEnabled: true,
		theme: "light4",
		axisX:{
			valueFormatString: "DD MMM",
			crosshair: {
				enabled: true,
				snapToDataPoint: true
			},
		},
		axisY: {
			title: "Number of Sales",
			crosshair: {
				enabled: true
			}
		},
		toolTip:{
			shared:true
		},  
		legend:{
			cursor: "pointer",
			verticalAlign: "bottom",
			horizontalAlign: "right",
			dockInsidePlotArea: true,
			itemclick: function(e: any) {
				if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
					e.dataSeries.visible = false;
				} else{
					e.dataSeries.visible = true;
				}
				e.chart.render();
			}
		},
		data: [{
			type: "line",
			showInLegend: true,
			name: "Current Sales",
			lineDashType: "dash",
			markerType: "square",
			xValueFormatString: "DD MMM, YYYY",
			dataPoints: [
				{ x: new Date(2022, 0, 3), y: 650 },
				{ x: new Date(2022, 0, 4), y: 700 },
				{ x: new Date(2022, 0, 5), y: 710 },
				{ x: new Date(2022, 0, 6), y: 658 },
				{ x: new Date(2022, 0, 7), y: 734 },
				{ x: new Date(2022, 0, 8), y: 963 },
				{ x: new Date(2022, 0, 9), y: 847 },
				{ x: new Date(2022, 0, 10), y: 853 },
				{ x: new Date(2022, 0, 11), y: 869 },
				{ x: new Date(2022, 0, 12), y: 943 },
				{ x: new Date(2022, 0, 13), y: 970 },
				{ x: new Date(2022, 0, 14), y: 869 },
				{ x: new Date(2022, 0, 15), y: 890 },
				{ x: new Date(2022, 0, 16), y: 930 }
			]
		},
		{
			type: "line",
			showInLegend: true,
			name: "Previous Sales",
			lineDashType: "dot",
			dataPoints: [
				{ x: new Date(2022, 0, 3), y: 510 },
				{ x: new Date(2022, 0, 4), y: 560 },
				{ x: new Date(2022, 0, 5), y: 540 },
				{ x: new Date(2022, 0, 6), y: 558 },
				{ x: new Date(2022, 0, 7), y: 544 },
				{ x: new Date(2022, 0, 8), y: 693 },
				{ x: new Date(2022, 0, 9), y: 657 },
				{ x: new Date(2022, 0, 10), y: 663 },
				{ x: new Date(2022, 0, 11), y: 639 },
				{ x: new Date(2022, 0, 12), y: 673 },
				{ x: new Date(2022, 0, 13), y: 660 },
				{ x: new Date(2022, 0, 14), y: 562 },
				{ x: new Date(2022, 0, 15), y: 643 },
				{ x: new Date(2022, 0, 16), y: 570 }
			]
		}]
	}

}
