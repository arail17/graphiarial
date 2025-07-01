// Hero content data for rotation
const heroContent = [
    {
        title: "Hi, I’m Arial",
        badge: "GRAPHIC DESIGNER",
        language: "ENGLISH | HINDI",
        rating: "5.0 ⭐",
        description: "Hi, I’m Arial — a graphic designer who turns ideas into clean, bold visuals. I create logos, branding, and digital designs that help you stand out. Let’s build something creative together!",
        background: "https://t3.ftcdn.net/jpg/02/98/11/76/240_F_298117627_neaI5EvfL3VGOPHKevRhUkTK1i7l9man.jpg"
    },
    {
        title: "Brand Identity Creation",
        badge: "FEATURED WORK",
        language: "GLOBAL",
        rating: "4.8 ⭐",
        description: "Specializing in crafting unique and memorable brand identities that resonate with your audience and leave a lasting impression.",
        background: "https://cdn.pixabay.com/photo/2012/06/25/15/41/berlin-wall-50730_640.jpg"
    },
    {
        title: "Dynamic Digital Campaigns",
        badge: "NEW PROJECTS",
        language: "ENGLISH",
        rating: "4.9 ⭐",
        description: "Designing engaging digital campaigns, from social media graphics to web banners, that capture attention and drive results.",
        background: "https://cdn.pixabay.com/photo/2015/04/29/09/28/graffiti-745071_1280.jpg"
    },
    {
        title: "Print & Editorial Design",
        badge: "PORTFOLIO HIGHLIGHT",
        language: "MULTILINGUAL",
        rating: "4.7 ⭐",
        description: "Expertise in creating visually stunning print materials, including brochures, flyers, and editorial layouts.",
        background: "https://cdn.pixabay.com/photo/2015/04/29/09/28/graffiti-745071_1280.jpg" // Reusing an image, consider replacing
    },
    {
        title: "Custom Illustrations",
        badge: "CREATIVE SERVICES",
        language: "ANY",
        rating: "5.0 ⭐",
        description: "Bringing ideas to life with bespoke illustrations tailored to your brand's unique story and aesthetic.",
        background: "https://cdn.pixabay.com/photo/2015/04/29/09/28/graffiti-745072_1280.jpg" // Reusing an image, consider replacing
    }
];

let currentSlide = 0;
let slideInterval;

// Elements
const heroSection = document.getElementById('hero-section');
const heroContentEl = document.getElementById('hero-content');
const contentBadge = document.getElementById('content-badge');
const heroTitle = document.getElementById('hero-title');
const languageInfo = document.getElementById('language-info');
const heroDescription = document.getElementById('hero-description');
const heroRating = document.getElementById('hero-rating');
const indicators = document.querySelectorAll('.indicator');
const header = document.getElementById('header');

// Update hero content and background
function updateHeroContent(index) {
    const content = heroContent[index];

    // Add fade out effect for content
    heroContentEl.style.opacity = '0';
    heroContentEl.style.transform = 'translateY(20px)'; // Smaller translate for subtler effect

    setTimeout(() => {
        // Update content
        contentBadge.textContent = content.badge || 'CREATIVE WORK'; // Default if badge is missing
        heroTitle.textContent = content.title;
        languageInfo.textContent = content.language || ''; // Handle missing language info
        heroDescription.textContent = content.description;
        heroRating.textContent = content.rating || '';

        // Update background
        heroSection.style.backgroundImage = `url('${content.background}')`;

        // Update indicators
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === index);
        });

        // Fade in effect for content
        heroContentEl.style.opacity = '1';
        heroContentEl.style.transform = 'translateY(0)';
    }, 300); // Shorter timeout for quicker transition
}

// Start slideshow
function startSlideshow() {
    stopSlideshow(); // Clear any existing interval
    slideInterval = setInterval(() => {
        currentSlide = (currentSlide + 1) % heroContent.length;
        updateHeroContent(currentSlide);
    }, 5000); // Increased interval to 5 seconds
}

// Stop slideshow
function stopSlideshow() {
    clearInterval(slideInterval);
}

// Initialize
updateHeroContent(0);
startSlideshow();

// Indicator click handlers
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentSlide = index;
        updateHeroContent(currentSlide);
        stopSlideshow();
        startSlideshow(); // Restart the timer
    });
});

// Pause slideshow on hover
heroSection.addEventListener('mouseenter', stopSlideshow);
heroSection.addEventListener('mouseleave', startSlideshow);

// Header scroll effect
window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    // Fade-in effect for content sections on scroll
    document.querySelectorAll('.content-section').forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;
        if (sectionTop < screenHeight * 0.8) { // When 80% of the section is visible
            section.classList.add('visible');
        } else {
            section.classList.remove('visible'); // Optional: remove if scrolled away
        }
    });
});


