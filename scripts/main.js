//function to drow the bar chart
const drawBarChart = function (data, options, element) {
  //data: data for bar chart
  //options: options to change the width or height of chart
  //element: jQuery for chart

  //get heigthest bar
  let maxHeight = 0;
  let unitHeigth = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i] > maxHeight) {
      maxHeight = data[i];
      unitHeigth = maxHeight / data[i];
    }
  }

  //draw bars
  for (let i = 0; i < data.length; i++) {
    //create new bar
    var newBar = document.createElement("div");
    newBar.classList.add('newBarDiv');
    //set color
    document.getElementByClass('newBarDiv').style.backgroundColor = green;
    //set width
    document.getElementByClass('newBarDiv').width = options.width / data.length;
    //set height
    document.getElementByClass('newBarDiv').height = unitHeigth * data[i];
    //add number
    newBar.innerHTML = data[i];

    document.getElementById('bars').appendChild(newBar);
  }
};

let data = [1, 2, 3, 4, 5];
let options = {
  width: 960,
  height: 600
}
let element;

drawBarChart(data, options, element);

function changeBarColorFun(value) {
  document.getElementByClass('newBarDiv').style.backgroundColor = value;
}

function changeLabelColorFun(value) {
  document.getElementById('barLabel').style.backgroundColor = value;
}

function changeBarGapFun() {
  let barGap = document.getElementById('barGap').value;
  document.getElementByClass('newBarDiv').style.padding = barGap;
}
