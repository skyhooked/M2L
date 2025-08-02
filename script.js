/*
  script.js

  This file contains all of the site’s client‑side behaviour.  It powers
  the responsive navigation (hamburger toggle), search modal, cart badge
  update and smooth scrolling.  It also preserves the existing
  newsletter form handler.  Future enhancements (e.g. product filters,
  quizzes) should be added here to keep logic separate from markup.
*/

document.addEventListener('DOMContentLoaded', () => {
    // Mobile navigation toggle
    const ham = document.querySelector('.hamburger');
    const nav = document.querySelector('.primary-nav');
    if (ham && nav) {
        ham.addEventListener('click', () => {
            nav.classList.toggle('open');
        });
    }

    // Search modal open
    const searchBtn = document.getElementById('search-btn');
    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            const dlg = document.getElementById('search-modal');
            // `showModal` is available on <dialog> elements in modern browsers
            if (dlg && typeof dlg.showModal === 'function') {
                dlg.showModal();
            }
        });
    }

    // Close modals when clicking a close button
    document.querySelectorAll('.close-modal').forEach(button => {
        button.addEventListener('click', event => {
            event.preventDefault();
            const dlg = event.target.closest('dialog');
            if (dlg) {
                dlg.close();
            }
        });
    });

    // Update cart badge from localStorage
    const cartBadge = document.getElementById('cart-count');
    if (cartBadge) {
        cartBadge.textContent = localStorage.getItem('cartQty') || '0';
    }

    // Smooth scroll for anchor links on the same page
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', event => {
            const targetId = anchor.getAttribute('href');
            if (targetId && targetId.length > 1) {
                const targetEl = document.querySelector(targetId);
                if (targetEl) {
                    event.preventDefault();
                    // Offset by header height to ensure the section isn’t hidden
                    const offset = targetEl.offsetTop - 70;
                    window.scrollTo({ top: offset, behavior: 'smooth' });
                }
            }
        });
    });

    // Newsletter form submission handling
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', event => {
            event.preventDefault();
            const emailInput = newsletterForm.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            if (email) {
                alert(`Thank you, ${email}! You’ve been added to our mailing list.`);
                newsletterForm.reset();
            }
        });
    }
});