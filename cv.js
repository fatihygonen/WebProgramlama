(function () {
    window.addEventListener("load",main);

    function main () {
        let myBtn = document.getElementById("buton");
        myBtn.addEventListener("click",gizlegoster);

    }
    function gizlegoster () {
        var x = document.getElementById("cv");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }    
    }
}) () ;