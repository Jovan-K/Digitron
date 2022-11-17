var tn = 0;
var nt = 0;
var tmnt = 1;
var tnmt = 1;
function pretvori()
{
    var input = document.getElementById("a").value;
    var operacija = input.split(" ");
    const a = parseFloat(operacija[0]);
    const b = parseFloat(operacija[2]);
    var operator = (operacija[1]);
    if (operator == "+"){
        const rezultat = a + b;
        document.getElementById("a").value = rezultat;
    }
    if (operator == "-"){
        const rezultat = a - b;
        document.getElementById("a").value = rezultat;
    }
    if (operator == "*"){
        const rezultat = a * b;
        document.getElementById("a").value = rezultat;
    }
    if (operator == "/"){
        const rezultat = a / b;
        document.getElementById("a").value = rezultat;
    }
    tn = 0;
}
function ocisti()
{
    document.getElementById("a").value = '';
    nt = 0;
    tnmt = 1;
    tmnt = 1;
}
function devet()
{
    document.getElementById("a").value += '9' ;
    nt = 1;
    tnmt = 1;
    tmnt = 0;
}
function osam()
{
    document.getElementById("a").value += '8' ;
    nt = 1;
    tnmt = 1;
    tmnt = 0;
}
function sedam()
{
    document.getElementById("a").value += '7' ;
    nt = 1;
    tnmt = 1;
    tmnt = 0;
}
function sest()
{
    document.getElementById("a").value += '6' ;
    nt = 1;
    tnmt = 1;
    tmnt = 0;
}
function pet()
{
    document.getElementById("a").value += '5' ;
    nt = 1;
    tnmt = 1;
    tmnt = 0;
}
function cetiri()
{
    document.getElementById("a").value += '4' ;
    nt = 1;
    tnmt = 1;
    tmnt = 0;
}
function tri()
{
    document.getElementById("a").value += '3' ;
    nt = 1;
    tnmt = 1;
    tmnt = 0;
}
function dva()
{
    document.getElementById("a").value += '2' ;
    nt = 1;
    tnmt = 1;
    tmnt = 0;
}
function jedan()
{
    document.getElementById("a").value += '1' ;
    nt = 1;
    tnmt = 1;
    tmnt = 0;
}
function nula()
{
    document.getElementById("a").value += '0' ;
    nt = 1;
    tnmt = 1;
    tmnt = 0;
}
function plus()
{
    if(nt != 0){
        if(tn = 1){
            pretvori();
        }
        document.getElementById("a").value += ' + ' 
        tn = 1;
        nt = 0;
    }
    
}
function minus()
{

    if(tnmt != 0){
        if(tn = 1){
            pretvori();
        }
        if(tmnt != 0){
            document.getElementById("a").value += '-' ;
        }
        else{
            document.getElementById("a").value += ' - ' ;
            tnmt = 0;
        }
        tn = 1;
    } 
}
function puta()
{
    if(nt != 0){
        if(tn = 1){
            pretvori();
        }
        document.getElementById("a").value += ' * ' ;
        tn = 1;
        nt = 0;
    }
    
}
function podeljeno()
{
    if(nt != 0){
        if(tn = 1){
            pretvori();
        }
        document.getElementById("a").value += ' / ' ;
        tn = 1;
        nt = 0;
    }
}
function tacka()
{
    document.getElementById("a").value += '.' ;
}


function kvadrat()
{
    if(document.getElementById("a").value != ''){
        document.getElementById("a").value = Math.pow(parseFloat(document.getElementById("a").value), 2);
    }
}

function koren(){
    if(document.getElementById("a").value != ''){
        document.getElementById("a").value = Math.sqrt(parseFloat(document.getElementById("a").value));
    }

}

function bekspejs(){
    if(document.getElementById("a").value != ''){
        document.getElementById("a").value = document.getElementById("a").value.slice(0,-1);
    }    
}