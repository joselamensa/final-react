import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin, BsTwitch, BsTwitter } from "react-icons/bs";


export default function Footer() {
  return (
    
    <MDBFooter className='bg-dark text-center text-white foot'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='https://www.facebook.com/joselamensa12/' target='_blank' role='button'>
          <MDBIcon> <BsFacebook /> </MDBIcon>
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://twitter.com/Joselamensa1' target='_blank' role='button'>
          <MDBIcon> <BsTwitter/> </MDBIcon>
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://www.twitch.tv/joselamensaa' target='_blank' role='button'>
          <MDBIcon> <BsTwitch /> </MDBIcon>
          </MDBBtn>
          <MDBBtn outline color="light" floating className='m-1' href='https://www.instagram.com/joselamensa/?hl=es-la' target='_blank' role='button'>
            <MDBIcon> <BsInstagram /> </MDBIcon>
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://www.linkedin.com/in/jose-lamensa-6a29b8236/' target='_blank' role='button'>
            <MDBIcon> <BsLinkedin className='icon'/> </MDBIcon>
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://github.com/joselamensa'  target='_blank' role='button'>
          <MDBIcon> <BsGithub /> </MDBIcon>
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2022 Jose Lamensa
      </div>
    </MDBFooter>
  );
}

