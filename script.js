function multiplynumbers()
{
    let a=Number(document.getElementById("first").value);
    let b=Number(document.getElementById("second").value);
    multiply=a*b;
    document.getElementById("multiply").value=multiply;
}