import React, { useState } from 'react';
import { Search, Heart, ShoppingCart, Scale, Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const [isLangHovered, setIsLangHovered] = useState(false);
  const navigate = useNavigate();

  const topNavLinks = [
    { name: 'Kampaniyalar', href: '#', color: 'text-[#ff003c]' },
    { name: 'Mağazalar', href: '#' },
    { name: 'Korporativ satışlar', href: '#' },
  ];

  return (
    <header className="w-full font-sans sticky top-0 z-50 bg-white">
      {/* Top Promotion Banner */}
      <div className="bg-[#ff003c] text-white py-2 px-4 text-center text-sm font-bold flex justify-center items-center gap-2 overflow-hidden whitespace-nowrap">
        <span className="animate-pulse">🔥</span>
        -60%-dək endirim 24 aya böl
        <span className="animate-pulse">🔥</span>
      </div>

      {/* Main Header Container */}
      <div className="max-w-[1440px] mx-auto px-4 lg:px-10">
        {/* Top Navigation Row */}
        <div className="flex items-center justify-between py-3 border-b border-gray-100 lg:border-none">
          {/* Logo & Links */}
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <a href="/">
                <img 
                  src="https://kontakt.az/static/version1773919104/frontend/Swissup/breeze-customized/az_Latn_AZ/images/logo.svg" 
                  alt="Kontakt" 
                  className="h-8 md:h-10 w-auto"
                />
              </a>
              <div className="h-6 w-[1px] bg-gray-300 hidden md:block"></div>
              <a href="https://euronics.com" target="_blank" className="hidden md:block">
                <img 
                  src="https://kontakt.az/static/version1773919104/frontend/Swissup/breeze-customized/az_Latn_AZ/images/logo/euronics-header-logo.svg" 
                  alt="Euronics" 
                  className="h-6 w-auto"
                />
              </a>
            </div>

            <nav className="hidden lg:flex items-center gap-6">
              {topNavLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className={`${link.color || 'text-[#323232]'} font-medium text-sm hover:opacity-80 transition-opacity`}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact & Actions */}
          <div className="flex items-center gap-4 md:gap-6">
            <div className="flex items-center gap-1 text-[#323232] font-bold text-lg">
              <span className="text-[#ff003c] text-sm">*</span>
              6060
            </div>
            
            <div className="hidden md:flex items-center gap-3">
              <button className="px-4 py-1.5 border border-[#00b140] text-[#00b140] rounded-md text-sm font-semibold hover:bg-[#00b140] hover:text-white transition-colors">
                Aylıq Ödəniş
              </button>
              <button 
                onClick={() => navigate('/login')}
                className="px-4 py-1.5 bg-[#f5f5f5] text-[#323232] rounded-md text-sm font-semibold hover:bg-gray-200 transition-colors"
              >
                Daxil ol
              </button>
              
              {/* Language Switcher with Hover */}
              <div 
                className="relative group py-2"
                onMouseEnter={() => setIsLangHovered(true)}
                onMouseLeave={() => setIsLangHovered(false)}
              >
                <div className="flex items-center gap-1 text-sm font-bold cursor-pointer transition-colors hover:text-[#ff003c]">
                  AZ
                  <ChevronDown size={14} className={`${isLangHovered ? 'rotate-180' : ''} transition-transform`} />
                </div>
                {isLangHovered && (
                  <div className="absolute top-full right-0 w-16 bg-white shadow-xl border border-gray-100 rounded-md py-2 animate-in fade-in zoom-in-95 duration-200">
                    <div className="px-4 py-1.5 text-sm font-bold text-gray-400 cursor-not-allowed hover:bg-gray-50">AZ</div>
                    <div className="px-4 py-1.5 text-sm font-bold text-[#323232] cursor-pointer hover:bg-gray-50 hover:text-[#ff003c]">RU</div>
                  </div>
                )}
              </div>
            </div>

            <button 
              className="lg:hidden text-[#323232]" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Search & Icons Row */}
        <div className="flex items-center gap-4 py-4 lg:pt-0 relative">
          {/* Catalog Button */}
          <button 
            onClick={() => setIsCatalogOpen(!isCatalogOpen)}
            className={`${isCatalogOpen ? 'bg-[#d40032]' : 'bg-[#ff003c]'} hidden lg:flex items-center gap-2 text-white px-5 py-2.5 rounded-lg font-bold text-sm hover:bg-[#d40032] transition-colors`}
          >
            {isCatalogOpen ? <X size={18} /> : (
              <div className="grid grid-cols-2 gap-0.5">
                <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
                <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
                <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
                <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
              </div>
            )}
            Kataloq
          </button>

          {/* Catalog Dropdown Overlay */}
          {isCatalogOpen && (
            <div className="absolute top-full left-0 w-full bg-white shadow-2xl z-40 border-t border-gray-100 flex h-[600px] animate-in slide-in-from-top-2 duration-300">
              <div className="w-1/4 border-r border-gray-100 py-4 overflow-y-auto">
                {categories.map((cat, i) => (
                  <div 
                    key={cat.name} 
                    className={`flex items-center justify-between px-6 py-3 cursor-pointer transition-colors hover:bg-gray-50 hover:text-[#ff003c] group ${i === 1 ? 'text-[#ff003c] bg-gray-50' : 'text-[#323232]'}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{cat.icon}</span>
                      <span className="text-sm font-medium">{cat.name}</span>
                    </div>
                    <ChevronRight size={16} className="text-gray-300 group-hover:text-[#ff003c]" />
                  </div>
                ))}
              </div>
              <div className="flex-1 p-8 bg-white grid grid-cols-3 gap-8">
                <div>
                  <h4 className="font-bold text-[#323232] mb-4 text-base border-b pb-2">Apple</h4>
                  <ul className="flex flex-col gap-2 text-sm text-gray-600">
                    <li className="hover:text-[#ff003c] cursor-pointer transition-colors font-medium">iPhone 16 Pro Max</li>
                    <li className="hover:text-[#ff003c] cursor-pointer transition-colors">iPhone 16 Pro</li>
                    <li className="hover:text-[#ff003c] cursor-pointer transition-colors">iPhone 15</li>
                    <li className="hover:text-[#ff003c] cursor-pointer transition-colors">iPhone 14</li>
                    <li className="hover:text-[#ff003c] cursor-pointer transition-colors text-[#ff003c] font-bold">Bütün Apple modelləri</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-[#323232] mb-4 text-base border-b pb-2">Samsung</h4>
                  <ul className="flex flex-col gap-2 text-sm text-gray-600">
                    <li className="hover:text-[#ff003c] cursor-pointer transition-colors">Galaxy S24 Ultra</li>
                    <li className="hover:text-[#ff003c] cursor-pointer transition-colors">Galaxy Z Fold6</li>
                    <li className="hover:text-[#ff003c] cursor-pointer transition-colors">Galaxy A55</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-[#323232] mb-4 text-base border-b pb-2">Digər Brendlər</h4>
                  <ul className="flex flex-col gap-2 text-sm text-gray-600">
                    <li className="hover:text-[#ff003c] cursor-pointer transition-colors font-medium">Xiaomi</li>
                    <li className="hover:text-[#ff003c] cursor-pointer transition-colors font-medium">Honor</li>
                    <li className="hover:text-[#ff003c] cursor-pointer transition-colors font-medium">Realme</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Search Box */}
          <div className="flex-1 relative group">
            <input 
              type="text" 
              placeholder="Axtarış..." 
              className="w-full bg-[#f5f5f5] border-transparent focus:border-[#ff003c] focus:bg-white focus:ring-1 focus:ring-[#ff003c] py-2.5 px-5 rounded-full text-sm outline-none transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#ff003c]">
              <Search size={20} strokeWidth={2.5} />
            </button>
          </div>

          {/* User Utilities */}
          <div className="flex items-center gap-2 md:gap-5">
            <button className="hidden sm:flex flex-col items-center gap-1 text-[#323232] hover:text-[#ff003c] transition-colors">
              <Scale size={24} strokeWidth={1.5} />
            </button>
            <button className="flex flex-col items-center gap-1 text-[#323232] hover:text-[#ff003c] transition-colors relative">
              <Heart size={24} strokeWidth={1.5} />
            </button>
            <button className="flex flex-col items-center gap-1 text-[#323232] hover:text-[#ff003c] transition-colors relative">
              <ShoppingCart size={24} strokeWidth={1.5} />
              <span className="absolute -top-1.5 -right-1.5 bg-[#ff003c] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                0
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-[110px] left-0 w-full bg-white z-50 border-t border-gray-100 shadow-xl p-6 flex flex-col gap-6 animate-in slide-in-from-top duration-300 h-screen overflow-y-auto pb-32">
          <nav className="flex flex-col gap-4">
            {topNavLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-lg font-semibold text-[#323232]">
                {link.name}
              </a>
            ))}
          </nav>
          <div className="flex flex-col gap-3">
            <button className="w-full py-3 border border-[#00b140] text-[#00b140] rounded-lg font-bold">
              Aylıq Ödəniş
            </button>
            <button 
              onClick={() => { navigate('/login'); setIsMenuOpen(false); }}
              className="w-full py-3 bg-[#f5f5f5] text-[#323232] rounded-lg font-bold"
            >
              Daxil ol
            </button>
          </div>
          <hr className="border-gray-100" />
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-gray-400 text-sm uppercase">Kataloq</h4>
            <div className="grid grid-cols-1 gap-4">
              {categories.map((cat) => (
                <div key={cat.name} className="flex items-center gap-3 text-[#323232] font-medium">
                  <span className="text-xl">{cat.icon}</span>
                  <span>{cat.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;