/*
      script.js – updated to dynamically inject shared header and footer 
      fragments so that changes only need to be made once in partials/header.html and
      partials/footer.html for them to propagate across the entire site.
    */

// Helper: fetch an HTML fragment and replace the matching element in the DOM
function loadFragment(url, selector) {
    return fetch(url)
        .then(res => {
            if (!res.ok) {
                throw new Error(`Failed to load fragment: ${url}`);
            }
            return res.text();
        })
        .then(html => {
            const container = document.querySelector(selector);
            if (container) {
                container.outerHTML = html; // replace the element (not just innerHTML)
            }
        });
}

// After the fragments are in place, attach event listeners and initialise behaviour
function initSite() {
    // Mobile navigation toggle
    const ham = document.querySelector('.hamburger');
    const nav = document.querySelector('.primary-nav');
    if (ham && nav) {
        ham.addEventListener('click', () => {
            nav.classList.toggle('show');
        });
    }

    // Search modal open
    const searchBtn = document.getElementById('search-btn');
    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            const dlg = document.getElementById('search-modal');
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
                    const offset = targetEl.offsetTop - 70; // offset for fixed header
                    window.scrollTo({ top: offset, behavior: 'smooth' });
                }
            }
        });
    });
}

// Initialise once DOM is ready: load shared fragments first, then run site JS
document.addEventListener('DOMContentLoaded', () => {
    Promise.all([
        loadFragment('partials/header.html', 'header.site-header'),
        loadFragment('partials/footer.html', 'footer.footer')
    ])
        .then(() => {
            document.querySelectorAll('#m2-logo').forEach(el => el.remove());
            initSite();
        })
        .catch(err => {
            console.error(err);
            initSite();
        });
});