// Function to get the background image URL from style
function getBackgroundImageUrl(element) {
    const style = window.getComputedStyle(element);
    const backgroundImage = style.backgroundImage;
    if (backgroundImage && backgroundImage !== 'none') {
        const urlMatch = backgroundImage.match(/url\(['"]?(.*?)['"]?\)/);
        if (urlMatch && urlMatch[1]) {
            return urlMatch[1];
        }
    }
    return '';
}

// Content item click to view details
document.querySelectorAll('.content-item').forEach(item => {
    item.addEventListener('click', function() {
        const title = this.querySelector('.content-overlay .content-title')?.textContent;
        const imageUrl = getBackgroundImageUrl(this);

        // You'll need to manually add descriptions, categories, and dates to your HTML or a data structure
        // For demonstration, let's create a simple mapping or retrieve from data attributes
        const projectData = {
            "Music Ad Design": {
                description: "A dynamic advertisement design for a music product, focusing on vibrant colors and modern typography.",
                category: "Projects",
                date: "2023-10-15"
            },
            "Tech Event Flyer": {
                description: "An eye-catching flyer designed for a technology event, highlighting key speakers and event details.",
                category: "Projects",
                date: "2024-01-20"
            },
            "Abstract Logo Concept": {
                description: "An innovative logo concept incorporating abstract shapes to represent creativity and uniqueness.",
                category: "Projects",
                date: "2024-03-01"
            },
            "Burger Promotion": {
                description: "A mouth-watering promotion graphic for a burger joint, designed to entice customers.",
                category: "Projects",
                date: "2023-11-25"
            },
            "Cosmetic Banner": {
                description: "An elegant banner design for a cosmetic brand, emphasizing product beauty and sophistication.",
                category: "Projects",
                date: "2024-02-10"
            },
            "Minimalist Logo": {
                description: "A clean and simple logo design, perfect for modern brands seeking a sophisticated identity.",
                category: "Logos",
                date: "2023-09-01"
            },
            "Geometric Logo": {
                description: "A logo crafted with geometric precision, offering a strong and contemporary visual mark.",
                category: "Logos",
                date: "2024-04-05"
            },
            "Modern Branding": {
                description: "A comprehensive logo design part of a larger modern branding project, showcasing versatility.",
                category: "Logos",
                date: "2024-01-12"
            },
            "Creative Mark": {
                description: "A unique and memorable creative mark, ideal for artistic and innovative businesses.",
                category: "Logos",
                date: "2023-12-01"
            },
            "Watch Ad Banner": {
                description: "A sleek and attractive banner for a watch advertisement, focusing on product elegance.",
                category: "Brochure/Flyers",
                date: "2023-08-01"
            },
            "Facewash Promotion": {
                description: "A fresh and clean promotion graphic for a facewash product, emphasizing natural ingredients.",
                category: "Brochure/Flyers",
                date: "2024-02-28"
            },
            "Business Card Design": {
                description: "Professional and modern business card design, leaving a strong impression for networking.",
                category: "Brochure/Flyers",
                date: "2023-07-10"
            },
            "YouTube Thumbnail": {
                description: "An engaging YouTube thumbnail designed to maximize click-through rates for video content.",
                category: "Brochure/Flyers",
                date: "2024-03-15"
            },
            "Concert Brochure": {
                description: "A vibrant and informative brochure for a music concert, capturing the event's energy.",
                category: "Brochure/Flyers",
                date: "2023-11-05"
            },
            "Digital Art Piece": {
                description: "A unique digital art creation, showcasing a blend of colors and abstract forms.",
                category: "Brochure/Flyers",
                date: "2024-04-20"
            },
            // Add more entries for each of your content items
        };

        const details = projectData[title] || {};
        const description = details.description || "No detailed description available.";
        const category = details.category || "General";
        const date = details.date || "N.D.";

        if (title && imageUrl) {
            const url = `image-detail.html?image=${encodeURIComponent(imageUrl)}&title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}&category=${encodeURIComponent(category)}&date=${encodeURIComponent(date)}`;
            window.location.href = url;
        } else {
            console.warn("Could not get title or image URL for clicked item.");
        }
    });
});

// Smooth horizontal scrolling for content rows (draggable)
document.querySelectorAll('.content-row').forEach(row => {
    let isDown = false;
    let startX;
    let scrollLeft;

    row.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - row.offsetLeft;
        scrollLeft = row.scrollLeft;
        row.style.cursor = 'grabbing';
    });

    row.addEventListener('mouseleave', () => {
        isDown = false;
        row.style.cursor = 'grab';
    });

    row.addEventListener('mouseup', () => {
        isDown = false;
        row.style.cursor = 'grab';
    });

    row.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - row.offsetLeft;
        const walk = (x - startX) * 1.5; // Adjust scroll speed
        row.scrollLeft = scrollLeft - walk;
    });
});


















  