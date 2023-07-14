jQuery(document).ready(function($) {
	var mastheadheight = $('.ds-header').outerHeight();
	$(".ds-banner").css("margin-top" , mastheadheight);
  
	$(window).scroll(function(){
	  if ($(window).scrollTop() >= 10) {
		$('.ds-header').addClass('ds-fixed-header');
	  }
	  else {
		$('.ds-header').removeClass('ds-fixed-header');
	  }
	}).scroll();
  
	// Smooth scrolling for bookmark links
	$('.bookmark-link').click(function(e) {
	  e.preventDefault();
	  var target = $(this).attr('data-target');
	  var offset = $(target).offset().top - mastheadheight;
	  $('html, body').animate({
		scrollTop: offset
	  }, 800);
	});

	$(document).ready(function() {
		// Dark mode switch
		var modeSwitch = document.getElementById("mode-switch");
		var darkMode = localStorage.getItem("darkMode");
		if (darkMode === "enabled") {
		  document.body.classList.add("dark-mode");
		  modeSwitch.checked = true;
		}
	  
		modeSwitch.addEventListener("change", function() {
		  if (modeSwitch.checked) {
			document.body.classList.add("dark-mode");
			localStorage.setItem("darkMode", "enabled");
		  } else {
			document.body.classList.remove("dark-mode");
			localStorage.setItem("darkMode", null);
		  }
		});
	  });

	  // Scroll to the top if you click my name or the logo of my name 
	  function scrollToTop() {
		const scrollOptions = {
		  top: 0,
		  behavior: 'smooth'
		};
	  
		// Adjust the duration by changing the value of the 'duration' variable
		const duration = 1000; // Duration in milliseconds
	  
		const scrollStep = Math.PI / (duration / 15);
		const cosParameter = window.scrollY / 2;
	  
		let scrollCount = 0;
		let scrollMargin;
	  
		function step() {
		  setTimeout(function() {
			if (window.scrollY !== 0) {
			  scrollCount = scrollCount + 1;
			  scrollMargin = cosParameter - cosParameter * Math.cos(scrollCount * scrollStep);
			  window.scrollTo(0, (scrollMargin + 1));
			  step();
			}
		  }, 15);
		}
	  
		step();
	  }
	  
	
	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			console.log(entry)
			if (entry.isIntersecting) {
				entry.target.classList.add('show');
			} else {
				entry.target.classList.remove('show');
			}
		});
	})

	const hiddenElements = document.querySelectorAll('.hidden');
	hiddenElements.forEach((el) => observer.observe(el));
	  
  
  });
  