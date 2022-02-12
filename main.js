var mouseEvent = "empty";
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    color=document.getElementById("color").value;
    width_of_line = document.getElementById("width").value;
    radius = document.getElementById("radius").value;
    mouseEvent = "mouseDown";
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
mouseEvent = "mouseup";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
mouseEvent = "mouseleave";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
mouseEvent = "mousemove";
current_position_of_mouse_x = e.clientX - offSetLeft;
current_position_of_mouse_y = e.clienty - offSetTop;
if (mouseEvent == "mouseDown"){
    console.log("Current position of x and y coordinates");
    console.log("x = " + current_position_of_mouse_x + " Y = " + current_position_of_mouse_y);
    ctx.beginPath();
    ctx.color = color;
    ctx.lineWidth = width;
    ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius, 0, 2*Math.PI);
    ctx.stroke();
}
}