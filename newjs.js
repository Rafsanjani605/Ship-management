





const headerToggle = () =>{
    const togglebutton = document.getElementById('mybtn')
    const toggleDetails = document.getElementById('Toggledetails')
    toggleDetails.classList.toggle('hidden')
    
  }
  


  const offcanvashead = () =>{
    const canvasbutton = document.getElementById('mybtnbg')
    const canvasdetails = document.getElementById('Toggles')
    console.log('clicked')
    canvasdetails.classList.toggle(`Toggle`)


  }

  
 

const arrowupdowncontents = () =>{
  const newBtn = document.getElementById('newbtn');
const contents = document.getElementById('contents');
console.log('clicked')
contents.classList.toggle('contentuserhide')

if (contents.classList.contains('contentuserhide')) {
      newBtn.querySelector('img').setAttribute('src', '/images/Vector 175.svg' );
    } else {
      newBtn.querySelector('img').setAttribute('src', '/images/direction-down 01.svg');
    }


}


// line chart

var options = {
  series: [
    {
      name: "crane1",
      data: [200, 400,280, 650, 400, 650,200]
    },
    {
      name: "crane2",
      data: [400, 800, 600, 800, 250, 650, 800]
    },
    {
      name : "crane3",
      data : [600 , 200,0, 400, 190, 350, 400]
    }
  ],
  chart: {
    height: 150,
    type: 'line',
    zoom: {
      enabled: false
    },
    plotOptions: {
      line: {
        fill: {
          type: 'solid',
          colors: ['#f0f0f0']
        }
      }
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'straight'
  },
 
  grid: {
    row: {
      colors: ['#f3f3f3', 'transparent'],
      opacity: 0.5
    },
  },
  xaxis: {
    categories: ['', '', '', '', '', '', '', '', ''],
  },
  fill: {
    type: ['solid', 'solid', 'solid'],
    opacity: [0.3, 0.3, 0.3],
    colors: ['#6AC446', 'green', '#DFCE33'],
  }
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
