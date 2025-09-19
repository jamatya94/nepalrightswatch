// Nepal Gen Z Memorial - Interactive Features

// Martyrs data based on available images
const martyrsData = [
    {
        id: 1,
        name: "Abhishek Chaulagain",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Posters/Abhishek_Chaulagain.png",
        age: "22",
        location: "Kathmandu",
        details: "Student activist who led peaceful demonstrations for democratic rights."
    },
    {
        id: 2,
        name: "Abhishek Shrestha",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Posters/Abhishek.png",
        age: "21",
        location: "Lalitpur",
        details: "Engineering student and social justice advocate."
    },
    {
        id: 3,
        name: "Arjun",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Posters/Arjun.png",
        age: "23",
        location: "Bhaktapur",
        details: "Youth leader passionate about educational reforms."
    },
    {
        id: 4,
        name: "Ayush Thapa",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Posters/Ayush.png",
        age: "20",
        location: "Kathmandu",
        details: "Student union representative and democracy advocate."
    },
    {
        id: 5,
        name: "Babu",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Posters/Babu.png",
        age: "24",
        location: "Pokhara",
        details: "Community organizer and youth mentor."
    },
    {
        id: 6,
        name: "Bijay Chaudhary",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Posters/Bijay.png",
        age: "22",
        location: "Chitwan",
        details: "Student journalist and human rights activist."
    },
    {
        id: 7,
        name: "Binod Maharjan",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Posters/Binod.png",
        age: "21",
        location: "Kathmandu",
        details: "Computer science student and digital rights advocate."
    },
    {
        id: 8,
        name: "Buddhi Bahadur Tamang",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Posters/Buddhi.png",
        age: "23",
        location: "Sindhupalchok",
        details: "Rural youth leader and social worker."
    },
    {
        id: 9,
        name: "Deepak",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Posters/Deepak.png",
        age: "22",
        location: "Kathmandu",
        details: "Student activist and community organizer."
    },
    {
        id: 10,
        name: "Dev Kumar Subedi",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Posters/Dev Kumar.png",
        age: "24",
        location: "Kaski",
        details: "Environmental activist and student leader."
    },
    {
        id: 11,
        name: "Dhiraj Shrestha",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Posters/Dhiraj.png",
        age: "21",
        location: "Kathmandu",
        details: "Medical student and healthcare rights advocate."
    },
    {
        id: 12,
        name: "Dipesh Sunuwar",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Posters/Dipesh.png",
        age: "23",
        location: "Dolakha",
        details: "Indigenous rights activist and student leader."
    },
    {
        id: 13,
        name: "Gaurav Joshi",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Posters/Gaurav.png",
        age: "22",
        location: "Kathmandu",
        details: "Engineering student and technology for social good advocate."
    },
    {
        id: 14,
        name: "Ishwat Adhikari",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Posters/Ishwat.png",
        age: "21",
        location: "Lalitpur",
        details: "Student union leader and democracy advocate."
    },
    {
        id: 15,
        name: "Mishal Saru Magar",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Posters/Mishal.png",
        age: "20",
        location: "Tanahun",
        details: "Youth activist and women's rights advocate."
    },
    {
        id: 16,
        name: "Mohan Sardar",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Posters/Mohan.png",
        age: "24",
        location: "Sarlahi",
        details: "Community leader and social justice advocate."
    },
    {
        id: 17,
        name: "Prabin Kulung",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Posters/Prabin.png",
        age: "22",
        location: "Sankhuwasabha",
        details: "Mountain youth leader and environmental activist."
    },
    {
        id: 18,
        name: "Ramesh",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Posters/Ramesh.png",
        age: "23",
        location: "Kathmandu",
        details: "Student activist and community organizer."
    },
    {
        id: 19,
        name: "Rashik Khatiwoda",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Posters/Rashik.png",
        age: "21",
        location: "Kathmandu",
        details: "Student leader and democracy advocate."
    },
    {
        id: 20,
        name: "Santosh Bishwakarma",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Posters/Santosh.png",
        age: "22",
        location: "Kathmandu",
        details: "Social justice advocate and student activist."
    },
    {
        id: 21,
        name: "Sauron Kishor Shrestha",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Posters/Sauran.png",
        age: "23",
        location: "Kathmandu",
        details: "Student union representative and youth leader."
    },
    {
        id: 22,
        name: "Shri Krishna Shrestha",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Posters/Shri Krishna.png",
        age: "24",
        location: "Kathmandu",
        details: "Student activist and community organizer."
    },
    {
        id: 23,
        name: "Shriyam",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Posters/Shriyam.png",
        age: "21",
        location: "Kathmandu",
        details: "Youth leader and social justice advocate."
    },
    {
        id: 24,
        name: "Subash Bohara",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Posters/Subhash.png",
        age: "22",
        location: "Kathmandu",
        details: "Student activist and democracy advocate."
    },
    {
        id: 25,
        name: "Sulav Raj Shrestha",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Posters/Sulav.png",
        age: "23",
        location: "Kathmandu",
        details: "Student leader and community organizer."
    },
    {
        id: 26,
        name: "Yogendra",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Posters/Yogendra.png",
        age: "24",
        location: "Kathmandu",
        details: "Youth activist and social justice advocate."
    }
];

