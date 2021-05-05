function update_data(){
    var date = new Date();
    var setTime = document.getElementById("setTime");
    setTime.innerHTML = date.getHours()+":"+date.getMinutes();
    var setDate = document.getElementById("setDate");
    setDate.innerHTML = date.getDate()+"-"+parseInt(date.getMonth()+1)+"-"+date.getFullYear();
}
onload = update_data();
setInterval(update_data,100);

function getcolor(){
    var Get_Color = document.getElementById("setColor").value;
    localStorage.setItem("color",Get_Color);
    document.getElementById("time").style.background = localStorage.getItem("color");
    document.getElementById("inside_box").style.background = localStorage.getItem("color");
    document.getElementById("body").style.background = localStorage.getItem("color"); 
}

function setColor(){
    document.getElementById("setColor").value = localStorage.getItem("color");
    document.getElementById("time").style.background = localStorage.getItem("color");
    document.getElementById("inside_box").style.background = localStorage.getItem("color");
    document.getElementById("body").style.background = localStorage.getItem("color");  
}
setInterval(setColor,100);