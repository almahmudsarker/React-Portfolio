import React, { useState } from "react";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Through Travels",
      description:
        "Travel website that allows users to explore and book their dream vacations. Along with its backend built using Express and Node.js. The website integrates various technologies to offer a seamless travel booking experience, including payment gateways like Stripe.",
      features: [
        "Interactive Destination Exploration",
        "Multiple Payment Options",
        "Booking Engine",
        "Browse and search",
        "Real-time Itinerary Tracking",
        "User Authentication and Personalization",
      ],
      liveLink: "https://through-travels.web.app/",
      snapshots: [
        "https://i.ibb.co/qrM7GFH/banner-section.jpg",
        "https://i.ibb.co/HTNFJHT/category-section.jpg",
        "https://i.ibb.co/YctXV6d/Feedback-section.jpg",
        "https://i.ibb.co/rxg0rdf/footer.jpg",
        "https://i.ibb.co/LkB14S9/host-dashboard-added-place.jpg",
        "https://i.ibb.co/jDXWbBh/host-dashboard-adding-place.jpg",
        "https://i.ibb.co/c2VHF7P/host-dashboard-modify-update-added-place.jpg",
        "https://i.ibb.co/T2nt8zy/host-dashboard-notify-anyone-can-booked-host-place.jpg",
        "https://i.ibb.co/tB2P70X/login.jpg",
        "https://i.ibb.co/CK3xZcc/navbar.jpg",
        "https://i.ibb.co/pnVDXrf/payment-partner-section.jpg",
        "https://i.ibb.co/Db5485W/place-details-section-or-page.jpg",
        "https://i.ibb.co/Y3cjyCT/signup-section.jpg",
        "https://i.ibb.co/GWfyXqF/user-dashboard-booked-place.jpg",
        "https://i.ibb.co/LZ6HdzS/user-dashboard-rqst-to-hosting-place.jpg",
        "https://i.ibb.co/72xwyT0/user-visa-payment-on-booking.jpg",
      ],
    },
    {
      id: 2,
      title: "Glamour Haven",
      description:
        "The Glamour Haven Parlour Website is a modern web application that offers a range of beauty and wellness services to users. It also provides an online store for purchasing beauty products. This project is built using various technologies and integrated with popular payment gateways like bKash.",
      features: [
        "Treatment Services",
        "Product Purchase",
        "Payment Gateway Integration",
        "Database",
        "Authentication",
        "Responsive Design",
      ],
      liveLink: "https://purlour-app.web.app",
      snapshots: [
        "https://i.ibb.co/vxcnkZX4/screencapture-purlour-app-web-app-2025-01-29-23-16-29.png",
        "https://i.ibb.co/CsmFw4S6/screencapture-purlour-app-web-app-dashboard-manage-service-2025-01-29-23-18-20.png",
        "https://i.ibb.co/ks7Fmc8M/screencapture-purlour-app-web-app-dashboard-order-list-2025-01-29-23-17-33.png",
        "https://i.ibb.co/BVrZ4NTH/screencapture-purlour-app-web-app-dashboard-profile-2025-01-29-23-17-17.png",
        "https://i.ibb.co/prrtFg9S/screencapture-purlour-app-web-app-dashboard-payment-6536e006f7c32f9604950a43-2025-01-29-23-26-25.png",
      ],
    },

    {
      id: 4,
      title: "Baiust Computer Club",
      description:
        "The Baiust Computer Club app is a platform for students to learn about computer science and programming. The app provides a range of resources, including tutorials, quizzes, and coding challenges, to help students develop their skills and knowledge in the field of computer science.",
      features: [
        "Login and registration for members and admins",
        "Dashboard for members to view club activities",
        "Membership management system",
        "Integration with BAIUST website for event updates",
      ],
      liveLink:
        "https://github.com/almahmudsarker/Baiust-Computer-Club-Desktop-App",
      snapshots: [
        "https://i.ibb.co/b5pqpCZ/00.jpg",
        "https://i.ibb.co/0rhJ0gW/1.jpg",
        "https://i.ibb.co/HH5B6Ks/2.jpg",
        "https://i.ibb.co/pwNC8CX/3.jpg",
        "https://i.ibb.co/ZdtfCPw/4.jpg",
        "https://i.ibb.co/GHGXJyN/5.jpg",
        "https://i.ibb.co/HXMJv0c/6.jpg",
        "https://i.ibb.co/w4Bf42k/7.jpg",
        "https://i.ibb.co/pQNnGcC/image.jpg",
        "https://i.ibb.co/n80BFRK/01.jpg",
        "https://i.ibb.co/hfXt8P3/02.jpg",
        "https://i.ibb.co/yXMcnyw/03.jpg",
        "https://i.ibb.co/LZq39Sc/04.jpg",
      ],
    },
    {
      id: 7,
      title: "AWS Cloud Wish List",
      description:
        "Welcome to the Wish Tracker Cloud App, a serverless, scalable, and user-friendly application that lets users track and manage their bucket list items. This project was built using modern AWS cloud services and React, leveraging the power of serverless architecture for optimized performance and minimal management overhead.",
      features: [
        "Data Management with DynamoDB",
        "User Authentication",
        "GraphQL API with AWS AppSync",
        "Image Storage in S3",
        "AWS Amplify Hosting",
      ],
      liveLink: "https://github.com/almahmudsarker/wishTrackerCloudApp",
      snapshots: [
        "https://i.ibb.co/jPr9Kmx8/p-5-1.png",
        "https://i.ibb.co/8gGDgFF5/p-5-2.png",
        "https://i.ibb.co/Y4KmGFkt/p-5-3.png",
        "https://i.ibb.co/ycc5CHmM/p-5-4.png",
        "https://i.ibb.co/7d281ssk/p-5-5.png",
      ],
    },

    // {
    //   id: 6,
    //   title: "MixxStore",
    //   description:
    //     "MixxStore is a React-based project that serves as an online shop specializing in sports toys. This README file provides an overview of the project's features and includes the live site link and license information.",
    //   features: [
    //     "Product Catalog",
    //     "Browse and search",
    //     "Shopping Cart",
    //     "Product Reviews",
    //   ],
    //   liveLink: "https://mixxstore-4a428.web.app",
    //   snapshots: [
    //     "https://i.ibb.co/F61wyX5/1.jpg",
    //     "https://i.ibb.co/Pmx5QRn/2.jpg",
    //     "https://i.ibb.co/0h2tVtm/3.jpg",
    //     "https://i.ibb.co/W3yBGxg/4.jpg",
    //     "https://i.ibb.co/zsCpS4L/5.jpg",
    //     "https://i.ibb.co/Hp4kfHP/7.jpg",
    //     "https://i.ibb.co/Vv99P5j/8.jpg",
    //     "https://i.ibb.co/MST003t/9.jpg",
    //   ],
    // },
    {
      id: 8,
      title: "Pet Paradise BD",
      description:
        "'Pet Paradise BD' is a startup founded by Rahat Amin Shopnil, focusing on providing premium cat foods and accessories to create the ultimate haven for feline friends. This repository contains the source code and assets for the official website.",
      features: [
        "Product Catalog",
        "Browse and search",
        "Shopping Cart",
        "Product Reviews",
      ],
      liveLink: "https://pet-paradise-bd.vercel.app",
      snapshots: [
        "https://i.ibb.co/zhX87Fdv/screencapture-pet-paradise-bd-vercel-app-2025-01-29-23-04-56.png",
      ],
    },
    {
      id: 9,
      title: "Cinema Rentals",
      description:
        "All film and delivery charges for rentals will be the responsibility of the renter. We will most certainly do our best to accommodate any and all of your needs.",
      features: [
        "Product Catalog",
        "Browse and search",
        "Shopping Cart",
        "Product Reviews",
      ],
      liveLink: "https://cinema-rentals.vercel.app",
      snapshots: [
        "https://i.ibb.co/Q3Bs7Bbs/screencapture-cinema-rentals-vercel-app-2025-01-29-23-09-43.png",
      ],
    },
    {
      id: 3,
      title: "Culinary School",
      description:
        "Welcome to Taste & Learn Culinary School! We are dedicated to providing a comprehensive culinary education and igniting a passion for cooking. Our mission is to empower aspiring chefs with the skills, knowledge, and cultural understanding necessary to excel in the world of gastronomy.",
      features: [
        "Culinary Workshops",
        "Global Gastronomic Experience",
        "Market Visits",
        "Culinary Competitions",
        "Recipe Adaptations",
        "Culinary Showcases",
        "Culinary Events",
      ],
      liveLink: "https://culinary-adventure.web.app",
      snapshots: [
        "https://i.ibb.co/d59TFgr/1.jpg",
        "https://i.ibb.co/6vXyMj4/2.jpg",
        "https://i.ibb.co/hDKnSmw/3.jpg",
        "https://i.ibb.co/d65Y6L7/4.jpg",
        "https://i.ibb.co/sKKhT9k/5.jpg",
        "https://i.ibb.co/WGbRdQS/6.jpg",
        "https://i.ibb.co/JjcKff2/7.jpg",
        "https://i.ibb.co/Z29ccF3/8.jpg",
        "https://i.ibb.co/4pbzdz6/9.jpg",
      ],
    },
    {
      id: 5,
      title: "Cuisine Chronicles",
      description:
        "Cuisine Chronicles is a website dedicated to showcasing the recipes of various chefs from around the world. Each section of the website is exclusively dedicated to one cuisine, featuring recipes from top chefs of that particular cuisine.",
      features: [
        "Recipes from Top Chefs",
        "Dedicated Cuisine Sections",
        "Step-by-Step Instructions",
        "Search Functionality",
      ],
      liveLink: "https://cuisine-chronicles.web.app",
      snapshots: [
        "https://i.ibb.co/LY6QkdH/1.jpg",
        "https://i.ibb.co/dgTpdmW/2.jpg",
        "https://i.ibb.co/rbHfVMj/3.jpg",
        "https://i.ibb.co/Rvbf3RS/4.jpg",
        "https://i.ibb.co/4SDWm5k/5.jpg",
        "https://i.ibb.co/0scDCvB/6.jpg",
      ],
    },
    // Add more projects here if needed
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <h2 className="section__title waviy" id="projects">
        <span>P</span>
        <span>r</span>
        <span>o</span>
        <span>j</span>
        <span>e</span>
        <span>c</span>
        <span>t</span>
        <span>s</span>
      </h2>
      <span className="section__subtitle flipX">Explore my works</span>
      <div className="projects-container">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <button onClick={() => openModal(project)}>View Details</button>
          </div>
        ))}

        {selectedProject && (
          <div className="modal">
            <div className="modal-content">
              <h2>{selectedProject.title}</h2>
              <p>{selectedProject.description}</p>
              <ul>
                {" "}
                Features:
                {selectedProject.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <a
                href={selectedProject.liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Site
              </a>
              <div className="snapshot-gallery">
                {selectedProject.snapshots.map((snapshot, index) => (
                  <img
                    key={index}
                    src={snapshot}
                    alt={`Snapshot ${index + 1}`}
                  />
                ))}
              </div>
              <button onClick={closeModal}>
                <i class="bx bx-x"></i>
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Projects;
