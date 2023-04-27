
var loader = document.getElementById("pre-loader");
window.addEventListener("load", function () {
  loader.style.display = "none";
});


const navbar = document.querySelector('.navbar');
const whiteBar = document.querySelector('.white-bar');
const navLinks = document.querySelectorAll('.navbar ul li a');

window.addEventListener('scroll', function() {
  if (window.scrollY > navbar.offsetHeight) {
    whiteBar.classList.add('active');
    navLinks.forEach(function(link) {
      link.style.color = 'blue';
    });
  } else {
    whiteBar.classList.remove('active');
    navLinks.forEach(function(link) {
      link.style.color = 'white';
    });
  }
});



// $('.carousel').carousel({
//   pause: "false" /* Change to true to make it paused when your mouse cursor enter the background */
// });

// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    
//     document.getElementById("navbar").style.background = "#FFFF";
//   } else {
   
//     document.getElementById("navbar").style.background = "none";
//   }
// }








const slider = document.querySelector('[data-carousel]');
const slides = [...document.querySelectorAll('.Wallop-item')]
this.wallop = new Wallop(slider);

let prev = 0

const removePrevClasses = (index) => {
	let prevClass
	if (slides[index].classList.contains('Wallop-item--hidePrevious')) {
		prevClass = 'Wallop-item--hidePrevious'
	} else if (slides[index].classList.contains('Wallop-item--hideNext')) {
		prevClass = 'Wallop-item--hideNext'
	}
	
	if (prevClass) {
		setTimeout(() => {
		slides[index].classList.remove(prevClass)
	}, 600)
	}
}

const onChange = () => {
	removePrevClasses(prev)
	prev = this.wallop.currentItemIndex
}

this.wallop.on('change', onChange);



























let burger = document.getElementById("burger");
let overlay = document.querySelector("section");
let heroImage = document.querySelector(".hero-image");
let showMenu = false;
let del = 3;
let i = 1;

let tl = gsap.timeline({
  repeat: -1,
  yoyo: true,
  ease: "expo.out"
});

overlay.style.display = "none";

burger.addEventListener("click", (e) => {
  showMenu = !showMenu;
  if (showMenu) {
    burger.classList.add("active");
    overlay.style.display = "block";
    gsap.to(overlay, 1, {
      clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
      ease: "expo.in"
    });
  } else {
    burger.classList.remove("active");
    gsap.to(overlay, 1, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      ease: "expo.out",
      onComplete: () => (overlay.style.display = "none")
    });
  }
});

gsap.set(["#hero-1 h2, #hero-1 h1, #hero-1 h3"], {
  clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
});

gsap.set(
  [
    `#hero-2 h2, #hero-3 h2, #hero-4 h2, #hero-5 h2,
     #hero-2 h1, #hero-3 h1, #hero-4 h1, #hero-5 h1,
     #hero-2 h3, #hero-3 h3, #hero-4 h3, #hero-5 h3`
  ],
  {
    clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"
  }
);

while (i < 5) {
  tl.to(`#hero-${i} h2`, 0.9, {
    clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
    delay: del
  })
    .to(
      `#hero-${i} h1`,
      0.9,
      {
        clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"
      },
      "-=0.3"
    )
    .to(
      `#hero-${i} h3`,
      0.9,
      {
        clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"
      },
      "-=0.3"
    )
    .to(
      `#hero-${i} .hi-${i}`,
      0.7,
      {
        clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"
      },
      "-=1"
    )
    .to(`#hero-${i + 1} h2`, 0.9, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
    })
    .to(
      `#hero-${i + 1} h1`,
      0.9,
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
      },
      "-=0.3"
    )
    .to(
      `#hero-${i + 1} h3`,
      0.9,
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
      },
      "-=0.3"
    );

  i++;
}



