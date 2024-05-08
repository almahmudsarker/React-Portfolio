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
        "https://camo.githubusercontent.com/6fae59751f715b2fb15abf234b80654732cb4f6998f627a552eb621cc148fdb9/68747470733a2f2f692e6962622e636f2f574739594e71312f696d6167652d323032332d31302d33312d3230313233323939332e706e67",
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
        "https://camo.githubusercontent.com/2581ffe6fd10ae01fe0b344764dd752d3d074011d395461812f5f144f5044e97/68747470733a2f2f692e6962622e636f2f6235707170435a2f30302e6a7067",
        "https://camo.githubusercontent.com/aebd38bf783192f3400896646322da01c962fa6839cb66fcb729176654c603a7/68747470733a2f2f692e6962622e636f2f3072684a3067572f312e6a7067",
        "https://camo.githubusercontent.com/17a7bd072b3d9be0a248cf010431994648491304f191819f42e28cb71255ce3a/68747470733a2f2f692e6962622e636f2f48483542364b732f322e6a7067",
        "https://camo.githubusercontent.com/faec34be7aeb6a963b8d40bbb2ed3ab62b8d6423f30ba9cf862f7f45ed4e0203/68747470733a2f2f692e6962622e636f2f70774e433843582f332e6a7067",
        "https://camo.githubusercontent.com/77303d3681e8a91ce3f3b7542fb9f249021f36359bb92ba466c3bd2a654030b9/68747470733a2f2f692e6962622e636f2f5a6474664350772f342e6a7067",
        "https://camo.githubusercontent.com/a1b51a285213e51064ef9cf9eb0dd0259c959270bbceaaa6dda8c8b8be7f1a9a/68747470733a2f2f692e6962622e636f2f474847584a794e2f352e6a7067",
        "https://camo.githubusercontent.com/5224ab0ae5182c7759a049e84d9873504e4e7c47036e0313c8ddcfcee0bc3645/68747470733a2f2f692e6962622e636f2f48584d4a7630632f362e6a7067",
        "https://camo.githubusercontent.com/e80b03ac15bdc2f9321412efbc3c15da86590aa57f18bb162ffc59f397331c42/68747470733a2f2f692e6962622e636f2f7734426634326b2f372e6a7067",
        "https://camo.githubusercontent.com/3f70dae3f32d6c09bde0070c881d40a1616a972b9b543c7f8c4edbf4c116bcde/68747470733a2f2f692e6962622e636f2f70514e6e4763432f696d6167652e6a7067",
        "https://camo.githubusercontent.com/f19c4b5a01a299733933b5f37bf67b2282d11302367d79ff5877f66da6510b9b/68747470733a2f2f692e6962622e636f2f6e38304246524b2f30312e6a7067",
        "https://camo.githubusercontent.com/775dd091cfc36fae4f646e442815e388354e91f52dbac9c9b3f6cf003e010c39/68747470733a2f2f692e6962622e636f2f686658743850332f30322e6a7067",
        "https://camo.githubusercontent.com/31ccd7b7e8b5430659b5487e83d290591484a025b182249ffaa250efb571736d/68747470733a2f2f692e6962622e636f2f79584d636e79772f30332e6a7067",
        "https://camo.githubusercontent.com/81043e3737df5189a069829b42db0a3e55fb6575345bb2fc2fc614f8cbbcbe66/68747470733a2f2f692e6962622e636f2f4c5a71333953632f30342e6a7067",
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
    {
      id: 6,
      title: "MixxStore",
      description:
        "MixxStore is a React-based project that serves as an online shop specializing in sports toys. This README file provides an overview of the project's features and includes the live site link and license information.",
      features: [
        "Product Catalog",
        "Browse and search",
        "Shopping Cart",
        "Product Reviews",
      ],
      liveLink: "https://mixxstore-4a428.web.app",
      snapshots: [
        "https://i.ibb.co/F61wyX5/1.jpg",
        "https://i.ibb.co/Pmx5QRn/2.jpg",
        "https://i.ibb.co/0h2tVtm/3.jpg",
        "https://i.ibb.co/W3yBGxg/4.jpg",
        "https://i.ibb.co/zsCpS4L/5.jpg",
        "https://i.ibb.co/Hp4kfHP/7.jpg",
        "https://i.ibb.co/Vv99P5j/8.jpg",
        "https://i.ibb.co/MST003t/9.jpg",
      ],
    },
    {
      id: 7,
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
        // "https://i.ibb.co/F61wyX5/1.jpg",
      ],
    },
    {
      id: 8,
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
        // "https://i.ibb.co/F61wyX5/1.jpg",
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
