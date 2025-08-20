import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-black border-b border-primary/20 sticky top-0 z-50 shadow-premium">
      <div className="container mx-auto px-4 py-4 sm:py-6 md:py-8">
        <div className="flex items-center justify-center">
          <Link to="/" className="hover:scale-105 transition-all duration-300 hover:shadow-glow">
            <img 
              src="/lovable-uploads/485000f9-073a-41dc-b7e0-853ab55820a4.png"
              alt="Stallion Commander Logo"
              className="h-12 sm:h-16 md:h-20 lg:h-24 xl:h-28 w-auto max-w-full filter drop-shadow-lg"
              style={{
                filter: 'brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2878%) hue-rotate(180deg) brightness(104%) contrast(97%) drop-shadow(0 4px 8px rgba(0,0,0,0.3))'
              }}
            />
          </Link>
        </div>
        
        {/* Full width COMMANDER text */}
        <div className="mt-2 sm:mt-4">
          <h1 className="text-white font-black tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.4em] lg:tracking-[0.5em] text-center text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl drop-shadow-lg">
            COMMANDER
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;