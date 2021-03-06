import React from "react";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="https://urkelx.github.io/employee-directory/">
        Employee Directory
      </a>
    </nav>
  );
}

export default Navbar;
