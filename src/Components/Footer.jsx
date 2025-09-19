import blackLogo from "../assets/logo_black.jpeg";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-5 md:py-15 md:px-20 text-sm">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        {/* Resources Section */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Resources</h3>
          <ul className="space-y-2 text-[#737373]">
            {[
              "Learn Center",
              "Support",
              "Slack Community",
              "Events",
              "Cookies",
              "Terms of Service",
              "Privacy Policy",
            ].map((item, index) => (
              <li
                key={index}
                className="hover:text-[#cfcece] transition-all duration-300 cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Products Section */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Products</h3>
          <ul className="space-y-2 text-[#737373]">
            {[
              "How it works",
              "Features",
              "Pricing",
              "Tools & Integration",
              "Start for Free",
              "Sign In",
            ].map((item, index) => (
              <li
                key={index}
                className="hover:text-[#cfcece] transition-all duration-300 cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* About Section */}
        <div>
          <h3 className="font-semibold text-lg mb-3">About</h3>
          <ul className="space-y-2 text-[#737373]">
            {["Our Story", "Media Kit", "Blog", "Email Us"].map(
              (item, index) => (
                <li
                  key={index}
                  className="hover:text-[#cfcece] transition-all duration-300 cursor-pointer"
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="w-full md:w-[30%]">
          <img
            src={blackLogo}
            alt="Designership Logo"
            className="w-[100px] mb-4"
          />
          <p className="text-[#949494] mb-4">
            Get the latest updates about Genomac Holdings new features and product
            updates.
          </p>
          <div className="flex items-center gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 p-2 rounded-md text-black bg-white placeholder:text-sm focus:outline-none"
            />
            <button className="bg-[#9D3CA7] text-white px-4 py-2 rounded-md hover:bg-[#7b2b8a] hover:scale-105 transition-all duration-300">
              Submit
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 border-t border-[#E5E5E5] pt-5 flex flex-col md:flex-row justify-between items-center text-[#737373]">
        <ul className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-8 mb-4 md:mb-0">
          {["Terms of Service", "Privacy Policy", "Security", "Sitemap"].map(
            (item, index) => (
              <li
                key={index}
                className="hover:text-[#cfcece] transition-all duration-300 cursor-pointer"
              >
                {item}
              </li>
            )
          )}
        </ul>
        <p>© 2025 Genomac Holdings. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