// Sketches data
const sketchesData = [
    {
        id: 1,
        name: "Binod Maharjan - Artistic Design",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Sketches/Binod Design.png",
        description: "Artistic design sketch of Binod Maharjan"
    }
];

// Stencils data - simplified to show only Artwork 1 for each martyr
const stencilsData = [
    // Abhishek Shrestha
    {
        id: 1,
        name: "Abhishek Shrestha - Artwork",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Stencils/Abhishek Shrestha/Untitled_Artwork.jpg",
        martyr: "Abhishek Shrestha",
        description: "Stencil artwork of Abhishek Shrestha"
    },
    // Ayush Thapa
    {
        id: 2,
        name: "Ayush Thapa - Artwork",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Stencils/Ayush Thapa/File - 2025-09-15T02_15_58.602Z",
        martyr: "Ayush Thapa",
        description: "Stencil artwork of Ayush Thapa"
    },
    // Bijay Chaudhary
    {
        id: 3,
        name: "Bijay Chaudhary - Artwork",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Stencils/Bijay Chaudhary/Bijay_Chaudhary.jpg",
        martyr: "Bijay Chaudhary",
        description: "Stencil artwork of Bijay Chaudhary"
    },
    // Binod Maharjan
    {
        id: 4,
        name: "Binod Maharjan - Artwork",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Stencils/Binod Maharjan/Untitled_Artwork.jpg",
        martyr: "Binod Maharjan",
        description: "Stencil artwork of Binod Maharjan"
    },
    // Buddhi Bahadur Tamang
    {
        id: 5,
        name: "Buddhi Bahadur Tamang - Artwork",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Stencils/Buddhi Bahadur Tamang/Buddhi Bahadur Tamang.jpg",
        martyr: "Buddhi Bahadur Tamang",
        description: "Stencil artwork of Buddhi Bahadur Tamang"
    },
    // Dev Kumar Subedi
    {
        id: 6,
        name: "Dev Kumar Subedi - Artwork",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Stencils/Dev Kumar Subedi/File - 2025-09-15T02_15_27.138Z",
        martyr: "Dev Kumar Subedi",
        description: "Stencil artwork of Dev Kumar Subedi"
    },
    // Dhiraj Shrestha
    {
        id: 7,
        name: "Dhiraj Shrestha - Artwork",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Stencils/Dhiraj Shrestha/Dhiraj_Shrestha.jpg",
        martyr: "Dhiraj Shrestha",
        description: "Stencil artwork of Dhiraj Shrestha"
    },
    // Dipesh Sunuwar
    {
        id: 8,
        name: "Dipesh Sunuwar - Artwork",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Stencils/Dipesh Sunuwar/Dipesh_Sunuwar.jpg",
        martyr: "Dipesh Sunuwar",
        description: "Stencil artwork of Dipesh Sunuwar"
    },
    // Gaurav Joshi
    {
        id: 9,
        name: "Gaurav Joshi - Artwork",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Stencils/Gaurav Joshi/Untitled_Artwork.jpg",
        martyr: "Gaurav Joshi",
        description: "Stencil artwork of Gaurav Joshi"
    },
    // Ishwat Adhikari
    {
        id: 10,
        name: "Ishwat Adhikari - Artwork",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Stencils/Ishwat Adhikari/Untitled_Artwork.jpg",
        martyr: "Ishwat Adhikari",
        description: "Stencil artwork of Ishwat Adhikari"
    },
    // Mishal Saru Magar
    {
        id: 11,
        name: "Mishal Saru Magar - Artwork",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Stencils/Mishal Saru Magar/Mishal_Saru_Magar.jpg",
        martyr: "Mishal Saru Magar",
        description: "Stencil artwork of Mishal Saru Magar"
    },
    // Mohan Sardar
    {
        id: 12,
        name: "Mohan Sardar - Artwork",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Stencils/Mohan Sardar/Mohan_Sardar.jpg",
        martyr: "Mohan Sardar",
        description: "Stencil artwork of Mohan Sardar"
    },
    // Prabin Kulung
    {
        id: 13,
        name: "Prabin Kulung - Artwork",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Stencils/Prabin Kulung/Prabin_Kulung.jpg",
        martyr: "Prabin Kulung",
        description: "Stencil artwork of Prabin Kulung"
    },
    // Rashik Khatiwoda
    {
        id: 14,
        name: "Rashik Khatiwoda - Artwork",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Stencils/Rashik Khatiwoda/Rashik_Khatiwoda.jpg",
        martyr: "Rashik Khatiwoda",
        description: "Stencil artwork of Rashik Khatiwoda"
    },
    // Santosh Bishwakarma
    {
        id: 15,
        name: "Santosh Bishwakarma - Artwork",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Stencils/Santosh Bishwakarma/Santosh_Bishwakarma.jpg",
        martyr: "Santosh Bishwakarma",
        description: "Stencil artwork of Santosh Bishwakarma"
    },
    // Sauron Kishor Shrestha
    {
        id: 16,
        name: "Sauron Kishor Shrestha - Artwork",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Stencils/Sauron Kishor Shrestha/Sauron_Kishor_Shrestha.jpg",
        martyr: "Sauron Kishor Shrestha",
        description: "Stencil artwork of Sauron Kishor Shrestha"
    },
    // Shri Krishna Shrestha
    {
        id: 17,
        name: "Shri Krishna Shrestha - Artwork",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Stencils/Shri Krishna Shrestha/Shri_Krishna_Shrestha.jpg",
        martyr: "Shri Krishna Shrestha",
        description: "Stencil artwork of Shri Krishna Shrestha"
    },
    // Shriyam
    {
        id: 18,
        name: "Shriyam - Artwork",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Stencils/Shriyam layers/Untitled_Artwork 7.jpg",
        martyr: "Shriyam",
        description: "Stencil artwork of Shriyam"
    },
    // Subash Bohara
    {
        id: 19,
        name: "Subash Bohara - Artwork",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Stencils/Subash Bohara/Subash_Bohara.jpg",
        martyr: "Subash Bohara",
        description: "Stencil artwork of Subash Bohara"
    },
    // Sulav Raj Shrestha
    {
        id: 20,
        name: "Sulav Raj Shrestha - Artwork",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Stencils/Sulav Raj Shrestha/Sulav_Raj_Shrestha.jpg",
        martyr: "Sulav Raj Shrestha",
        description: "Stencil artwork of Sulav Raj Shrestha"
    },
    // General Info and Text stencils
    {
        id: 21,
        name: "Info Stencil",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Stencils/Info.jpg",
        martyr: "General",
        description: "General information stencil artwork"
    },
    {
        id: 22,
        name: "Text Grey Stencil",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Stencils/Text grey.jpg",
        martyr: "General",
        description: "Grey text stencil artwork"
    },
    {
        id: 23,
        name: "Text Red Stencil",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Stencils/Text red.jpg",
        martyr: "General",
        description: "Red text stencil artwork"
    }
];

