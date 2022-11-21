import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
            {/* <a href="https://www.fontspace.com/category/epic"><img src="https://see.fontimg.com/api/renderfont4/lOJy/eyJyIjoiZnMiLCJoIjo5OCwidyI6MTUwMCwiZnMiOjY1LCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/ZXBpYyBudXRyaXRpb24/isiniscript.png" alt="Epic fonts"/></a> */}
            <strong>𝕖𝕡𝕚𝕔 𝕟𝕦𝕥𝕣𝕚𝕥𝕚𝕠𝕟</strong>
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/"><b>Home</b></Nav.Link>
            <Nav.Link href="/age"><b>Age</b></Nav.Link>
            <Nav.Link href="/requirednutrientschart"><b>Required Nutrients</b></Nav.Link>
            <Nav.Link href="/bmi"><b>Bmi Calculator</b></Nav.Link>
            
          
            <NavDropdown title="Link" id="basic-nav-dropdown">
              <NavDropdown.Item href="#video"><a href="https://youtu.be/Gmh_xMMJ2Pw">Video</a></NavDropdown.Item>
              <NavDropdown.Item href="#reference">Reference</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Navbar.Text>
          <NavDropdown.Item href="/aboutus"> <b>About Us</b></NavDropdown.Item>
          
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;