import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='bgdark'>
      <Container className='bgchange'>
        <div className='mainfooter'>
          <div className='myfooter'>
            <div>
              <Image
                src='/Images/Group 5981@2x.png'
                alt='Your Logo'
                width={182}
                height={40} />
              <label>
              At Myclickerr, we understand the importance of photography in preserving memories that last a lifetime. Whether it's a wedding, a family portrait, a corporate event, or a special occasion, we believe that every moment deserves to be cherished and captured in its true essence.
              </label>
            </div>
            <div className='footersocial'>
              <div>
                <a href='https://www.instagram.com/'>
                  {" "}
                  <Image
                    src='/Images/Group 5979@2x.png'
                    alt='Image 1'
                    style={{ width: '' }}
                    width={30}
                    height={30} />
                </a>
                <a href='https://www.linkedin.com/'>
                  {" "}
                  <Image
                    src='/Images/Group 5978@2x.png'
                    alt='Image 1'
                    style={{ width: '' }}
                    width={30}
                    height={30} />
                </a>
                <a href='https://www.facebook.com/'>
                  {" "}
                  <Image
                    src='/Images/Group 5980@2x.png'
                    alt='Image 1'
                    style={{ width: '' }}
                    width={30}
                    height={30} />
                </a>
              </div>
            </div>
          </div>
          <div xs={12} md={3} className='footerside'>
            <div>
              <Image
                src='/Images/XMLID_146_@2x.png'
                alt='Your Logo'
                width={16}
                height={14} />
              <label>
                support@myclicker.in
              </label>
            </div>
            <div>
              <Image
                src='/Images/bee4d62d12dd008a6ab2be9c9ad4c247@2x.png'
                alt='Your Logo'
                width={16}
                height={14} />
              <label>
                +91 94853 94853
              </label>
            </div>
            <div>
              <Image
                src='/Images/ae85f5aeeb9ad1d3df18962e747bd309@2x.png'
                alt='Your Logo'
                width={16}
                height={14} />
              <label>
              DLF CYBER CITY, 1st Floor, Vasista Bhavan, Opp lane to, APHB Colony, Indira Nagar, Gachibowli, Hyderabad, Telangana 500032
              </label>
            </div>
          </div>
          <div className='footer_policy'>
            <ul>
              <Link href='TermsandConditions'>
              <li>
                Terms and Conditions
              </li>
              </Link>
              <Link href='privacyPolicy'>
              <li>
                Privacy Policy
              </li>
              </Link>
              <Link href='refund'>
              <li>
                Refund Policy
              </li>
              </Link>
            </ul>
          </div>
        </div>
        <div className='footerlast'>
          <p>
            @ 2023 Myclickerr , All rights reserved
          </p>
        </div>
      </Container>
    </footer>
  )
}
export default Footer
