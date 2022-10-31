//input 
//tao hai bien 
var number = 0;
var i = 0;
//handle tao vong lap while de xu ly
while (number < 10000) {
    i++
    number += i;
};
//output xuat ra man hinh
document.getElementById("infoNumber").innerHTML = "<p>Số nguyên dương nhỏ nhất: " + i;  

//bai 2
function btnReckoning() {
    //input tao hai bien chua thong tin nhap vao
    var number1 = document.getElementById("number1").value * 1;
    var number2 = document.getElementById("number2").value * 1;
    let rs = 0;
    let a = 1;
    //handle
    while (a <= number2) {
        
        rs += handleReckoning(number1, a);
        a++

    }
    //output xuat ket qua ra man hinh
    document.getElementById("infoNumber2").innerHTML = rs;
};
//ham tinh so mu 
function handleReckoning(a, b) {
    let c = 1;
    let a1 = a
    while (c < b) {
        a = a * a1;
        c++;
   }
    return a;
}

//bai 3
function btnReckoning1() {
    //input tao bien chua so thong tin nhap
    var number3 = document.getElementById("number3").value * 1;
    let rs = 1;
    let a = number3
    //handle
    while (a >= 1) {
        rs = rs * a;
        a--;
    }
    //output xuat ket qua ra man hinh
    document.getElementById("infoNumber3").innerHTML = rs;
}

//bai 4

function btnCreateDiv() {
    //input dom duoc the div
    var infoShowDiv = document.getElementById
        ("infoShowDiv");
    //handle 
    for (var i = 1; i <= 10; i++){
        if (i % 2 === 0) {
            //output xuat ket qua ra man hinh
            infoShowDiv.innerHTML += "<div style=\"background:red\">Div chẵn " + i + "</div>"; 
        }
        else {
            //output xuat ket qua ra man hinh
            
            infoShowDiv.innerHTML +="<div style=\"background:blue\">Div lẻ " + i + "</div>"
        }   
      
    }

    
}


