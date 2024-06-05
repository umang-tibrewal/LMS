import { Navbar } from "flowbite-react";
import { Button } from "flowbite-react";
import{Link}  from "react-router-dom";

function Front() {
  return (
    <div className="absolute top-0 left-0 w-full">
      <Navbar  fluid rounded className="mt-0  w-full"   >
        <Navbar.Brand href="https://flowbite-react.com " className="mr-4">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRePd2oS6K-dvuC_PT1rkBNgvTsdvLQd3ZbyQ&s" className="mr-5  ml-16 h-6 sm:h-9 " alt="LMS LOGO" />
         
        </Navbar.Brand>
        <div className="flex md:order-1  ml-10 ">
         
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse  className="ml-64"  >
        <style jsx>{`
      
    
            .navbar-link {
              margin-left: 50px;
              color: Black;
            }
            .navbar-link:hover {
              color: #3ec508;
            }
          `}</style>
          <Navbar.Link href="#" active className="navbar-link  mt-2   " >  Home</Navbar.Link>
          <Navbar.Link href="#" className="navbar-link mt-2 " >About</Navbar.Link>
          <Navbar.Link href="#"  className="navbar-link  mt-2 " >Services</Navbar.Link>
          <Navbar.Link href="#"  className="navbar-link mt-2 " >Pricing</Navbar.Link>
          <Navbar.Link href="#" className="navbar-link mt-2 " >Contact</Navbar.Link>
         <Link to="/login"> <Button style={{backgroundColor: '#3ec508'}} color="success" className="w-25 ml-2  ">Login</Button></Link>
        <Link to="/signup"> <Button style={{backgroundColor: '#3ec508'}} color="success" className="w-25 ml-2  ">Sign Up</Button></Link>
        </Navbar.Collapse>
      </Navbar>
      </div>
 
  );
}

export default Front;
