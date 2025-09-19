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