  // Toggle main mobile menu
  const navBtn = document.getElementById("nav-mobile-toggle");
  const navLinks = document.getElementById("mobile-nav-list");

  navBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Mobile dropdown toggles
  document.addEventListener('DOMContentLoaded', function() {
    const mobileDropdownToggles = document.querySelectorAll('.mobile-dropdown-toggle');
    
    mobileDropdownToggles.forEach(toggle => {
      toggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        // Toggle active class
        this.classList.toggle('active');
        
        // Find the submenu to toggle
        const parentLi = this.closest('.mobile-dropdown');
        const subMenu = parentLi.querySelector('.mobile-submenu, .mobile-sub-submenu');
        
        if (subMenu) {
          subMenu.classList.toggle('open');
        }
      });
    });
    
    // Date for copyright if exists
    const date = document.getElementById("date");
    if (date) {
      date.innerHTML = new Date().getFullYear();
    }
  });

  function HongKong() {
    window.open(`en/HongKong.html`, `_self`);
  }

  function TaiPei() {
    window.open(`en/TaiPei.html`, `_self`);
  }

  function Seoul() {
    window.open(`en/Seoul.html`, `_self`);
  }

  function Singapore() {
    window.open(`en/Singapore.html`, `_self`);
  }

  function en_HongKong() {
    window.open(`HongKong.html`, `_self`);
  }

  function en_TaiPei() {
    window.open(`TaiPei.html`, `_self`);
  }

  function en_Seoul() {
    window.open(`Seoul.html`, `_self`);
  }

  function en_Singapore() {
    window.open(`Singapore.html`, `_self`);
  }