/*
  script.js

  JavaScript for interactivity on the site.  Currently this file
  implements smooth scrolling for navigation links and a basic handler
  for the newsletter form.  Keeping scripts in a separate file
  improves maintainability and allows for easy extension with more
  complex behaviour (e.g. sliders, modal dialogues, product filters).

  Notes for future development:
  • If you plan to integrate a framework (React, Vue, etc.) or
    third‑party widgets, consider bundling scripts with a build tool
    like Vite or Webpack.  For simple enhancements, vanilla JS is
    sufficient.
  • Always validate user input server‑side in addition to any client‑side
    checks.
*/

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for internal anchor links in the navigation
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', event => {
            // Only handle on-page anchors
            const targetId = link.getAttribute('href');
            if (targetId && targetId.startsWith('#')) {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    event.preventDefault();
                    const offset = targetElement.offsetTop - 70; // adjust for fixed header
                    window.scrollTo({ top: offset, behavior: 'smooth' });
                }
            }
        });
    });

    // Newsletter form submission
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', event => {
            event.preventDefault();
            const emailInput = newsletterForm.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            // TODO: Integrate your email marketing service here (e.g. Mailchimp, SendGrid).
            // For now we simply display a confirmation message and reset the form.
            if (email) {
                alert(`Thank you, ${email}! You’ve been added to our mailing list.`);
                newsletterForm.reset();
            }
        });
    }
});