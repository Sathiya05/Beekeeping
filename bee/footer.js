document.addEventListener("DOMContentLoaded", () => {
  const footer = document.getElementById("footer");
  if (!footer) return;

  footer.innerHTML = `
<footer class="bg-[#FEF3C7] text-[#064E3B] w-full ">

  <div class="max-w-7xl mx-auto px-6 py-20">

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16">

      <div class="sm:col-span-2 lg:col-span-4 space-y-8">
        <h1 class="text-2xl tracking-tighter">
          <a href="index.html" class="flex items-center gap-3 group">
            <div class="flex items-center justify-center w-10 h-10 border border-[#064E3B] bg-[#064E3B] text-[#FEF3C7]">
              <i class="bi bi-bug text-xl leading-none"></i>
            </div>
            <div class="font-black uppercase flex flex-col leading-none">
              CORE <span class="font-light text-xs tracking-[0.3em]">HIVE</span>
            </div>
          </a>
        </h1>

        <p class="text-xs tracking-widest leading-relaxed opacity-80 font-semibold sm:max-w-md lg:max-w-xs">
          High-performance rooftop apiary management. 
          The biological core of sustainable urban architecture.
        </p>

        <div class="flex gap-6 text-xl">
          <a href="#" class="hover:opacity-60 transition"><i class="bi bi-instagram"></i></a>
          <a href="#" class="hover:opacity-60 transition"><i class="bi bi-linkedin"></i></a>
          <a href="#" class="hover:opacity-60 transition"><i class="bi bi-vimeo"></i></a>
        </div>
      </div>

      <div class="lg:col-span-2">
        <h3 class="text-[10px] font-black uppercase tracking-[0.3em] mb-8 opacity-50">
          Quick Links
        </h3>
        <ul class="space-y-4 text-[11px] font-bold uppercase tracking-widest">
          <li><a href="about.html" class="transition-all">About</a></li>
          <li><a href="services.html" class=" transition-all">Services</a></li>
          <li><a href="gallery.html" class="transition-all">Gallery</a></li>
          <li><a href="faq.html" class="transition-all">FAQ</a></li>
          <li><a href="contact.html" class="transition-all">Contact</a></li>
        </ul>
      </div>

      <div class="lg:col-span-3">
        <h3 class="text-[10px] font-black uppercase tracking-[0.3em] mb-8 opacity-50">
          Solutions
        </h3>
        <ul class="space-y-4 text-[11px] font-bold uppercase tracking-widest">
          <li><a href="#" class="hover:line-through transition-all">Asset Management</a></li>
          <li><a href="#" class="hover:line-through transition-all">ESG Reporting</a></li>
          <li><a href="#" class="hover:line-through transition-all">Urban Pollination</a></li>
          <li><a href="#" class="hover:line-through transition-all">Smart Monitoring</a></li>
        </ul>
      </div>

      <div class="lg:col-span-3">
        <h3 class="text-[10px] font-black uppercase tracking-[0.3em] mb-8 opacity-50">
          Base of Operations
        </h3>
        <ul class="space-y-6 text-[11px] font-bold uppercase tracking-widest">
          <li class="flex items-start gap-3">
            <i class="bi bi-geo-alt"></i>
            <span>London SE1 9SG,<br/>United Kingdom</span>
          </li>
          <li class="flex items-center gap-3">
            <i class="bi bi-envelope"></i>
            <span class="border-b border-[#064E3B] hover:bg-[#064E3B] hover:text-[#FEF3C7] transition">nexus@corehive.com</span>
          </li>
        </ul>
      </div>

    </div>

  </div>

  <div class="border-t border-[#064E3B] py-10 text-center text-[9px] font-semibold uppercase tracking-[0.2em] md:tracking-[0.4em] px-6">
    © ${new Date().getFullYear()} CORE HIVE INFRASTRUCTURE. <br class="md:hidden"/> PRECISION ECOLOGY / URBAN UTILITY.
  </div>

</footer>
`;
});
