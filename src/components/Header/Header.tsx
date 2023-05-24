import "./Header.css";

export const Header = () => {
  return (
    <header className="website-header">
      <div className="logo-container">
        <span className="website-logo">Fullio Studio</span>
      </div>
      <nav className="website-nav">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};
