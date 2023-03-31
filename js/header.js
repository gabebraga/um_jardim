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


function openNav() {
    document.getElementById("mySidepanel").style.width = "100%";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
}


/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openCadastro() {
    document.getElementById("mySidenav").style.width = "40%";
    // document.getElementById("mySidenav").style.display = "block"
    // document.getElementById("main").style.marginRight = "350px";
    document.getElementById("logo").style.visibility = "hidden";
    document.getElementById("img-login").style.visibility = "hidden";
    document.getElementById("myDropdown").style.visibility = "hidden";
    document.getElementById("cadastros").style.visibility = "visible";
    document.getElementById("pesquisa").style.visibility = "hidden";
    document.getElementById("ou").style.visibility = "hidden";
    document.getElementById("main").style.visibility = "hidden";
    document.getElementById("menu-nav").style.visibility = "hidden";
    document.getElementById("nav").style.visibility = "hidden";
    document.getElementById("footer").style.visibility = "hidden";
    document.getElementById("gambiarra").style.display = "inline";
    document.getElementById("gambiarra").style.width = "60%";
    document.body.style.backgroundColor = "grey";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeCadastro() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("logo").style.visibility = "visible";
    document.getElementById("img-login").style.visibility = "visible";
    document.getElementById("myDropdown").style.visibility = "visible";
    document.getElementById("cadastros").style.visibility = "visible";
    document.getElementById("pesquisa").style.visibility = "visible";
    document.getElementById("ou").style.visibility = "visible";
    document.getElementById("main").style.visibility = "visible";
    document.getElementById("menu-nav").style.visibility = "visible";
    document.getElementById("nav").style.visibility = "visible";
    document.getElementById("footer").style.visibility = "visible";
    document.getElementById("gambiarra").style.display = "none";
    document.body.style.backgroundColor = "white";
}
