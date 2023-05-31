import React from 'react';

import './Navbar.css'; 
 


const Navbarr=()=>{

return(
        <>
        <div className='aaaa'> 
        <div className="" style={{backgroundColor:'white',width:"100%"}}>
  <nav className="navbar navbar-expand-lg ">
    <img src='latestlogo.png' alt='' style={{height:"100px",width:"300px",borderRadius:"20px"}}/>
    <div class="nav-container">
  <ul className="nav-list">
    <li className="nav-item active">
      <a className="nav-link" href="/">HOME</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/">HANDICRAFTS</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/">JEWELS</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/">ABOUT US</a>
    </li>
  </ul>
</div>
<div className='nav-item gap-4 d-flex float-end ml-3'>
<img className='image' src='Vector.png' alt='' />
<img className='image' src='Vector1.png' alt='' />
<img className='image' src='Vector (2).png' alt=''/>
</div>

  </nav>
</div>

<div className="row height d-flex justify-content-center  align-items-center bg-white" >
            <div className="col-md-6" >
                <div className="form">
                  <i className="fa fa-search"></i>
                  <input type="text" class="form-control form-input" placeholder="Search anything..."/>
                  <span className=""><img className='aa' src='Search.png' alt=''/></span>
                </div>             
            </div>           
</div>
</div>

<Navbarr/>

        </>
    )
}

export default Navbarr;


// const Navbarr = () => {

//     const [showModal, setShowModal] = useState(false);

//     const handleLoginClick = () => {
//         setShowModal(true);
//     };

//     const handleCloseModal = () => {
//         setShowModal(false);
//     };
//     return (
//         <>
//             {/* expand="md sm lg" */}
//             <Navbar className='' collapseOnSelect expand="md sm lg" bg="white" variant="dark" >
//                 <Container>
//                     <Navbar.Brand href="/"><h1 className='logo'>HIYAKART</h1></Navbar.Brand>
//                     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//                     <Navbar.Collapse id="responsive-navbar-nav">
//                         <Nav className="me-auto">
//                             <Nav.Link href="#features">Features</Nav.Link>
//                             {/* <Nav.Link href="#pricing">Discount</Nav.Link> */}
//                             <NavDropdown title="More" id="collasible-nav-dropdown mr-2">
//                                 <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//                                 <NavDropdown.Item href="#action/3.2">
//                                     Another action
//                                 </NavDropdown.Item>
//                                 <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//                                 <NavDropdown.Divider />
//                                 <NavDropdown.Item href="#action/3.4">
//                                     Separated link
//                                 </NavDropdown.Item>
//                             </NavDropdown>
//                             {/* <Form className="d-flex gap-2">
//                   <Form.Control
//                     type="search"

//                     placeholder="Search"
//                     className=" p-1"
//                     // style={{width:"380px"}}
//                     aria-label="Search"
//                   />
                  


//                 </Form> */}
//                             <div class="form-group has-search">
//                                 <span class="fa fa-search form-control-feedback" ><FaSearch color='#aaa;' />
//                                 </span>
//                                 <input type="text" class="form-control " placeholder="Search" />
//                             </div>
//                         </Nav>
//                         <Nav className='gap-2'>
//                             <Nav.Link href="#deets" className=''><FaShoppingCart color='white' className='fs-5' /> &nbsp; Cart</Nav.Link>
//                         </Nav>
//                         <Nav>
//                             <Nav.Link eventKey={2} href="#sign">
//       <Button onClick={handleLoginClick}>Login</Button>

//                                 <Modal show={showModal} onHide={handleCloseModal}>
//                                     <Modal.Header closeButton>
//                                         <Modal.Title>Login</Modal.Title>
//                                     </Modal.Header>
//                                     <Modal.Body>
//                                         Add your login form here ddf
//                                     </Modal.Body>
//                                     <Modal.Footer>
//                                         <Button variant="secondary" onClick={handleCloseModal}>
//                                             Close
//                                         </Button>
//                                         <Button variant="primary">
//                                             Login
//                                         </Button>
//                                     </Modal.Footer>
//                                 </Modal>

//                             </Nav.Link>

//                         </Nav>
//                     </Navbar.Collapse>
//                 </Container>
//             </Navbar>

//         </>
//     )
// }

// export default Navbarr;
