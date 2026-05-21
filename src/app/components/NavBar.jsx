import Image from "next/image";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";
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
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="w-full px-[87px] mt-[43px] flex items-center justify-between h-[62px] relative">
        <div className="flex items-center logo">
          <Image
            src="https://demo2.pavothemes.com/aunuca/wp-content/uploads/2025/02/logo-min.png"
            alt="Logo"
            width={180}
            height={45}
          />
        </div>
        <div className="px-[10px] rounded-full bg-white">
          <ul className="font-mono flex items-center">
            <li className="px-[7px] py-[14px]">
              <Link
                href="/"
                className="text-[16px] px-[15px] py-[7px] bg-[#BA4B40] rounded-full text-white font-medium flex items-center gap-[4px]"
              >
                Home <FaAngleDown className="text-[12px]" />
              </Link>
            </li>

            <li className="group px-[7px] py-[14px]">
              <Link
                href="/shop"
                className="text-[16px] flex items-center gap-[4px] px-[15px] py-[7px] font-medium rounded-full transition-all duration-300 hover:bg-[#BA4B40] hover:text-white"
              >
                Shop
                <FaAngleDown className="text-[12px] mt-[2px]" />
              </Link>

              <div className="absolute left-0 right-0 w-full pt-8 opacity-0 invisible translate-y-5 px-[87px] group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50">
                <div className="rounded-[40px] p-[60px]  shadow-2xl bg-[#f5f5f5]">
                  <div className="grid grid-cols-12 gap-[50px]">
                    <div className="col-span-6">
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

                    <div className="col-span-3">
                      <Image
                        src="https://demo2.pavothemes.com/aunuca/wp-content/uploads/2025/02/baner-mega-1-min.jpg"
                        alt="Banner"
                        width={5000}
                        height={5000}
                        className="rounded-[30px] object-cover h-full w-full"
                      />
                      <p className="text-center mt-4 text-[16px] font-medium text-[#555555]">
                        New Collection
                      </p>
                    </div>
                    <div className="col-span-3 h-full relative">
                      <div className="absolute top-0 left-0">
                        <Image
                          src="https://demo2.pavothemes.com/aunuca/wp-content/uploads/2025/02/baner-mega-2-min.jpg"
                          alt="Banner"
                          width={5000}
                          height={5000}
                          className="rounded-[30px] object-contain h-full w-full"
                        />
                      </div>
                      <div className="absolute bottom-0 left-0 z-10 right-0 p-4">
                        <p className="text-center text-[16px] font-medium text-[#555555]">
                          Best Seller
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li className="px-[7px] py-[14px]">
              <Link
                href="/mega"
                className="flex items-center gap-[4px] text-[16px] px-[15px] py-[7px] transition-all duration-300 font-medium hover:bg-[#BA4B40] hover:text-white rounded-full"
              >
                Mega
                <FaAngleDown className="text-[12px] mt-[2px]" />
              </Link>
            </li>
            <li className="px-[7px] py-[14px]">
              <Link
                href="/blog"
                className="flex items-center gap-[4px] text-[16px] px-[15px] py-[7px] transition-all duration-300 font-medium hover:bg-[#BA4B40] hover:text-white rounded-full"
              >
                Blog
                <FaAngleDown className="text-[12px] mt-[2px]" />
              </Link>
            </li>

            <li className="px-[7px] py-[14px]">
              <Link
                href="/contact"
                className="text-[16px] px-[15px] py-[7px] transition-all duration-300 font-medium hover:bg-[#BA4B40] hover:text-white rounded-full"
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
