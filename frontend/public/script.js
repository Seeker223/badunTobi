// Global toggleMenu for inline onclick handlers - define immediately
window.toggleMenu = function() {
    const menuLinks = document.querySelector('.menu-links');
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    if (menuLinks && hamburgerIcon) {
        menuLinks.classList.toggle('open');
        hamburgerIcon.classList.toggle('open');
        document.body.style.overflow = menuLinks.classList.contains('open') ? 'hidden' : 'auto';
    }
};

// DOM Ready Function
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initHamburgerMenu();
    initCarousel();
    initProjectFiltering();
    initFormSubmission();
    initScrollEffects();
    initCurrentYear();
    initSmoothScrolling();
});

// Hamburger Menu Functionality
function initHamburgerMenu() {
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const menuLinks = document.querySelector('.menu-links');
    
    if (!hamburgerIcon || !menuLinks) return;
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideMenu = menuLinks.contains(event.target);
        const isClickOnIcon = hamburgerIcon.contains(event.target);
        
        if (!isClickInsideMenu && !isClickOnIcon && menuLinks.classList.contains('open')) {
            menuLinks.classList.remove('open');
            hamburgerIcon.classList.remove('open');
            document.body.style.overflow = 'auto';
        }
    });
    
    // Close menu on escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && menuLinks.classList.contains('open')) {
            menuLinks.classList.remove('open');
            hamburgerIcon.classList.remove('open');
            document.body.style.overflow = 'auto';
        }
    });
}

// Carousel Functionality
function initCarousel() {
    const carousel = document.getElementById('carousel');
    if (!carousel) return;
    
    const sliders = document.querySelectorAll('.slider');
    if (sliders.length === 0) return;
    
    let currentIndex = 0;
    let autoplayInterval;
    const autoplaySpeed = 5000; // 5 seconds
    
    // Create carousel controls
    createCarouselControls();
    
    // Initialize first slide as active
    sliders[0].classList.add('active');
    
    // Start autoplay
    startAutoplay();
    
    // Function to create controls
    function createCarouselControls() {
        // Create controls container
        const controlsContainer = document.createElement('div');
        controlsContainer.className = 'carousel-controls';
        
        // Previous button
        const prevBtn = document.createElement('button');
        prevBtn.className = 'carousel-btn prev-btn';
        prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
        prevBtn.setAttribute('aria-label', 'Previous slide');
        
        // Next button
        const nextBtn = document.createElement('button');
        nextBtn.className = 'carousel-btn next-btn';
        nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
        nextBtn.setAttribute('aria-label', 'Next slide');
        
        // Create indicators container
        const indicatorsContainer = document.createElement('div');
        indicatorsContainer.className = 'carousel-indicators';
        
        // Create indicators
        sliders.forEach((_, index) => {
            const indicator = document.createElement('div');
            indicator.className = 'indicator';
            indicator.dataset.index = index;
            indicator.setAttribute('aria-label', `Go to slide ${index + 1}`);
            indicatorsContainer.appendChild(indicator);
        });
        
        // Append to carousel section
        const carouselSection = document.getElementById('flow1');
        controlsContainer.appendChild(prevBtn);
        controlsContainer.appendChild(nextBtn);
        carouselSection.appendChild(controlsContainer);
        carouselSection.appendChild(indicatorsContainer);
        
        // Add event listeners
        prevBtn.addEventListener('click', goToPrevSlide);
        nextBtn.addEventListener('click', goToNextSlide);
        
        // Indicator click events
        const indicators = document.querySelectorAll('.indicator');
        indicators.forEach(indicator => {
            indicator.addEventListener('click', function() {
                const index = parseInt(this.dataset.index);
                goToSlide(index);
                resetAutoplay();
            });
        });
    }
    
    // Slide navigation functions
    function goToSlide(index) {
        currentIndex = index;
        updateCarousel();
    }
    
    function goToNextSlide() {
        currentIndex = (currentIndex + 1) % sliders.length;
        updateCarousel();
        resetAutoplay();
    }
    
    function goToPrevSlide() {
        currentIndex = (currentIndex - 1 + sliders.length) % sliders.length;
        updateCarousel();
        resetAutoplay();
    }
    
    function updateCarousel() {
        // Update carousel position
        const translateX = -currentIndex * 100;
        carousel.style.transform = `translateX(${translateX}%)`;
        
        // Update active class on sliders
        sliders.forEach((slider, index) => {
            slider.classList.toggle('active', index === currentIndex);
        });
        
        // Update indicators
        const indicators = document.querySelectorAll('.indicator');
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentIndex);
        });
    }
    
    // Autoplay functions
    function startAutoplay() {
        autoplayInterval = setInterval(goToNextSlide, autoplaySpeed);
    }
    
    function stopAutoplay() {
        if (autoplayInterval) {
            clearInterval(autoplayInterval);
            autoplayInterval = null;
        }
    }
    
    function resetAutoplay() {
        stopAutoplay();
        startAutoplay();
    }
    
    // Pause autoplay on hover
    carousel.addEventListener('mouseenter', stopAutoplay);
    carousel.addEventListener('mouseleave', startAutoplay);
    
    // Touch/swipe support
    let touchStartX = 0;
    let touchEndX = 0;
    
    carousel.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
        stopAutoplay();
    });
    
    carousel.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
        startAutoplay();
    });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        
        if (touchStartX - touchEndX > swipeThreshold) {
            // Swipe left - next slide
            goToNextSlide();
        } else if (touchEndX - touchStartX > swipeThreshold) {
            // Swipe right - previous slide
            goToPrevSlide();
        }
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            goToPrevSlide();
            resetAutoplay();
        } else if (e.key === 'ArrowRight') {
            goToNextSlide();
            resetAutoplay();
        }
    });
}

