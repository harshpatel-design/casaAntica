import Image from "next/image";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import NavbarIcons from "./NavbarIcons";

function Navbar() {

  const shopMenu = [
    {
      title: "SHOP LAYOUTS",
      items: [
        "Shop Sidebar",
        "Shop Listview",
        "Fullwidth 4 Columns",
        "Fullwidth 5 Columns",
        "Fullwidth 6 Columns",
        "Shop with Categories 01",
        "Shop with Categories 02",
      ],
    },

    {
      title: "FILTER STYLE",
      items: ["Sidebar Filter", "Offcanvas", "Dropdown", "Drawing Filter"],
    },

    {
      title: "PAGE LOADING",
      items: ["Pagination", "Infinity Scroll", "Load More Button"],
    },

    {
      title: "PRODUCT STYLE",
      items: [
        "Default",
        "Right Thumb",
        "Bottom Thumb",
        "Sticky Detail",
        "Without Thumb",
      ],
    },

    {
      title: "PRODUCT TYPE",
      items: [
        "Simple Product",
        "Variable Product",
        "Grouped Product",
        "External Product",
        "Count Down Timer",
      ],
    },
  ];

  const cards = [
    {
      id: "new-deals",
      title: "New Deals All Weekend Long",
      image:
        "https://demo2.pavothemes.com/aunuca/wp-content/uploads/2025/02/baner-mega-1-min.jpg",
    },
    {
      id: "easy-entryway",
      offer: "30% OFF",
      title: "Easy Entryway Updates\nshop now",
      image:
        "https://demo2.pavothemes.com/aunuca/wp-content/uploads/2025/02/baner-mega-2-min.jpg",
    },
  ];

  const megaCards = [
    {
      id: "clearance-sale",
      offer: "CLEARANCE SALE",
      title: "Up to\n70% off",
      description: "Don’t miss exclusive deals and perks on the app.",
      image:
        "https://demo2.pavothemes.com/aunuca/wp-content/uploads/2025/02/baner-mega-3-min.jpg",
    },
  ];

  const categories = [
    {
      id: "living-room",
      title: "LIVING ROOM",
      image:
        "https://demo2.pavothemes.com/aunuca/wp-content/uploads/2025/02/living-min.jpg",
      items: [
        "Sofas Beds",
        "Armchairs",
        "Accent Chairs",
        "Coffee Tables",
        "Shelving",
      ],
    },

    {
      id: "dining-room",
      title: "DINING ROOM",
      image:
        "https://demo2.pavothemes.com/aunuca/wp-content/uploads/2025/02/dining-min.jpg",
      items: [
        "Stools",
        "Dining Tables",
        "Chairs",
        "Benches",
        "Stacking Stools",
      ],
    },

    {
      id: "bedroom",
      title: "BEDROOM",
      image:
        "https://demo2.pavothemes.com/aunuca/wp-content/uploads/2025/02/bed-min.jpg",
      items: ["Beds", "Mattresses", "Nightstands", "Dressers", "Benches"],
    },

    {
      id: "outdoor",
      title: "OUTDOOR",
      image:
        "https://demo2.pavothemes.com/aunuca/wp-content/uploads/2025/02/outdoor-min.jpg",
      items: [
        "Chairs & Loungers",
        "Coffee Tables",
        "Dining Tables",
        "Dining & Patio Sets",
        "Outdoor Rugs",
      ],
    },
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <nav className="w-full px-[87px] mt-[36px] flex items-center justify-between  relative">
        <div className="flex items-center logo">
          <Image
            src="https://demo2.pavothemes.com/aunuca/wp-content/uploads/2025/02/logo-min.png"
            alt="Logo"
            width={180}
            height={45}
          />
        </div>
        <div className="px-[10px] rounded-full bg-white">
          <ul className="font-mono flex items-center ">
            <li className="px-[7px] py-[14px] ">
              <Link
                href="/"
                className="text-[16px] px-[15px] py-[7px] bg-[#BA4B40] rounded-full text-white font-semibold flex items-center gap-[4px]"
              >
                Home <FaAngleDown className="text-[12px]" />
              </Link>
            </li>

            <li className="group px-[7px] py-[14px]">
              <Link
                href="/shop"
                className="text-[16px] flex items-center gap-[4px] px-[15px] py-[7px] font-semibold rounded-full transition-all duration-300 hover:bg-[#BA4B40] hover:text-white"
              >
                Shop
                <FaAngleDown className="text-[12px] mt-[2px]" />
              </Link>

              <div className="absolute left-0 right-0 w-full pt-8 opacity-0 invisible translate-y-5 px-[87px] group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50">
                <div className="rounded-[40px] p-[60px]  shadow-2xl bg-[#f5f5f5]">
                  <div className="grid grid-cols-12 gap-[20px]">
                    <div className="col-span-5">
                      <div className="grid grid-cols-3 gap-10">
                        {shopMenu.map((section, index) => (
                          <div key={index}>
                            <h3 className="font-medium text-[16px] uppercase mb-5">
                              {section.title}
                            </h3>

                            <ul className="space-y-2">
                              {section.items.map((item, i) => (
                                <li
                                  className="hover:text-[#BA4B40] cursor-pointer transition-colors text-[16px] font-normal font-mono text-[#555555] duration-300"
                                  key={i}
                                >
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="col-span-7  gap-[24px]  grid grid-cols-12">
                      {cards.map((card) => (
                        <div
                          key={card.id}
                          className="col-span-6 relative cursor-pointer min-h-[500px] group/card overflow-hidden rounded-[30px]"
                        >
                          <div className="absolute inset-0">
                            <Image
                              src={card.image}
                              alt={card.title}
                              fill
                              className="object-cover transition-transform duration-500 group-hover/card:scale-105"
                            />

                            <div className="absolute top-0 left-0 right-0 z-10 p-[40px]">
                              {card.offer && (
                                <p className="text-white text-[16px] font-faculty font-medium mb-px">
                                  {card.offer}
                                </p>
                              )}

                              <h2 className="text-[40px] font-bold text-white mb-2 line-clamp-[42px] font-faculty whitespace-pre-line">
                                {card.title}
                              </h2>

                              <div className="group/button w-full gap-[4px] inline-flex items-center cursor-pointer overflow-hidden text-[22px] font-semibold text-white">
                                <span className="w-0 opacity-0 transition-all duration-300 group-hover/button:w-[20px] group-hover/button:opacity-100">
                                  <FaArrowRightLong className="text-[16px]" />
                                </span>

                                <span className="transition-all text-[16px] duration-300">
                                  Shop Now
                                </span>

                                <span className="w-30 opacity-100 ml-[4px] mt-[2px] transition-all duration-300 group-hover/button:w-[20px] group-hover/button:opacity-0">
                                  <FaArrowRightLong className="text-[16px]" />
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li className="group px-[7px] py-[14px]">
              <Link
                href="/shop"
                className="text-[16px] flex items-center gap-[4px] px-[15px] py-[7px] font-semibold rounded-full transition-all duration-300 hover:bg-[#BA4B40] hover:text-white"
              >
                Pages
                <FaAngleDown className="text-[12px] mt-[2px]" />
              </Link>
            </li>

            <li className="px-[7px] group py-[14px]">
              <Link
                href="/mega"
                className="flex items-center gap-[4px] text-[16px] px-[15px] py-[7px] transition-all duration-300 font-semibold hover:bg-[#BA4B40] hover:text-white rounded-full"
              >
                Mega
                <FaAngleDown className="text-[12px] mt-[2px]" />
              </Link>

              <div className="absolute left-0 right-0 w-full pt-8 opacity-0 invisible translate-y-5 px-[87px] group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50">
                <div className="rounded-[40px] p-[60px]  shadow-2xl bg-[#f5f5f5]">
                  <div className="grid grid-cols-12 gap-[20px]">
                    <div className="col-span-7">
                      <div className="grid grid-cols-4 gap-[20px]">
                        {categories.map((category) => (
                          <div key={category.id}>
                            <div className="relative h-[140px] w-[200px] rounded-[20px] overflow-hidden mb-[30px]">
                              <Image
                                src={category.image}
                                alt={category.title}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <h3 className="font-medium text-[16px] uppercase mb-[10px]">
                              {category.title}
                            </h3>
                            <ul className="space-y-[8px] mb-[25px]">
                              {category.items.map((item, index) => (
                                <li
                                  key={index}
                                  className="hover:text-[#BA4B40] cursor-pointer transition-colors text-[14px] font-normal text-[#555555] duration-300"
                                >
                                  {item}
                                </li>
                              ))}
                            </ul>
                            <div className="group/button w-full gap-[4px] inline-flex items-center cursor-pointer overflow-hidden text-[22px] font-semibold text-[#BA4B40]">
                              <span className="w-0 opacity-0 transition-all duration-300 group-hover/button:w-[20px] group-hover/button:opacity-100">
                                <FaArrowRightLong className="text-[16px]" />
                              </span>

                              <span className="transition-all text-[16px] duration-300">
                                View All
                              </span>

                              <span className="w-30 opacity-100 ml-[4px] mt-[2px] transition-all duration-300 group-hover/button:w-[20px] group-hover/button:opacity-0">
                                <FaArrowRightLong className="text-[16px]" />
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="col-span-5 gap-[24px] h-full  grid grid-cols-12">
                      {megaCards.map((card) => (
                        <div
                          key={card.id}
                          className="col-span-12 relative cursor-pointer min-h-[500px] group/card overflow-hidden rounded-[30px]"
                        >
                          <div className="absolute inset-0">
                            <Image
                              src={card.image}
                              alt={card.title}
                              width={400}
                              height={1000}
                              className="object-cover h-full  w-full transition-transform duration-500 group-hover/card:scale-105"
                            />

                            <div className="absolute top-0 left-0 right-0 z-10 p-[40px]">
                              {card.offer && (
                                <p className="text-white uppercase tracking-[2px] text-[16px] font-faculty font-medium mb-1">
                                  {card.offer}
                                </p>
                              )}

                              <h2 className="text-[52px] w-[50%] leading-[1.4] font-bold text-white mb-1 line-clamp-[42px] font-faculty whitespace-pre-line">
                                {card.title}
                              </h2>

                              {card.description && (
                                <p className="text-white text-[18px] leading-[1.4] mb-5 max-w-[260px]">
                                  {card.description}
                                </p>
                              )}

                              <div className="group/button w-full gap-[4px] inline-flex items-center cursor-pointer overflow-hidden text-[22px] font-semibold text-white">
                                <span className="w-0 opacity-0 transition-all duration-300 group-hover/button:w-[20px] group-hover/button:opacity-100">
                                  <FaArrowRightLong className="text-[16px]" />
                                </span>

                                <span className="transition-all text-[16px] duration-300">
                                  Shop Now
                                </span>

                                <span className="w-30 opacity-100 ml-[4px] mt-[2px] transition-all duration-300 group-hover/button:w-[20px] group-hover/button:opacity-0">
                                  <FaArrowRightLong className="text-[16px]" />
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="px-[7px] py-[14px]">
              <Link
                href="/blog"
                className="flex items-center gap-[4px] text-[16px] px-[15px] py-[7px] transition-all duration-300 font-semibold hover:bg-[#BA4B40] hover:text-white rounded-full"
              >
                Blog
                <FaAngleDown className="text-[12px] mt-[2px]" />
              </Link>
            </li>

            <li className="px-[7px] py-[14px]">
              <Link
                href="/contact"
                className="text-[16px] px-[15px] py-[7px] transition-all duration-300 font-semibold hover:bg-[#BA4B40] hover:text-white rounded-full"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <NavbarIcons />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
