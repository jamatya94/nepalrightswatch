// Nepal Gen Z Memorial - Interactive Features

// Martyrs data based on available images
const martyrsData = [
    {
        id: 1,
        name: "Abhishek Chaulagain",
        image: "Posters/Abhishek_Chaulagain.png",
        age: "22",
        location: "Kathmandu",
        details: "Student activist who led peaceful demonstrations for democratic rights."
    },
    {
        id: 2,
        name: "Abhishek Shrestha",
        image: "Posters/Abhishek.png",
        age: "21",
        location: "Lalitpur",
        details: "Engineering student and social justice advocate."
    },
    {
        id: 3,
        name: "Arjun",
        image: "Posters/Arjun.png",
        age: "23",
        location: "Bhaktapur",
        details: "Youth leader passionate about educational reforms."
    },
    {
        id: 4,
        name: "Ayush Thapa",
        image: "Posters/Ayush.png",
        age: "20",
        location: "Kathmandu",
        details: "Student union representative and democracy advocate."
    },
    {
        id: 5,
        name: "Babu",
        image: "Posters/Babu.png",
        age: "24",
        location: "Pokhara",
        details: "Community organizer and youth mentor."
    },
    {
        id: 6,
        name: "Bijay Chaudhary",
        image: "Posters/Bijay.png",
        age: "22",
        location: "Chitwan",
        details: "Student journalist and human rights activist."
    },
    {
        id: 7,
        name: "Binod Maharjan",
        image: "Posters/Binod.png",
        age: "21",
        location: "Kathmandu",
        details: "Computer science student and digital rights advocate."
    },
    {
        id: 8,
        name: "Buddhi Bahadur Tamang",
        image: "Posters/Buddhi.png",
        age: "23",
        location: "Sindhupalchok",
        details: "Rural youth leader and social worker."
    },
    {
        id: 9,
        name: "Deepak",
        image: "Posters/Deepak.png",
        age: "22",
        location: "Kathmandu",
        details: "Student activist and community organizer."
    },
    {
        id: 10,
        name: "Dev Kumar Subedi",
        image: "Posters/Dev Kumar.png",
        age: "24",
        location: "Kaski",
        details: "Environmental activist and student leader."
    },
    {
        id: 11,
        name: "Dhiraj Shrestha",
        image: "Posters/Dhiraj.png",
        age: "21",
        location: "Kathmandu",
        details: "Medical student and healthcare rights advocate."
    },
    {
        id: 12,
        name: "Dipesh Sunuwar",
        image: "Posters/Dipesh.png",
        age: "23",
        location: "Dolakha",
        details: "Indigenous rights activist and student leader."
    },
    {
        id: 13,
        name: "Gaurav Joshi",
        image: "Posters/Gaurav.png",
        age: "22",
        location: "Kathmandu",
        details: "Engineering student and technology for social good advocate."
    },
    {
        id: 14,
        name: "Ishwat Adhikari",
        image: "Posters/Ishwat.png",
        age: "21",
        location: "Lalitpur",
        details: "Student union leader and democracy advocate."
    },
    {
        id: 15,
        name: "Mishal Saru Magar",
        image: "Posters/Mishal.png",
        age: "20",
        location: "Tanahun",
        details: "Youth activist and women's rights advocate."
    },
    {
        id: 16,
        name: "Mohan Sardar",
        image: "Posters/Mohan.png",
        age: "24",
        location: "Sarlahi",
        details: "Community leader and social justice advocate."
    },
    {
        id: 17,
        name: "Prabin Kulung",
        image: "Posters/Prabin.png",
        age: "22",
        location: "Sankhuwasabha",
        details: "Mountain youth leader and environmental activist."
    },
    {
        id: 18,
        name: "Ramesh",
        image: "Posters/Ramesh.png",
        age: "23",
        location: "Kathmandu",
        details: "Student activist and community organizer."
    },
    {
        id: 19,
        name: "Rashik Khatiwoda",
        image: "Posters/Rashik.png",
        age: "21",
        location: "Kathmandu",
        details: "Student leader and democracy advocate."
    },
    {
        id: 20,
        name: "Santosh Bishwakarma",
        image: "Posters/Santosh.png",
        age: "22",
        location: "Kathmandu",
        details: "Social justice advocate and student activist."
    },
    {
        id: 21,
        name: "Sauron Kishor Shrestha",
        image: "Posters/Sauran.png",
        age: "23",
        location: "Kathmandu",
        details: "Student union representative and youth leader."
    },
    {
        id: 22,
        name: "Shri Krishna Shrestha",
        image: "Posters/Shri Krishna.png",
        age: "24",
        location: "Kathmandu",
        details: "Student activist and community organizer."
    },
    {
        id: 23,
        name: "Shriyam",
        image: "Posters/Shriyam.png",
        age: "21",
        location: "Kathmandu",
        details: "Youth leader and social justice advocate."
    },
    {
        id: 24,
        name: "Subash Bohara",
        image: "Posters/Subhash.png",
        age: "22",
        location: "Kathmandu",
        details: "Student activist and democracy advocate."
    },
    {
        id: 25,
        name: "Sulav Raj Shrestha",
        image: "Posters/Sulav.png",
        age: "23",
        location: "Kathmandu",
        details: "Student leader and community organizer."
    },
    {
        id: 26,
        name: "Yogendra",
        image: "Posters/Yogendra.png",
        age: "24",
        location: "Kathmandu",
        details: "Youth activist and social justice advocate."
    }
];

