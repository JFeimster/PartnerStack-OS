/*
   Funding Partners OS - Interactive Logic
   Import this file at the end of your HTML <body>
   <script src="script.js"></script>
*/

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Dynamic Year Update
    // Automatically updates the copyright year in the footer
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // 2. Sticky Bottom CTA Bar Logic
    // Shows the bottom bar only after scrolling past the Hero section
    const stickyCta = document.getElementById('stickyCta');
    const heroSection = document.querySelector('header');
    
    if (stickyCta && heroSection) {
        window.addEventListener('scroll', () => {
            // Trigger point is 50% down the hero section
            const triggerPoint = heroSection.offsetHeight * 0.5;
            
            if (window.scrollY > triggerPoint) {
                stickyCta.classList.remove('translate-y-full');
            } else {
                stickyCta.classList.add('translate-y-full');
            }
        });
    }

    // 3. Form Handling (Mock Submission)
    const form = document.getElementById('heroForm');
    
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // UI Feedback: Change button state
            const btn = form.querySelector('button');
            
            btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Processing...';
            btn.disabled = true;
            btn.classList.add('opacity-75', 'cursor-not-allowed');

            // Simulate server delay (0.8s) then redirect
            setTimeout(() => {
                // Redirect to Tally form
                window.location.href = "https://tally.so/r/mOe658";
            }, 800);
        });
    }
});

// 4. Smooth Scroll Function
// Called by buttons to scroll user to the signup form
function scrollToForm() {
    const formElement = document.querySelector('form');
    
    if (formElement) {
        // Offset accounts for fixed headers or visual spacing
        const yOffset = -150; 
        const y = formElement.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({top: y, behavior: 'smooth'});
        
        // Focus the first input field for accessibility/speed
        setTimeout(() => {
            const firstInput = formElement.querySelector('input');
            if (firstInput) firstInput.focus();
        }, 800);
    } else {
        // Fallback if no form exists on the current page (e.g. Marketplace page)
        // Redirect to home page where the form lives
        window.location.href = "index.html";
    }
}