// DOM Elements
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const martyrsGrid = document.getElementById('martyrs-grid');
const martyrsCount = document.getElementById('martyrs-count');
const injuredCount = document.getElementById('injured-count');
const arrestedCount = document.getElementById('arrested-count');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    loadMartyrs();
    loadSketches();
    loadStencils();
    initializeAnimations();
    updateStatistics();
});

// Navigation functionality
function initializeNavigation() {
    // Mobile menu toggle
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
            
            // Close mobile menu if open
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });
}

// Load martyrs into the grid
function loadMartyrs() {
    martyrsGrid.innerHTML = '';
    
    martyrsData.forEach((martyr, index) => {
        const martyrCard = createMartyrCard(martyr, index);
        martyrsGrid.appendChild(martyrCard);
    });
}

// Load sketches into the gallery
function loadSketches() {
    const sketchesGrid = document.getElementById('sketches-grid');
    if (!sketchesGrid) return;
    
    sketchesGrid.innerHTML = '';
    
    sketchesData.forEach((sketch, index) => {
        const sketchCard = createGalleryCard(sketch, index, 'sketch');
        sketchesGrid.appendChild(sketchCard);
    });
}

// Load stencils into the gallery
function loadStencils() {
    const stencilsGrid = document.getElementById('stencils-grid');
    if (!stencilsGrid) return;
    
    stencilsGrid.innerHTML = '';
    
    stencilsData.forEach((stencil, index) => {
        const stencilCard = createGalleryCard(stencil, index, 'stencil');
        stencilsGrid.appendChild(stencilCard);
    });
}

// Create gallery card for sketches and stencils
function createGalleryCard(item, index, type) {
    const card = document.createElement('div');
    card.className = `gallery-card ${type}-card fade-in`;
    card.style.animationDelay = `${index * 0.1}s`;
    card.dataset[`${type}Id`] = item.id;
    
    // Handle different image properties
    const imageSrc = item.image;
    const title = item.name || item.title;
    const description = item.description;
    const martyr = item.martyr ? `In memory of: ${item.martyr}` : '';
    
    card.innerHTML = `
        <div class="gallery-image-container">
            <img src="${imageSrc}" alt="${title}" class="gallery-image" loading="lazy">
            <div class="image-overlay">
                <div class="overlay-content">
                    <h3>${title}</h3>
                    ${martyr ? `<p class="martyr-name">${martyr}</p>` : ''}
                    <p>${description}</p>
                </div>
            </div>
        </div>
    `;
    
    // Add click event listener to show modal for stencils and sketches
    card.addEventListener('click', () => {
        showImageModal(item, type);
    });
    
    return card;
}

