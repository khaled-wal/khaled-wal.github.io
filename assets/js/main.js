document.addEventListener("DOMContentLoaded", () => {
    console.log("Portfolio loaded successfully!");

    // 1. نظام الوضع الداكن (Dark Mode Logic)
    const themeToggleBtn = document.getElementById('theme-toggle');
    
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            // جلب الوضع الحالي
            let currentTheme = document.documentElement.getAttribute('data-theme');
            // التبديل
            let newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            // تطبيق الوضع الجديد وحفظه في المتصفح
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }

    // 2. نظام التبديل للغة العربية (مبدئي للمستقبل)
    const langToggleBtn = document.getElementById('lang-toggle');
    
    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
            // في المستقبل يمكننا توجيه الزائر لرابط /ar/ أو تبديل المتغيرات
            alert("The Arabic version of the site is under construction!");
        });
    }
});