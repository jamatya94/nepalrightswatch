# Nepal Gen Z Protests Memorial Website

A tribute website honoring the brave students and youth who participated in the September 2025 Nepal Gen Z Protests. This memorial site is inspired by the Bangladesh martyrs memorial (shohid.info) and serves as a digital monument to remember those who stood for democracy, justice, and the future of Nepal.

## 🌐 Live Website

**Deployment URL:** [https://main.d1bixeem5bp8hx.amplifyapp.com/](https://main.d1bixeem5bp8hx.amplifyapp.com/)

The website is live and accessible worldwide, featuring responsive design optimized for all devices including mobile browsers with enhanced video playback support.

## Features

### 🎨 Design & User Experience
- **Modern, responsive design** with Nepal flag color scheme (red, blue, white, gold)
- **Mobile-first approach** with smooth animations and transitions
- **Accessibility features** including keyboard navigation and screen reader support
- **Interactive elements** with hover effects and smooth scrolling

### 📱 Responsive Layout
- **Desktop**: Full grid layout with sidebar navigation
- **Tablet**: Optimized grid with collapsible navigation
- **Mobile**: Single column layout with hamburger menu

### 🔍 Interactive Features
- **Animated statistics** showing martyrs count, injured, and arrested numbers
- **Smooth scrolling navigation** between sections
- **Contact form** for visitors to share information or get in touch

### 🖼️ Image Gallery
- **26 individual martyr profiles** with photos and biographical information
- **S3 cloud storage** for reliable image hosting and fast global delivery
- **Lazy loading** for optimal performance
- **Error handling** for broken image links

## File Structure

```
nepal/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript functionality
├── README.md           # Project documentation
├── Posters/            # Local backup of martyr photos (images served from S3)
│   ├── Abhishek_Chaulagain.png
│   ├── Abhishek.png
│   ├── Arjun.png
│   └── ... (26 total images)
├── Stencils/           # Local backup of artwork and stencils (images served from S3)
│   ├── Abhishek Shrestha/
│   ├── Ayush Thapa/
│   └── ... (individual folders)
└── Sketches/           # Local backup of design sketches (images served from S3)
```

## Martyrs Honored

The website memorializes 26 brave individuals who participated in the September 2025 Nepal Gen Z Protests:

1. **Abhishek Chaulagain** - Student activist and democratic rights advocate
2. **Abhishek Shrestha** - Engineering student and social justice advocate
3. **Arjun** - Youth leader passionate about educational reforms
4. **Ayush Thapa** - Student union representative and democracy advocate
5. **Babu** - Community organizer and youth mentor
6. **Bijay Chaudhary** - Student journalist and human rights activist
7. **Binod Maharjan** - Computer science student and digital rights advocate
8. **Buddhi Bahadur Tamang** - Rural youth leader and social worker
9. **Deepak** - Student activist and community organizer
10. **Dev Kumar Subedi** - Environmental activist and student leader
11. **Dhiraj Shrestha** - Medical student and healthcare rights advocate
12. **Dipesh Sunuwar** - Indigenous rights activist and student leader
13. **Gaurav Joshi** - Engineering student and technology for social good advocate
14. **Ishwat Adhikari** - Student union leader and democracy advocate
15. **Mishal Saru Magar** - Youth activist and women's rights advocate
16. **Mohan Sardar** - Community leader and social justice advocate
17. **Prabin Kulung** - Mountain youth leader and environmental activist
18. **Ramesh** - Student activist and community organizer
19. **Rashik Khatiwoda** - Student leader and democracy advocate
20. **Santosh Bishwakarma** - Social justice advocate and student activist
21. **Sauron Kishor Shrestha** - Student union representative and youth leader
22. **Shri Krishna Shrestha** - Student activist and community organizer
23. **Shriyam** - Youth leader and social justice advocate
24. **Subash Bohara** - Student activist and democracy advocate
25. **Sulav Raj Shrestha** - Student leader and community organizer
26. **Yogendra** - Youth activist and social justice advocate

## Technical Implementation

### HTML5 Structure
- Semantic HTML with proper accessibility attributes
- Meta tags for SEO and social media sharing
- Font loading optimization with Google Fonts

### CSS3 Features
- CSS Grid and Flexbox for responsive layouts
- CSS Custom Properties (variables) for consistent theming
- Smooth animations and transitions
- Mobile-first responsive design

### JavaScript Functionality
- ES6+ features with modern syntax
- Intersection Observer API for scroll animations
- Debounced search for performance optimization
- Error handling for images and user interactions

## Browser Support

- **Chrome** 60+
- **Firefox** 55+
- **Safari** 12+
- **Edge** 79+

## Performance Optimizations

- **AWS S3 cloud storage** for fast, reliable image delivery worldwide
- **HTTPS image URLs** for secure content delivery
- **Lazy loading** for images
- **CSS animations** instead of JavaScript where possible
- **Optimized images** with error handling
- **Minimal external dependencies**

## Getting Started

1. **Clone or download** the project files
2. **Open `index.html`** in a web browser
3. **Images are hosted on AWS S3** - no local image setup required
4. **Customize content** as needed for your specific use case

## Customization

### Colors
The website uses Nepal flag colors defined in CSS custom properties:
- `--nepal-red: #FF4444`
- `--nepal-blue: #0033A0`
- `--nepal-white: #FFFFFF`
- `--nepal-gold: #FFD700`

### Content
- Update martyr information in `script.js`
- Modify the about section in `index.html`
- Add or remove sections as needed

### Images
- All images are served from AWS S3 bucket (nepalgenz.s3.us-east-1.amazonaws.com)
- Local image folders serve as backup/reference
- S3 URLs are configured in `script.js` data arrays

## Contributing

This memorial website is a tribute to the brave youth of Nepal. If you have additional information about the martyrs or suggestions for improvements, please:

1. Verify the accuracy of any information
2. Ensure respectful and appropriate content
3. Test changes across different devices and browsers

## License

This project is created as a memorial tribute. Please use respectfully and in accordance with the memory of those it honors.

## Contact

For questions or support regarding this memorial website, please use the contact form on the website or reach out through appropriate channels.

---

*"They gave their today for our tomorrow. Their sacrifice will never be forgotten, and their dreams of a just and democratic Nepal will live on through us."*
