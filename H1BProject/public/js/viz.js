//chart1 starts here
$.getJSON( "/getChart1Data", function( result ) {
  	
  	console.log(result);
  	var data = [];
  	var companyNames=[];
  	// result.data.length
  	for(var i = 0; i < 6; i++) {
	    var obj = result.data[i];
		//console.log(result.data);
 		companyNames.push(obj._id.substring(0,9));
	    data.push(obj.total);

	}


var ctx = document.getElementById("myChart1").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
         labels: companyNames,
        datasets: [{
            // label: ' Top 10 sponsored companyNames',
            data: data,
            
            backgroundColor: [
                "#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850",
                'rgba(255, 159, 64, 0.2)'
            ],
            
        }]
    },
    options: {

    	title: {
    display: true,
    text: 'Top 10 sponsored roles',
    position: 'top'
},

    
        scales: {

            yAxes: [{
                ticks: {
                    beginAtZero:true,
                    fontSize:17,
                    autoSkip:false
                }
            }],
            xAxes:[{
            	ticks: {
                    autoSkip:false,
                    fontSize:13,
                   
                    
                }

            }]

        }
    }
});
}); // chart1 ends here


//chart2 starts here

$.getJSON( "/getChart2Data", function( result ) {
  	
  	console.log(result);
  	var data = [];
  	var companyNames=[];
  	// result.data.length
  	for(var i = 0; i < 6; i++) {
		var obj = result.data[i];
		//console.log(result.data);
 		companyNames.push(obj._id);
	    data.push(obj.total);

	}

var ctx = document.getElementById("myChart2").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: companyNames,
        datasets: [{
           
            data: data,
            
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {

    	title: {
    display: true,
    text: 'Top 10 sponsored roles',
    position: 'top'
  }
       
    }
});

}); //chart2 ends here



// chart3 starts here
$.getJSON( "/getChart3Data", function( result ) {
  	
  	console.log(result);
  	var data = [];
  	var companyNames=[];
  	
  	for(var i = 0; i < result.data.length; i++) {
		var obj = result.data[i];
		//console.log(result.data);
 		companyNames.push(obj._id.CASE_STATUS);
	    data.push(obj.count);

	}

var ctx = document.getElementById("myChart3").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: companyNames,
        datasets: [{
            label: 'CASE_STATUS for data_engineer role',
            data: data,
            
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true,
                    fontSize:17,
                    autoSkip:false
                }
            }],
            xAxes:[{
            	ticks: {
                    autoSkip:false,
                    fontSize:13
                    
                }

            }]

        }
    }
});

}); //chart3 ends here



// chart4 starts here
$.getJSON( "/getChart4Data", function( result ) {
  	
  	// console.log(result);
  	var data = [];
  	var years=[];
  	console.log(result);
  	for(var i = result.data.length-1; i >= 0; i--) {
		var obj = result.data[i];
		//console.log(result.data);
 		years.push(obj._id);
	    data.push(obj.count);

	}

var ctx = document.getElementById("myChart4").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: years,
        datasets: [{
            label: '2016 vs 2015',
            data: data,
            
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
               
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
               
            ],
            borderWidth: 1
        }]
    },
    options: {
    	
 
         showLines: true
    }
});

}); //chart4 ends here


