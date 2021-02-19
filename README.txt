I make this project for practice
And this link is the source that I copy and adapt to this project
http://www.codetukyang.com/java/calculator/index.htm

<--Source code-->
<style>
.operation {
height:30;
width:30;
font-size:10 px;
font-family:verdana;
background-color:darkblue;
border:1 px dashed #blue;
color:white }

.special {
height:30;
width:30;
font-size:10 px;
font-family:verdana;
background-color:blue;
border:1 px dashed #222222;
color:white }

.input {
height:30;
width:30;
font-size:10 px;
font-family:verdana;
background-color:black;
border:1 px dashed #111111;
color:white }

.twocols {
height:30;
width:30;
font-size:10 px;
font-family:verdana;
background-color:yellow;
border:1 px dashed #111111;
color:black }

.tworows {
height:60;
width:30;
font-size:18 px;
font-family:verdana;
background-color:white;
border:1 px dashed #111111;
color:black }

.no {
font-family:verdana;
background-color:black;
border:orange;
color:orange; }

.top
{
font-weight:bold;
font-family:verdana;
color:orange;
background-color:444444;
border:0 px
}

.other
{
font-family:verdana;
color:444444;
background-color:black;
border:0 px
}</style>

<--JavaScript-->
<script>
last=0;
result=0;
operation="";
lastMove=true;
function rid()
{
	form.output.value="0";
	last=0;
	result=0;
	operation="";
	lastMove=true;
}
function negate()
{
	if (lastMove==true)
	{
		form.output.value=0;
	}
	form.output.value=form.output.value*-1;
}

function total(num)
{
	val=Math.PI;
	if (num==val || lastMove==true)
	{
		form.output.value=num;
		if (num!=val)
		{
			lastMove=false;
		}
	}
	else
	{	
		result=form.output.value;
		num=result+num;
		form.output.value=num;
		
	}
}
function compute(sign)
{
	switch (operation)
	{
		case "add":	form.output.value=last*1+form.output.value*1;
				break;
		case "subtract":	form.output.value=last-form.output.value;
				break;
		case "multiply":	form.output.value=last*form.output.value;
				break;
		case "divide":	form.output.value=last/form.output.value;
				break;
		case "power": 	form.output.value=Math.pow(last,form.output.value);
				break;
		case "root": 	form.output.value=Math.pow(form.output.value,1/last);
				break;
	}
	
	switch(sign)
	{
		case "sqrt":	form.output.value=Math.sqrt(form.output.value);
					break;
		case "factorial":	form.output.value=factorial(form.output.value);
					break;
		case "sin":		form.output.value=Math.sin((form.output.value*Math.PI)/180);
					break;
		case "cos":		form.output.value=Math.cos((form.output.value*Math.PI)/180);
					break;
		case "tan":		form.output.value=Math.tan((form.output.value*Math.PI)/180);
					break;
		case "LN":		form.output.value=Math.log(form.output.value);
					break;
	}
				
	last=form.output.value*1;
	operation=sign;
	lastMove=true;		
	
}
function factorial(something)
{
	val=1;
	for (k=2; k<=something; k++)
	{
		val*=k;
	}
	return(val);
}

</script>

<form name=form>
<table bgcolor=444444>
<tr>
<th colspan=4 align=center>
<font color=orange face=verdana><b>
CULCULATOR
<tr>
<td align=center valign=bottom colspan=4>
<input type=text class=no name=output value=0>
</td>
</tr>
<tr>
<th colspan=4 height=20 align=center>
<tr>
<td>
<input class=special type=button value=! onClick=compute("factorial");>
<td>
<input class=special type=button value=pi onClick=total(Math.PI);>
<td>
<input class=special type=button value=LN onClick=compute("LN");>
<td>
<input class=twocols type=button value=C/E onClick=rid();>

<tr>
<td>
<input class=special type=button value=^ onClick=compute("power");>
<td>
<input class=special type=button value=sqrt onClick=compute("sqrt");>
<td>
<input class=special type=button value=root onClick=compute("root");>
<td>
<input type=button class=operation value=/ onClick=compute("divide");>
<tr>
<td>
<input class=special type=button value=sin onClick=compute("sin");>
<td>
<input class=special type=button value=cos onClick=compute("cos");>
<td>
<input class=special type=button value=tan onClick=compute("tan");>
<td>
<input class=operation type=button value=* onClick=compute("multiply");>
<tr>
<td>
<input class=input type=button value=1 onClick=total(1);>
<td>
<input class=input type=button value=2 onClick=total(2);>
<td>
<input type=button class=input value=3 onClick=total(3);>
<td >
<input class=operation type=button value=- onClick=compute("subtract");>
<tr>
<td>
<input class=input type=button value=4 onClick=total(4);>
<td>
<input class=input type=button value=5 onClick=total(5);>
<td>
<input class=input type=button value=6 onClick=total(6);>
<td>
<input class=operation type=button value=+ onClick=compute("add");>
<tr>
<td>
<input class=input type=button value=7 onClick=total(7);>
<td>
<input class=input type=button value=8 onClick=total(8);>
<td>
<input class=input type=button value=9 onClick=total(9);>
<td rowspan=2>
<input class=tworows type=button value== onClick=compute("equal");>
<tr>
<td>
<input class=input type=button value=. onClick=total(".");>
<td>
<input class=input type=button value=0 onClick=total(0);>
<td>
<input class=input type=button value=(-) onClick=negate();>
</table>
</form>