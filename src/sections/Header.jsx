import Logo from "../assets/Logo.png";

const Header = () => {
  return (
    <div className="Header">
      <div className="left">
        <img src={Logo} alt="logo" />
        <a href="#Header">Home</a>
        <a href="#Page">Page</a>
        <a href="#ServicesExpanded">Services</a>
        <a href="#Portfolio">Portfolio</a>
        <a href="#Blog">Blog</a>
        <a href="#Contact">Contact </a>
      </div>
      <div className="right">
        <button>Create account</button>
        <span>or</span>
        <button>Login</button>
      </div>
    </div>
  );
};

export default Header;
