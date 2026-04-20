document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const introOverlay = document.querySelector('.intro-overlay');
    const introContent = document.querySelector('.intro-content');
    const introBg = document.querySelector('.intro-bg');

    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navOverlay = document.querySelector('.nav-overlay');

    const handleScroll = () => {
        const scrollY = window.scrollY;

        // Navbar scrolled state logic
        if (navbar) {
            if (scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }

        // Intro Parallax & Overlay Animation
        if (introOverlay) {
            // Calculate a scroll fraction (0 at the top, 1 when scrolled a full screen down)
            const scrollFraction = Math.min(scrollY / window.innerHeight, 1);

            // 1. Overlay Animation: Darken slightly and add a blur effect as you scroll down
            const baseOpacity = 0.3;
            const newOpacity = baseOpacity + (scrollFraction * 0.5); // goes from 0.3 to 0.8
            const blurAmount = scrollFraction * 8; // goes from 0px to 8px
            
            introOverlay.style.background = `rgba(0, 0, 0, ${newOpacity})`;
            introOverlay.style.backdropFilter = `blur(${blurAmount}px)`;
            introOverlay.style.webkitBackdropFilter = `blur(${blurAmount}px)`; // Safari support

            // 2. Content Animation: MODERN SKEW + DRIFT + FADE
            if (introContent && scrollY > 0) {
                // Calculate scroll fraction for effects
                const scrollFraction = Math.min(scrollY / window.innerHeight, 1);
                
                // Drift: slides down and right
                const driftX = scrollY * 0.15;
                const driftY = scrollY * 0.4;
                
                // Skew: gives it a modern "weighty" feel on scroll
                const skewY = Math.min(scrollY * 0.01, 5); 

                introContent.style.transform = `translateY(calc(-50% + ${driftY}px)) translateX(${driftX}px) skewY(${skewY}deg)`;
                introContent.style.opacity = Math.max(1 - (scrollFraction * 1.6), 0);
            } else if (introContent && scrollY === 0) {
                // Reset to clean state (matching the CSS centering)
                introContent.style.transform = 'translateY(-50%)';
                introContent.style.opacity = '1';
                introContent.style.filter = 'none';
            }

            // 3. Background Parallax: Move the background down slightly slower than scroll speed
            if (introBg) {
                // Combining parallax translateY with a subtle initial scale
                introBg.style.transform = `scale(1.05) translateY(${scrollY * 0.15}px)`; 
            }
        }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // 4. Intersection Observer for Scroll Reveal
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(section => {
        sectionObserver.observe(section);
    });

    // 5. Active Link Highlighting
    const currentPath = window.location.pathname.replace(/\/$/, ""); // Remove trailing slash
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href').replace(/\/$/, "");
        
        // Check for exact match or home case
        if (currentPath === linkPath || (currentPath === "" && linkPath === "")) {
            link.classList.add('active');
        } else if (linkPath !== "" && currentPath.startsWith(linkPath)) {
            // For subpages if needed
            link.classList.add('active');
        }
    });

    // 6. FAQ Accordion Logic
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all other items
            faqItems.forEach(i => i.classList.remove('active'));
            
            // Toggle current item
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // Mobile Menu Toggle
    if (menuToggle && navMenu && navOverlay) {
        const toggleMenu = () => {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            navOverlay.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        };

        menuToggle.addEventListener('click', toggleMenu);
        navOverlay.addEventListener('click', toggleMenu);

        // Close menu on link click
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (navMenu.classList.contains('active')) toggleMenu();
            });
        });
    }

    // Initial call with a slight delay to allow CSS animations to start first
    setTimeout(handleScroll, 100); 
});
