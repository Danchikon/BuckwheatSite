var elevationData = [

  ];
  
  // Now create the chart
  Highcharts.chart('container', {
  
    chart: {
      type: 'area',
      zoomType: 'x',
      panning: true,
      panKey: 'shift',
      scrollablePlotArea: {
        minWidth: 600
      }
    },

  
    title: {
      text: 'Ціна'
    },
    credits: {
      enabled: false
    },
  
  
    xAxis: {
      labels: {
        format: '{value} km'
      },
      minRange: 5,
      title: {
        text: 'Distance'
      },
      accessibility: {
        rangeDescription: 'Range: 0 to 187.8km.'
      }
    },
  
    yAxis: {
      startOnTick: true,
      endOnTick: false,
      maxPadding: 0.35,
      title: {
        text: null
      },
      labels: {
        format: '{value} m'
      }
    },
  
    tooltip: {
      headerFormat: 'Distance: {point.x:.1f} km<br>',
      pointFormat: '{point.y} m a. s. l.',
      shared: false
    },
  
    legend: {
      enabled: false
    },
  
    series: [{
      accessibility: {
        keyboardNavigation: {
          enabled: false
        }
      },
      data: elevationData,
      lineColor: Highcharts.getOptions().colors[1],
      color: Highcharts.getOptions().colors[2],
      fillOpacity: 0.5,
      name: 'Elevation',
      marker: {
        enabled: false
      },
      threshold: null
    }]
  
  });