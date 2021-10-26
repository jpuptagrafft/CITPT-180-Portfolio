var hamActive = false;
var viewportwidth;
const Nav = document.querySelectorAll('#Nav');
const Ham = document.querySelector('#hamMenu');
function hamSwitch(){
    console.log("click!");
    if(hamActive){
        hamActive = false;
    }
    else{
        hamActive = true;
    }
    update();
}
function update(){
        if (typeof window.innerWidth != 'undefined')
        {
        viewportwidth = window.innerWidth;
        }
        else if (typeof document.documentElement != 'undefined'
        && typeof document.documentElement.clientWidth !=
        'undefined' && document.documentElement.clientWidth != 0)
        {
        viewportwidth = document.documentElement.clientWidth;
        }
        else
        {
        viewportwidth = document.getElementsByTagName('body')[0];
        }
        console.log(viewportwidth + " " + hamActive.toString())
        if(viewportwidth > 640 || hamActive){
        Nav.forEach(function(inNav){
            inNav.style.display = "block";
        });
        }else{
            Nav.forEach(function(inNav){
                inNav.style.display = "none";
            });
        }
        if(hamActive && viewportwidth <= 640){
            Ham.style.backgroundColor = "#2858d1";
            document.querySelector('#logoAndHam').style.borderBottom = "8px solid #2858d1";
        }
        else{
            Ham.style.backgroundColor = "#4d28d1";
            document.querySelector('#logoAndHam').style.borderBottom = "none";
        }
}
Ham.addEventListener("click", hamSwitch);
function main(){

}