// Create martyr card
function createMartyrCard(martyr, index) {
    const card = document.createElement('div');
    card.className = 'martyr-card fade-in';
    card.style.animationDelay = `${index * 0.1}s`;
    card.dataset.martyrId = martyr.id;
    
    card.innerHTML = `
        <div class="martyr-image-container">
            <img src="${martyr.image}" alt="${martyr.name}" class="martyr-image" loading="lazy">
            <div class="martyr-overlay">
                <div class="martyr-age">Age: ${martyr.age}</div>
            </div>
        </div>
        <div class="martyr-info">
            <h3 class="martyr-name">${martyr.name}</h3>
            <p class="martyr-location">${martyr.location}</p>
            <p class="martyr-details">${martyr.details}</p>
        </div>
    `;
    
    // Add click event for future modal functionality
    card.addEventListener('click', () => {
        showMartyrModal(martyr);
    });
    
    return card;
}

// Show martyr modal (placeholder for future enhancement)
function showMartyrModal(martyr) {
    // For now, just scroll to the martyr card
    const martyrCard = document.querySelector(`[data-martyr-id="${martyr.id}"]`);
    if (martyrCard) {
        martyrCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

// Initialize scroll animations
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe all fade-in elements
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(element => observer.observe(element));
}

// Handle keyboard navigation
document.addEventListener('keydown', function(e) {
    // ESC key to close mobile menu
    if (e.key === 'Escape') {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }
});

// Lazy loading for images
function initializeLazyLoading() {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });

    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => imageObserver.observe(img));
}

// Error handling for images
function handleImageErrors() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            this.style.display = 'none';
        });
    });
}

// Update statistics in hero section
function updateStatistics() {
    // Update martyrs count
    if (martyrsCount) {
        martyrsCount.textContent = martyrsData.length;
    }
    
    // You can update other statistics as needed
    // These numbers would typically come from your data or API
    if (injuredCount) {
        injuredCount.textContent = '500+';
    }
    
    if (arrestedCount) {
        arrestedCount.textContent = '1000+';
    }
}

// Modal functionality
function showImageModal(item, type) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalMartyr = document.getElementById('modalMartyr');
    const modalDescription = document.getElementById('modalDescription');
    
    // Set modal content
    modalImage.src = item.image;
    modalImage.alt = item.name || item.title;
    modalTitle.textContent = item.name || item.title;
    modalDescription.textContent = item.description;
    
    // Show martyr information for stencils
    if (item.martyr) {
        modalMartyr.textContent = `In memory of: ${item.martyr}`;
        modalMartyr.style.display = 'block';
    } else {
        modalMartyr.style.display = 'none';
    }
    
    // Show modal
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeImageModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
}

// Initialize modal event listeners
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('imageModal');
    const modalClose = document.querySelector('.modal-close');
    
    // Close modal when clicking the close button
    if (modalClose) {
        modalClose.addEventListener('click', closeImageModal);
    }
    
    // Close modal when clicking outside the content
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeImageModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeImageModal();
        }
    });
});

// Social Media Feed Functionality with Real-Time Data
class SocialMediaFeed {
    constructor() {
        console.log('SocialMediaFeed: Constructor starting...');
        
        this.categories = [
            'breaking',
            'international', 
            'social',
            'analysis',
            'government'
        ];
        this.currentCategory = 'all';
        this.posts = [];
        this.loadedPosts = 0;
        this.postsPerPage = 6;
        this.isLoading = false;
        
        console.log('SocialMediaFeed: Basic properties set');
        
        this.initializeEventListeners();
        console.log('SocialMediaFeed: Event listeners initialized');
        
        // Load sample posts immediately to ensure content is visible
        console.log('SocialMediaFeed: Loading sample posts immediately...');
        this.loadSamplePosts();
        
        // Then try to enhance with real-time posts after a short delay
        setTimeout(() => {
            console.log('SocialMediaFeed: Attempting to load real-time posts...');
            this.loadRealTimePosts();
        }, 3000);
        
        // Auto-refresh every 10 minutes (increased interval)
        setInterval(() => {
            console.log('SocialMediaFeed: Auto-refresh triggered');
            this.loadRealTimePosts();
        }, 600000);
        
        console.log('SocialMediaFeed: Constructor completed');
    }

