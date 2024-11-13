let unlockInspect = false;

// Mencegah klik kanan dan shortcut developer tools
document.addEventListener("contextmenu", function (e) {
    if (!unlockInspect) e.preventDefault();
});

document.addEventListener("keydown", function (e) {
    // Blokir F12 dan shortcut Developer Tools jika unlockInspect masih false
    if (!unlockInspect) {
        if (e.keyCode === 123 || // F12
            (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) || // Ctrl+Shift+I atau Ctrl+Shift+J
            (e.ctrlKey && e.keyCode === 85) // Ctrl+U
        ) {
            e.preventDefault();
        }
    }

    // Kombinasi "kode rahasia" Ctrl + Alt + Shift + Q untuk membuka akses Inspect
    if (e.ctrlKey && e.altKey && e.shiftKey && e.keyCode === 81) { // Ctrl + Alt + Shift + Q
        unlockInspect = !unlockInspect;
        if (unlockInspect) {
            alert("Developer tools unlocked. You can now use Inspect Element.");
        } else {
            alert("Developer tools locked. Inspect Element access disabled.");
        }
    }
});




  
  // Ambil semua link dari navbar
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

// Fungsi untuk mengecek posisi scroll dan menambahkan class 'active' di link navbar yang sesuai
function updateActiveLink() {
  let current = '';

  // Ambil semua section di halaman
  document.querySelectorAll('section').forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.pageYOffset >= (sectionTop - sectionHeight / 3)) {
      current = section.getAttribute('id');  // Ambil id dari section yang aktif
    }
  });

  // Hapus class 'active' dari semua link dan tambahkan ke link yang sesuai
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
}



// Panggil fungsi saat halaman di-scroll
window.addEventListener('scroll', updateActiveLink);


// Function to initialize the typing effect
function initializeTypingEffect() {
  // Configuration options for the typing effect
  var options = {
    // Array of strings to type out
    strings: ["I am Fahri dwi hartanto", "I am a Freelancer", "I am a Graphic Desainer.", "I am Vidio Editor"],
    // Speed of typing (in milliseconds)
    typeSpeed: 70,
    // Speed of backspacing (in milliseconds)
    backSpeed: 50,
    // Delay before starting to backspace (in milliseconds)
    backDelay: 1500,
    // Delay before starting to type (in milliseconds)  
    startDelay: 1000,
    // Loop the typing effect
    loop: true,
  };

  // Create a new instance of the Typed object and apply it to the element with class "typed-output"
  var typed = new Typed(".typed-output", options);
}
// Event listener to initialize the typing effect when the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", initializeTypingEffect);

// Function to animate a counter element
function animateCounter(counterEl) {
  // Get the starting value from the data attribute and convert to integer
  const fromValue = parseInt(counterEl.dataset.from, 10);
  // Get the target value from the data attribute and convert to integer
  const toValue = parseInt(counterEl.dataset.to, 10);
  // Initialize the current value to the starting value
  let currentValue = fromValue;
  // Flag to track if the animation is complete
  let animationComplete = false;

  // Function to handle the animation
  const animate = () => {
    // Calculate the increment, dynamically adjusted based on the remaining value
    const increment = Math.max(1, (toValue - currentValue) / 5);

    // Increment the current value
    currentValue += increment;
    // Update the text content of the counter element
    counterEl.textContent = Math.floor(currentValue);

    // Check if the current value has reached or exceeded the target value
    if (currentValue >= toValue) {
      animationComplete = true;
    }

    // If the animation is not complete, request the next animation frame
    if (!animationComplete) {
      requestAnimationFrame(animate);
    }
  };

  // Start the animation
  animate();
}

// Event listener to initialize the counters when the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Select all elements with the class "counter"
  const counterEls = document.querySelectorAll(".counter");

  // Iterate over each counter element and start the animation
  counterEls.forEach((counterEl) => {
    animateCounter(counterEl);
  });
});


