import React from "react";
import Card from "./Card";  // Importing the Card component
import Footer from "./Footer";  // Importing the Footer component

const animeData = [
  {
    title: "Explore New Ideas",
    description: "Anime with the best battle scenes. Season 2 highly recommended.",
    name: "Jujutsu Kaisen",
    image: "/my-image2.png",
  },
  {
    title: "Connect with Experts",
    description: "Anime with the best storyline.",
    name: "Naruto Shippuden",
    image: "my-image3.png",
  },
  {
    title: "Stay Updated",
    description: "Anime with both an amazing storyline and battle scenes.",
    name: "Demon Slayer",
    image: "my-image1.png",
  },
];

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <nav className="bg-gray-900 text-white p-4" style={{ height: "7vh" }}>
        <div className="container mx-auto flex justify-between items-center">
          <ul className="flex space-x-4 text-sm md:text-base">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto p-8 grid md:grid-cols-3 gap-6" style={{ minHeight: "85vh" }}>
        {animeData.map((anime, index) => (
          <Card 
            key={index} 
            title={anime.title} 
            description={anime.description} 
            name={anime.name} 
            image={anime.image} 
          />
        ))}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
