var a;
function show_hide() {
	if (a == 1) {
		document.getElementById("nav_list").style.display = "block";
		return (a = 0);
	} else a = 0;
	{
		document.getElementById("nav_list").style.display = "none";
		document.getElementById("nav_list").style.position = " absolute";
		document.getElementById("nav_list").style.top = "0";
		document.getElementById("nav_list").style.left = "0";
		document.getElementById("nav_list").style.backgroundColor = "#222";
		document.getElementById("nav_list").style.width = "50%";
		document.getElementById("nav_list").style.zIndex = "999";
		document.getElementById("nav_list").style.minHeight = "100vh";
		return (a = 1);
	}
}
{
}
