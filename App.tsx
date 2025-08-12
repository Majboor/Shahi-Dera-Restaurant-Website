import { useState } from "react";
import {
  Menu,
  X,
  Star,
  Phone,
  MapPin,
  Clock,
  Mail,
  Users,
  Award,
  ChefHat,
} from "lucide-react";
import { Button } from "./components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
// Placeholder images - replace with actual images later
const logo = "/logo.png";
const backgroundImage = "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&h=800&fit=crop&q=80";
const biryaniImage = "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&h=400&fit=crop&q=80";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";

type Page = "home" | "about" | "menu" | "contact";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "menu", label: "Menu" },
    { id: "contact", label: "Contact" },
  ];

  const featuredDishes = [
    {
      name: "Chicken Biryani",
      description:
        "Aromatic basmati rice with tender chicken and traditional spices",
      price: "$18",
      image: biryaniImage,
    },
    {
      name: "Lamb Karahi",
      description:
        "Slow-cooked lamb in traditional karahi with fresh herbs",
      price: "$26",
      image:
        "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&h=400&fit=crop&q=80",
    },
    {
      name: "Beef Nihari",
      description:
        "Traditional slow-cooked beef stew with authentic spices",
      price: "$24",
      image:
        "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600&h=400&fit=crop&q=80",
    },
  ];

  const menuCategories = [
    {
      title: "Lahori Breakfast",
      subtitle: "Saturday – Sunday, 10 AM – 4 PM",
      items: [
        {
          name: "Halwa Puri",
          description: "Chickpea curry with puris and halwa",
          price: "$18",
        },
        {
          name: "Mutton Paya",
          description: "Slow‑cooked goat trotters",
          price: "$22",
        },
        {
          name: "Lamb Shank Nihari",
          description: "With or without brain",
          price: "$24-26",
        },
        {
          name: "Beef Nihari",
          description: "With or without brain",
          price: "$22-24",
        },
        {
          name: "Lahori Saag",
          description: "Mustard-spinach dish",
          price: "$22",
        },
        {
          name: "Lahori Cholay",
          description: "Chickpeas street‑style",
          price: "$17",
        },
        {
          name: "Murgh Cholay",
          description: "Chicken with chickpeas",
          price: "$24",
        },
        {
          name: "Kuzi Haleem",
          description: "Beef and lentils stew",
          price: "$24",
        },
      ],
    },
    {
      title: "Main Curries",
      subtitle: "Traditional Pakistani & Indian Curries",
      items: [
        {
          name: "Butter Chicken",
          description: "Creamy tomato-based chicken curry",
          price: "$22",
        },
        {
          name: "Chicken Tikka Masala",
          description: "Marinated chicken in spiced curry",
          price: "$22",
        },
        {
          name: "Chicken Vindaloo",
          description: "Spicy Goan-style curry",
          price: "$22",
        },
        {
          name: "Palak Paneer",
          description: "Cottage cheese in spinach gravy",
          price: "$22",
        },
        {
          name: "Daal Makhni",
          description: "Creamy black lentils",
          price: "$22",
        },
        {
          name: "Chicken Korma",
          description: "Mild yogurt-based curry",
          price: "$22",
        },
        {
          name: "Chicken Jalfreizi",
          description: "Stir-fried with vegetables",
          price: "$22",
        },
        {
          name: "Mango Chicken",
          description: "Sweet and tangy curry",
          price: "$22",
        },
      ],
    },
    {
      title: "Traditional Classics",
      subtitle: "Authentic Pakistani Dishes",
      items: [
        {
          name: "Lamb Karahi",
          description: "Traditional wok-cooked lamb",
          price: "$24-26",
        },
        {
          name: "Chicken Karahi",
          description: "Traditional wok-cooked chicken",
          price: "$24-26",
        },
        {
          name: "Fish Karahi",
          description: "Traditional wok-cooked fish",
          price: "$24-26",
        },
        {
          name: "Bhindi Gosht",
          description: "Okra with meat",
          price: "$24-26",
        },
        {
          name: "Brain Masala",
          description: "Traditional brain curry",
          price: "$24-26",
        },
        {
          name: "Beef Haleem",
          description: "Slow-cooked beef and lentils",
          price: "$24-26",
        },
        {
          name: "Mutton Paya",
          description: "Slow-cooked goat trotters",
          price: "$24-26",
        },
        {
          name: "Lamb Shank Nihari",
          description: "Traditional breakfast curry",
          price: "$24-26",
        },
      ],
    },
    {
      title: "Rice & Biryani",
      subtitle: "Aromatic Rice Dishes",
      items: [
        {
          name: "Vegetable Biryani",
          description: "Mixed vegetables with basmati rice",
          price: "$15",
        },
        {
          name: "Chicken Biryani",
          description: "Tender chicken with aromatic rice",
          price: "$17",
        },
        {
          name: "Lamb Biryani",
          description: "Succulent lamb with spiced rice",
          price: "$17",
        },
        {
          name: "Zaafrani Rice",
          description: "Saffron-infused basmati rice",
          price: "$4",
        },
        {
          name: "Plain Rice",
          description: "Steamed basmati rice",
          price: "$3",
        },
        {
          name: "Pulao Rice",
          description: "Spiced rice with vegetables",
          price: "$5",
        },
      ],
    },
    {
      title: "Seafood",
      subtitle: "Fresh Ocean Delights",
      items: [
        {
          name: "Fish Curry",
          description: "Traditional fish in spiced gravy",
          price: "$24-25",
        },
        {
          name: "Prawn Curry",
          description: "Succulent prawns in curry",
          price: "$24-25",
        },
        {
          name: "Fish Masala Tikka",
          description: "Grilled fish with spices",
          price: "$24-25",
        },
        {
          name: "Prawn Masala Tikka",
          description: "Grilled prawns with spices",
          price: "$24-25",
        },
        {
          name: "Fish Vindaloo",
          description: "Spicy Goan-style fish curry",
          price: "$24-25",
        },
        {
          name: "Prawn Vindaloo",
          description: "Spicy Goan-style prawn curry",
          price: "$24-25",
        },
        {
          name: "Fish Jalfreizi",
          description: "Stir-fried fish with vegetables",
          price: "$24-25",
        },
        {
          name: "Prawn Jalfreizi",
          description: "Stir-fried prawns with vegetables",
          price: "$24-25",
        },
      ],
    },
    {
      title: "Pakistani-Chinese",
      subtitle: "Fusion Street Food",
      items: [
        {
          name: "Chicken Manchurian",
          description: "Sweet and sour chicken balls",
          price: "$18",
        },
        {
          name: "Chicken Chilli Dry",
          description: "Spicy dry chicken with peppers",
          price: "$18",
        },
        {
          name: "Chicken Szechuan",
          description: "Spicy Szechuan-style chicken",
          price: "$18",
        },
        {
          name: "Beef Chili Dry",
          description: "Spicy dry beef with peppers",
          price: "$18",
        },
        {
          name: "Beef Szechuan",
          description: "Spicy Szechuan-style beef",
          price: "$18",
        },
        {
          name: "Kung Pao Chicken",
          description: "Classic Chinese-style chicken",
          price: "$18",
        },
        {
          name: "Paneer Manchurian",
          description: "Sweet and sour cottage cheese",
          price: "$16",
        },
        {
          name: "Gobi Manchurian",
          description: "Sweet and sour cauliflower",
          price: "$16",
        },
      ],
    },
  ];

  // Header Component
  const Header = () => (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-sm border-b border-green-500/20">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <img
              src={logo}
              alt="Shahi Dera"
              className="h-16 w-auto object-contain"
            />
            <div>
              <h1 className="text-2xl text-white font-bold">
                Shahi Dera
              </h1>
              <p className="text-green-400 text-sm">
                Authentic Pakistani Cuisine
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id as Page)}
                className={`transition-colors font-medium ${
                  currentPage === item.id
                    ? "text-green-400"
                    : "text-white hover:text-green-400"
                }`}
              >
                {item.label}
              </button>
            ))}
            <Button className="bg-green-600 hover:bg-green-700 text-white px-6 font-medium border-none">
              Order Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-green-400"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-6 pb-6 border-t border-green-500/20">
            <div className="flex flex-col space-y-4 pt-6">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id as Page);
                    setIsMenuOpen(false);
                  }}
                  className={`text-left transition-colors text-lg font-medium ${
                    currentPage === item.id
                      ? "text-green-400"
                      : "text-white hover:text-green-400"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <Button className="bg-green-600 hover:bg-green-700 text-white w-fit px-6 font-medium border-none">
                Order Now
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );

  // Footer Component
  const Footer = () => (
    <footer className="relative z-10 bg-black/90 border-t border-green-500/20 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left: Logo Only */}
          <div className="flex justify-center md:justify-start">
            <img
              src={logo}
              alt="Shahi Dera"
              className="h-16 w-auto object-contain"
            />
          </div>

          {/* Center: Contact Information */}
          <div className="text-center space-y-3">
            <div className="flex items-center justify-center gap-2 text-white">
              <Phone className="w-5 h-5 text-green-400" />
              <span className="text-lg">+61 412 655 561</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-white">
              <MapPin className="w-5 h-5 text-green-400" />
              <span className="text-lg">969-971 Canterbury Road Lakemba 2195</span>
            </div>
          </div>

          {/* Right: Navigation Links */}
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-end gap-4">
            <button
              onClick={() => setCurrentPage("about")}
              className="text-white hover:text-green-400 transition-colors text-lg font-medium"
            >
              About
            </button>
            <button
              onClick={() => setCurrentPage("menu")}
              className="text-white hover:text-green-400 transition-colors text-lg font-medium"
            >
              Menu
            </button>
            <button
              onClick={() => setCurrentPage("contact")}
              className="text-white hover:text-green-400 transition-colors text-lg font-medium"
            >
              Contact
            </button>
            <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 font-medium border-none">
              Order Now
            </Button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-green-500/20 text-center">
          <p className="text-white/60">
            © 2025 Shahi Dera Restaurant. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );

  // Home Page
  const HomePage = () => (
    <main className="relative z-10">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-left">
        <div className="max-w-4xl space-y-8">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl text-white leading-tight font-bold">
              Taste of
              <br />
              <span className="text-green-400">Pakistan</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl leading-relaxed">
              Experience authentic Pakistani flavors crafted
              with traditional recipes and premium ingredients
            </p>
          </div>

          {/* Rating & Stats */}
          <div className="flex flex-col md:flex-row items-start gap-8 text-white">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 fill-green-400 text-green-400"
                  />
                ))}
              </div>
              <span className="text-xl">4.8/5 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">10K+</span>
              <span className="text-xl">Happy Customers</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 pt-4">
            <Button
              size="lg"
              onClick={() => setCurrentPage("menu")}
              className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 text-xl font-medium border-none"
            >
              View Menu
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => setCurrentPage("contact")}
              className="border-2 border-green-500 text-green-400 hover:bg-green-600 hover:text-white px-10 py-4 text-xl font-medium"
            >
              Book Table
            </Button>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="container mx-auto px-6 py-32">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-black/60 border-green-500/30 backdrop-blur-sm">
            <CardContent className="p-16">
              <div className="space-y-8">
                <div className="space-y-6">
                  <h2 className="text-6xl md:text-7xl text-white font-bold">
                    Coming <span className="text-green-400">Soon</span>
                  </h2>
                  <p className="text-2xl text-white/80 leading-relaxed max-w-2xl mx-auto">
                    We're preparing something extraordinary for you
                  </p>
                </div>

                <div className="py-8">
                  <div className="w-24 h-1 bg-green-400 mx-auto mb-8"></div>
                  <div className="flex items-center justify-center gap-3 text-white text-xl mb-8">
                    <MapPin className="w-6 h-6 text-green-400" />
                    <span>969-971 Canterbury Road Lakemba 2195</span>
                  </div>
                  
                  {/* Google Maps Widget */}
                  <div className="w-full max-w-4xl mx-auto">
                    <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.5!2d151.075!3d-33.925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12bb3d3b3b3b3b%3A0x3b3b3b3b3b3b3b3b!2s969-971+Canterbury+Road+Lakemba+NSW+2195!5e0!3m2!1sen!2sau!4v1234567890"
                        width="100%"
                        height="400"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Shahi Dera Restaurant Location"
                        className="w-full h-96"
                      ></iframe>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <Button 
                    size="lg" 
                    onClick={() => setCurrentPage("contact")}
                    className="bg-green-600 hover:bg-green-700 text-white px-12 py-4 text-xl font-medium border-none"
                  >
                    Stay Updated
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-white mb-4 font-bold">
            Signature Dishes
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Discover our most beloved traditional Pakistani
            dishes, prepared with authentic recipes
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {featuredDishes.map((dish, index) => (
            <Card
              key={index}
              className="bg-black/60 border-green-500/30 backdrop-blur-sm hover:bg-black/70 transition-all duration-300 group overflow-hidden"
            >
              <div className="relative">
                <ImageWithFallback
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 right-4">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-lg font-medium">
                    {dish.price}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl text-white mb-3 font-bold">
                  {dish.name}
                </h3>
                <p className="text-white/80 mb-4 leading-relaxed">
                  {dish.description}
                </p>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-medium border-none">
                  Order Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Info */}
      <section className="container mx-auto px-6 py-16">
        <div className="bg-black/60 backdrop-blur-sm border border-green-500/30 rounded-2xl p-8 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 text-center md:text-left">
            <div className="space-y-4">
              <h3 className="text-3xl text-green-400 font-bold">
                Visit Us Today
              </h3>
              <div className="flex items-center justify-center md:justify-start gap-3 text-white">
                <MapPin className="w-6 h-6 text-green-400" />
                <div>
                  <p className="text-lg">
                    969-971 Canterbury Road
                  </p>
                  <p className="text-lg">
                    Lakemba 2195, Sydney
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3 text-white">
                <Phone className="w-6 h-6 text-green-400" />
                <p className="text-lg">+61 412 655 561</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-3xl text-green-400 font-bold">
                Opening Hours
              </h3>
              <div className="text-white space-y-2">
                <p className="text-lg">
                  Monday - Friday: 8:00 AM - 11:00 PM
                </p>
                <p className="text-lg">
                  Saturday - Sunday: 8:00 AM - 12:00 AM
                </p>
              </div>
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-8 mt-4 font-medium border-none"
              >
                Get Directions
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );

  // About Page
  const AboutPage = () => (
    <main className="relative z-10 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl text-white mb-6 font-bold">
            About{" "}
            <span className="text-green-400">Shahi Dera</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Preserving and sharing the original taste of
            Pakistan in Australia through authentic cuisine and
            warm hospitality
          </p>
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20 max-w-6xl mx-auto">
          <div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=400&fit=crop&q=80"
              alt="Restaurant Interior"
              className="w-full h-80 object-cover rounded-2xl shadow-2xl"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl text-green-400 font-bold">
              Our Story
            </h2>
            <p className="text-lg text-white/90 leading-relaxed">
              At Shahi Dera, our goal is simple yet powerful: to
              preserve and share the original taste of Pakistan
              in Australia. We believe that food is more than
              just a meal – it's a story, an emotion, and a
              connection to your roots.
            </p>
            <p className="text-lg text-white/90 leading-relaxed">
              Whether you grew up with the taste of rich Lahori
              spices or are exploring Pakistani cuisine for the
              first time, we bring you the same authentic
              flavors you would find in the bustling streets of
              Lahore or the traditional homes of Karachi.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <Card className="bg-black/60 border-green-500/30 text-center">
            <CardContent className="p-8">
              <ChefHat className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl text-white mb-3 font-bold">
                Authentic Recipes
              </h3>
              <p className="text-white/80">
                Traditional recipes passed down for generations
              </p>
            </CardContent>
          </Card>

          <Card className="bg-black/60 border-green-500/30 text-center">
            <CardContent className="p-8">
              <Award className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl text-white mb-3 font-bold">
                Premium Quality
              </h3>
              <p className="text-white/80">
                Fresh ingredients and premium spices
              </p>
            </CardContent>
          </Card>

          <Card className="bg-black/60 border-green-500/30 text-center">
            <CardContent className="p-8">
              <Users className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl text-white mb-3 font-bold">
                Family Atmosphere
              </h3>
              <p className="text-white/80">
                Warm, welcoming environment for all
              </p>
            </CardContent>
          </Card>

          <Card className="bg-black/60 border-green-500/30 text-center">
            <CardContent className="p-8">
              <Star className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl text-white mb-3 font-bold">
                5-Star Experience
              </h3>
              <p className="text-white/80">
                Exceptional service and dining experience
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Mission & Values */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-20">
          <Card className="bg-black/60 border-green-500/30">
            <CardHeader>
              <CardTitle className="text-3xl text-green-400 font-bold">
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-white/90 leading-relaxed">
                To create a bridge between Pakistan and
                Australia through food, sharing the authentic
                flavors, traditions, and hospitality of our
                homeland with the diverse Australian community.
                We believe that every meal should tell the story
                of Pakistan – its rich culture, warm people, and
                incredible culinary heritage.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-black/60 border-green-500/30">
            <CardHeader>
              <CardTitle className="text-3xl text-green-400 font-bold">
                Our Promise
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-white/90 leading-relaxed">
                At Shahi Dera, we don't just serve food; we
                serve memories of Pakistan. We want every
                customer to leave with a full heart and a
                satisfied soul, cherishing the flavors that
                remind them of home or create new, lasting
                impressions of Pakistani cuisine.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Founder Section */}
        <div className="text-center bg-black/60 border border-green-500/30 rounded-2xl p-12 max-w-4xl mx-auto">
          <h3 className="text-4xl text-green-400 mb-6 font-bold">
            Meet Our Founder
          </h3>
          <div className="space-y-4">
            <h4 className="text-3xl text-white font-bold">
              Ali Haider
            </h4>
            <p className="text-xl text-green-300 font-medium">
              Founder & CEO
            </p>
            <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
              A visionary food enthusiast dedicated to
              showcasing the best of Pakistan's culinary
              traditions in the heart of Sydney. With a passion
              for authentic flavors and exceptional hospitality,
              Ali brings the true taste of Pakistan to
              Australia.
            </p>
          </div>
        </div>
      </div>
    </main>
  );

  // Menu Page
  const MenuPage = () => (
    <main className="relative z-10 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl text-white mb-6 font-bold">
            Our <span className="text-green-400">Menu</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Discover authentic Pakistani flavors with our
            extensive menu of traditional dishes, prepared with
            premium ingredients and time-honored recipes
          </p>
        </div>

        <div className="space-y-12 max-w-6xl mx-auto">
          {menuCategories.map((category, categoryIndex) => (
            <Card
              key={categoryIndex}
              className="bg-black/60 border-green-500/30 backdrop-blur-sm"
            >
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-4xl text-green-400 mb-2 font-bold">
                  {category.title}
                </CardTitle>
                <p className="text-xl text-white/80">
                  {category.subtitle}
                </p>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex justify-between items-start gap-4 border-b border-green-500/20 pb-4"
                    >
                      <div className="flex-1">
                        <h4 className="text-xl text-white mb-2 font-bold">
                          {item.name}
                        </h4>
                        <p className="text-white/80 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="text-xl text-green-400 font-bold">
                          {item.price}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-black/60 border border-green-500/30 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-3xl text-green-400 mb-4 font-bold">
              Ready to Order?
            </h3>
            <p className="text-white/80 mb-6">
              Call us or visit our restaurant to experience the
              authentic taste of Pakistan
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-8 font-medium border-none"
              >
                Call to Order: +61 412 655 561
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => setCurrentPage("contact")}
                className="border-green-500 text-green-400 hover:bg-green-600 hover:text-white px-8 font-medium"
              >
                Book a Table
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );

  // Contact Page
  const ContactPage = () => (
    <main className="relative z-10 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl text-white mb-6 font-bold">
            Contact <span className="text-green-400">Us</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            We'd love to hear from you! Book a table, order
            online, or get in touch for events and inquiries
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
          <Card className="bg-black/60 border-green-500/30 text-center">
            <CardContent className="p-8">
              <Phone className="w-16 h-16 text-green-400 mx-auto mb-6" />
              <h3 className="text-2xl text-white mb-4 font-bold">
                Phone
              </h3>
              <p className="text-xl text-green-400 mb-2 font-medium">
                +61 412 655 561
              </p>
              <p className="text-white/70 mb-4">
                Call us to book or inquire
              </p>
              <Button className="bg-green-600 hover:bg-green-700 text-white font-medium border-none">
                Call Now
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-black/60 border-green-500/30 text-center">
            <CardContent className="p-8">
              <MapPin className="w-16 h-16 text-green-400 mx-auto mb-6" />
              <h3 className="text-2xl text-white mb-4 font-bold">
                Location
              </h3>
              <p className="text-xl text-white mb-1">
                969-971 Canterbury Road
              </p>
              <p className="text-xl text-white mb-2">
                Lakemba 2195, Sydney
              </p>
              <p className="text-white/70 mb-4">
                Heart of Lakemba
              </p>
              <Button className="bg-green-600 hover:bg-green-700 text-white font-medium border-none">
                Get Directions
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-black/60 border-green-500/30 text-center">
            <CardContent className="p-8">
              <Clock className="w-16 h-16 text-green-400 mx-auto mb-6" />
              <h3 className="text-2xl text-white mb-4 font-bold">
                Hours
              </h3>
              <p className="text-xl text-white mb-1">
                Mon-Fri: 8:00 AM – 11:00 PM
              </p>
              <p className="text-xl text-white mb-2">
                Sat-Sun: 8:00 AM – 12:00 AM
              </p>
              <p className="text-white/70 mb-4">
                Open 7 days a week
              </p>
              <Button
                className="bg-green-600 hover:bg-green-700 text-white font-medium border-none"
                onClick={() => setCurrentPage("menu")}
              >
                View Menu
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-black/60 border-green-500/30">
            <CardHeader className="text-center">
              <CardTitle className="text-4xl text-green-400 mb-4 font-bold">
                Send Us a Message
              </CardTitle>
              <p className="text-white/80">
                Have questions or want to make a reservation?
                We're here to help!
              </p>
            </CardHeader>
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white mb-2 font-medium">
                      Full Name
                    </label>
                    <Input
                      placeholder="Your full name"
                      className="bg-black/40 border-green-500/30 text-white placeholder:text-white/50 focus:border-green-400"
                    />
                  </div>
                  <div>
                    <label className="block text-white mb-2 font-medium">
                      Phone Number
                    </label>
                    <Input
                      placeholder="Your phone number"
                      className="bg-black/40 border-green-500/30 text-white placeholder:text-white/50 focus:border-green-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white mb-2 font-medium">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    className="bg-black/40 border-green-500/30 text-white placeholder:text-white/50 focus:border-green-400"
                  />
                </div>

                <div>
                  <label className="block text-white mb-2 font-medium">
                    Subject
                  </label>
                  <Input
                    placeholder="What's this about?"
                    className="bg-black/40 border-green-500/30 text-white placeholder:text-white/50 focus:border-green-400"
                  />
                </div>

                <div>
                  <label className="block text-white mb-2 font-medium">
                    Message
                  </label>
                  <Textarea
                    placeholder="Tell us how we can help you..."
                    rows={5}
                    className="bg-black/40 border-green-500/30 text-white placeholder:text-white/50 focus:border-green-400"
                  />
                </div>

                <div className="text-center">
                  <Button
                    size="lg"
                    className="bg-green-600 hover:bg-green-700 text-white px-12 py-3 font-medium border-none"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Map Placeholder */}
        <div className="mt-16 max-w-6xl mx-auto">
          <Card className="bg-black/60 border-green-500/30 overflow-hidden">
            <CardContent className="p-0">
              <div className="relative h-96 bg-gradient-to-br from-green-900/20 to-green-700/20 flex items-center justify-center">
                <div className="text-center text-white">
                  <MapPin className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-2xl text-green-400 mb-2 font-bold">
                    Find Us Here
                  </h3>
                  <p className="text-lg">
                    969-971 Canterbury Road, Lakemba 2195,
                    Sydney
                  </p>
                  <Button className="mt-4 bg-green-600 hover:bg-green-700 text-white font-medium border-none">
                    Open in Google Maps
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />;
      case "about":
        return <AboutPage />;
      case "menu":
        return <MenuPage />;
      case "contact":
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen relative bg-black">
      {/* Background Image Overlay */}
      <div className="fixed inset-0 z-0">
        <img
          src={backgroundImage}
          alt="Authentic Pakistani Dal with Traditional Spices"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/85"></div>
      </div>

      <Header />
      <div className="pt-24">
        {renderCurrentPage()}
      </div>
      <Footer />
    </div>
  );
}