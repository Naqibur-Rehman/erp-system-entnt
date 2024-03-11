import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="px-4 py-6 md:px-12 border-t">
      <div className="flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl text-indigo-500 font-serif italic">ERP</span>{" "}
        </Link>

        <p className="text-sm text-gray-700">&copy; ERP 2024 </p>
      </div>
    </footer>
  );
};

export default Footer;
