function add()
{
	var a;
	var b;
	var r;

	if (document.getElementById("txt1").value != "" && document.getElementById("txt2").value != "")
	{
		a = parseInt(document.getElementById("txt1").value);

		b = parseInt(document.getElementById("txt2").value);

		r = a+b;

		document.getElementById("p1").innerHTML="The addition answer is " + r + ".";
	}
	else
	{
		document.getElementById("p1").innerHTML="Please enter a value into the textbox.";
	}
}
function sub()
{
	var c;
	var d;
	var r2;
	
	if (document.getElementById("txt3").value != "" && document.getElementById("txt4").value != "")
	{
		c = parseInt(document.getElementById("txt3").value);

		d = parseInt(document.getElementById("txt4").value);

		r2 = c-d;

		document.getElementById("p2").innerHTML="The subtraction answer is " + r2 + ".";
	}
	else
	{
		document.getElementById("p2").innerHTML="Please enter a value into the textbox.";
	}
}
function mul()
{
	var e;
	var f;
	var r3;
	
	if (document.getElementById("txt5").value != "" && document.getElementById("txt6").value != "")
	{
		e = parseInt(document.getElementById("txt5").value);

		f = parseInt(document.getElementById("txt6").value);

		r3 = e*f;

		document.getElementById("p3").innerHTML="The multiplication answer is " + r3 + ".";
	
	}
	else
	{
	
		document.getElementById("p3").innerHTML="Please enter a value into the textbox.";
	}
}
function div()
{
	var g;
	var h;
	var r4;
	
	if (document.getElementById("txt8").value != "0" && document.getElementById("txt7").value != "" && document.getElementById("txt8").value != "") 
	{
		g = parseInt(document.getElementById("txt7").value);

		h = parseInt(document.getElementById("txt8").value);

		r4 = g/h;

		document.getElementById("p4").innerHTML="The division answer is " + r4 + ".";
	}
	else
	{
		document.getElementById("p4").innerHTML="Please enter a value into the textbox.";
	}
}

