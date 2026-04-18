export const RESORT_NAME = "The Westwood";
export const RESORT_LOCATION = "Kookal, Kodaikanal, Tamilnadu, India";

export const LOGOS = {
  light: "/images/logo/6.png", // Transparent logo for dark backgrounds
  dark: "/images/logo/westwoodlogo2.png", // Main logo for light backgrounds
  square: "/images/logo/0.jpg",
  icon: "/images/logo/w-logo.jpg",
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Rooms", href: "/rooms" },
  { label: "Experience", href: "/experience" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export const ROOMS = [
  {
    id: "cedar",
    name: "Cedar",
    category: "Individual Cabin",
    description: "A cathedral styled swiss wooden cabin. Features a private bedroom with a California King Size Bed and an open bedroom on the first floor with two more California King size beds. Breathtaking 180-degree panoramic forest views from the spacious 200sqft living room and private deck.",
    image: "/images/cedar/cedar-outer-view-1.JPG",
    images: [
      "/images/cedar/cedar-outer-view-1.JPG",
      "/images/cedar/cedar-outer-view-2.JPG",
      "/images/cedar/cedar-outer-view-3.JPG",
      "/images/cedar/cedar-outer-view-4.JPG",
      "/images/cedar/cedar-outer-view-5.JPG",
      "/images/cedar/cedar-outer-view-6.jpg",
      "/images/cedar/cedar-outer-view-7.jpg",
      "/images/cedar/cedar-living-room.jpg",
      "/images/cedar/cedar-living-room-2.jpg",
      "/images/cedar/cedar-living-room-3.jpg",
      "/images/cedar/cedar-living-room-4.jpg",
      "/images/cedar/cedar-living-room-5.jpg",
      "/images/cedar/cedar-bathroom-1.jpg",
      "/images/cedar/cedar-terrace-bed-1.jpg",
      "/images/cedar/cedar2.jpg",
    ],
    features: ["Max Occupancy: 8 Adults", "Private Campfire Area", "800 sqft Built-up Space", "3 California King Beds", "180° Panoramic View", "Cathedral Style", "Spacious Living Room", "Private Deck", "Sunrise/Sunset Views", "Heated Bathroom", "Indoor Pantry"],
    scarcity: "Premium Individual Cabin",
  },
  {
    id: "pine",
    name: "Pine",
    category: "Individual Cabin",
    description: "An elegant A-frame styled construction offering 600sqft of living space. Includes a private bedroom with a queen-size bed and an open bedroom on the first floor with a California King size bed. Enjoy the mountain air from your private deck.",
    image: "/images/pine/pine-front-view.jpg",
    images: [
      "/images/pine/pine-front-view.jpg",
      "/images/pine/pine-front-view-2.jpg",
      "/images/pine/pine-outer-view-1.jpg",
      "/images/pine/pine-outer-view-2.jpg",
      "/images/pine/pine-outer-view-3.jpg",
      "/images/pine/pine-outer-view-4.jpg",
      "/images/pine/pine-outer-view-5.jpg",
      "/images/pine/pine-outer-view-6.jpg",
      "/images/pine/pine-living-room-1.jpg",
      "/images/pine/pine-lower-bedroom-1.jpg",
      "/images/pine/pine-bathroom-1.jpg",
      "/images/pine/pine-bathroom-2.jpg",
      "/images/pine/PineDeckView4.jpg",
      "/images/pine/pine-triangle-view.jpg",
    ],
    features: ["Max Occupancy: 5 Adults", "Private Campfire Area", "A-Frame Style", "600 sqft Living Space", "Queen + California King Beds", "Private Deck", "Living Room", "Heated Bathroom", "Indoor Pantry"],
    scarcity: "Unique A-Frame Design",
  },
  {
    id: "teak",
    name: "Teak",
    category: "Mirrored Twin Cabin",
    description: "A comfortable twin room accommodating up to 3 adults. Features a private living room and shares a deck with its twin, Maple. Perfect for small groups or families wanting a shared yet private experience.",
    image: "/images/teak/teak-front-1.jpg",
    images: [
      "/images/teak/teak-front-1.jpg",
      "/images/teak/teak-front-3.jpg",
      "/images/teak/teak-outer-view-1.jpg",
      "/images/teak/teak-outer-view-2.jpg",
      "/images/teak/teak-outer-view-3.jpg",
      "/images/teak/teak-outer-view-4.jpg",
      "/images/teak/teak-bedroom-1.jpg",
      "/images/teak/teak-bedroom-2.jpg",
      "/images/teak/teak-bedroom-3.jpg",
      "/images/teak/teak-bathroom-1.jpg",
      "/images/teak/teak-deck-1.jpg",
      "/images/teak/teak-deck-2.jpg",
    ],
    features: ["Max Occupancy: 3 Adults", "Private Campfire Area", "350 sqft Space", "Shared Deck", "Private Living Room", "Heated Bathroom", "Indoor Pantry"],
    scarcity: "Twin Mirrored Layout",
  },
  {
    id: "maple",
    name: "Maple",
    category: "Mirrored Twin Cabin",
    description: "The identical twin of Teak, offering the same mirrored layout and amenities. Provides a cozy and private living space with a shared deck overlooking the lush greenery.",
    image: "/images/maple/maple-front-view.jpg",
    images: [
      "/images/maple/maple-front-view.jpg",
      "/images/maple/maple-bathroom-1.jpg",
      "/images/maple/maple-bedroom-1.jpg",
      "/images/maple/maple-bedroom-2.jpg",
      "/images/maple/maple-bedroom-3.jpg",
      "/images/maple/maple-bedroom-4.jpg",
      "/images/maple/maple-deck-view-1.jpg",
    ],
    features: ["Max Occupancy: 3 Adults", "Private Campfire Area", "350 sqft Space", "Shared Deck", "Private Living Room", "Heated Bathroom", "Indoor Pantry"],
    scarcity: "Twin Mirrored Layout",
  },
  {
    id: "glamp",
    name: "Glamp",
    category: "Glamping",
    description: "A cozy 100sqft glamping tent for a true nature immersion. Features two single beds and a private deck, with a separate private bathroom for your convenience.",
    image: "/images/glamp/20250315_204224.jpg",
    images: [
      "/images/glamp/glamp-front-2.jpg",
      "/images/glamp/20251226_084957.jpg",
      "/images/glamp/20251226_152608.jpg",
      "/images/glamp/glamp-bedroom-2.jpg",
      "/images/glamp/20251226_181648.jpg",
      "/images/glamp/20251227_192944.jpg",
      "/images/glamp/20250315_204224.jpg",
      "/images/glamp/20250315_204810.jpg",
      "/images/glamp/2a75ed77-c1af-4f1d-94ec-2916bb25f674.jpg",
      "/images/glamp/95f98f35-7f9a-4ef8-b6f1-ae2dabc64f3d.jpg",
      "/images/glamp/glamp-bedroom-1.jpg",
      "/images/glamp/glamp-deck-1.jpg",
    ],
    features: ["Max Occupancy: 2 Adults", "Private Campfire Area", "100 sqft Glamp", "Two Single Beds", "Private Deck", "Separate Bathroom", "Heated Water", "Indoor Pantry"],
    scarcity: "Unique Nature Experience",
  },
];

export const EXPERIENCES = [
  {
    title: "Nature Immersion",
    description: "Wake up to the sounds of the forest and the mist rolling over the hills. Guided nature walks available through the pristine Western Ghats.",
    icon: "Trees",
    image: "/images/around-the-westwood/kookal-lake.jpg",
  },
  {
    title: "The Cafe",
    description: "Our on-site restaurant serving authentic, fresh, and homemade food that tastes just like home. Prepared with locally sourced organic ingredients.",
    icon: "UtensilsCrossed",
    image: "/images/cafe/cafe-front-view-1.jpg",
  },
  {
    title: "Safe & Fun Campus",
    description: "Ample secure parking for cars and motorcycles, CCTV-monitored outdoor areas, and a family-friendly play zone. WiFi is available throughout the campus, from rooms to cafe and glamp.",
    icon: "ShieldCheck",
    image: "/images/in-the-westwood/kids-playing.jpg",
  },
];

export const TESTIMONIALS = [
  {
    name: "Anjali Sharma",
    location: "Bangalore",
    text: "The most peaceful stay I've ever had. The wooden cabins are so cozy and the view is breathtaking!",
    rating: 5,
  },
  {
    name: "Rahul Verma",
    location: "Chennai",
    text: "Homemade food was the highlight. It felt like staying with family in the middle of a forest.",
    rating: 5,
  },
  {
    name: "Priya Nair",
    location: "Kochi",
    text: "Perfect getaway from the city hustle. The staff is very helpful and the property is well-maintained.",
    rating: 5,
  },
];

export const GALLERY_IMAGES = [
  { src: "/images/cedar/cedar-outer-view-1.JPG", category: "Cabins", alt: "Cedar Cathedral Cabin" },
  { src: "/images/pine/pine-front-view.jpg", category: "Cabins", alt: "Pine A-Frame Cabin" },
  { src: "/images/teak/teak-front-1.jpg", category: "Cabins", alt: "Teak Twin Cabin" },
  { src: "/images/maple/maple-front-view.jpg", category: "Cabins", alt: "Maple Twin Cabin" },
  { src: "/images/glamp/20251226_084957.jpg", category: "Cabins", alt: "Glamp Tent" },
  { src: "/images/in-the-westwood/2.jpg", category: "Cabins", alt: "Cabins in the Mist" },
  { src: "/images/cedar/cedar-deck-view.jpg", category: "Cabins", alt: "Panoramic View from Cedar" },
  
  { src: "/images/cafe/cafe-dining-area-1.JPG", category: "Food", alt: "Cafe Dining" },
  { src: "/images/cafe/barbeque.jpg", category: "Food", alt: "Barbeque" }, 
  { src: "/images/cafe/food-cafe-1.jpg", category: "Food", alt: "Dine In" }, 
  { src: "/images/cafe/food-cafe-3.jpg", category: "Food", alt: "Dine In" }, 
  { src: "/images/cafe/food-cafe-4.jpg", category: "Food", alt: "Dine In" }, 
  { src: "/images/cafe/food-cafe-5.jpg", category: "Food", alt: "Dine In" }, 

  { src: "/images/around-the-westwood/falls-kookal-1.jpg", category: "Water Falls", alt: "Kookal Falls" },
  { src: "/images/around-the-westwood/falls-silver-cascade-1.jpg", category: "Water Falls", alt: "Silver Cascade" },
  { src: "/images/around-the-westwood/falls-aanaimutti-2.png", category: "Water Falls", alt: "Aanai Mutti Falls" },
  { src: "/images/around-the-westwood/falls-poomparai-1.jpg", category: "Water Falls", alt: "Poomparai Falls" },
  { src: "/images/around-the-westwood/falls-aanaimutti-1.png", category: "Water Falls", alt: "Aanai Mutti Falls" },

  { src: "/images/around-the-westwood/grassland-kookal-1.jpg", category: "Grasslands", alt: "Grasslands of Kookal" },
  { src: "/images/around-the-westwood/grassland-mannavanur-1.jpg", category: "Grasslands", alt: "Greenery of Mannavanur" },
  { src: "/images/around-the-westwood/grassland-kookal-2.jpg", category: "Grasslands", alt: "Grasslands of Kookal" },
  
  { src: "/images/in-the-westwood/the-westwood-night-view-1.jpg", category: "Night", alt: "Resort at Night" },
  { src: "/images/in-the-westwood/campfire-2.jpg", category: "Night", alt: "Cozy Night Vibe" },
  { src: "/images/in-the-westwood/5.jpg", category: "Night", alt: "Cozy Night Vibe" },
  { src: "/images/in-the-westwood/campfire-1.jpg", category: "Night", alt: "Night Vibes" },

  { src: "/images/around-the-westwood/temple-kuzhanthai-aandavar-poomparai-1.jpg", category: "Temple", alt: "Kuzhanthai Aandavar" },
  { src: "/images/around-the-westwood/temple-kuzhanthai-aandavar-poomparai-2.jpg", category: "Temple", alt: "Murugan Temple" },

  { src: "/images/around-the-westwood/valley-view-1.jpg", category: "Valley", alt: "Valley of Western Ghats" },
  { src: "/images/around-the-westwood/valley-view-2.jpg", category: "Valley", alt: "Valley of Western Ghats" },
  { src: "/images/around-the-westwood/valley-view-3.jpg", category: "Valley", alt: "Valley of Western Ghats" },

  { src: "/images/around-the-westwood/lake-kookal-1.jpg", category: "Lakes", alt: "Kookal Lake" },
  { src: "/images/around-the-westwood/lake-mannavanur-1.jpg", category: "Lakes", alt: "Mannavanur Lake - Boating" },
  { src: "/images/around-the-westwood/lake-boating-star-lake-1.jpg", category: "Lakes", alt: "Star Lake Kodai" },
  { src: "/images/around-the-westwood/lake-kookal-2.jpg", category: "Lakes", alt: "Kookal Lake" },
  
  { src: "/images/play-area/bad-1.jpg", category: "Activities", alt: "Badminton Court" },
  { src: "/images/play-area/bad-2.jpg", category: "Activities", alt: "Badminton Court" },
  { src: "/images/play-area/bad-3.jpg", category: "Activities", alt: "Badminton Court" },
  { src: "/images/play-area/bad-4.jpg", category: "Activities", alt: "Badminton Court" },
  { src: "/images/play-area/bad-5.jpg", category: "Activities", alt: "Badminton Court" },
  { src: "/images/play-area/bad-6.jpg", category: "Activities", alt: "Badminton Court" },
  { src: "/images/play-area/kids-see-saw-2.jpeg", category: "Activities", alt: "Kids Fun" },
  { src: "/images/play-area/kids-see-saw-1.jpeg", category: "Activities", alt: "Play area for Kids" },
  { src: "/images/play-area/swing-1.jpeg", category: "Activities", alt: "Kids Swing" },
  { src: "/images/play-area/see-saw-1.jpeg", category: "Activities", alt: "Twin See Saw" },
  { src: "/images/play-area/swing-2.jpeg", category: "Activities", alt: "Adult's Swing" },
  { src: "/images/play-area/play-area-2.jpeg", category: "Activities", alt: "Kids Rope Climbing" },
  { src: "/images/play-area/basket-ball-1.jpeg", category: "Activities", alt: "Basket Ball Court" },
  { src: "/images/play-area/play-slide-1.jpeg", category: "Activities", alt: "Kids Slide" },
  { src: "/images/play-area/play-area-3.jpeg", category: "Activities", alt: "Kids Ladder" },

];

export const CONTACT_INFO = {
  phone: "+91 98848 55014",
  alternatePhone: "+91 98848 55041",
  whatsapp: "+91 98848 55014",
  email: "care@thewestwood.in",
  alternateEmail: "thewestwood.kookal@gmail.com",
  address: "Kookal, Kodaikanal, Tamil Nadu, India",
  googleMaps: "https://maps.app.goo.gl/fBy8RMb88ZzR5kyU8",
  instagram: "https://www.instagram.com/thewestwoodkookal/",
};
