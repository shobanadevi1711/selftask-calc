//function to display value//
function dis(val)
{
    document.getElementById("result").value+=val;
}
//function for evalvuating the values//
function solve()
{
    var x = document.getElementById("result").value;
    let y = eval(x);
    document.getElementById("result").value=y;
}
//function to clr screen//
function clrscr()
{
    document.getElementById("result").value=""
}