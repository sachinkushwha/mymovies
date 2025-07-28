const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-8 px-4 mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
        {/* Logo and Description */}
        <div>
          <h2 className="text-2xl font-bold text-white">🎬 Streamify</h2>
          <p className="text-sm mt-2">Your ultimate destination for movies, reviews, and more.</p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-white font-semibold mb-2">Explore</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Trending</a></li>
            <li><a href="#" className="hover:text-white">Top Rated</a></li>
            <li><a href="#" className="hover:text-white">Upcoming</a></li>
          </ul>
        </div>

        {/* Social + Contact */}
        <div>
          <h3 className="text-white font-semibold mb-2">Connect</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:text-white">Instagram</a></li>
            <li><a href="#" className="hover:text-white">Twitter</a></li>
            <li><a href="#" className="hover:text-white">YouTube</a></li>
            <li><a href="#" className="hover:text-white">Contact Us</a></li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-8 border-t border-gray-700 pt-4 text-xs">
        © 2025 Streamify. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