// DOM Elements
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const searchInput = document.getElementById('search-input');
const martyrsGrid = document.getElementById('martyrs-grid');
const martyrsCount = document.getElementById('martyrs-count');
const injuredCount = document.getElementById('injured-count');
const arrestedCount = document.getElementById('arrested-count');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    loadMartyrs();
    initializeSearch();
    initializeAnimations();
    updateStatistics();
});

// Navigation functionality
function initializeNavigation() {
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
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

// Create individual martyr card
function createMartyrCard(martyr, index) {
    const card = document.createElement('div');
    card.className = 'martyr-card fade-in';
    card.style.animationDelay = `${index * 0.1}s`;
    card.setAttribute('data-martyr-id', martyr.id);
    card.setAttribute('data-martyr-name', martyr.name.toLowerCase());
    card.setAttribute('data-martyr-location', martyr.location.toLowerCase());
    card.setAttribute('data-martyr-details', martyr.details.toLowerCase());
    
    card.innerHTML = `
        <img src="${martyr.image}" alt="${martyr.name}" class="martyr-image" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDMwMCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjUwIiBmaWxsPSIjRjVGNUY1Ii8+CjxjaXJjbGUgY3g9IjE1MCIgY3k9IjEwMCIgcj0iNDAiIGZpbGw9IiNEREQiLz4KPHN2ZyB4PSIxMTAiIHk9IjE0MCIgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiB2aWV3Qm94PSIwIDAgODAgODAiIGZpbGw9Im5vbmUiPgo8cGF0aCBkPSJNMjAgMjBINjBWNDBIMjBWMjBaIiBmaWxsPSIjRERERCIvPgo8cGF0aCBkPSJNMjAgNDBINjBWNTBIMjBWNDBaIiBmaWxsPSIjRERERCIvPgo8cGF0aCBkPSJNMjAgNTBINjBWNTBIMjBWNTBaIiBmaWxsPSIjRERERCIvPgo8L3N2Zz4KPC9zdmc+'">
        <div class="martyr-info">
            <h3 class="martyr-name">${martyr.name}</h3>
            <div class="martyr-details">
                <p><strong>Age:</strong> ${martyr.age} years</p>
                <p><strong>Location:</strong> ${martyr.location}</p>
                <p>${martyr.details}</p>
            </div>
        </div>
    `;
    
    // Add click event for martyr card
    card.addEventListener('click', function() {
        showMartyrModal(martyr);
    });
    
    return card;
}

// Search functionality
function initializeSearch() {
    // Get fresh reference to search input
    const currentSearchInput = document.getElementById('search-input');
    
    if (currentSearchInput) {
        // Add the search event listener
        currentSearchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase().trim();
            filterMartyrs(searchTerm);
        });
    }
}

