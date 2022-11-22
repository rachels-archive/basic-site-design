const scrollButton = document.querySelector(".scroll")
const elm = document.querySelector('#about');

scrollButton.addEventListener("click", () => { scrollIt(elm) });

// function to scroll home section to impact section
function scrollIt(element) {
  window.scrollTo({
    'behavior': 'smooth',
    'left': 0,
    'top': element.offsetTop
  });
}

// faq list toggling
var acc = document.getElementsByClassName("toggle-title");
var i;
const toggleIcon = document.getElementsByClassName("toggle-icon");

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }

    if (this.classList.contains("active")) {
      this.firstElementChild.innerHTML = "<b>-<b>";
    } else {
      this.firstElementChild.innerHTML = "<b>+<b>";
    }
  });
}

// functions to start counter for impact section
function startCounter() {
  const counters = document.querySelectorAll('.counter');
  const speed = 400; // The lower the slower

  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;

      // Lower inc to slow and higher to slow
      const inc = target / speed;

      // console.log(inc);
      // console.log(count);

      // Check if target is reached
      if (count < target) {
        // Add inc to count and output in counter
        counter.innerText = Math.ceil(count + inc);
        // Call function every ms
        setTimeout(updateCount, 100);
      } else {
        counter.innerText = target;
      }
    };

    updateCount();
  });

}

var myScrollFunc = function () {
  var y = window.scrollY;

  const scrollTo = document.getElementById("impact");

  if (y >= scrollTo.offsetTop - 450) {
    startCounter();
  }
};

window.addEventListener("scroll", myScrollFunc);
