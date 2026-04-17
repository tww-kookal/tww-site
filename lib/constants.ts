export const RESORT_NAME = "The Westwood";
export const RESORT_LOCATION = "Kookal, Western Ghats, India";

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
    price: "₹12,500",
    image: "/photos/cedar/cedar-outer-view-1.JPG",
    features: ["800 sqft Built-up Space", "3 California King Beds", "180° Panoramic View", "Cathedral Style", "Spacious Living Room", "Private Deck", "Sunrise/Sunset Views", "Heated Bathroom", "Indoor Pantry"],
    scarcity: "Premium Individual Cabin",
  },
  {
    id: "pine",
    name: "Pine",
    category: "Individual Cabin",
    description: "An elegant A-frame styled construction offering 600sqft of living space. Includes a private bedroom with a queen-size bed and an open bedroom on the first floor with a California King size bed. Enjoy the mountain air from your private deck.",
    price: "₹10,500",
    image: "/photos/pine/pine-front-view.jpg",
    features: ["A-Frame Style", "600 sqft Living Space", "Queen + California King Beds", "Private Deck", "Living Room", "Heated Bathroom", "Indoor Pantry"],
    scarcity: "Unique A-Frame Design",
  },
  {
    id: "teak",
    name: "Teak",
    category: "Mirrored Twin Cabin",
    description: "A comfortable twin room accommodating up to 3 adults. Features a private living room and shares a deck with its twin, Maple. Perfect for small groups or families wanting a shared yet private experience.",
    price: "₹8,500",
    image: "/photos/teak/teak-front-1.jpg",
    features: ["350 sqft Space", "Accommodates 3 Adults", "Shared Deck", "Private Living Room", "Heated Bathroom", "Indoor Pantry"],
    scarcity: "Twin Mirrored Layout",
  },
  {
    id: "maple",
    name: "Maple",
    category: "Mirrored Twin Cabin",
    description: "The identical twin of Teak, offering the same mirrored layout and amenities. Provides a cozy and private living space with a shared deck overlooking the lush greenery.",
    price: "₹8,500",
    image: "/photos/maple/maple-front-view.jpg",
    features: ["350 sqft Space", "Accommodates 3 Adults", "Shared Deck", "Private Living Room", "Heated Bathroom", "Indoor Pantry"],
    scarcity: "Twin Mirrored Layout",
  },
  {
    id: "glamp",
    name: "Glamp",
    category: "Glamping",
    description: "A cozy 100sqft glamping tent for a true nature immersion. Features two single beds and a private deck, with a separate private bathroom for your convenience.",
    price: "₹6,500",
    image: "/photos/glamp/20251226_084957.jpg",
    features: ["100 sqft Glamp", "Two Single Beds", "Private Deck", "Separate Bathroom", "Heated Water", "Indoor Pantry"],
    scarcity: "Unique Nature Experience",
  },
];

export const EXPERIENCES = [
  {
    title: "Nature Immersion",
    description: "Wake up to the sounds of the forest and the mist rolling over the hills. Guided nature walks available through the pristine Western Ghats.",
    icon: "Trees",
    image: "/photos/around-the-westwood/kookal-lake.jpg",
  },
  {
    title: "The Cafe",
    description: "Our on-site restaurant serving authentic, fresh, and homemade food that tastes just like home. Prepared with locally sourced organic ingredients.",
    icon: "UtensilsCrossed",
    image: "/photos/cafe/cafe-front-view-1.jpg",
  },
  {
    title: "In the Westwood",
    description: "Explore our beautiful campus, with spaces for kids to play, mist-covered views, and magical nights under the stars.",
    icon: "Home",
    image: "/photos/in-the-westwood/campus.jpg",
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
  { src: "/photos/cedar/cedar-outer-view-1.JPG", category: "Cabins", alt: "Cedar Cathedral Cabin" },
  { src: "/photos/pine/pine-front-view.jpg", category: "Cabins", alt: "Pine A-Frame Cabin" },
  { src: "/photos/teak/teak-front-1.jpg", category: "Cabins", alt: "Teak Twin Cabin" },
  { src: "/photos/maple/maple-front-view.jpg", category: "Cabins", alt: "Maple Twin Cabin" },
  { src: "/photos/glamp/20251226_084957.jpg", category: "Cabins", alt: "Glamp Tent" },
  { src: "/photos/cafe/cafe-dining-area-1.JPG", category: "Food", alt: "Cafe Dining" },
  { src: "/photos/around-the-westwood/kookal-lake.jpg", category: "Forest", alt: "Kookal Lake" },
  { src: "/photos/in-the-westwood/the-westwood-night-view-1.jpg", category: "Night", alt: "Resort at Night" },
  { src: "/photos/cedar/cedar-deck-view.jpg", category: "Forest", alt: "Panoramic View from Cedar" },
  { src: "/photos/in-the-westwood/kids-playing.jpg", category: "Forest", alt: "Kids Play Area" },
];

export const CONTACT_INFO = {
  phone: "+91 98765 43210",
  whatsapp: "+91 98765 43210",
  email: "stay@thewestwood.com",
  address: "Kookal, Kodaikanal, Tamil Nadu, India",
  googleMaps: "https://maps.app.goo.gl/xxx",
};
