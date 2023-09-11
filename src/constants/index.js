import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    php,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    medanta,
    capillary,
    saaslabs,
    ecommerce,
    musicapp,
    portfolio,
    blog,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "PHP",
      icon: php,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Software Intern",
      company_name: "Medanta",
      icon: medanta,
      iconBg: "#383E56",
      date: "May 2019 - July 2019",
      points: [
        "Developed a mobile application using React Native and other related technologies.",
        "It helped tracking record of all the staff arrival and departure in the hospital",
        "Also had records and information about the facilities provided in the medanta with their charges etc.",
        "Implementing responsive design and ensuring cross-os compatibility.",
      ],
    },
    {
      title: "Software Developer Intern",
      company_name: "Capillary Technologies",
      icon: capillary,
      iconBg: "#E6DEDD",
      date: "July 2021 - Jan 2022",
      points: [
        "Developing and maintaining web applications using LAMP stack and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full Stack Developer",
      company_name: "Saas Labs",
      icon: saaslabs,
      iconBg: "#383E56",
      date: "June 2022 - Present",
      points: [
        "Developing and maintaining web applications using PHP, JavaScript, jQuery, MYSQL, MongoDB, redis and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Was a part of team, where we recently shifted our whole app on GKE using docker.",
      ],
    },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "My Blog",
      description:
        "A modern blog website to showcase my skills and experience created using nextjs and graphql. It includes pagination, you can comment on the posts and much more.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "graphql",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: blog,
      source_code_link: "https://github.com/bond0887/blog",
    },
    {
      name: "Modern UI/UX Portfolio",
      description:
        "A modern UI/UX portfolio to showcase my skills and experience created using react and scss for frontend and ever-developing sanity for backend to update the projects and experience in real time effectively.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "sanity",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/bond0887/portfolio-frontend",
    },
    {
      name: "MusicApp",
      description:
        "A Web application for music lovers that enables users to search for their favourite songs, artists and albums. Along with the feature of listening hot songs on the basis of their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "green-text-gradient",
        },
        {
          name: "shazamapi",
          color: "pink-text-gradient",
        },
      ],
      image: musicapp,
      source_code_link: "https://github.com/bond0887/Musicapp/",
    },
    {
      name: "CommerceApp",
      description:
        "A full stack e-commerce application created using react and other related applications. Used commerce.js for managing the inventory and skus and Stripe as a payment gateway.",
      tags: [
        {
          name: "commercejs",
          color: "blue-text-gradient",
        },
        {
          name: "stripe",
          color: "green-text-gradient",
        },
        {
          name: "react",
          color: "pink-text-gradient",
        },
      ],
      image: ecommerce,
      source_code_link: "https://github.com/bond0887/CommereceApp",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };