function myFunction (){
    document.write( "Hello world <br> " )
}
myFunction ();

function docMsg (){
    var a = 19;
    var b = 11;
    document.write(a + b + " <br> ");
}
docMsg ();

function myNum (){
    var c = 458;
    var e = c%10;
    document.write(e,"<br>")
}
myNum ();

function numCube(){
    var s = 4;
    var res = s * s * s;
    document.write(s +"<sup>3</sup>=" + res);
}

function myAsgnmt (){
    var z = 200;
    var x = 30;
    if (z > x){
        document.write(z * x);
    }
    else {
        document.write(z - x);
    }
}

function subNum (n1 ,n2){
    var t = n1 * n2;
    document.write(t)
}
subNum(10,65);
subNum(12,12);