// Project Filtering Functionality
function initProjectFiltering() {
    const filterButtons = document.querySelectorAll('.pbtn');
    const projects = document.querySelectorAll('.color-container');
    
    if (filterButtons.length === 0 || projects.length === 0) return;
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.setAttribute('aria-selected', 'false');
            });
            
            // Add active class to clicked button
            this.classList.add('active');
            this.setAttribute('aria-selected', 'true');
            
            // Get filter value
            const filterValue = this.dataset.filter;
            
            // Filter projects
            projects.forEach(project => {
                const projectCategory = project.dataset.category;
                
                if (filterValue === 'all' || projectCategory === filterValue) {
                    project.style.display = 'block';
                    // Add animation
                    project.style.animation = 'fadeIn 0.5s ease forwards';
                } else {
                    project.style.display = 'none';
                }
            });
        });
    });
}

// Form Submission
function initFormSubmission() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;
    
    // Form will be handled by Formspree, but we can add client-side validation
    contactForm.addEventListener('submit', function(e) {
        // Get form data
        const formData = new FormData(this);
        const formObject = Object.fromEntries(formData);
        
        // Basic validation
        if (!formObject.name || !formObject.email || !formObject.message) {
            e.preventDefault();
            showNotification('Please fill in all required fields.', 'error');
            return;
        }
        
        if (!validateEmail(formObject.email)) {
            e.preventDefault();
            showNotification('Please enter a valid email address.', 'error');
            return;
        }
        
        // Show success message
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        
        // Reset button after submission (Formspree will handle the actual submission)
        setTimeout(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 1500);
    });
    
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    function showNotification(message, type) {
        // Remove existing notification
        const existingNotification = document.querySelector('.form-notification');
        if (existingNotification) {
            existingNotification.remove();
        }
        
        // Create notification
        const notification = document.createElement('div');
        notification.className = `form-notification ${type}`;
        notification.textContent = message;
        
        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 1rem 2rem;
            border-radius: 10px;
            color: white;
            font-weight: 500;
            z-index: 9999;
            animation: slideIn 0.3s ease;
        `;
        
        if (type === 'success') {
            notification.style.background = 'linear-gradient(90deg, #4CAF50, #45a049)';
        } else {
            notification.style.background = 'linear-gradient(90deg, #f44336, #d32f2f)';
        }
        
        document.body.appendChild(notification);
        
        // Remove notification after 5 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease forwards';
            setTimeout(() => notification.remove(), 300);
        }, 5000);
    }
}

// Scroll Effects
function initScrollEffects() {
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('nav');
        if (window.scrollY > 100) {
            nav.style.background = 'rgba(255, 255, 255, 0.95)';
            nav.style.backdropFilter = 'blur(10px)';
            nav.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
        } else {
            nav.style.background = 'white';
            nav.style.backdropFilter = 'none';
            nav.style.boxShadow = '0 2px 15px rgba(0,0,0,0.1)';
        }
        
        // Active section highlighting
        highlightActiveSection();
    });
    
    // Active section highlighting
    function highlightActiveSection() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-links a, .menu-links a');
        
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
    
    // Initial highlight
    highlightActiveSection();
}

// Smooth Scrolling
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
                
                // Update URL without page reload
                history.pushState(null, null, targetId);
            }
        });
    });
}

// Current Year in Footer
function initCurrentYear() {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// Details Container Hover Effects
document.querySelectorAll('.details-container').forEach((container, index) => {
    container.addEventListener('mouseenter', function() {
        this.style.zIndex = '10';
    });
    
    container.addEventListener('mouseleave', function() {
        this.style.zIndex = '1';
    });
});

// Image lazy loading
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for older browsers
        images.forEach(img => {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
        });
    }
});

// Performance optimization
window.addEventListener('load', function() {
    // Remove loading animations if any
    document.body.classList.add('loaded');
    
    // Initialize any third-party libraries here
});