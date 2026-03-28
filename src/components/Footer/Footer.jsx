import React from 'react';
import { Facebook, Instagram, Youtube, Send, MessageCircle } from 'lucide-react';

const Footer = () => {
  const footerLinks = [
    {
      title: 'Kontakt',
      links: ['Şirkət haqqında', 'Karyera', '"Qarabağ" proqramı', 'Kontakt Video', 'Bloq']
    },
    {
      title: 'Müştəriyə dəstək',
      links: ['Çatdırılma və ödəmə', 'Geri qaytarma', 'Hissə-hissə ödəniş', 'Saytdan istifadə şərtləri', 'Konfidensiallıq siyasəti', 'Zəmanətlər', 'Tez-tez verilən suallar']
    },
    {
      title: 'Xidmət və servislər',
      links: ['İki saata qapında', 'Promokodlar', 'Online Trade-in', 'Ən yaxşı qiymətə zəmanət!', 'Korporativ satışlar']
    }
  ];

  const socialIcons = [
    { Icon: Facebook, href: '#' },
    { Icon: Instagram, href: '#' },
    { Icon: Youtube, href: '#' },
    { Icon: MessageCircle, href: '#', label: 'WhatsApp' },
    { Icon: Send, href: '#', label: 'Telegram' },
    { Icon: MessageCircle, href: '#', label: 'TikTok' }, // Using available icon as placeholder
  ];

  return (
    <footer className="bg-[#f8f8f8] pt-12 pb-6 px-4 lg:px-10 font-sans border-t border-gray-200">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-gray-200 pb-12">
          {/* Main Links Columns */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-[#323232] font-bold text-lg mb-6">{section.title}</h3>
              <ul className="flex flex-col gap-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-[#4a4a4a] text-sm hover:text-[#ff003c] transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact & Social Column */}
          <div>
            <h3 className="text-[#323232] font-bold text-lg mb-6">Əlaqə</h3>
            <div className="flex items-baseline gap-1 text-[#323232] font-bold text-3xl mb-4">
              <span className="text-[#ff003c] text-xl">*</span>
              6060
            </div>
            <button className="flex items-center gap-2 bg-[#f0f0f0] text-[#323232] px-4 py-2 rounded-lg text-sm font-bold mb-8 hover:bg-gray-200 transition-colors">
              <span className="w-2 h-2 bg-[#ff003c] rounded-full"></span>
              Xəritə
            </button>

            <h4 className="text-[#323232] font-bold text-sm mb-4">Biz sosial şəbəkələrdə</h4>
            <div className="flex gap-3 mb-8">
              {socialIcons.map((social, index) => (
                <a 
                  key={index} 
                  href={social.href} 
                  className="w-10 h-10 bg-white shadow-sm border border-gray-100 rounded-full flex items-center justify-center text-[#323232] hover:bg-[#ff003c] hover:text-white transition-all transform hover:-translate-y-1"
                >
                  <social.Icon size={18} />
                </a>
              ))}
            </div>

            <h4 className="text-[#323232] font-bold text-sm mb-4">Təhlükəsiz alış-veriş</h4>
            <div className="flex gap-4 opacity-60">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6" />
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-6 gap-4">
          <p className="text-[#888] text-sm">© Kontakt 2026</p>
          <div className="flex items-center gap-2">
            <span className="text-gray-400 text-xs italic">member of</span>
            <img 
              src="https://kontakt.az/static/version1773919104/frontend/Swissup/breeze-customized/az_Latn_AZ/images/logo/euronics-header-logo.svg" 
              alt="Euronics" 
              className="h-5 opacity-50"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
