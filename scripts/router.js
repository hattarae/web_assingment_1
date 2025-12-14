const routes = {
   '/route': '/path to that html file',
 };
async function loadContent(filePath) {
   try {
     const response = await fetch(filePath);
     if (response.ok) {
       const content = await response.text();
       document.getElementById('app').innerHTML = content;
     } else {
       document.getElementById('app').innerHTML = '<h1 class="text-2xl font-bold">404 - Page Not Found</h1>';
     }
   } catch (error) {
     console.error('Error loading page:', error);
     document.getElementById('app').innerHTML = '<h1 class="text-2xl font-bold">Error loading page</h1>';
   }
 }
function router() {
   let path = window.location.pathname;
    if (path === '/' || path === '/index.html') {
     window.history.replaceState({}, '', '/home');
     path = '/home';
   }
    const filePath = routes[path];
   if (filePath) {
     loadContent(filePath);
   } else {
     document.getElementById('app').innerHTML = '<h1 class="text-2xl font-bold">404 - Page Not Found</h1>';
   }
 }
function handleNavigation(event) {
   if (event.target.matches('[data-link]')) {
     event.preventDefault();
     const targetPath = event.target.getAttribute('href');
     window.history.pushState({}, '', targetPath);
     router();
   }
 }
 window.addEventListener('popstate', router);
 document.addEventListener('click', handleNavigation);
  router();