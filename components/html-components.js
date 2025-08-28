// HTML页面使用的统一组件示例
// 这个文件展示了如何在静态HTML中使用统一的组件结构

// 导航栏HTML结构（用于静态页面）
const NavbarHTML = (currentPath = '/') => `
<header class="w-full bg-white/80 backdrop-blur border-b border-gray-200 sticky top-0 z-30">
  <div class="container mx-auto flex items-center justify-between py-4 px-6">
    <a href="/" class="flex items-center">
      <img src="/public/logo.png" alt="iogame.best Logo" class="h-10 mr-2">
      <span class="font-bold text-xl text-blue-600">iogame.best</span>
    </a>
    <nav class="flex gap-6 text-gray-700">
      <a href="/" class="hover:text-blue-600 ${currentPath === '/' ? 'font-semibold' : ''}">Home</a>
      <a href="/aboutus.html" class="hover:text-blue-600 ${currentPath === '/aboutus.html' ? 'font-semibold' : ''}">About Us</a>
      <a href="/contactus.html" class="hover:text-blue-600 ${currentPath === '/contactus.html' ? 'font-semibold' : ''}">Contact Us</a>
      <a href="/faq.html" class="hover:text-blue-600 ${currentPath === '/faq.html' ? 'font-semibold' : ''}">FAQ</a>
      <a href="/privacy-policy.html" class="hover:text-blue-600 ${currentPath === '/privacy-policy.html' ? 'font-semibold' : ''}">Privacy Policy</a>
    </nav>
  </div>
</header>`;

// 页脚HTML结构（用于静态页面）
const FooterHTML = () => `
<footer class="bg-gray-800 text-gray-200 py-6 mt-10">
  <div class="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-end gap-2 text-sm">
    <div class="flex flex-col items-center md:items-start">
      <a href="/" class="flex items-center mb-3">
        <img src="/public/logo.png" alt="logo" class="h-8 mr-2">
        <span class="font-bold text-lg text-white">iogame.best</span>
      </a>
      <div class="flex flex-wrap justify-center gap-x-2 md:gap-x-5 gap-y-1">
        <a href="/" class="hover:text-blue-400 transition-colors">Home</a>
        <a href="/aboutus.html" class="hover:text-blue-400 transition-colors">About Us</a>
        <a href="/contactus.html" class="hover:text-blue-400 transition-colors">Contact Us</a>
        <a href="/term-of-use.html" class="hover:text-blue-400 transition-colors">Terms of Use</a>
        <a href="/privacy-policy.html" class="hover:text-blue-400 transition-colors">Privacy Policy</a>
      </div>
    </div>
    <div class="text-center">
      <p class="mb-2">
        © 2024 <span class="font-semibold">iogame.best</span> All rights reserved.
      </p>
      <p class="text-xs text-gray-400">
        Best free IO games online - No download required
      </p>
    </div>
  </div>
</footer>`;

// 公共头部标签（用于所有静态页面）
const CommonHead = (title, description) => `
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="${description}">
  <title>${title}</title>
  <link rel="icon" href="/public/logo.png">
  <link href="https://cdn.jsdelivr.net/npm/daisyui@4.10.2/dist/full.css" rel="stylesheet">
  <script src="https://cdn.tailwindcss.com"></script>
  <!-- Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-EYPRN0FP71"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-EYPRN0FP71');
  </script>
</head>`;

// 导出给Node.js使用
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    NavbarHTML,
    FooterHTML,
    CommonHead
  };
}

// 导出给浏览器使用
if (typeof window !== 'undefined') {
  window.HTMLComponents = {
    NavbarHTML,
    FooterHTML,
    CommonHead
  };
}