import React from 'react';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navbarList}>
        <li style={styles.navbarItem}>
          <a href="/" style={styles.navbarLink}>Home</a>
        </li>
        <li style={styles.navbarItem}>
          <a href="/analytics" style={styles.navbarLink}>Analytics</a>
        </li>
        <li style={styles.navbarItem}>
          <a href="/analytics-liveboard" style={styles.navbarLink}>Account Stats</a>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    background: '#007bff',
    height: '60px',
    display: 'flex',
    justifyContent: 'center',
  },
  navbarList: {
    display: 'flex',
    listStyleType: 'none',
    padding: '0',
    margin: '0',
    alignItems: 'center',
  },
  navbarItem: {
    margin: '0 10px',
  },
  navbarLink: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '18px',
  },
};

export default Navbar;
