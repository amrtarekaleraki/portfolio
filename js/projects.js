/*
  Project data — edit this file to update the portfolio.
  - category: one of the keys in CATEGORIES
  - featured: true shows the project first and adds the "Live brand" badge
  - url: add a live link and a "Visit live site" button appears in the project view
  - stack: optional list of technologies, shown as tags
  Images are generated per slug: assets/long/<slug>.webp and assets/shots/<slug>-N.webp
*/

const CATEGORIES = {
  food:      { label: "Restaurants & food",  hue: "food" },
  stores:    { label: "Online stores",       hue: "stores" },
  business:  { label: "Companies & industry", hue: "business" },
  health:    { label: "Healthcare & pets",   hue: "health" },
  apps:      { label: "Web apps & SaaS",     hue: "apps" },
  travel:    { label: "Travel & tourism",    hue: "travel" },
  education: { label: "Education & careers", hue: "education" }
};

const PROJECTS = [
  {
    slug: "pair",
    name: "Pair",
    category: "apps",
    kind: "AI customer-engagement platform",
    featured: true,
    lang: "English",
    url: "https://trypair.ai",
    summary: "Marketing site for an AI agent that talks to customers like a local.",
    description:
      "Pair is an AI platform that answers customers in a natural Kuwaiti dialect across messaging channels and voice. The site opens on a real-looking support conversation, so visitors see the product working before they read a word about it, then moves through customer logos, use cases and stories.",
    highlights: [
      "Hero built around a live-style chat between a customer and the AI agent",
      "Customer logos and stories placed early for trust",
      "Clear paths to learn more and book a demo"
    ]
  },
  {
    slug: "ajwan",
    name: "Ajwan",
    category: "business",
    kind: "Trading & hospitality group",
    featured: true,
    lang: "English + Arabic",
    summary: "Corporate home for a group of hospitality and trading brands.",
    description:
      "A black-and-gold corporate website for Ajwan Trading & Hospitality Group. It introduces the group, presents its family of brands, puts faces to the leadership team and backs everything with certificates and the latest news.",
    highlights: [
      "Brand portfolio section linking the group's companies",
      "Leadership, certificates and news to build trust",
      "Full English and Arabic versions"
    ]
  },
  {
    slug: "cannelle",
    name: "Cannelle",
    category: "food",
    kind: "Luxury chocolates & patisserie",
    featured: true,
    lang: "English",
    summary: "A chocolate brand site that makes you want to order before you scroll.",
    description:
      "Cannelle is a luxury chocolate and patisserie brand founded by Chef Hissa Al Sulaiti. A melted-chocolate hero sets the tone, then the site lays out chocolates, flower bouquets, cakes, pastries and catering, each with an order button close at hand.",
    highlights: [
      "Product ranges organised as chocolates, flowers, cakes, pastries and catering",
      "Order Now available from the header and every product section",
      "Founder story section that gives the brand a face"
    ]
  },
  {
    slug: "bayt-alwaldah",
    name: "Bayt Alwaldah",
    category: "food",
    kind: "Home-style restaurant",
    featured: true,
    lang: "English",
    summary: "Restaurant website with table booking, chefs, events and gallery.",
    description:
      "Bayt Alwaldah serves authentic home-style dishes in a warm, traditional setting. The website leads with a Book a Table button and a brand video, then tells the restaurant's story, introduces the chefs and shows events, the gallery and guest reviews.",
    highlights: [
      "Book a Table in the header and the hero",
      "Chef profiles, events and photo gallery",
      "Guest reviews and contact details with map"
    ]
  },
  {
    slug: "mamas-cuisine",
    name: "Mama's Cuisine",
    category: "food",
    kind: "Restaurant & afternoon tea",
    featured: true,
    lang: "English",
    summary: "A calm, appetite-first restaurant site with a full visual menu.",
    description:
      "A sage-and-white website for Mama's restaurant. Seasonal offers like afternoon tea sit in the hero, and a long illustrated menu lets guests see every dish before they arrive. Chefs, blog and a reservation button complete the experience.",
    highlights: [
      "Full photo menu organised by category",
      "Hero slider for offers such as afternoon tea",
      "Reservation button in the header on every page"
    ]
  },
  {
    slug: "le-royal",
    name: "Le Royal Catering",
    category: "food",
    kind: "Catering & restaurant",
    featured: true,
    lang: "English",
    summary: "Fresh, healthy-food catering site with menus and reservations.",
    description:
      "Le Royal Catering's website opens with a bright healthy-eating hero and moves into a menu grid by category, special offers, chef profiles and testimonials. A dark reservation button stays in the header so booking is always one click away.",
    highlights: [
      "Menu grid with dishes grouped by category",
      "Why Choose Us, chefs and testimonials sections",
      "Reservation call to action across the site"
    ]
  },
  {
    slug: "recafco",
    name: "RECAFCO",
    category: "business",
    kind: "Construction & precast concrete",
    featured: true,
    lang: "English + Arabic",
    summary: "A construction company site that leads with the buildings it delivered.",
    description:
      "Website for RECAFCO, a Kuwaiti construction and precast concrete company. Full-width project photography opens the page, followed by years in business, completed projects, workforce figures, ISO certifications and partner logos for government and private clients.",
    highlights: [
      "Full-width project slider with project names",
      "Company milestones and key figures",
      "Certifications, partners and English/Arabic switch"
    ]
  },
  {
    slug: "sahl",
    name: "Sahl",
    category: "business",
    kind: "Business services, Saudi Arabia",
    featured: true,
    lang: "Arabic + English",
    summary: "Arabic-first website for a Saudi business services company.",
    description:
      "Sahl provides public services and business solutions in Saudi Arabia. The Arabic-first website presents consulting, development, planning and training services, service packages and a quick Request a Service button, all in a right-to-left layout.",
    highlights: [
      "Right-to-left Arabic layout with an English version",
      "Services, packages and support in a clear menu",
      "Request a Service button in the header"
    ]
  },
  {
    slug: "frying-system",
    name: "Frying System",
    category: "business",
    kind: "Commercial kitchen equipment",
    featured: true,
    lang: "English + Arabic",
    summary: "Product catalogue for commercial fryers and kitchen equipment.",
    description:
      "Frying System supplies fryers, warming cabinets and kitchen equipment for restaurants. The site shows best sellers and the full product range, shares news and certifications, and keeps a Get a Quote button in view to turn browsing into sales enquiries.",
    highlights: [
      "Best sellers and product catalogue",
      "Get a Quote call to action in the header",
      "News, certificates and English/Arabic switch"
    ]
  },
  {
    slug: "yascp",
    name: "YASCP",
    category: "business",
    kind: "Chemical manufacturing plant",
    featured: true,
    lang: "English",
    summary: "Industrial website for Yanbu Specialized Chemical Plant.",
    description:
      "Website for Yanbu Specialized Chemical Plant in Saudi Arabia. Real plant photography introduces the company, and each product is presented with its specifications and applications so buyers and partners find the details they need.",
    highlights: [
      "Product pages with specifications",
      "Company background and plant photography",
      "Contact section with location map"
    ]
  },
  {
    slug: "avc-doha",
    name: "Advanced Veterinary Center",
    category: "health",
    kind: "Veterinary clinic, Doha",
    featured: true,
    lang: "English",
    summary: "Friendly vet clinic site with services, pet relocation and a shop.",
    description:
      "A mint-green website for a veterinary center in Doha. Pet owners can explore services, pet relocation and the online shop, read about the team and schedule an appointment, with promotions shown in a top bar.",
    highlights: [
      "Services, pet relocation and online pet shop",
      "Appointment scheduling section",
      "Instagram feed and customer reviews"
    ]
  },
  {
    slug: "petwell",
    name: "PetWell",
    category: "health",
    kind: "Pet care center, Qatar",
    featured: true,
    lang: "English",
    summary: "Pet boarding, vet care and grooming with WhatsApp chat built in.",
    description:
      "PetWell offers boarding, veterinary services, grooming and pet relocation in Qatar. Warm pet photography and clear service cards lead to a shop and a Chat with us button that opens WhatsApp, so owners can book in a message.",
    highlights: [
      "Service cards for boarding, veterinary care and grooming",
      "Online shop and pet relocation pages",
      "WhatsApp chat button in the header"
    ]
  },
  {
    slug: "multivendor-store",
    name: "E-commerce Store",
    category: "stores",
    kind: "Multi-vendor fashion & electronics",
    lang: "English",
    summary: "Dark-themed store with mega menus, vendor accounts and filters.",
    description:
      "A dark multi-vendor online store selling fashion and electronics. Shoppers browse with a mega menu and category search, filter products by men's or women's categories and add to cart, while vendors get their own account area.",
    highlights: [
      "Mega menu and full-screen menu for browsing",
      "Product filtering by category",
      "User and vendor account pages"
    ]
  },
  {
    slug: "shopie",
    name: "Shopie",
    category: "stores",
    kind: "Electronics store",
    lang: "English",
    summary: "Clean electronics store for phones, headphones and smart watches.",
    description:
      "Shopie sells phones, headphones, smart watches and home electronics. A product slider opens the page, special-offer tiles follow, and new arrivals are shown with prices and ratings.",
    highlights: [
      "Hero product slider",
      "Special offer tiles",
      "New arrivals with prices and ratings"
    ]
  },
  {
    slug: "cara",
    name: "Cara",
    category: "stores",
    kind: "Fashion store",
    lang: "English",
    stack: ["HTML", "CSS", "JavaScript"],
    summary: "Clothing store with featured products, new arrivals and offers.",
    description:
      "Cara is a clothing store with a fresh, light look. It shows featured products, new arrivals, promotional banners and a newsletter sign-up, and works across desktop and mobile.",
    highlights: [
      "Featured products and new arrivals grids",
      "Promotional banners and coupon offers",
      "Newsletter sign-up"
    ]
  },
  {
    slug: "male-fashion",
    name: "Male Fashion",
    category: "stores",
    kind: "Menswear store",
    lang: "English",
    summary: "Minimal menswear store with seasonal collections.",
    description:
      "A minimal menswear store with seasonal collection sliders, product grids with best sellers and new arrivals, a deal countdown, an Instagram section and a blog.",
    highlights: [
      "Seasonal collection hero slider",
      "Best sellers, new arrivals and hot sales tabs",
      "Deal of the week countdown"
    ]
  },
  {
    slug: "surfside-shop",
    name: "SurfsideMedia Shop",
    category: "stores",
    kind: "Full e-commerce website",
    lang: "English",
    stack: ["Laravel 8"],
    summary: "Laravel store with cart, wishlist and checkout.",
    description:
      "A full online store built with Laravel. Shoppers browse weekly featured, top-selling and top-rated items, save to a wishlist, add to cart and check out, with currency and language switches in the top bar.",
    highlights: [
      "Cart, wishlist and checkout",
      "Featured, hot sale and top-rated product groups",
      "Category search and promotional banners"
    ]
  },
  {
    slug: "marriage-needs",
    name: "Marriage Needs",
    category: "stores",
    kind: "Online store",
    lang: "English",
    stack: ["Laravel 9"],
    summary: "Laravel online store with collections, deals and blog.",
    description:
      "An online store built with Laravel, with category browsing, collections, deals, a wishlist and cart, plus a blog and account area.",
    highlights: [
      "Browse by category and collection",
      "Wishlist, cart and user account",
      "Deals banner and blog"
    ]
  },
  {
    slug: "sweets",
    name: "Sweets",
    category: "food",
    kind: "Cake shop",
    lang: "Arabic",
    summary: "Arabic cake shop with offers and online ordering.",
    description:
      "An Arabic online cake shop with a soft pink identity. Offer banners, product listings with add-to-cart and customer testimonials help turn browsing into orders.",
    highlights: [
      "Right-to-left Arabic layout",
      "Offer banners and product listings",
      "Customer testimonials"
    ]
  },
  {
    slug: "foodies",
    name: "Foodies",
    category: "food",
    kind: "Restaurant & food ordering",
    lang: "English",
    summary: "Restaurant landing page with menu categories and online ordering.",
    description:
      "A bright restaurant site with menu categories such as pizza, burgers, chicken and coffee, popular dishes, a why-choose-us section and an Order Now button in the hero.",
    highlights: [
      "Menu categories with icons",
      "Popular dishes and full menu",
      "Order Now and cart in the header"
    ]
  },
  {
    slug: "menu-app",
    name: "Digital Menu",
    category: "food",
    kind: "Interactive restaurant menu",
    lang: "Arabic",
    summary: "A searchable digital menu filtered by meal time.",
    description:
      "A digital restaurant menu in Arabic. Guests filter dishes by breakfast, lunch or dinner, search instantly and see a photo, description and price for every item.",
    highlights: [
      "Filter by breakfast, lunch and dinner",
      "Instant search",
      "Photo, description and price per item"
    ]
  },
  {
    slug: "tech-magic",
    name: "Tech Magic",
    category: "business",
    kind: "Tech company & app landing page",
    lang: "English + Arabic",
    summary: "Landing page for a tech company and its mobile app.",
    description:
      "A vivid purple landing page for a tech company that promotes its mobile app, projects and courses. A phone mock-up hero, about and services sections, and an English/Arabic switch make it modern and easy to follow.",
    highlights: [
      "Phone mock-up hero with app download button",
      "Projects and courses sections",
      "English and Arabic switch"
    ]
  },
  {
    slug: "blood-bank",
    name: "Blood Bank",
    category: "health",
    kind: "Blood donation platform",
    lang: "Arabic + English",
    summary: "Connects blood donors with donation requests.",
    description:
      "An Arabic blood donation website where donors create an account, browse donation requests and read health articles. A friendly medical illustration style keeps it approachable.",
    highlights: [
      "Donor sign-up and login",
      "Donation requests list",
      "Health articles and Arabic/English switch"
    ]
  },
  {
    slug: "clinic-dashboard",
    name: "Clinic Dashboard",
    category: "health",
    kind: "Clinic management system",
    lang: "Arabic",
    stack: ["Laravel"],
    summary: "Admin dashboard for doctors, patients and appointments.",
    description:
      "An Arabic admin dashboard for a medical clinic. Staff see daily totals at a glance and manage doctors, patients, appointments on a calendar, visits, services and prescriptions from one place.",
    highlights: [
      "Appointments calendar with month, week and day views",
      "Doctors, patients, visits and services management",
      "Prescription writing and patient statistics"
    ]
  },
  {
    slug: "movies-app",
    name: "Movies App",
    category: "apps",
    kind: "Movie discovery app",
    lang: "Arabic",
    summary: "Browse and search movies with Arabic titles and posters.",
    description:
      "A movie discovery app that loads titles and posters from a movie database and shows them with Arabic titles. Users search for films and page through results in a clean poster grid.",
    highlights: [
      "Poster grid loaded from a movie database",
      "Search by title",
      "Pagination through results"
    ]
  },
  {
    slug: "surfside-services",
    name: "SurfsideMedia Services",
    category: "apps",
    kind: "Home services booking",
    lang: "English",
    stack: ["Laravel 8"],
    summary: "Book AC, appliance and cleaning services online.",
    description:
      "A home services booking platform built with Laravel. Customers search for a service such as AC repair, appliance fixes or home cleaning, compare starting prices and book.",
    highlights: [
      "Service search in the hero",
      "Service cards with starting prices",
      "Categories for AC, appliances, cleaning and more"
    ]
  },
  {
    slug: "traveler",
    name: "Traveler",
    category: "travel",
    kind: "Tour & travel agency",
    lang: "English",
    summary: "Travel agency site with trip search, packages and destinations.",
    description:
      "A travel agency website with a trip search right under the hero, tour packages, popular destinations, travel guides and traveller testimonials.",
    highlights: [
      "Trip search by category, destination and date",
      "Tour packages with prices",
      "Destinations, guides and testimonials"
    ]
  },
  {
    slug: "visit-kuwait",
    name: "Visit Kuwait",
    category: "travel",
    kind: "Tourism guide",
    lang: "Arabic + English",
    summary: "Kuwait tourism platform with places, events and offers.",
    description:
      "A tourism platform for Kuwait in Arabic and English. Visitors discover trending places, an events calendar, summer offers and a store, all built around local photography.",
    highlights: [
      "Trending places and summer offers",
      "Kuwait events calendar",
      "Arabic/English switch and sign-up"
    ]
  },
  {
    slug: "teacheduca",
    name: "TeachEduca",
    category: "education",
    kind: "Online courses",
    lang: "English",
    summary: "Online learning site with courses, experts and sign-up.",
    description:
      "An online learning website with course listings, platform features, community experts and a registration form, so students can find a course and sign up in one visit.",
    highlights: [
      "Popular courses grid",
      "Community experts section",
      "Registration form"
    ]
  },
  {
    slug: "forstak",
    name: "Forstak",
    category: "education",
    kind: "Job board",
    lang: "English",
    summary: "Job portal with search by title, location and category.",
    description:
      "A job board where candidates search by job title, location and category, browse job categories with open positions, and explore companies and pricing plans.",
    highlights: [
      "Job search by title, location and category",
      "Job categories with open position counts",
      "Companies, pricing and login pages"
    ]
  }
];
