document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    function applyTheme(theme) {
        body.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        document.querySelector('meta[name="theme-color"]').setAttribute('content', theme === 'dark' ? '#121212' : '#f0f2f5');
    }
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) { applyTheme(savedTheme); } else { applyTheme('light'); }
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = body.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            applyTheme(newTheme);
        });
    }
    const menuBtn = document.getElementById('menu-btn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    if (menuBtn && sidebar && overlay) {
        function toggleSidebar() {
            const isActive = menuBtn.classList.contains('is-active');
            menuBtn.classList.toggle('is-active');
            sidebar.classList.toggle('is-active');
            overlay.classList.toggle('is-active');
            menuBtn.setAttribute('aria-expanded', !isActive);
        }
        menuBtn.addEventListener('click', toggleSidebar);
        overlay.addEventListener('click', toggleSidebar);
        sidebar.querySelectorAll('a').forEach(link => { if (link.href.includes('#')) { link.addEventListener('click', toggleSidebar); } });
    }
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', () => { header.classList.toggle('scrolled', window.scrollY > 50); });
    }
    // Add any other common JS here
});