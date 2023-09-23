let button = document.querySelectorAll('button');
let screen = document.querySelector('#input');

// function btnClick(e){
//     alert("Button Clicked");
// }
//button.addEventListener('click', btnClick);


button.forEach(button => {
    button.addEventListener('click', (e)=> {
        //alert(e.target.innerHTML);
        if(e.target.innerHTML == '='){
            let value =eval(screen.innerHTML)
            //alert(value);
            screen.innerHTML = value;
        }
        else if(e.target.innerHTML == 'X'){
            screen.innerHTML ="";
        }
        else{
            screen.innerHTML += e.target.innerHTML;
        }
        //screen.innerHTML += e.target.innerHTML;
    });
  });