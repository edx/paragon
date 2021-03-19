import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Menu from "./Menu"
import { Icon, useToggle, Nav, Row, Col, Container, Button } from '~paragon-react';
import { Menu as MenuIcon, Close } from '~paragon-icons';

const Navbar = ({ siteTitle, onMenuClick, menuIsOpen, showMinimizedTitle }) => (
  <Container as="header" className="py-3 bg-dark text-white sticky-top">
    <Row className="align-items-center">
      <Col sm={4}>
        <Button
          className="d-inline-flex align-items-center"
          variant="inverse-tertiary"
          onClick={onMenuClick}
        >
          {menuIsOpen ? (
            <>
            <Icon className="mr-2" src={Close} />
            Menu
            </>
          ) : (
            <>
              <Icon className="mr-2" src={MenuIcon} />
              Menu
            </>
          )}
        </Button>
      </Col>
      <Col sm={4}>
          <Link
            to="/"
            style={{ textDecoration: `none` }}
            className="d-block text-center"
          >
            {showMinimizedTitle ? (
              <span
                style={{ fontSize: '36px', lineHeight: 1 }}
                role="img"
                aria-label="Paragon"
              >
                💎
              </span>
            ) : (
              <>
                <h1 className="h4 m-0 text-white">
                    {siteTitle}
                </h1>
                <p className="text-uppercase text-white m-0 x-small" style={{ opacity: 0.6 }}>
                  Technical Documentation
                </p>
              </>
            )}
          </Link>
      </Col>
      <Col className="small" sm={4}>
        <Nav className="justify-content-end align-items-center">
          <img className="d-inline-block" src="https://img.shields.io/npm/v/@edx/paragon.svg" alt="npm_version" />
          <Nav.Item>
            <Nav.Link className="text-white" href="https://github.com/edx/paragon/releases">Changelog</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="text-white" href="https://github.com/edx/paragon">Contribute on GitHub</Nav.Link>
          </Nav.Item>
        </Nav>
      </Col>
    </Row>
  </Container>
);
const Header = ({ siteTitle, showMinimizedTitle }) => {
  // eslint-disable-next-line no-unused-vars
  const [isOpen, open, close, toggle, ] = useToggle(false, {
    handleToggleOn: () => {
      document.body.style.overflow = 'hidden';
    },
    handleToggleOff: () => {
      document.body.style.overflow = 'initial';
    }
  });
  useEffect(() => {
    // returned function will be called on component unmount
    return () => {
      document.body.style.overflow = 'initial';
    }
  }, [])

  return (
    <div className="bg-white sticky-top" style={{ maxHeight: '100vh', overflow: 'scroll' }}>
      <Navbar
        siteTitle={siteTitle}
        onMenuClick={toggle}
        menuIsOpen={isOpen}
        showMinimizedTitle={showMinimizedTitle}
      />
      {isOpen && <Menu />}
    </div>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
  showMinimizedTitle: PropTypes.bool,
}

Header.defaultProps = {
  siteTitle: ``,
  showMinimizedTitle: false,
}

export default Header
