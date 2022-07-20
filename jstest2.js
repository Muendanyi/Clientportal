
addEventListener.getElementById;


const getValueInput = () =>{
        let inputValue = document.getElementById("fname").value; 
        document.getElementById("valueInput").innerHTML = inputValue; 
      }


function check(){
    var basic = 0;
    var add = 0;
    if(document.getElementById("id_1").checked) {
     add += document.getElementById("id_1").value;
    }
    if(document.getElementById("id_2").checked) {
     add += document.getElementById("id_1").value;
    }
    if(document.getElementById("id_3").checked) {
     add += value;
    }
  
    if(document.getElementById("id_4").checked) {
     add += 1000;
    }
    if(document.getElementById("id_5").checked) {
     add += 1000;
    }
    if(document.getElementById("id_6").checked) {
     add += 1000;
    }
    var p = basic + Number(add);
    var price = p ;
    document.getElementById('total').innerHTML = price;
   }