import Socials from "./Socials";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <div className="text-center text-xs md:text-base">
        <p>
          2023 © Hazel Miller Entertainment LLC | Website Design by
          <Link
            className="hover:text-secondary"
            href={"www.lee-young-portfolio.com"}
          >
            {" "}
            Joven Designs
          </Link>
        </p>
      </div>
      <Socials />
    </div>
  );
};

export default Footer;
