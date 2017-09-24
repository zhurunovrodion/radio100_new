function addHumburgerButtonHandlers() {
    $('.menuHamburgerButton').on('click', onHumburgerButtonClick)
}


function onHumburgerButtonClick(e){
	var $menuButton = $(e.currentTarget);
	
	if ($menuButton.is('.js-menuHamburgerButton-active')) {
        $menuButton.removeClass('js-menuHamburgerButton-active');
        


    } else {

        $menuButton.addClass('js-menuHamburgerButton-active');
    }
}

/*
function addHumburgerButtonHandlers() {
 
  "use strict";
 
  var toggles = document.querySelectorAll(".menuHamburger");
 
  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };
 
  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {

      e.preventDefault();
      (this.classList.contains("js-menuHamburger-active") === true) ? this.classList.remove("js-menuHamburger-active") : this.classList.add("js-menuHamburger-active");
    });
  }
 
}*/