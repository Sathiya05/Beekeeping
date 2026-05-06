document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;

  navbar.innerHTML = `
<header id="mainNavbar"
  class="fixed top-0 left-0 w-full z-50 bg-[#FEF3C7] text-[#064E3B] border-b border-black/10 transition-all duration-300">

  <div class="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

   <h1 class="text-2xl tracking-tighter">
  <a href="index.html" class="flex items-center gap-3 group">
    <div class="flex items-center justify-center w-10 h-10 border border-[#064E3B] transition-colors bg-[#064E3B] text-[#FEF3C7] rounded">
      <i class="bi bi-bug text-xl leading-none"></i>
    </div>
    
    <div class="font-black uppercase flex flex-col leading-none">
      CORE <span class="font-light text-xs tracking-[0.3em]">HIVE</span>
    </div>
  </a>
</h1>

    <div id="centerLinksWrapper" class="hidden lg:flex flex-1 justify-center">
      <ul class="flex items-center gap-8 font-bold text-[11px] uppercase tracking-widest" id="navLinks">

        <li class="relative">
          <button id="homeDropdownBtn" class="flex items-center gap-1 transition hover:opacity-70">
            HOME <i class="bi bi-chevron-down text-[10px]"></i>
          </button>
          <ul id="homeDropdownMenu" class="absolute left-0 mt-5 w-44 bg-[#FEF3C7] text-[#064E3B] border border-[#064E3B] hidden z-50 rounded">
            <li><a href="index.html" class="block px-4 py-3 border-b border-[#064E3B] hover:bg-[#064E3B] hover:text-[#FEF3C7] transition">Home 1</a></li>
            <li><a href="home2.html" class="block px-4 py-3 hover:bg-[#064E3B] hover:text-[#FEF3C7] transition">Home 2</a></li>
          </ul>
        </li>

        <li><a href="about.html" class="hover:opacity-70">About</a></li>
        <li><a href="services.html" class="hover:opacity-70">Services</a></li>
        <li><a href="gallery.html" class="hover:opacity-70" >Gallery</a></li>
        <li><a href="requirements.html" class="hover:opacity-70">Requirements</a></li>
        <li><a href="shop.html" class="hover:opacity-70">Shop</a></li>
        <li><a href="faq.html" class="hover:opacity-70">FAQ</a></li>
        <li><a href="contact.html" class="hover:opacity-70">Contact</a></li>
      </ul>
    </div>

    <div id="rightButtons" class="hidden lg:flex items-center gap-4">
      
      <button id="theme-toggle" class="w-10 h-10 border border-[#064E3B] flex items-center justify-center  rounded hover:bg-[#064E3B] hover:text-[#FEF3C7] transition">
        <i class="bi bi-moon-fill" id="theme-icon"></i>
      </button>

      <button id="rtlToggle" class="h-10 border border-[#064E3B] px-3 text-[10px] font-black hover:bg-[#064E3B] rounded hover:text-[#FEF3C7] transition">
        RTL
      </button>
      
      <a href="login.html" class="text-[11px] font-bold uppercase tracking-widest border border-[#064E3B] px-5 py-3 h-10 rounded hover:bg-[#064E3B] hover:text-[#FEF3C7] transition">
        Login
      </a>

      <a href="sign.html" class="text-[11px] font-bold uppercase tracking-widest bg-[#064E3B] text-[#FEF3C7] border h-10 rounded border-[#064E3B] px-5 py-3 hover:bg-opacity-90 transition">
        Sign Up
      </a>
    </div>

    <button id="hamburgerBtn" class="lg:hidden text-3xl hover:opacity-70 transition">
      <i class="bi bi-list"></i>
    </button>
  </div>
</header>

<div id="mobileMenuOverlay" class="fixed inset-0 bg-[#064E3B]/20 backdrop-blur-sm hidden lg:hidden z-40"></div>
<div id="mobileMenu" class="fixed top-0 right-0 h-full w-72 bg-[#FEF3C7] text-[#064E3B] z-50 transform translate-x-full transition-transform duration-300 lg:hidden border-l border-[#064E3B]">
  <div class="flex items-center justify-between p-5 border-b border-[#064E3B]">
    <h2 class="text-xs font-bold uppercase tracking-widest">Directory</h2>
    <button id="closeMenuBtn" class="text-3xl">&times;</button>
  </div>

  <div class="p-6 overflow-y-auto h-full">
    <ul class="space-y-4 font-bold uppercase text-xs tracking-widest pb-20">
      <li>
        <button id="mobileDropdownBtn" class="w-full flex items-center justify-between py-2">
          <span>HOME</span>
          <i id="mobileHomeChevron" class="bi bi-chevron-down transition-transform duration-300"></i>
        </button>
        <ul id="mobileDropdownMenu" class="hidden mt-2 ml-4 space-y-2 border-l border-[#064E3B] pl-4">
          <li><a href="index.html" class="block py-1">Home 1</a></li>
          <li><a href="home2.html" class="block py-1">Home 2</a></li>
        </ul>
      </li>

      <li><a href="about.html" class="block py-2 hover:opacity-70">About</a></li>
      <li><a href="services.html" class="block py-2 hover:opacity-70">Services</a></li>
      <li><a href="gallery.html" class="block py-2 hover:opacity-70">Gallery</a></li>
      <li><a href="requirements.html" class="block py-2 hover:opacity-70">Requirements</a></li>
      <li><a href="shop.html" class="block py-2 hover:opacity-70">Shop</a></li>
      <li><a href="faq.html" class="block py-2 hover:opacity-70">FAQ</a></li>
      <li><a href="contact.html" class="block py-2 hover:opacity-70">Contact</a></li>

      <li class="pt-6 border-t border-[#064E3B] space-y-4">
        <div class="flex justify-between gap-4">
          <button id="mobile-theme-toggle" class="flex-1 border border-[#064E3B] py-3 text-xl rounded"><i class="bi bi-moon-fill" id="mobile-theme-icon"></i></button>
          <button id="mobile-rtl-toggle" class="flex-1 border border-[#064E3B] py-3 text-xs font-black rounded">RTL</button>
        </div>
        <a href="login.html" class="block text-center border border-[#064E3B] py-3 text-[10px] font-bold uppercase tracking-[0.2em]">Login</a>
        <a href="sign.html" class="block text-center bg-[#064E3B] text-[#FEF3C7] py-3 text-[10px] font-bold uppercase tracking-[0.2em]">Sign Up</a>
      </li>
    </ul>
  </div>
</div>
`;

  // --- LOGIC ---
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
  const homeDropdownMenu = document.getElementById('homeDropdownMenu');
  const mobileDropdownMenu = document.getElementById('mobileDropdownMenu');

  // Toggle Sidebar Logic
  const toggleSidebar = () => {
    mobileMenu.classList.toggle('translate-x-0');
    mobileMenu.classList.toggle('translate-x-full');
    mobileMenuOverlay.classList.toggle('hidden');
    document.body.classList.toggle('overflow-hidden');
  };

  document.getElementById('hamburgerBtn').addEventListener('click', toggleSidebar);
  document.getElementById('closeMenuBtn').addEventListener('click', toggleSidebar);
  mobileMenuOverlay.addEventListener('click', toggleSidebar);

  // Home Dropdowns
  document.getElementById('homeDropdownBtn')?.addEventListener('click', (e) => {
    e.stopPropagation();
    homeDropdownMenu.classList.toggle('hidden');
  });

  document.getElementById('mobileDropdownBtn')?.addEventListener('click', (e) => {
    e.stopPropagation();
    mobileDropdownMenu.classList.toggle('hidden');
    document.getElementById('mobileHomeChevron').classList.toggle('rotate-180');
  });

  // Theme Logic (Icon Switching)
  const themeIcon = document.getElementById('theme-icon');
  const mobileThemeIcon = document.getElementById('mobile-theme-icon');

  const updateThemeUI = (theme) => {
    const isDark = theme === "dark";
    document.documentElement.setAttribute("data-theme", theme);
    const iconClass = isDark ? "bi-brightness-high-fill" : "bi-moon-fill";
    themeIcon.className = iconClass;
    mobileThemeIcon.className = iconClass;
  };

  const handleTheme = () => {
    const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    updateThemeUI(newTheme);
  };

  document.getElementById('theme-toggle').addEventListener('click', handleTheme);
  document.getElementById('mobile-theme-toggle').addEventListener('click', handleTheme);

  // Initialize Theme on Load
  const savedTheme = localStorage.getItem("theme") || "light";
  updateThemeUI(savedTheme);

  // RTL Logic
  const handleRTL = () => {
    const html = document.documentElement;
    html.setAttribute("dir", html.getAttribute("dir") === "rtl" ? "ltr" : "rtl");
  };
  document.getElementById('rtlToggle').addEventListener('click', handleRTL);
  document.getElementById('mobile-rtl-toggle').addEventListener('click', handleRTL);

  // Global Close
  document.addEventListener('click', () => {
    homeDropdownMenu?.classList.add('hidden');
  });

  // Active Link Logic (Mixed Active States)
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  const allLinks = document.querySelectorAll('#navLinks a, #mobileMenu a, #homeDropdownMenu a, #mobileDropdownMenu a');

  allLinks.forEach(link => {
    const href = link.getAttribute('href');

    if (href === currentPath) {
      // 1. Make the active link fully opaque and remove hover fading
      link.classList.add('opacity-100');
      link.classList.remove('hover:opacity-70');

      // 2. Check if the link is inside the Home dropdown
      const isHomeDropdownLink = link.closest('#homeDropdownMenu') || link.closest('#mobileDropdownMenu');

      if (isHomeDropdownLink) {
        // -> FOR HOME DROPDOWN: Make it bold
        link.classList.add('font-black');

        // Also make the parent dropdown button bold
        const desktopBtn = document.getElementById('homeDropdownBtn');
        const mobileBtn = document.getElementById('mobileDropdownBtn');

        if (desktopBtn) {
          desktopBtn.classList.add('font-black', 'opacity-100');
          desktopBtn.classList.remove('hover:opacity-70');
        }
        if (mobileBtn) {
          mobileBtn.classList.add('font-black', 'opacity-100');
        }

      } else {
        // -> FOR ALL OTHER LINKS: Add a clean underline
        link.classList.add('underline', 'underline-offset-4', 'decoration-2');
      }
    }
  });
}); // End of DOMContentLoaded
