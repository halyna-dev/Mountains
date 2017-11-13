function buttonHandler(){
    var batt = document.getElementById('hamburger-btn');
    var menu = document.getElementById('menu');
    var menu_top = document.getElementById('menu-top');
    if (window.matchMedia("(min-width: 600px)").matches) {
        /* the viewport is at least 600 pixels wide */
        return;
    } else {
        /* the viewport is less than 600 pixels wide */
        batt.classList.toggle("active");
        menu.classList.toggle("menu-min");
        if (menu_top.style.display == "block"){
            menu_top.style.display = "none";
        }
        else{
            menu_top.style.display = "block";
        }
    };
};

(function() {
    var batt = document.getElementById('hamburger-btn');
    var menu = document.getElementById('menu');
    var menu_top = document.getElementById('menu-top');

    window.addEventListener("resize", resizeThrottler, false);

    var resizeTimeout;
    function resizeThrottler() {
        // ignore resize events as long as an actualResizeHandler execution is in the queue
        if ( !resizeTimeout ) {
            resizeTimeout = setTimeout(function() {
                resizeTimeout = null;
                actualResizeHandler();

                // The actualResizeHandler will execute at a rate of 15fps
            }, 66);
        }
    }

    function actualResizeHandler() {
        // handle the resize event
        if (window.matchMedia("(min-width: 600px)").matches) {
            /* the viewport is at least 600 pixels wide */
            if (menu_top.style.display == "none") {
                menu_top.style.display = "block";
            };
            batt.classList.remove("active");
            menu.classList.remove("menu-min");
        }
        else{
            if (menu_top.style.display == "block") {
                menu_top.style.display = "none";
            };
        }
    };

}());