// 1. Navbar Scroll Effect (Scroll කරනකොට Menu එක අඳුරු වීම)
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    navbar.style.background = window.scrollY > 50 ? '#0f1014' : 'rgba(15, 16, 20, 0.95)';
    navbar.style.boxShadow = window.scrollY > 50 ? '0 5px 20px rgba(0,0,0,0.5)' : 'none';
});

// 2. Mobile Menu Toggle (Phone එකේ Menu එක වැඩ කිරීමට)
// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Icon එක Click කළාම මෙනු එක එනවා/යනවා
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Icon එක වෙනස් කිරීම (ඉරි 3 -> X ලකුණ)
    const icon = menuToggle.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Menu එකේ Link එකක් Click කළාම Menu එක වැසෙන්න ඕන
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.querySelector('i').classList.remove('fa-times');
        menuToggle.querySelector('i').classList.add('fa-bars');
    });
});

// 3. 3D Tilt Effect for Cards (Cards ඇලවෙන Effect එක)
// මේක වැඩ කරන්න අන්තර්ජාලය (Internet) අවශ්‍යයි
try {
    VanillaTilt.init(document.querySelectorAll(".tilt-card"), {
        max: 15,            // කොච්චර ඇලවෙනවද කියන එක
        speed: 400,         // වේගය
        glare: true,        // වීදුරු වගේ දිලිසෙන ගතිය
        "max-glare": 0.1,   // දිලිසෙන ප්‍රමාණය
    });
} catch (e) {
    console.log("Tilt library loading...");
}

// 4. Scroll Reveal Animation (පහළට Scroll කරනකොට මතු වීම)
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.tilt-card, .section-header, .about-text');
hiddenElements.forEach((el) => observer.observe(el));

// Animation CSS via JS
const style = document.createElement('style');
style.innerHTML = `
  .tilt-card, .section-header, .about-text { opacity: 0; transform: translateY(30px); transition: all 0.6s ease-out; }
  .show { opacity: 1; transform: translateY(0); }
`;
document.head.appendChild(style);