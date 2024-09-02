// default number of squares
let sqrNo = 16;

const changeSqrNo = document.createElement('button');
changeSqrNo.textContent = 'Enter number of squares per side';
document.body.appendChild(changeSqrNo);

const container = document.createElement('div')
container.classList.add('container');

// show board with dafault number of squares
showBoard(sqrNo);



//New board with needed numver of squares
changeSqrNo.addEventListener('click',() => {
    sqrNo = null;
    while(!(Number.isInteger(sqrNo) && sqrNo>0)) {
    sqrNo = Number(prompt("How many squares" ,80));
    }
    container.innerHTML = '';

    showBoard(sqrNo);
});



function showBoard(sqrNo) {
//create an array to store opacity history of the squares 
    let arr = [];
    const sideLenPercent = 100/sqrNo;

    for (let i = 0; i < sqrNo**2; i++) {
      let item = document.createElement('div');
      item.classList.add(`item-${i}`);
      item.style.height = `${sideLenPercent}%`
      item.style.width = `${sideLenPercent}%`

      container.appendChild(item);
    }
    document.body.appendChild(container)

    container.addEventListener('mouseover',(event) => {
        const square = event.target;
        let bgColor = square.style.backgroundColor;

        let opacity;
        // color it if not colored yet
	if(!bgColor) {

        // uncomment these if you random color
        // random colot for each square
        //const No1 = Math.floor(Math.random()*361);
        //const No2 = Math.floor(Math.random()*101);
        //const No3 = Math.floor(Math.random()*101);
        //const randomColor = `hsl(${No1},${No2}%,${No3}%)`;

        //square.style.backgroundColor = randomColor;
	square.style.backgroundColor = 'black';
        // intial opacity
	opacity = 10;
	arr.push(square);
      	arr.push(opacity);
        }

        // if colored but opacity<100% ,++ by 10%
	else {
          //index of stored opacity record of this square
	  let index = (arr.indexOf(square))+1;
          opacity = arr[index];
	  if(opacity < 100) {
	     opacity +=10;
        // add the opacity to record array
	     arr[index] = opacity;
	  }
	}
        square.style.opacity = `${opacity}%`
        });
}
