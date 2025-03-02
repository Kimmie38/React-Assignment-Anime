import React from "react";

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
    image: "/my-image3.png",
  },
  {
    title: "Stay Updated",
    description: "Anime with both an amazing storyline and battle scenes.",
    name: "Demon Slayer",
    image: "/my-image1.png",
  },
];

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
    <nav className="bg-gray-900 text-white px-6 flex items-center justify-between" style={{ height: "7vh" }}>
      <h1 className="text-lg font-bold">My Website</h1>
      <ul className="flex space-x-4 text-sm">
        <li><a href="#" className="hover:underline">Home</a></li>
        <li><a href="#" className="hover:underline">About</a></li>
        <li><a href="#" className="hover:underline">Contact</a></li>
      </ul>
    </nav>

      <main className="container mx-auto p-8 grid md:grid-cols-3 gap-6" style={{ minHeight: "85vh" }}>
        {animeData.map((anime, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden p-4">
            <img src={anime.image} alt={anime.name} className="w-full h-48 object-cover rounded" />
            <h2 className="text-lg font-semibold mt-4">{anime.title}</h2>
            <p className="text-gray-600">{anime.description}</p>
            <p className="font-bold mt-2">({anime.name})</p>
          </div>
        ))}
      </main>

      <footer className="bg-gray-900 text-white text-center p-4 mt-auto" style={{ height: "7vh" }}>
        &copy; 2025 My Website. All Rights Reserved.
      </footer>
    </div>
  );
};

export default App;
