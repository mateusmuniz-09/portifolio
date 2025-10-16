import { Link } from "react-router-dom";

const ScrollToTopLink = ({ to, children, ...props }) => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // rolagem suave
    });
  };

  return (
    <Link to={to} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
};

export default ScrollToTopLink;
