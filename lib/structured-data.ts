export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Workroom",
  "description": "Creative services including web development, UI/UX design, graphic design, and handmade crafts",
  "url": "https://workroomco.com",
  "logo": "https://workroomco.com/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-6239684682",
    "contactType": "customer service",
    "availableLanguage": "English"
  },
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "IN"
  },
  "sameAs": [
    "https://www.instagram.com/workroom_studios/",
    "https://facebook.com/workroomco"
  ],
  "offers": [
    {
      "@type": "Service",
      "name": "Web Development",
      "description": "Custom websites and web applications"
    },
    {
      "@type": "Service", 
      "name": "UI/UX Design",
      "description": "User interface and experience design"
    },
    {
      "@type": "Service",
      "name": "Graphic Design", 
      "description": "Visual design and branding services"
    },
    {
      "@type": "Service",
      "name": "Handmade Crafts",
      "description": "Custom handcrafted items and gifts"
    }
  ]
}

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Workroom",
  "url": "https://workroomco.com",
  "description": "Design. Develop. Craft. Create — All Under One Roof",
  "publisher": {
    "@type": "Organization",
    "name": "Workroom"
  }
}