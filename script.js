// Tab switching functionality
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for(tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// Mobile menu functionality
var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-200px";
}

// Form submission handling
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const name = formData.get("Name");
    const email = formData.get("Email");
    const message = formData.get("Message");
    
    // Here you would typically send the data to a server
    console.log({ name, email, message });
    
    // Show success message
    alert("Thank you for your message! I'll get back to you soon.");
    form.reset();
});

// Scroll animations
document.addEventListener("DOMContentLoaded", function() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);

    // Observe sections for animation
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });

    // Header text animation
    const headerText = document.querySelector('.header-text');
    headerText.style.opacity = "0";
    headerText.style.transform = "translateY(20px)";
    
    setTimeout(() => {
        headerText.style.transition = "opacity 1s ease, transform 1s ease";
        headerText.style.opacity = "1";
        headerText.style.transform = "translateY(0)";
    }, 500);
});

// Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (window.innerWidth <= 600) {
                closemenu();
            }
        }
    });
});

// Add scroll effect to header
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.style.backgroundPositionY = -window.scrollY/2 + 'px';
    }
});

// Add typing animation to header text
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = "";
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing animation after page loads
window.addEventListener('load', function() {
    const headerTitle = document.querySelector('.header-text h1');
    const originalText = headerTitle.innerHTML;
    
    // Only animate if not on mobile
    if (window.innerWidth > 600) {
        headerTitle.innerHTML = "";
        setTimeout(() => {
            typeWriter(headerTitle, originalText, 100);
        }, 1000);
    }
});