function tdAssign(n1,n2,n3){
    if (n1 > n2){
        document.write("n2 + n3 =" + (n2 + n3) + "<br>" )
    }
    else{
        document.write("n1 % n3 =" + (n1 % n3) + "<br>")
    }
}
tdAssign (1000,2000,300);    

function areaOfRect (wid , hei){
    var area = wid * hei;
    return area;
}
var c = areaOfRect (10 ,20);
document.write("Area = "+ c +"<br>");

function proDuct (a1 ,a2, a3){
    var g = a1 * a2 * a3 ;
    return g;
}
var t = proDuct (10, 20, 30);
document.write("product = " + t +"<br>" )

function grade (arg){
    if (arg<=100 && arg >=80){
        return "A grade"
    }
    else if (arg<=80 && arg >=61){
        return "B grade"
    }
    else if (arg<=60 && arg >=35){
        return "C grade"
    }
    else{
        return "Fail"
    }
}
var  y = grade(45);
document.write(y);