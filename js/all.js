window.onload = function () {
		var chart = new CanvasJS.Chart("chartContainer",
		{      
			title:{
				text: "商家目前累積正負評價"
			},
      animationEnabled: true,
			axisY :{
				includeZero: false,
				maximum: 1100,
				suffix: "筆",
        interval: 100
			},
			axisX: {
				title: "商家註冊後累積月份"
			},
			toolTip: {
				shared: true,
				content: "<span style='\"'color: {color};'\"'><strong>{name}</strong></span> {y}"
			},

			data: [
			{        
				type: "splineArea", 
				showInLegend: true,
				name: "正面評價",
				dataPoints: [
				{x: 1, y: 30},
				{x: 2, y: 70},
				{x: 3, y: 100},
				{x: 4, y: 140},
				{x: 5, y: 230},
				{x: 6, y: 310},
				{x: 7, y: 420},
				{x: 8, y: 560},
				{x: 9, y: 640},
				{x: 10, y: 810},
				{x: 11, y: 1050}
				]
			},
			{        
				type: "splineArea",  
				name: "負面評價",
				showInLegend: true,
				dataPoints: [
		        {x: 1, y: 20},
		        {x: 2, y: 30},
		        {x: 3, y: 50},
				{x: 4, y: 40},
				{x: 5, y: 60},
				{x: 6, y: 90},
				{x: 7,y: 140},
				{x: 8,y: 210},
				{x: 9, y: 310},
				{x: 10, y: 460},
				{x: 11, y: 610}

				]
			}


			]
		});

chart.render();

    var chart2 = new CanvasJS.Chart("second_chart",
    {
      title:{
        text: "台北翡翠水庫&高雄南化水庫蓄水量"
      }, 
      animationEnabled: true,   
      axisY :{
				
				maximum: 100,
				suffix: "%",
        		interval: 10
			},
	  axisX: {
				title: "歷年蓄水量",
				interval:1,
				suffix: "年"
			},           
      data: [
      {        
        type: "splineArea",
        color: "rgba(255,0,0,.7)",
        name: "南化水庫(每年五月)",
        dataPoints: [
        {x: 2005, y: 71.49},     
        {x: 2006, y: 42.43},     
        {x: 2007, y: 26.41},     
        {x: 2008, y: 31.24},     
        {x: 2009, y: 58.76},     
        {x: 2010, y: 20.83},     
        {x: 2011, y: 26.05},     
        {x: 2012, y: 47.66},     
        {x: 2013, y: 56.95},     
        {x: 2014, y: 23.52},     
        {x: 2015, y: 18.33},               
        ]
      },
      {        
        type: "splineArea",
        name: "翡翠水庫(每年五月)",
        color: "rgba(0,255,0,.7)",
        dataPoints: [
        {x: 2005, y: 72.59},     
        {x: 2006, y: 73.98},     
        {x: 2007, y: 69.3},     
        {x: 2008, y: 74.22},     
        {x: 2009, y: 66.11},     
        {x: 2010, y: 65.45},     
        {x: 2011, y: 66.83},     
        {x: 2012, y: 74.53},     
        {x: 2013, y: 86.66},     
        {x: 2014, y: 78.23},     
        {x: 2015, y: 85.96},              
        ]
      }             
      
      ]
    });

    chart2.render();



    var dps = []; // dataPoints

		var chart3 = new CanvasJS.Chart("third_chart",{
			title :{
				text: "即時資料更新"
			},			
			data: [{
				type: "line",
				dataPoints: dps 
			}]
		});

		var xVal = 0;
		var yVal = 100;	
		var updateInterval = 20;
		var dataLength = 500; // number of dataPoints visible at any point

		var updateChart = function (count) {
			count = count || 1;
			// count is number of times loop runs to generate random dataPoints.
			
			for (var j = 0; j < count; j++) {	
				yVal = yVal +  Math.round(Math.random() *100 -50);
				dps.push({
					x: xVal,
					y: yVal
				});
				xVal++;
			};
			if (dps.length > dataLength)
			{
				dps.shift();				
			}
			
			chart3.render();		

		};

		// generates first set of dataPoints
		updateChart(dataLength); 

		// update chart after specified time. 
		setInterval(function(){updateChart()}, updateInterval); 


		var chart4 = new CanvasJS.Chart("fourth_chart",
		{
			zoomEnabled: true,
			animationEnabled: true,
			title:{
				text: "縮放圖表(隨機資料)" 
			},
			axisX :{
				labelAngle: -30
			},
			axisY :{
				includeZero:false
			},
			data: data  
		});
		chart4.render();

	  }

	

		var limit = 100000;    

		var y = 0;
		var data = []; var dataSeries = { type: "line" };
		var dataPoints = [];
		for (var i = -limit/2; i <= limit/2; i++) {
			y += (Math.random() * 10 - 5);
			dateTime = new Date(1960, 08, 15);

			// dateTime.setMilliseconds(dateTime.getMilliseconds() + i);
			// dateTime.setSeconds(dateTime.getSeconds() + i);
			// dateTime.setMinutes(dateTime.getMinutes() + i);
			// dateTime.setHours(dateTime.getHours() + i);
			dateTime.setDate(dateTime.getDate() + i);
			// dateTime.setMonth(dateTime.getMonth() + i);
			// dateTime.setFullYear(dateTime.getFullYear() + i);

			dataPoints.push({
				x: dateTime,
				y: y
			});
		}

		dataSeries.dataPoints = dataPoints;
		data.push(dataSeries);     