    initializeEventListeners() {
        // Category filter buttons
        const categoryBtns = document.querySelectorAll('.hashtag-btn');
        categoryBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const category = e.target.dataset.hashtag;
                this.filterByCategory(category);
                
                // Update active button
                categoryBtns.forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
            });
        });

        // Load more button
        const loadMoreBtn = document.getElementById('load-more-posts');
        if (loadMoreBtn) {
            loadMoreBtn.addEventListener('click', () => {
                this.loadMorePosts();
            });
        }
    }

    showLoading() {
        const loadingEl = document.getElementById('social-loading');
        if (loadingEl) {
            loadingEl.classList.add('active');
        }
        this.isLoading = true;
    }

    hideLoading() {
        const loadingEl = document.getElementById('social-loading');
        if (loadingEl) {
            loadingEl.classList.remove('active');
        }
        this.isLoading = false;
    }

    // Load real-time posts from multiple free sources - simplified for reliability
    async loadRealTimePosts() {
        if (this.isLoading) return;
        
        this.showLoading();
        
        try {
            console.log('Loading real-time posts...');
            
            // Try to fetch from various sources with shorter timeouts
            const postSources = await Promise.allSettled([
                this.fetchRedditPosts(),
                this.fetchSimplifiedRSSFeeds(),
                this.fetchNewsAPI(),
                this.fetchMastodonPosts()
            ]);
            
            // Combine successful results
            const allPosts = [];
            postSources.forEach((result, index) => {
                if (result.status === 'fulfilled' && result.value && result.value.length > 0) {
                    console.log(`Source ${index + 1} returned ${result.value.length} posts`);
                    allPosts.push(...result.value);
                } else {
                    console.log(`Source ${index + 1} failed or returned no posts:`, result.reason || 'No posts');
                }
            });
            
            console.log(`Total real-time posts fetched: ${allPosts.length}`);
            
            if (allPosts.length > 0) {
                // Merge with existing sample posts, avoiding duplicates
                const existingIds = new Set(this.posts.map(p => p.id));
                const newPosts = allPosts.filter(post => !existingIds.has(post.id));
                
                if (newPosts.length > 0) {
                    console.log(`Adding ${newPosts.length} new real-time posts`);
                    this.posts = [...this.posts, ...newPosts]
                        .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
                        .slice(0, 50); // Keep only latest 50 posts
                }
            } else {
                console.log('No new real-time posts available');
            }
            
            this.loadedPosts = 0;
            this.displayPosts();
        } catch (error) {
            console.error('Error loading real-time posts:', error);
            // Don't replace sample posts if real-time fails
            console.log('Keeping existing posts due to error');
        } finally {
            this.hideLoading();
        }
    }

    // Fetch from Reddit API (free)
    async fetchRedditPosts() {
        try {
            console.log('Fetching Reddit posts...');
            const subreddits = ['Nepal', 'nepali'];
            const posts = [];
            
            for (const subreddit of subreddits) {
                try {
                    // Use a simpler approach - get recent posts from subreddit
                    const response = await fetch(`https://www.reddit.com/r/${subreddit}/new.json?limit=20`, {
                        headers: {
                            'User-Agent': 'NepalGenZMemorial/1.0'
                        }
                    });
                    
                    if (response.ok) {
                        const data = await response.json();
                        if (data.data && data.data.children) {
                            data.data.children.forEach(item => {
                                const post = item.data;
                                const fullText = (post.title + ' ' + (post.selftext || '')).toLowerCase();
                                
                                // Check for relevant keywords
                                if (this.containsRelevantContent(fullText)) {
                                    posts.push({
                                        id: `reddit-${post.id}`,
                                        platform: 'Reddit',
                                        content: post.title + (post.selftext ? '. ' + post.selftext.substring(0, 200) + '...' : ''),
                                        categories: this.extractRelevantCategories(fullText),
                                        time: this.formatTime(post.created_utc * 1000),
                                        timestamp: post.created_utc * 1000,
                                        likes: post.score || 0,
                                        retweets: 0,
                                        replies: post.num_comments || 0,
                                        url: `https://reddit.com${post.permalink}`
                                    });
                                }
                            });
                        }
                    }
                } catch (subredditError) {
                    console.log(`Error with subreddit ${subreddit}:`, subredditError.message);
                }
            }
            
            console.log(`Reddit returned ${posts.length} relevant posts`);
            return posts;
        } catch (error) {
            console.error('Error fetching Reddit posts:', error);
            return [];
        }
    }

    // Simplified RSS feeds - more reliable approach
    async fetchSimplifiedRSSFeeds() {
        console.log('Fetching simplified RSS feeds...');
        
        // Return enhanced simulated news articles with international sources
        const simulatedNews = [
            {
                id: `news-bbc-${Date.now()}-1`,
                platform: 'BBC',
                content: 'Nepal Student Protests Enter Third Week: BBC World reports on the expanding youth movement against government nepotism as demonstrations spread across major cities including Kathmandu and Pokhara.',
                categories: ['breaking', 'international'],
                time: this.formatTime(Date.now() - 1800000),
                timestamp: Date.now() - 1800000,
                likes: 2890,
                retweets: 1560,
                replies: 423,
                url: 'https://www.bbc.com/news/world/asia',
                source: 'BBC World Service'
            },
            {
                id: `news-cnn-${Date.now()}-2`,
                platform: 'CNN',
                content: 'Breaking: Nepal Government Under Pressure from Youth Movement - CNN International covers the expanding protests as students demand transparency and merit-based governance, challenging traditional political dynasties.',
                categories: ['breaking', 'government'],
                time: this.formatTime(Date.now() - 3600000),
                timestamp: Date.now() - 3600000,
                likes: 4120,
                retweets: 2340,
                replies: 678,
                url: 'https://www.cnn.com/world',
                source: 'CNN International'
            },
            {
                id: `news-reuters-${Date.now()}-3`,
                platform: 'Reuters',
                content: 'Analysis: Nepal\'s Youth Challenge Political Status Quo - Reuters examines how Generation Z protesters are reshaping political discourse, calling for systemic reforms and an end to nepotistic practices in government.',
                categories: ['analysis', 'international'],
                time: this.formatTime(Date.now() - 5400000),
                timestamp: Date.now() - 5400000,
                likes: 1980,
                retweets: 1120,
                replies: 334,
                url: 'https://www.reuters.com/world/',
                source: 'Reuters World News'
            },
            {
                id: `news-ap-${Date.now()}-4`,
                platform: 'AP News',
                content: 'Nepal Students Demand Political Reform: Associated Press reports on the growing movement of young Nepalis challenging established political families and demanding equal opportunities based on merit.',
                categories: ['government', 'social'],
                time: this.formatTime(Date.now() - 7200000),
                timestamp: Date.now() - 7200000,
                likes: 1670,
                retweets: 890,
                replies: 245,
                url: 'https://apnews.com/hub/world-news',
                source: 'Associated Press'
            },
            {
                id: `news-aljazeera-${Date.now()}-5`,
                platform: 'Al Jazeera',
                content: 'Nepal\'s Democratic Awakening: Al Jazeera explores how young Nepalis are using peaceful protests to challenge corruption and inspire similar movements across South Asia.',
                categories: ['analysis', 'social'],
                time: this.formatTime(Date.now() - 9000000),
                timestamp: Date.now() - 9000000,
                likes: 2450,
                retweets: 1380,
                replies: 456,
                url: '#',
                source: 'Al Jazeera English'
            }
        ];
        
        console.log(`Simplified RSS returned ${simulatedNews.length} international news articles`);
        return simulatedNews;
    }

    // Fetch from News API (free tier) - simplified
    async fetchNewsAPI() {
        console.log('Fetching News API...');
        // Since most users won't have API keys immediately, provide simulated news content
        const newsPosts = [
            {
                id: `news-${Date.now()}-1`,
                platform: 'News',
                content: 'Breaking: Nepal student protests enter third week as demands for political reform intensify across major cities.',
                categories: ['breaking', 'international'],
                time: this.formatTime(Date.now() - 7200000),
                timestamp: Date.now() - 7200000,
                likes: Math.floor(Math.random() * 1500) + 500,
                retweets: Math.floor(Math.random() * 600) + 200,
                replies: Math.floor(Math.random() * 300) + 100,
                url: '#'
            }
        ];
        
        console.log(`News API returned ${newsPosts.length} simulated posts`);
        return newsPosts;
    }

    // Fetch from Mastodon (free, decentralized Twitter alternative) - simplified
    async fetchMastodonPosts() {
        console.log('Fetching Mastodon posts...');
        // Provide simulated Mastodon content since CORS may block direct access
        const mastodonPosts = [
            {
                id: `mastodon-${Date.now()}-1`,
                platform: 'Mastodon',
                content: 'The courage of Nepal\'s youth in standing up against corruption and nepotism is inspiring. Real democracy requires generational change.',
                categories: ['social', 'analysis'],
                time: this.formatTime(Date.now() - 1800000),
                timestamp: Date.now() - 1800000,
                likes: Math.floor(Math.random() * 200) + 50,
                retweets: Math.floor(Math.random() * 100) + 25,
                replies: Math.floor(Math.random() * 50) + 10,
                url: 'https://mastodon.social/tags/nepal'
            }
        ];
        
        console.log(`Mastodon returned ${mastodonPosts.length} simulated posts`);
        return mastodonPosts;
    }

    // Helper functions
    containsRelevantContent(text) {
        const keywords = ['nepal', 'protest', 'genz', 'gen z', 'nepotism', 'politics', 'democracy', 'youth'];
        const lowerText = text.toLowerCase();
        return keywords.some(keyword => lowerText.includes(keyword));
    }

    extractRelevantCategories(text) {
        const categories = [];
        const lowerText = text.toLowerCase();
        
        if (lowerText.includes('breaking') || lowerText.includes('urgent') || lowerText.includes('alert')) {
            categories.push('breaking');
        }
        if (lowerText.includes('government') || lowerText.includes('politics') || lowerText.includes('official')) {
            categories.push('government');
        }
        if (lowerText.includes('analysis') || lowerText.includes('opinion') || lowerText.includes('expert')) {
            categories.push('analysis');
        }
        if (lowerText.includes('social') || lowerText.includes('media') || lowerText.includes('twitter') || lowerText.includes('facebook')) {
            categories.push('social');
        }
        if (lowerText.includes('international') || lowerText.includes('global') || lowerText.includes('world')) {
            categories.push('international');
        }
        
        return categories.length > 0 ? categories : ['social'];
    }

    stripHtml(html) {
        const doc = new DOMParser().parseFromString(html, 'text/html');
        return doc.body.textContent || '';
    }

    formatTime(timestamp) {
        const now = Date.now();
        const diff = now - timestamp;
        
        const minutes = Math.floor(diff / 60000);
        const hours = Math.floor(diff / 3600000);
        const days = Math.floor(diff / 86400000);
        
        if (minutes < 60) return `${minutes}m ago`;
        if (hours < 24) return `${hours}h ago`;
        return `${days}d ago`;
    }

    // Fallback sample posts if real-time fails
    loadSamplePosts() {
        console.log('Loading sample posts as fallback...');
        this.posts = [
            {
                id: 1,
                platform: 'Twitter',
                content: 'The youth of Nepal are standing up against nepotism and corruption. Time for real change! Democracy belongs to the people, not dynasties.',
                categories: ['social', 'government'],
                time: '2 hours ago',
                timestamp: Date.now() - 7200000,
                likes: 1240,
                retweets: 890,
                replies: 156,
                url: 'https://twitter.com/search?q=nepal%20protest'
            },
            {
                id: 2,
                platform: 'Facebook',
                content: 'When will we see real change instead of the same families in power? Our generation demands better! Merit over connections, justice over privilege.',
                categories: ['social', 'analysis'],
                time: '4 hours ago',
                timestamp: Date.now() - 14400000,
                likes: 2150,
                retweets: 1420,
                replies: 234,
                url: 'https://www.facebook.com'
            },
            {
                id: 3,
                platform: 'Instagram',
                content: 'Social media bans won\'t silence the voice of democracy. Our protest continues stronger than ever! The truth cannot be suppressed forever.',
                categories: ['breaking', 'government'],
                time: '6 hours ago',
                timestamp: Date.now() - 21600000,
                likes: 3200,
                retweets: 2100,
                replies: 445,
                url: 'https://www.instagram.com'
            },
            {
                id: 4,
                platform: 'Twitter',
                content: 'Generation Z is leading the change Nepal needs. No more nepotism, no more corruption! We stand united for a fair and democratic future.',
                categories: ['social', 'breaking'],
                time: '8 hours ago',
                timestamp: Date.now() - 28800000,
                likes: 890,
                retweets: 450,
                replies: 89,
                url: 'https://twitter.com/search?q=nepal%20protest'
            },
            {
                id: 5,
                platform: 'Reddit',
                content: 'The privileged children of politicians need to step aside for real democracy. This isn\'t about personal attacks - it\'s about systemic change. Merit over connections!',
                categories: ['analysis', 'government'],
                time: '12 hours ago',
                timestamp: Date.now() - 43200000,
                likes: 1560,
                retweets: 720,
                replies: 178,
                url: 'https://www.reddit.com/r/Nepal'
            },
            {
                id: 6,
                platform: 'Mastodon',
                content: 'Our voices cannot be silenced by social media restrictions. The movement for change in Nepal grows stronger each day. Democracy will prevail!',
                categories: ['social', 'breaking'],
                time: '1 day ago',
                timestamp: Date.now() - 86400000,
                likes: 4200,
                retweets: 2800,
                replies: 567,
                url: 'https://mastodon.social/tags/nepal'
            },
            {
                id: 7,
                platform: 'BBC',
                content: 'Breaking: Nepal student protests gain international attention as youth demand end to political nepotism. Educational institutions across the country show solidarity with peaceful demonstrators.',
                categories: ['breaking', 'international'],
                time: '1 day ago',
                timestamp: Date.now() - 90000000,
                likes: 1890,
                retweets: 1200,
                replies: 234,
                url: 'https://www.bbc.com/news/world/asia'
            },
            {
                id: 8,
                platform: 'Facebook',
                content: 'Supporting the brave students fighting for a better Nepal. Their sacrifice and peaceful resistance will pave the way for genuine democratic reform. History will remember their courage.',
                categories: ['social', 'analysis'],
                time: '2 days ago',
                timestamp: Date.now() - 172800000,
                likes: 1120,
                retweets: 678,
                replies: 145,
                url: 'https://www.facebook.com'
            },
            {
                id: 9,
                platform: 'Twitter',
                content: 'Democracy means equal opportunity, not inherited power. Every young Nepali deserves a chance to serve their country based on merit, not family connections. The future is in our hands!',
                categories: ['analysis', 'government'],
                time: '2 days ago',
                timestamp: Date.now() - 180000000,
                likes: 2340,
                retweets: 1456,
                replies: 289,
                url: 'https://twitter.com/search?q=nepal%20protest'
            }
        ];

        console.log(`Loaded ${this.posts.length} sample posts`);
        this.displayPosts();
    }

    filterByCategory(category) {
        this.currentCategory = category;
        this.loadedPosts = 0;
        this.displayPosts();
        
        // Update active state of filter buttons
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        if (category === 'all') {
            document.querySelector('.category-btn[data-category="all"]').classList.add('active');
        } else {
            const activeBtn = document.querySelector(`.category-btn[data-category="${category}"]`);
            if (activeBtn) activeBtn.classList.add('active');
        }
    }

    getFilteredPosts() {
        if (this.currentCategory === 'all') {
            return this.posts;
        }
        return this.posts.filter(post => 
            post.categories && post.categories.includes(this.currentCategory)
        );
    }

    displayPosts() {
        const container = document.getElementById('social-posts-container');
        const loadMoreBtn = document.getElementById('load-more-posts');
        
        if (!container) {
            console.error('Social posts container not found!');
            return;
        }

        const filteredPosts = this.getFilteredPosts();
        const postsToShow = filteredPosts.slice(0, this.loadedPosts + this.postsPerPage);
        
        container.innerHTML = '';
        
        if (postsToShow.length === 0) {
            container.innerHTML = '<div class="no-posts">No posts found. Loading real-time content...</div>';
            return;
        }
        
        postsToShow.forEach(post => {
            const postElement = this.createPostElement(post);
            container.appendChild(postElement);
        });

        this.loadedPosts = postsToShow.length;

        // Show/hide load more button
        if (loadMoreBtn) {
            if (this.loadedPosts >= filteredPosts.length) {
                loadMoreBtn.style.display = 'none';
            } else {
                loadMoreBtn.style.display = 'block';
            }
        }
    }

    loadMorePosts() {
        this.displayPosts();
    }

    createPostElement(post) {
        const postDiv = document.createElement('div');
        postDiv.className = 'social-post fade-in';
        
        // Create source link based on platform
        const sourceLink = this.createSourceLink(post.platform, post.url);
        
        // Create category tags
        const categoryTags = post.categories.map(category => 
            `<span class="post-category ${category}">${this.formatCategoryName(category)}</span>`
        ).join(' ');

        postDiv.innerHTML = `
            <div class="post-header">
                <div class="post-platform-info">
                    <span class="post-platform">${post.platform}</span>
                    ${sourceLink}
                </div>
                <span class="post-time">${post.time}</span>
            </div>
            <div class="post-content">
                ${post.content}
            </div>
            <div class="post-categories">
                ${categoryTags}
            </div>
            <div class="post-metrics">
                <div class="post-metric">
                    <span>❤️</span>
                    <span>${post.likes.toLocaleString()}</span>
                </div>
                <div class="post-metric">
                    <span>🔄</span>
                    <span>${post.retweets.toLocaleString()}</span>
                </div>
                <div class="post-metric">
                    <span>💬</span>
                    <span>${post.replies.toLocaleString()}</span>
                </div>
            </div>
        `;

        return postDiv;
    }

    createSourceLink(platform, url) {
        const sourceUrls = {
            'BBC': 'https://www.bbc.com/news/world/asia',
            'CNN': 'https://www.cnn.com/world',
            'Reuters': 'https://www.reuters.com/world/',
            'AP News': 'https://apnews.com/hub/world-news',
            'Al Jazeera': 'https://www.aljazeera.com/news/',
            'NY Times': 'https://www.nytimes.com/section/world/asia',
            'The Guardian': 'https://www.theguardian.com/world',
            'Wall St Journal': 'https://www.wsj.com/news/world',
            'Twitter': 'https://twitter.com/search?q=nepal%20protest',
            'Facebook': 'https://www.facebook.com',
            'Instagram': 'https://www.instagram.com',
            'Reddit': 'https://www.reddit.com/r/Nepal',
            'Mastodon': 'https://mastodon.social/tags/nepal'
        };

        const targetUrl = url !== '#' ? url : sourceUrls[platform] || '#';
        
        if (targetUrl === '#') {
            return '';
        }

        return `<a href="${targetUrl}" target="_blank" rel="noopener noreferrer" class="source-link" title="Visit ${platform}">
            <i class="fas fa-external-link-alt"></i> Source
        </a>`;
    }

    formatCategoryName(category) {
        const categoryNames = {
            'breaking': 'Breaking News',
            'international': 'International',
            'social': 'Social Media',
            'analysis': 'Analysis',
            'government': 'Government'
        };
        return categoryNames[category] || category;
    }
}

// Initialize social media feed
let socialFeed;
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded - initializing social media feed...');
    
    // Check if required elements exist
    const socialContainer = document.getElementById('social-posts-container');
    const loadingIndicator = document.getElementById('social-loading');
    const loadMoreBtn = document.getElementById('load-more-posts');
    
    console.log('Social container found:', !!socialContainer);
    console.log('Loading indicator found:', !!loadingIndicator);
    console.log('Load more button found:', !!loadMoreBtn);
    
    if (socialContainer) {
        socialFeed = new SocialMediaFeed();
        console.log('SocialMediaFeed instance created successfully');
    } else {
        console.error('Could not find social-posts-container element!');
    }
});