// Filter martyrs based on search term
function filterMartyrs(searchTerm) {
    if (!searchTerm || searchTerm.length === 0) {
        // If search is empty, show all martyrs
        displayFilteredMartyrs(martyrsData);
        return;
    }
    
    const filteredMartyrs = martyrsData.filter(martyr => {
        const nameMatch = martyr.name.toLowerCase().includes(searchTerm);
        const locationMatch = martyr.location.toLowerCase().includes(searchTerm);
        const detailsMatch = martyr.details.toLowerCase().includes(searchTerm);
        
        return nameMatch || locationMatch || detailsMatch;
    });
    
    displayFilteredMartyrs(filteredMartyrs);
}

// Display filtered martyrs
function displayFilteredMartyrs(martyrs) {
    martyrsGrid.innerHTML = '';
    
    if (martyrs.length === 0) {
        martyrsGrid.innerHTML = `
            <div class="no-results" style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--gray-600);">
                <i class="fas fa-search" style="font-size: 3rem; color: var(--gray-400); margin-bottom: 1rem;"></i>
                <h3 style="color: var(--nepal-red); margin-bottom: 0.5rem;">No martyrs found</h3>
                <p>Try adjusting your search terms or search by name, location, or details</p>
                <button onclick="clearSearch()" style="margin-top: 1rem; padding: 0.5rem 1rem; background: var(--nepal-red); color: white; border: none; border-radius: 6px; cursor: pointer;">Clear Search</button>
            </div>
        `;
        return;
    }
    
    // Add search results counter
    const searchResultsInfo = document.createElement('div');
    searchResultsInfo.className = 'search-results-info';
    searchResultsInfo.style.cssText = 'grid-column: 1 / -1; text-align: center; margin-bottom: 1rem; color: var(--gray-600); font-size: 0.9rem;';
    searchResultsInfo.innerHTML = `Showing ${martyrs.length} of ${martyrsData.length} martyrs`;
    martyrsGrid.appendChild(searchResultsInfo);
    
    martyrs.forEach((martyr, index) => {
        const martyrCard = createMartyrCard(martyr, index);
        martyrsGrid.appendChild(martyrCard);
    });
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
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

// Update statistics with animation
function updateStatistics() {
    animateNumber(martyrsCount, 0, 26, 2000);
    animateNumber(injuredCount, 0, 500, 2500);
    animateNumber(arrestedCount, 0, 1000, 3000);
}

// Animate number counting
function animateNumber(element, start, end, duration) {
    const startTime = performance.now();
    const isPlus = end > 1000; // For numbers with + sign
    
    function updateNumber(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = Math.floor(start + (end - start) * easeOutQuart);
        
        if (isPlus) {
            element.textContent = current.toLocaleString() + '+';
        } else {
            element.textContent = current;
        }
        
        if (progress < 1) {
            requestAnimationFrame(updateNumber);
        }
    }
    
    requestAnimationFrame(updateNumber);
}

// Contact form handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const message = this.querySelector('textarea').value;
            
            // Simple validation
            if (!name || !email || !message) {
                alert('Please fill in all fields.');
                return;
            }
            
            // Simulate form submission
            const submitBtn = this.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                alert('Thank you for your message. We will get back to you soon.');
                this.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }
});

// Keyboard navigation for accessibility
document.addEventListener('keydown', function(e) {
    // ESC key to close mobile menu
    if (e.key === 'Escape') {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }
    
    // Enter key on search input
    if (e.key === 'Enter' && e.target.id === 'search-input') {
        e.preventDefault();
        const searchTerm = e.target.value.toLowerCase().trim();
        filterMartyrs(searchTerm);
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
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Initialize lazy loading when DOM is ready
document.addEventListener('DOMContentLoaded', initializeLazyLoading);

// Add loading state management
function showLoading() {
    martyrsGrid.innerHTML = `
        <div class="loading">
            <div class="spinner"></div>
        </div>
    `;
}

function hideLoading() {
    const loading = document.querySelector('.loading');
    if (loading) {
        loading.remove();
    }
}

// Error handling for images
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('error', function() {
            this.style.display = 'none';
        });
    });
});

// Performance optimization: Debounce search
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to search
const debouncedSearch = debounce(function(searchTerm) {
    filterMartyrs(searchTerm);
}, 300);

// Clear search function
function clearSearch() {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.value = '';
        filterMartyrs('');
    }
}

// Make clearSearch globally available
window.clearSearch = clearSearch;
