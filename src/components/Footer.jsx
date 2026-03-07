import Logo from "../assets/globalLogo.png";
import { Link } from "react-router-dom";
const Footer = () => {
  const sections = [
    {
      title: "Products",
      links: [
        { label: "Overview", href: "/products" },
        { label: "Features", href: "/features" },
        { label: "Pricing", href: "/pricing" },
        { label: "Releases", href: "/releases" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Careers", href: "/careers" },
        { label: "Press", href: "/press" },
        { label: "News", href: "/news" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Blog", href: "/blog" },
        { label: "Documentation", href: "/docs" },
        { label: "Community", href: "/community" },
        { label: "Support", href: "/support" },
      ],
    },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://facebook.com/Globalelectricpowerdevtcorp",
      icon: (
        <svg
          fill="currentColor"
          className="h-5 w-5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-yellow-200 border-t border-gray-200 cursor-default">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        {/* Logo + Description */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex flex-col items-center md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-2 mb-6">
            <img className="h-14 w-auto" src={Logo} alt="Logo" />
            <span className="text-lg font-semibold text-gray-800">
              Global Electric Power Development Corporation
            </span>
          </div>
          <p className="text-gray-700 text-sm font-semibold">
            Empowering you with sustainable Energy Solutions.
          </p>
        </div>

        {/* Link Sections */}
        {sections.map((section) => (
          <div
            key={section.title}
            className="flex flex-col items-center md:items-start"
          >
            <h3 className="text-gray-900 font-bold mb-4">{section.title}</h3>

            <ul className="space-y-2 text-black text-sm">
              {section.links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="hover:text-white transition font-semibold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="bg-yellow-500 border-t border-gray-200 mt-8">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col items-center md:flex-row md:justify-between text-sm text-black font-medium space-y-3 md:space-y-0">
          <p className="text-center">
            © 2025 Global Electric Power Development Corporation. All rights
            reserved.
          </p>
          <div className="flex space-x-5">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                aria-label={social.name}
                className="hover:text-white transition"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
