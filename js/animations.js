// animations.js - Gigachad Network animations and interactions

const PREFERS_REDUCED_MOTION = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ===== SCROLL PROGRESS BAR =====
function updateScrollProgress() {
    const scrollProgress = document.getElementById('scroll-progress');
    if (!scrollProgress) return;
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    if (windowHeight <= 0) return;
    const scrolled = (window.scrollY / windowHeight) * 100;
    scrollProgress.style.width = scrolled + '%';
}

// ===== FLOATING PARTICLES =====
function createParticles() {
    const container = document.getElementById('particles-container');
    if (!container) return;
    if (PREFERS_REDUCED_MOTION) return;

    const particleCount = 15;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (15 + Math.random() * 10) + 's';
        container.appendChild(particle);
    }
}

// ===== SCROLL-TRIGGERED FADE-IN ANIMATIONS =====
function handleScrollAnimations() {
    const sections = document.querySelectorAll('.fade-in-section');
    if (!sections.length) return;

    if (PREFERS_REDUCED_MOTION) {
        sections.forEach(s => s.classList.add('is-visible'));
        return;
    }

    let visibleCount = 0;
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
                visibleCount++;
                if (visibleCount === sections.length) {
                    observer.disconnect();
                }
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    sections.forEach(section => observer.observe(section));
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

// ===== UNIFIED SCROLL HANDLER (progress bar + parallax + active nav) =====
function handleScroll() {
    updateScrollProgress();

    if (!PREFERS_REDUCED_MOTION) {
        const headerImg = document.querySelector('header img');
        const scrolled = window.pageYOffset;
        if (headerImg && scrolled < 600) {
            headerImg.style.transform = `translateY(${scrolled * 0.3}px) scale(1)`;
        }
    }

    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-btn');
    if (sections.length && navLinks.length) {
        let current = '';
        sections.forEach(section => {
            if (window.pageYOffset >= section.offsetTop - 200) {
                current = section.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
        });
    }
}

let scrollRaf = null;
window.addEventListener('scroll', () => {
    if (scrollRaf !== null) return;
    scrollRaf = window.requestAnimationFrame(() => {
        handleScroll();
        scrollRaf = null;
    });
}, { passive: true });

// ===== AUDIO VISUALIZER =====
function createAudioVisualizer() {
    const audio = document.querySelector('footer audio');
    if (!audio) return;

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

    const rootStyles = getComputedStyle(document.documentElement);
    const accentColor = rootStyles.getPropertyValue('--primary').trim() || '#ffc56d';
    const accentLightColor = rootStyles.getPropertyValue('--primary-light').trim() || '#ffaa3d';

    for (let i = 0; i < 20; i++) {
        const bar = document.createElement('div');
        bar.className = 'visualizer-bar';
        bar.style.cssText = `
            width: 6px;
            height: 10px;
            background: linear-gradient(to top, ${accentColor}, ${accentLightColor});
            border-radius: 3px 3px 0 0;
            transition: height 0.1s ease;
        `;
        visualizer.appendChild(bar);
    }

    audio.parentNode.insertBefore(visualizer, audio);

    let visualizerInterval = null;
    const bars = visualizer.querySelectorAll('.visualizer-bar');

    function resetBars() {
        bars.forEach(bar => { bar.style.height = '10px'; });
    }

    function stopVisualizer() {
        if (visualizerInterval !== null) {
            clearInterval(visualizerInterval);
            visualizerInterval = null;
        }
        resetBars();
    }

    audio.addEventListener('play', () => {
        if (PREFERS_REDUCED_MOTION) return;
        if (visualizerInterval !== null) clearInterval(visualizerInterval);
        visualizerInterval = setInterval(() => {
            if (audio.paused) return;
            bars.forEach(bar => {
                bar.style.height = (Math.random() * 50 + 10) + 'px';
            });
        }, 100);
    });

    audio.addEventListener('pause', stopVisualizer);
    audio.addEventListener('ended', stopVisualizer);
}

// ===== BUTTON RIPPLE EFFECT =====
function addButtonRipples() {
    if (PREFERS_REDUCED_MOTION) return;

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
                background: rgba(var(--accent-rgb, 255, 197, 109), 0.5);
                left: ${x}px;
                top: ${y}px;
                pointer-events: none;
                animation: rippleEffect 0.6s ease-out;
            `;

            this.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        });
    });

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
    if (!images.length) return;

    let loadedCount = 0;
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.style.opacity = '0';
                img.style.transition = 'opacity 0.5s ease-in';

                img.addEventListener('load', () => {
                    img.style.opacity = '1';
                });
                if (img.complete) img.style.opacity = '1';

                observer.unobserve(img);
                loadedCount++;
                if (loadedCount === images.length) {
                    observer.disconnect();
                }
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// ===== HR ANIMATIONS =====
function animateHorizontalRules() {
    const hrs = document.querySelectorAll('hr');
    if (!hrs.length) return;

    if (PREFERS_REDUCED_MOTION) {
        hrs.forEach(hr => { hr.style.opacity = '1'; });
        return;
    }

    hrs.forEach(hr => {
        hr.style.opacity = '0';
        hr.style.transform = 'scaleX(0)';
        hr.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    let revealedCount = 0;
    const hrObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'scaleX(1)';
                hrObserver.unobserve(entry.target);
                revealedCount++;
                if (revealedCount === hrs.length) {
                    hrObserver.disconnect();
                }
            }
        });
    }, { threshold: 0.5 });

    hrs.forEach(hr => hrObserver.observe(hr));
}

// ===== INITIALIZE =====
document.addEventListener('DOMContentLoaded', () => {
    const scrollProgress = document.createElement('div');
    scrollProgress.id = 'scroll-progress';
    document.body.prepend(scrollProgress);

    addFadeInSections();
    handleScrollAnimations();
    createParticles();
    createAudioVisualizer();
    addButtonRipples();
    handleImageLazyLoad();
    animateHorizontalRules();
    handleScroll();
});
