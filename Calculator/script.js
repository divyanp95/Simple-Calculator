function display(n)
{
    if(n>16)
    {
        document.getElementById("display").text = "DISPLAY LIMIT MET";
    }
    document.getElementById("display").value+=n;
}
function clr()
{
    document.getElementById("display").value="";

}
function perform(){
    var val1 = document.getElementById("display").value;
    
    var val2 = eval(val1);
    document.getElementById("display").value = val2;
}
function addition(a,b)
{
    return a+b;
}
function substraction(a,b)
{
    return a-b;
}
function multiply(a,b)
{
    return a*b;
}
function division(a,b)
{
    return a/b;
}