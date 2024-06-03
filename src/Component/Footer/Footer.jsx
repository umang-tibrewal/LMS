
"use client";

import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

 function FooterComponent() {
  return (
    <Footer bgDark>
      <div className="w-full">
        <div  style={{backgroundColor: 'black' }}  className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4 ">
          <div>
            <Footer.Title title="Company"  style={{color: '#3ec508'}} />
            <Footer.LinkGroup col    >
              <Footer.Link href="#"  style={{color: '#ffff'}} >About</Footer.Link>
              <Footer.Link href="#"  style={{color: '#ffff'}}  >Careers</Footer.Link>
              <Footer.Link href="#" style={{color: '#ffff'}}>Brand Center</Footer.Link>
              <Footer.Link href="#"  style={{color: '#ffff'}}  >Blog</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="help center"  style={{color: '#3ec508'}} />
            <Footer.LinkGroup col    >
              <Footer.Link href="#" style={{color: '#ffff'}} >Discord Server</Footer.Link>
              <Footer.Link href="#" style={{color: '#ffff'}} >Twitter</Footer.Link>
              <Footer.Link href="#" style={{color: '#ffff'}} >Facebook</Footer.Link>
              <Footer.Link href="#"  style={{color: '#ffff'}} >Contact Us</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="legal"  style={{color: '#3ec508'}}  />
            <Footer.LinkGroup col>
              <Footer.Link href="#" style={{color: '#ffff'}} >Privacy Policy</Footer.Link>
              <Footer.Link href="#" style={{color: '#ffff'}}>Licensing</Footer.Link>
              <Footer.Link href="#" style={{color: '#ffff'}} >Terms &amp; Conditions</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="download" style={{color: '#3ec508'}}   />
            <Footer.LinkGroup col  >
              <Footer.Link href="#"  style={{color: '#ffff'}} >iOS</Footer.Link>
              <Footer.Link href="#"  style={{color: '#ffff'}}>Android</Footer.Link>
              <Footer.Link href="#"  style={{color: '#ffff'}} >Windows</Footer.Link>
              <Footer.Link href="#"   style={{color: '#ffff'}} >MacOS</Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
        <div  style={{backgroundColor: '#3ec508'}} className="w-full px-4 py-6 sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright  style={{color: 'Black'}}  href="#" by="LearnKnowD" year={2024} />
          <div     className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon  style={{color: 'Black'}}  href="#" icon={BsFacebook} />
            <Footer.Icon style={{color: 'Black'}}   href="#" icon={BsInstagram} />
            <Footer.Icon  style={{color: 'Black'}}  href="#" icon={BsTwitter} />
            <Footer.Icon  style={{color: 'Black'}}  href="#" icon={BsGithub} />
            <Footer.Icon  style={{color: 'Black'}}   href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
}


export default  FooterComponent;