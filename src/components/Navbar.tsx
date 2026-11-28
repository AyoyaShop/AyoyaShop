import { Link, NavLink } from 'react-router-dom';
import { ShoppingCart, Phone, PackageSearch } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { CONTACT_INFO } from '../data';

const MENU = [
  ['/san-pham', 'Sản phẩm'],
  ['/thao-moc', 'Thảo mộc'],
  ['/tram-huong', 'Trầm hương'],
  ['/phong-thuy', 'Phong thủy'],
  ['/bo-qua-tet', 'Bộ quà Tết'],
  ['/bai-viet', 'Góc Kiến Thức'],
  ['/ve-chung-toi', 'Chuyện nhà võ']
];

// Wide screens show the menu beside the logo; phones get a second row that swipes sideways.
export default function Navbar() {
  const { openCart, totalItems } = useCart();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-ayoya-sand bg-ayoya-cream/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl xl:max-w-7xl items-center justify-between gap-3 px-3 sm:px-5 lg:h-20">
        <Link to="/" className="flex flex-col items-center leading-none">
          <span className="font-serif text-2xl lg:text-[28px] font-bold tracking-tight text-ayoya-green">AYOYA</span>
          <span className="mt-1 hidden min-[375px]:block whitespace-nowrap text-[9px] font-medium uppercase tracking-[0.06em]">Thảo mộc &amp; Phong thủy</span>
        </Link>

        <nav aria-label="Menu chính" className="hidden lg:flex items-center gap-2.5 xl:gap-4 whitespace-nowrap text-[13px] xl:text-sm font-medium">
          {MENU.map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `underline-offset-[6px] decoration-ayoya-amber hover:text-ayoya-green hover:underline ${isActive ? 'text-ayoya-green underline' : ''}`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/tra-cuu-don"
            aria-label="Tra cứu đơn"
            title="Tra cứu đơn"
            className="flex h-11 min-w-11 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-ayoya-sand bg-ayoya-white text-sm font-semibold xl:px-4"
          >
            <PackageSearch size={18} />
            <span className="hidden xl:inline">Tra cứu đơn</span>
          </Link>
          <a
            href={CONTACT_INFO.phoneHref}
            aria-label={`Gọi điện ${CONTACT_INFO.phone}`}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-ayoya-sand bg-ayoya-white"
          >
            <Phone size={18} />
          </a>
          <button
            onClick={openCart}
            aria-label="Giỏ hàng"
            className="flex h-11 items-center gap-2 rounded-full border border-ayoya-sand bg-ayoya-white px-4 text-sm font-semibold cursor-pointer"
          >
            <ShoppingCart size={17} />
            <span className="whitespace-nowrap">Giỏ ({totalItems})</span>
          </button>
        </div>
      </div>

      <nav aria-label="Danh mục" className="flex h-12 items-center gap-2 overflow-x-auto px-3 lg:hidden">
        {MENU.map(([to, label]) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex h-9 flex-shrink-0 items-center rounded-full border px-3.5 text-sm font-medium ${
                isActive ? 'border-ayoya-green bg-ayoya-green text-white' : 'border-ayoya-sand bg-ayoya-white'
              }`
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
