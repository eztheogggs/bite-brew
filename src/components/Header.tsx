import { ThemeToggle } from './ThemeToggle';

interface HeaderProps {
  cartItemCount: number;
  onCartClick: () => void;
}

export function Header({ cartItemCount, onCartClick }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-amber-800 dark:text-amber-500">
              ☕ Brew & Bite
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 dark:text-gray-300 hover:text-amber-800 dark:hover:text-amber-500 transition-colors">Home</a>
            <a href="#menu" className="text-gray-700 dark:text-gray-300 hover:text-amber-800 dark:hover:text-amber-500 transition-colors">Menu</a>
            <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-amber-800 dark:hover:text-amber-500 transition-colors">About</a>
            <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-amber-800 dark:hover:text-amber-500 transition-colors">Contact</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={onCartClick}
              className="relative p-2 text-gray-700 dark:text-gray-300 hover:text-amber-800 dark:hover:text-amber-500 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0h8" />
              </svg>
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
