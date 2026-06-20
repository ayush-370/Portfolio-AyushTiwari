// --- Robot Introduction Engine Config ---
  const robotOverlay = document.getElementById('robot-overlay');
  const mainPortfolio = document.getElementById('main-portfolio-content');
  const robotGreeting = document.getElementById('robot-greeting');
  const robotTextEl = document.getElementById('robot-text');
  const skipBtn = document.getElementById('skip-intro-btn');

  const linesToType = [
    "Namaste ! Hello human traveler! 🤖✨\n\n",
    "Initializing the digital tracking gateway for Ayush Tiwari...\n\n",
    "Before I completely load the framework layout elements from index.html, style.css, and script.js, let me give you a genuine introduction to the human behind the code:\n\n",
    "Meet Ayush Tiwari, a B.Tech Computer Science Student at PSIT who builds intelligent web applications and integrated machine learning loops.\n\n",
    "Instead of simply writing static files, he actively specializes in full-stack architecture, building predictive applications like 'Expenzo' (his automated expense manager), and mastering complex database logic structures. He even holds a LeetCode 50 Days badge!\n\n",
    "Systems are now optimized and fully operational. Sit tight while I reveal the live interface loops... Enjoy the tour! 🚀"
  ];

  let currentLineIndex = 0;
  let currentCharIndex = 0;
  let typingSpeed = 25; 

  function typeText() {
    if (currentLineIndex === 0 && currentCharIndex === 0) {
      robotGreeting.innerText = "System Notification Connection Established";
      skipBtn.style.display = "inline-flex";
    }

    if (currentCharIndex < linesToType[currentLineIndex].length) {
      if (linesToType[currentLineIndex].charAt(currentCharIndex) === "\n") {
        robotTextEl.innerHTML += "<br>";
      } else {
        robotTextEl.innerHTML += linesToType[currentLineIndex].charAt(currentCharIndex);
      }
      currentCharIndex++;
      setTimeout(typeText, typingSpeed);
    } else {
      currentLineIndex++;
      if (currentLineIndex < linesToType.length) {
        currentCharIndex = 0;
        setTimeout(typeText, 500); 
      } else {
        setTimeout(revealPortfolio, 2500); 
      }
    }
  }

  function revealPortfolio() {
    robotOverlay.classList.add('fade-out');
    mainPortfolio.classList.remove('portfolio-hidden');
    mainPortfolio.classList.add('portfolio-visible');
  }

  skipBtn.addEventListener('click', revealPortfolio);
  setTimeout(typeText, 800);


document.addEventListener('DOMContentLoaded', () => {

  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const icon = menuToggle.querySelector('i');
      if (icon.classList.contains('fa-bars')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
      } else {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
      }
    });
  }


  const contactForm = document.getElementById('portfolio-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = contactForm.querySelector('.submit-btn');
      const originalText = submitBtn.innerHTML;
      
      submitBtn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Dispatching...';
      submitBtn.disabled = true;
      
      setTimeout(() => {
        alert('Message sent successfully!');
        contactForm.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
      }, 1000);
    });
  }
});