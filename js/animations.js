// animations.js - Gigachad Network animations and interactions

// ===== SCROLL PROGRESS BAR =====
function updateScrollProgress() {
    const scrollProgress = document.getElementById('scroll-progress');
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    scrollProgress.style.width = scrolled + '%';
}

window.addEventListener('scroll', updateScrollProgress);

// ===== FLOATING PARTICLES =====
function createParticles() {
    const container = document.getElementById('particles-container');
    if (!container) return;

    const particleCount = 15;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';

        // Random starting position
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (15 + Math.random() * 10) + 's';

        container.appendChild(particle);
    }
}

// ===== SCROLL-TRIGGERED FADE-IN ANIMATIONS =====
function handleScrollAnimations() {
    const sections = document.querySelectorAll('.fade-in-section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    sections.forEach(section => {
        observer.observe(section);
    });
}

// ===== PARALLAX EFFECT FOR HEADER IMAGE =====
function handleParallax() {
    const headerImg = document.querySelector('header img');
    if (!headerImg) return;

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.3;

        if (scrolled < 600) { // Only apply when header is visible
            headerImg.style.transform = `translateY(${rate}px) scale(1)`;
        }
    });
}

// ===== NAVIGATION ACTIVE INDICATOR =====
function updateActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-btn');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// ===== SMOOTH REVEAL FOR SECTIONS =====
function addFadeInSections() {
    const sections = document.querySelectorAll('section, #about-section, #service-explanations');
    sections.forEach(section => {
        if (!section.classList.contains('fade-in-section')) {
            section.classList.add('fade-in-section');
        }
    });
}

// ===== AUDIO VISUALIZER (Simple Version) =====
function createAudioVisualizer() {
    const audio = document.querySelector('footer audio');
    if (!audio) return;

    // Create visualizer container
    const visualizer = document.createElement('div');
    visualizer.id = 'audio-visualizer';
    visualizer.style.cssText = `
        display: flex;
        justify-content: center;
        align-items: flex-end;
        gap: 4px;
        height: 60px;
        margin: 10px auto;
        max-width: 200px;
    `;

    // Create bars
    for (let i = 0; i < 20; i++) {
        const bar = document.createElement('div');
        bar.className = 'visualizer-bar';
        bar.style.cssText = `
            width: 6px;
            height: 10px;
            background: linear-gradient(to top, #ffc56d, #ffaa3d);
            border-radius: 3px 3px 0 0;
            transition: height 0.1s ease;
        `;
        visualizer.appendChild(bar);
    }

    audio.parentNode.insertBefore(visualizer, audio);

    // Animate bars when audio is playing
    audio.addEventListener('play', () => {
        const bars = visualizer.querySelectorAll('.visualizer-bar');

        setInterval(() => {
            if (!audio.paused) {
                bars.forEach(bar => {
                    const height = Math.random() * 50 + 10;
                    bar.style.height = height + 'px';
                });
            } else {
                bars.forEach(bar => {
                    bar.style.height = '10px';
                });
            }
        }, 100);
    });

    audio.addEventListener('pause', () => {
        const bars = visualizer.querySelectorAll('.visualizer-bar');
        bars.forEach(bar => {
            bar.style.height = '10px';
        });
    });
}

// ===== CURSOR TRAIL EFFECT - REMOVED =====
// Removed per user request

// ===== ENHANCED BUTTON RIPPLE EFFECT =====
function addButtonRipples() {
    const buttons = document.querySelectorAll('.service-btn, .nav-btn');

    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                border-radius: 50%;
                background: rgba(255, 197, 109, 0.5);
                left: ${x}px;
                top: ${y}px;
                pointer-events: none;
                animation: rippleEffect 0.6s ease-out;
            `;

            this.appendChild(ripple);

            setTimeout(() => ripple.remove(), 600);
        });
    });

    // Add ripple animation CSS if not exists
    if (!document.getElementById('ripple-animation')) {
        const style = document.createElement('style');
        style.id = 'ripple-animation';
        style.textContent = `
            @keyframes rippleEffect {
                to {
                    transform: scale(2);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// ===== IMAGE LAZY LOAD WITH ANIMATION =====
function handleImageLazyLoad() {
    const images = document.querySelectorAll('img[loading="lazy"]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.style.opacity = '0';
                img.style.transition = 'opacity 0.5s ease-in';

                img.onload = () => {
                    img.style.opacity = '1';
                };

                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// ===== ENHANCED HR ANIMATIONS =====
function animateHorizontalRules() {
    const hrs = document.querySelectorAll('hr');

    hrs.forEach(hr => {
        hr.style.opacity = '0';
        hr.style.transform = 'scaleX(0)';
        hr.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    const hrObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'scaleX(1)';
            }
        });
    }, { threshold: 0.5 });

    hrs.forEach(hr => hrObserver.observe(hr));
}

// ===== INITIALIZE ALL ANIMATIONS =====
document.addEventListener('DOMContentLoaded', () => {
    // Create scroll progress bar element
    const scrollProgress = document.createElement('div');
    scrollProgress.id = 'scroll-progress';
    document.body.prepend(scrollProgress);

    // Create particles container
    const particlesContainer = document.createElement('div');
    particlesContainer.id = 'particles-container';
    document.body.prepend(particlesContainer);

    // Initialize all features
    createParticles();
    addFadeInSections();
    handleScrollAnimations();
    handleParallax();
    updateActiveNavigation();
    createAudioVisualizer();
    addButtonRipples();
    handleImageLazyLoad();
    animateHorizontalRules();

    console.log('🎮 Gigachad Network animations loaded!');
});

// ===== PERFORMANCE OPTIMIZATION =====
// Debounce scroll events for better performance
let scrollTimeout;
window.addEventListener('scroll', () => {
    if (scrollTimeout) {
        window.cancelAnimationFrame(scrollTimeout);
    }

    scrollTimeout = window.requestAnimationFrame(() => {
        updateScrollProgress();
    });
}, { passive: true });
