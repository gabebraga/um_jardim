// dropdown-login

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                // openDropdown.classList.remove('show');
            }
        }
    }
}


// sidebar
function openNav() {
    document.getElementById("mySidepanel").style.width = "100%";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
}
// botão de quantidade da pdp

var num = document.querySelector("#numero");
var mais = document.querySelector("#mais");
var menos = document.querySelector("#menos");

num = 0;

function less() {
    num--;
    setValue(num);
}

function more() {
    num++;
    setValue(num);
}

function setValue(value) {
    document.getElementById('numero').value = value;
}

setValue(num);