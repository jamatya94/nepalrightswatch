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
        name: "Binod Design",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Sketches/Binod Design.png",
        description: "Artistic design sketch of Binod Maharjan"
    },
    {
        id: 2,
        name: "Binod Portrait",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Sketches/Binod.png",
        description: "Portrait sketch of Binod Maharjan"
    }
];

// Stencils data
const stencilsData = [
    // Abhishek Shrestha
    {
        id: 1,
        name: "Abhishek Shrestha - Artwork 1",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Stencils/Abhishek Shrestha/Untitled_Artwork.jpg",
        martyr: "Abhishek Shrestha",
        description: "Stencil artwork of Abhishek Shrestha"
    },
    {
        id: 2,
        name: "Abhishek Shrestha - Artwork 2",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Stencils/Abhishek Shrestha/Untitled_Artwork 2.jpg",
        martyr: "Abhishek Shrestha",
        description: "Stencil artwork of Abhishek Shrestha"
    },
    {
        id: 3,
        name: "Abhishek Shrestha - Artwork 3",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Stencils/Abhishek Shrestha/Untitled_Artwork 3.jpg",
        martyr: "Abhishek Shrestha",
        description: "Stencil artwork of Abhishek Shrestha"
    },
    // Ayush Thapa
    {
        id: 4,
        name: "Ayush Thapa - Artwork 1",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Stencils/Ayush Thapa/File - 2025-09-15T02_15_58.602Z",
        martyr: "Ayush Thapa",
        description: "Stencil artwork of Ayush Thapa"
    },
    {
        id: 5,
        name: "Ayush Thapa - Artwork 2",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Stencils/Ayush Thapa/File - 2025-09-15T02_15_58(1).602Z",
        martyr: "Ayush Thapa",
        description: "Stencil artwork of Ayush Thapa"
    },
    {
        id: 6,
        name: "Ayush Thapa - Artwork 3",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Stencils/Ayush Thapa/File - 2025-09-15T02_15_58(2).602Z",
        martyr: "Ayush Thapa",
        description: "Stencil artwork of Ayush Thapa"
    },
    // Bijay Chaudhary
    {
        id: 7,
        name: "Bijay Chaudhary - Artwork 1",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Stencils/Bijay Chaudhary/Bijay_Chaudhary.jpg",
        martyr: "Bijay Chaudhary",
        description: "Stencil artwork of Bijay Chaudhary"
    },
    {
        id: 8,
        name: "Bijay Chaudhary - Artwork 2",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Stencils/Bijay Chaudhary/Bijay_Chaudhary 2.jpg",
        martyr: "Bijay Chaudhary",
        description: "Stencil artwork of Bijay Chaudhary"
    },
    {
        id: 9,
        name: "Bijay Chaudhary - Artwork 3",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Stencils/Bijay Chaudhary/Bijay_Chaudhary 3.jpg",
        martyr: "Bijay Chaudhary",
        description: "Stencil artwork of Bijay Chaudhary"
    },
    // Bimal Babu Bhatta
    {
        id: 10,
        name: "Bimal Babu Bhatta - Artwork 1",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Stencils/Bimal Babu Bhatta/Bimal_Babu_Bhatta.jpg",
        martyr: "Bimal Babu Bhatta",
        description: "Stencil artwork of Bimal Babu Bhatta"
    },
    {
        id: 11,
        name: "Bimal Babu Bhatta - Artwork 2",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Stencils/Bimal Babu Bhatta/Bimal_Babu_Bhatta 2.jpg",
        martyr: "Bimal Babu Bhatta",
        description: "Stencil artwork of Bimal Babu Bhatta"
    },
    {
        id: 12,
        name: "Bimal Babu Bhatta - Artwork 3",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Stencils/Bimal Babu Bhatta/Bimal_Babu_Bhatta 3.jpg",
        martyr: "Bimal Babu Bhatta",
        description: "Stencil artwork of Bimal Babu Bhatta"
    },
    // Binod Maharjan
    {
        id: 13,
        name: "Binod Maharjan - Artwork 1",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Stencils/Binod Maharjan/Untitled_Artwork.jpg",
        martyr: "Binod Maharjan",
        description: "Stencil artwork of Binod Maharjan"
    },
    {
        id: 14,
        name: "Binod Maharjan - Artwork 2",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Stencils/Binod Maharjan/Untitled_Artwork 2.jpg",
        martyr: "Binod Maharjan",
        description: "Stencil artwork of Binod Maharjan"
    },
    {
        id: 15,
        name: "Binod Maharjan - Artwork 3",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Stencils/Binod Maharjan/Untitled_Artwork 3.jpg",
        martyr: "Binod Maharjan",
        description: "Stencil artwork of Binod Maharjan"
    },
    // Buddhi Bahadur Tamang
    {
        id: 16,
        name: "Buddhi Bahadur Tamang - Artwork 1",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Stencils/Buddhi Bahadur Tamang/Buddhi Bahadur Tamang.jpg",
        martyr: "Buddhi Bahadur Tamang",
        description: "Stencil artwork of Buddhi Bahadur Tamang"
    },
    {
        id: 17,
        name: "Buddhi Bahadur Tamang - Artwork 2",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Stencils/Buddhi Bahadur Tamang/Buddhi Bahadur Tamang 1.jpg",
        martyr: "Buddhi Bahadur Tamang",
        description: "Stencil artwork of Buddhi Bahadur Tamang"
    },
    {
        id: 18,
        name: "Buddhi Bahadur Tamang - Artwork 3",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Stencils/Buddhi Bahadur Tamang/Buddhi Bahadur Tamang 2.jpg",
        martyr: "Buddhi Bahadur Tamang",
        description: "Stencil artwork of Buddhi Bahadur Tamang"
    },
    // Dev Kumar Subedi
    {
        id: 19,
        name: "Dev Kumar Subedi - Artwork 1",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Stencils/Dev Kumar Subedi/File - 2025-09-15T02_15_27.138Z",
        martyr: "Dev Kumar Subedi",
        description: "Stencil artwork of Dev Kumar Subedi"
    },
    {
        id: 20,
        name: "Dev Kumar Subedi - Artwork 2",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Stencils/Dev Kumar Subedi/File - 2025-09-15T02_15_27(1).138Z",
        martyr: "Dev Kumar Subedi",
        description: "Stencil artwork of Dev Kumar Subedi"
    },
    {
        id: 21,
        name: "Dev Kumar Subedi - Artwork 3",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Stencils/Dev Kumar Subedi/File - 2025-09-15T02_15_27(2).138Z",
        martyr: "Dev Kumar Subedi",
        description: "Stencil artwork of Dev Kumar Subedi"
    },
    // Dhiraj Shrestha
    {
        id: 22,
        name: "Dhiraj Shrestha - Artwork 1",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Stencils/Dhiraj Shrestha/Dhiraj_Shrestha.jpg",
        martyr: "Dhiraj Shrestha",
        description: "Stencil artwork of Dhiraj Shrestha"
    },
    {
        id: 23,
        name: "Dhiraj Shrestha - Artwork 2",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Stencils/Dhiraj Shrestha/Dhiraj_Shrestha 2.jpg",
        martyr: "Dhiraj Shrestha",
        description: "Stencil artwork of Dhiraj Shrestha"
    },
    {
        id: 24,
        name: "Dhiraj Shrestha - Artwork 3",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Stencils/Dhiraj Shrestha/Dhiraj_Shrestha 3.jpg",
        martyr: "Dhiraj Shrestha",
        description: "Stencil artwork of Dhiraj Shrestha"
    },
    // Dipesh Sunuwar
    {
        id: 25,
        name: "Dipesh Sunuwar - Artwork 1",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Stencils/Dipesh Sunuwar/Dipesh_Sunuwar.jpg",
        martyr: "Dipesh Sunuwar",
        description: "Stencil artwork of Dipesh Sunuwar"
    },
    {
        id: 26,
        name: "Dipesh Sunuwar - Artwork 2",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Stencils/Dipesh Sunuwar/Dipesh_Sunuwar 3.jpg",
        martyr: "Dipesh Sunuwar",
        description: "Stencil artwork of Dipesh Sunuwar"
    },
    {
        id: 27,
        name: "Dipesh Sunuwar - Artwork 3",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Stencils/Dipesh Sunuwar/Dipesh_Sunuwar 4.jpg",
        martyr: "Dipesh Sunuwar",
        description: "Stencil artwork of Dipesh Sunuwar"
    },
    // Gaurav Joshi
    {
        id: 28,
        name: "Gaurav Joshi - Artwork 1",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Stencils/Gaurav Joshi/Untitled_Artwork.jpg",
        martyr: "Gaurav Joshi",
        description: "Stencil artwork of Gaurav Joshi"
    },
    {
        id: 29,
        name: "Gaurav Joshi - Artwork 2",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Stencils/Gaurav Joshi/Untitled_Artwork 2.jpg",
        martyr: "Gaurav Joshi",
        description: "Stencil artwork of Gaurav Joshi"
    },
    {
        id: 30,
        name: "Gaurav Joshi - Artwork 3",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Stencils/Gaurav Joshi/Untitled_Artwork 3.jpg",
        martyr: "Gaurav Joshi",
        description: "Stencil artwork of Gaurav Joshi"
    },
    // Ishwat Adhikari
    {
        id: 31,
        name: "Ishwat Adhikari - Artwork 1",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Stencils/Ishwat Adhikari/Untitled_Artwork.jpg",
        martyr: "Ishwat Adhikari",
        description: "Stencil artwork of Ishwat Adhikari"
    },
    {
        id: 32,
        name: "Ishwat Adhikari - Artwork 2",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Stencils/Ishwat Adhikari/Untitled_Artwork 2.jpg",
        martyr: "Ishwat Adhikari",
        description: "Stencil artwork of Ishwat Adhikari"
    },
    {
        id: 33,
        name: "Ishwat Adhikari - Artwork 3",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Stencils/Ishwat Adhikari/Untitled_Artwork 3.jpg",
        martyr: "Ishwat Adhikari",
        description: "Stencil artwork of Ishwat Adhikari"
    },
    // Mishal Saru Magar
    {
        id: 34,
        name: "Mishal Saru Magar - Artwork 1",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Stencils/Mishal Saru Magar/Mishal_Saru_Magar.jpg",
        martyr: "Mishal Saru Magar",
        description: "Stencil artwork of Mishal Saru Magar"
    },
    {
        id: 35,
        name: "Mishal Saru Magar - Artwork 2",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Stencils/Mishal Saru Magar/Mishal_Saru_Magar 2.jpg",
        martyr: "Mishal Saru Magar",
        description: "Stencil artwork of Mishal Saru Magar"
    },
    {
        id: 36,
        name: "Mishal Saru Magar - Artwork 3",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Stencils/Mishal Saru Magar/Mishal_Saru_Magar 3.jpg",
        martyr: "Mishal Saru Magar",
        description: "Stencil artwork of Mishal Saru Magar"
    },
    // Mohan Sardar
    {
        id: 37,
        name: "Mohan Sardar - Artwork 1",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Stencils/Mohan Sardar/Mohan_Sardar.jpg",
        martyr: "Mohan Sardar",
        description: "Stencil artwork of Mohan Sardar"
    },
    {
        id: 38,
        name: "Mohan Sardar - Artwork 2",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Stencils/Mohan Sardar/Mohan_Sardar 2.jpg",
        martyr: "Mohan Sardar",
        description: "Stencil artwork of Mohan Sardar"
    },
    {
        id: 39,
        name: "Mohan Sardar - Artwork 3",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Stencils/Mohan Sardar/Mohan_Sardar 3.jpg",
        martyr: "Mohan Sardar",
        description: "Stencil artwork of Mohan Sardar"
    },
    // Prabin Kulung
    {
        id: 40,
        name: "Prabin Kulung - Artwork 1",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Stencils/Prabin Kulung/Prabin_KULUNG.jpg",
        martyr: "Prabin Kulung",
        description: "Stencil artwork of Prabin Kulung"
    },
    {
        id: 41,
        name: "Prabin Kulung - Artwork 2",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Stencils/Prabin Kulung/Prabin_KULUNG 2.jpg",
        martyr: "Prabin Kulung",
        description: "Stencil artwork of Prabin Kulung"
    },
    {
        id: 42,
        name: "Prabin Kulung - Artwork 3",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Stencils/Prabin Kulung/Prabin_KULUNG 3.jpg",
        martyr: "Prabin Kulung",
        description: "Stencil artwork of Prabin Kulung"
    },
    // Rashik Khatiwoda
    {
        id: 43,
        name: "Rashik Khatiwoda - Artwork 1",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Stencils/Rashik Khatiwoda/Untitled_Artwork.jpg",
        martyr: "Rashik Khatiwoda",
        description: "Stencil artwork of Rashik Khatiwoda"
    },
    {
        id: 44,
        name: "Rashik Khatiwoda - Artwork 2",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Stencils/Rashik Khatiwoda/Untitled_Artwork 2.jpg",
        martyr: "Rashik Khatiwoda",
        description: "Stencil artwork of Rashik Khatiwoda"
    },
    {
        id: 45,
        name: "Rashik Khatiwoda - Artwork 3",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Stencils/Rashik Khatiwoda/Untitled_Artwork 3.jpg",
        martyr: "Rashik Khatiwoda",
        description: "Stencil artwork of Rashik Khatiwoda"
    },
    // Roshan Neupane
    {
        id: 46,
        name: "Roshan Neupane - Artwork 1",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Stencils/Roshan Neupane/Roshan_Neupane.jpg",
        martyr: "Roshan Neupane",
        description: "Stencil artwork of Roshan Neupane"
    },
    {
        id: 47,
        name: "Roshan Neupane - Artwork 2",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Stencils/Roshan Neupane/Roshan_Neupane 2.jpg",
        martyr: "Roshan Neupane",
        description: "Stencil artwork of Roshan Neupane"
    },
    {
        id: 48,
        name: "Roshan Neupane - Artwork 3",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Stencils/Roshan Neupane/Roshan_Neupane 3.jpg",
        martyr: "Roshan Neupane",
        description: "Stencil artwork of Roshan Neupane"
    },
    // Santosh Bishwakarma
    {
        id: 49,
        name: "Santosh Bishwakarma - Artwork 1",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Stencils/Santosh Bishwakarma/Untitled_Artwork.jpg",
        martyr: "Santosh Bishwakarma",
        description: "Stencil artwork of Santosh Bishwakarma"
    },
    {
        id: 50,
        name: "Santosh Bishwakarma - Artwork 2",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Stencils/Santosh Bishwakarma/Untitled_Artwork 2.jpg",
        martyr: "Santosh Bishwakarma",
        description: "Stencil artwork of Santosh Bishwakarma"
    },
    {
        id: 51,
        name: "Santosh Bishwakarma - Artwork 3",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Stencils/Santosh Bishwakarma/Untitled_Artwork 3.jpg",
        martyr: "Santosh Bishwakarma",
        description: "Stencil artwork of Santosh Bishwakarma"
    },
    // Sauron Kishor Shrestha
    {
        id: 52,
        name: "Sauron Kishor Shrestha - Artwork 1",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Stencils/Sauron Kishor Shrestha/Sauron_Kishor_Shrestha.jpg",
        martyr: "Sauron Kishor Shrestha",
        description: "Stencil artwork of Sauron Kishor Shrestha"
    },
    {
        id: 53,
        name: "Sauron Kishor Shrestha - Artwork 2",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Stencils/Sauron Kishor Shrestha/Sauron_Kishor_Shrestha 2.jpg",
        martyr: "Sauron Kishor Shrestha",
        description: "Stencil artwork of Sauron Kishor Shrestha"
    },
    {
        id: 54,
        name: "Sauron Kishor Shrestha - Artwork 3",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Stencils/Sauron Kishor Shrestha/Sauron_Kishor_Shrestha 3.jpg",
        martyr: "Sauron Kishor Shrestha",
        description: "Stencil artwork of Sauron Kishor Shrestha"
    },
    // Shri Krishna Shrestha
    {
        id: 55,
        name: "Shri Krishna Shrestha - Artwork 1",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Stencils/Shri Krishna Shrestha/Shri_Krishna_Shrestha.jpg",
        martyr: "Shri Krishna Shrestha",
        description: "Stencil artwork of Shri Krishna Shrestha"
    },
    {
        id: 56,
        name: "Shri Krishna Shrestha - Artwork 2",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Stencils/Shri Krishna Shrestha/Shri_Krishna_Shrestha 2.jpg",
        martyr: "Shri Krishna Shrestha",
        description: "Stencil artwork of Shri Krishna Shrestha"
    },
    {
        id: 57,
        name: "Shri Krishna Shrestha - Artwork 3",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Stencils/Shri Krishna Shrestha/Shri_Krishna_Shrestha 3.jpg",
        martyr: "Shri Krishna Shrestha",
        description: "Stencil artwork of Shri Krishna Shrestha"
    },
    // Shriyam layers
    {
        id: 58,
        name: "Shriyam - Artwork 1",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Stencils/Shriyam layers/Untitled_Artwork 7.jpg",
        martyr: "Shriyam",
        description: "Stencil artwork of Shriyam"
    },
    {
        id: 59,
        name: "Shriyam - Artwork 2",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Stencils/Shriyam layers/Untitled_Artwork 9.jpg",
        martyr: "Shriyam",
        description: "Stencil artwork of Shriyam"
    },
    // Subash Bohara
    {
        id: 60,
        name: "Subash Bohara - Artwork 1",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Stencils/Subash Bohara/Untitled_Artwork.jpg",
        martyr: "Subash Bohara",
        description: "Stencil artwork of Subash Bohara"
    },
    {
        id: 61,
        name: "Subash Bohara - Artwork 2",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Stencils/Subash Bohara/Untitled_Artwork 2.jpg",
        martyr: "Subash Bohara",
        description: "Stencil artwork of Subash Bohara"
    },
    {
        id: 62,
        name: "Subash Bohara - Artwork 3",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Stencils/Subash Bohara/Untitled_Artwork 3.jpg",
        martyr: "Subash Bohara",
        description: "Stencil artwork of Subash Bohara"
    },
    {
        id: 63,
        name: "Subash Bohara - Artwork 4",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Stencils/Subash Bohara/Untitled_Artwork 4.jpg",
        martyr: "Subash Bohara",
        description: "Stencil artwork of Subash Bohara"
    },
    // Sulav Raj Shrestha
    {
        id: 64,
        name: "Sulav Raj Shrestha - Artwork 1",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Stencils/Sulav Raj Shrestha/Sulav_Raj_Shrestha.jpg",
        martyr: "Sulav Raj Shrestha",
        description: "Stencil artwork of Sulav Raj Shrestha"
    },
    {
        id: 65,
        name: "Sulav Raj Shrestha - Artwork 2",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Stencils/Sulav Raj Shrestha/Sulav_Raj_Shrestha 2.jpg",
        martyr: "Sulav Raj Shrestha",
        description: "Stencil artwork of Sulav Raj Shrestha"
    },
    {
        id: 66,
        name: "Sulav Raj Shrestha - Artwork 3",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Stencils/Sulav Raj Shrestha/Sulav_Raj_Shrestha 3.jpg",
        martyr: "Sulav Raj Shrestha",
        description: "Stencil artwork of Sulav Raj Shrestha"
    },
    // Additional stencil files
    {
        id: 67,
        name: "Info Stencil",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Stencils/Info.jpg",
        martyr: "General",
        description: "Information stencil artwork"
    },
    {
        id: 68,
        name: "Text Grey Stencil",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Stencils/Text grey.jpg",
        martyr: "General",
        description: "Grey text stencil artwork"
    },
    {
        id: 69,
        name: "Text Red Stencil",
        image: "https://nepalgenz.s3.us-east-1.amazonaws.com/Stencils/Text red.jpg",
        martyr: "General",
        description: "Red text stencil artwork"
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
    loadSketches();
    loadStencils();
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
    
    card.innerHTML = `
        <div class="gallery-image-container">
            <img src="${item.image}" alt="${item.name}" class="gallery-image" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDMwMCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjUwIiBmaWxsPSIjRjVGNUY1Ii8+CjxjaXJjbGUgY3g9IjE1MCIgY3k9IjEwMCIgcj0iNDAiIGZpbGw9IiNEREQiLz4KPHN2ZyB4PSIxMTAiIHk9IjE0MCIgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiB2aWV3Qm94PSIwIDAgODAgODAiIGZpbGw9Im5vbmUiPgo8cGF0aCBkPSJNMjAgMjBINjBWNDBIMjBWMjBaIiBmaWxsPSIjRERERCIvPgo8cGF0aCBkPSJNMjAgNDBINjBWNTBIMjBWNDBaIiBmaWxsPSIjRERERCIvPgo8cGF0aCBkPSJNMjAgNTBINjBWNTBIMjBWNTBaIiBmaWxsPSIjRERERCIvPgo8L3N2Zz4KPC9zdmc+'">
            <div class="gallery-overlay">
                <div class="gallery-info">
                    <h3 class="gallery-title">${item.name}</h3>
                    <p class="gallery-description">${item.description}</p>
                    ${item.martyr ? `<p class="gallery-martyr">In memory of: ${item.martyr}</p>` : ''}
                </div>
            </div>
        </div>
    `;
    
    // Add click event to show full image
    card.addEventListener('click', function() {
        showImageModal(item);
    });
    
    return card;
}

// Show image modal for gallery items
function showImageModal(item) {
    // Create modal if it doesn't exist
    let modal = document.getElementById('image-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'image-modal';
        modal.className = 'image-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="modal-close">&times;</span>
                <img class="modal-image" src="" alt="">
                <div class="modal-info">
                    <h3 class="modal-title"></h3>
                    <p class="modal-description"></p>
                    <p class="modal-martyr"></p>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
        
        // Add close functionality
        modal.querySelector('.modal-close').addEventListener('click', function() {
            modal.style.display = 'none';
        });
        
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
    
    // Populate modal with item data
    modal.querySelector('.modal-image').src = item.image;
    modal.querySelector('.modal-image').alt = item.name;
    modal.querySelector('.modal-title').textContent = item.name;
    modal.querySelector('.modal-description').textContent = item.description;
    
    const martyrElement = modal.querySelector('.modal-martyr');
    if (item.martyr) {
        martyrElement.textContent = `In memory of: ${item.martyr}`;
        martyrElement.style.display = 'block';
    } else {
        martyrElement.style.display = 'none';
    }
    
    modal.style.display = 'flex';
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
