/* Traffic */
const hourly = ["3", "6", "9", "12", "15", "18", "21", "00"];
const daily = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const weekly = ["Week1", "Week2", "Week3", "Week4"];
const monthly = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const trafficCanvas = document.getElementById('traffic-chart');



let trafficData = {
    labels: monthly,
    datasets: [{
      data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2300, 2500], // data on side of chart
      backgroundColor: 'rgba(36, 129, 136, .4)',
      borderwidth: 1,
    }]
  };

let trafficOptions = {
    aspectRatio: 2.5,
    animation: {
        duration: 1000
    },
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    },
    legend: {
        display: false
    }
};




let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficData,
    options: trafficOptions
});



/* Bar Chart */

const barChart = document.getElementById('daily-traffic');
const weekDays = ["S", "M", "T", "W", "T", "F", "S"];

let dailyChartData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"], // labels from above code
    datasets: [{
      data: [50, 100, 150, 80, 250, 40, 110], // data on side of chart
      backgroundColor: '#248188',
      borderwidth: 1,
    }]
  };


  let dailyChartOptions = {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    },
    legend: {
        display: false
    }
};

let dailyTrafficChart = new Chart(barChart, {
    type: 'bar',
    data: dailyChartData,
    options: dailyChartOptions
});


/* Doughnut Chart */

const doughnutChart = document.getElementById('doughnutChart');

let doughnutData = {
    labels: ["Desktops", "Tablets", "Phones"],
    datasets: [{
      data: [80, 140, 400],
      backgroundColor: ['#f47d23', '#ee3f46', '#0d5259'],
      borderwidth: 0
    }]
  };

  let doughnutOptions = {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    },
    legend: {
        display: true,
        position: 'right'
    },
    labels: {
        boxWidth: 1,
        fontStyle: 'bold',
        fontColor: 'black'
    }
};

var myDoughnutChart = new Chart(doughnutChart, {
    type: 'doughnut',
    data: doughnutData,
    options: doughnutOptions
});

/* Message User Alert */

const user = document.getElementById("userArea");
const message = document.getElementById("messageArea");
const send = document.getElementById("send");

send.addEventListener("click", function(){

  if (user.value === "" && message.value === ""){
    alert("Please complete both fields before sending")
  } else if (user.value === ""){
      alert("Please select a user to message")
  } else if (message.value === ""){
      alert("Don't forget to complete your message")
  } else {
      alert("Message sent successfully!")
  }

});
