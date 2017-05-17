google.charts.load("current", {packages:["corechart"]});
          google.charts.setOnLoadCallback(drawChart);
          function drawChart() {
            var data = google.visualization.arrayToDataTable([
              ['Language', 'Speakers (in millions)'],
              ['전국-일반',  5.85],
              ['전국-특별',  1.66],
              ['전국-사회자', 0.316],
              ['기타', 0.0791]
            ]);

          var options = {
            legend: 'none',
            pieSliceText: 'label',
            pieStartAngle: 100,
            backgroundColor:'transparent',
            marginLeft:20
          };

            var chart = new google.visualization.PieChart(document.getElementById('piechart'));
            chart.draw(data, options);