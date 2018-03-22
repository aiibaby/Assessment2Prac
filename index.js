var controls = document.getElementById("controls");
    filename = document.getElementById("filename");
    title = document.getElementById("title");
    description = document.getElementById("description");
    textcolor = document.getElementById("textcolor");
    background = document.getElementById("background");
    distitle = document.getElementById("distitle")
    disdescription = document.getElementById("disdescription")
    num_top = 0;
    num_left = 0;
    num_height = 300;
    disp = document.getElementById("display");
    ndisp = document.getElementById("newdisplay")


document.getElementById("menu").addEventListener("click", function(){
    expandMenu();
});

filename.addEventListener("keyup", function(ev){
    changeBG(ev);
});

title.addEventListener("keypress", function(){
    changeTitle();
});

description.addEventListener("keypress", function(){
    changeDescription();
});

textcolor.addEventListener("change", function(){
    changeColor();
});

document.body.addEventListener("keydown", function(ev){
    moveBG(ev);
});

function expandMenu(){
    controls.style.bottom = "0";
};

function changeColor(){
    distitle.style.color = textcolor.value;
    disdescription.style.color = textcolor.value;
};

function changeDescription(){
    disdescription.innerHTML = description.value;
};

function changeTitle(){
    distitle.innerHTML = title.value;
};

function changeBG(it){
    if(it.keyCode == 13){
        if(filename.value == "horse"){
            background.style.backgroundImage = "url(img/bg1.jpg)";
        } else if(filename.value == "night"){
            background.style.backgroundImage = "url(img/bg2.jpg)";
        } else if(filename.value == "mountain"){
            background.style.backgroundImage = "url(img/bg3.jpg)";
        } else if(filename.value.indexOf("epic") >= 0){
            background.style.backgroundImage = "url(img/bg4.jpg)";
        } else {
            background.style.backgroundImage = "url("+filename.value+")";
        }
    } 
};

function moveBG(keyCode){
    if(keyCode.keyCode == 38){ 
        num_top -= 10; // up
        background.style.backgroundPosition = num_left + "px"+" "+ num_top + "px";
    } else if(keyCode.keyCode == 40){
        num_top += 10; //down
        background.style.backgroundPosition = num_left + "px"+" "+ num_top + "px";
    } else if(keyCode.keyCode == 37) {
        num_left -= 10; //left
        background.style.backgroundPosition = num_left + "px"+" "+ num_top + "px";
    } else if(keyCode.keyCode == 39) {
        num_left += 10; //right
        background.style.backgroundPosition = num_left + "px"+" "+ num_top + "px";
    } else if(keyCode.keyCode == 187){
        num_height += 10; //+
        background.style.height = num_height + "px";
    } else if(keyCode.keyCode == 189){
        num_height -= 10; //-
        background.style.height = num_height + "px";
    }
};

document.getElementById("plus").addEventListener("click", function(){
    var nbackground = document.createElement("div");
        ndistitle = document.createElement("div");
        ndisdescription = document.createElement("div");
        ndiv = document.createElement("div")
    nbackground.className = "backgrounds";
    ndisdescription.className = "disdescriptions";
    ndistitle.className = "distitles";
    ndiv.className = "col-lg-3 col-md-4 col-sm-6 col-12";
    ndisdescription.innerHTML = description.value;
    ndistitle.innerHTML = title.value;
    nbackground.appendChild(ndistitle);
    nbackground.appendChild(ndisdescription);
    ndiv.appendChild(nbackground)
    ndisp.appendChild(ndiv);
    nbackground.style = background.style.cssText;
    ndisdescription.style = disdescription.style.cssText;
    ndistitle.style = distitle.style.cssText;
 
    
    
});