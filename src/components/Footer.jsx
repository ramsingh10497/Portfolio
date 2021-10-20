import React from 'react'
import styled from 'styled-components'
import FooterCol from './FooterCol'
import PText from './Ptext'

const FooterStyles = styled.div`
/* padding-top: 5rem; */
background-color: black;
color: blanchedalmond;

/* overflow: hidden; */
/* width: fit-content; */

.container{
    display: flex;
    gap:  3rem;

}
.footer__col1{
    flex: 2;
}
.footer__col2,
.footer__col3,
.footer__col4{
    /* box-sizing: border-box; */
    /* padding: 15px; */
    flex: 2;
    
}
.footer__col1__title{
    font-size: 3.5rem;
    margin-bottom: 1rem;
}
.copyright{
    /* background-color: darkmagenta; */
    background-color: #f9ab00de;
    text-align: left;
    padding: 0.5rem 0;
    /* margin-top: 5rem; */
    .para {
        margin-left: 0;
    }
}
@media only screen and (max-width: 768px) {
    /* width: fit-content; */
    padding-top: 0;
    .container {
       
        gap: 0rem;
        flex-direction: column !important;
        & > div {
            margin-top: 5rem;
        }
    }
    .footer__col1 .para {
        max-width: 100%;
    }
    .footer__col2{
display: none;
    }
    .copyright{
        .container{
            div {
                margin-top: 0;
            }
        }
    }
}

`

const Footer = () => {
    return (
        <FooterStyles>
            {/* <h1>footer</h1> */}
            {/* <div className="container">
                <div className="footer__col1">
                    <h1 className="footer__col1__title">Gaurav Parmar</h1>
                    <PText>
                    Aspiring full stack developer with Excellent problem-solving skills.Passionate about coding and equipped with a diverse and promising skill-set.
                    </PText>
                    
                </div>
                <div className="footer__col2">
                    <FooterCol 
                        heading="Important Links"
                        links={[
                            {
                            title:'Home',
                            path:'/',
                            type: 'Links',
                        },
                            {
                            title:'About',
                            path:'/about',
                            type: 'Links',
                        },
                            {
                            title:'Projects',
                            path:'/projects',
                            type: 'Links',
                        },
                            {
                            title:'Contact',
                            path:'/contact',
                            type: 'Links',
                        },
                        ]}
                    />
                </div>
                <div className="footer__col3">
                    <FooterCol 

                        heading="Contact Info"
                        links={
                            [
                                {
                                    title: "+9950644911",
                                    path: 'tel:+9950644911'
                                },
                                {
                                    title: "parmargaurav1234@gmail.com",
                                    path: 'tel:+65465'
                                },
                                {
                                    title: "Shivaji Nagar, Dungarpur, Rajasthan, India",
                                    path: 'http://google.com/maps',
                                },

                            ]
                        }
                    />
                </div>
                <div className="footer__col4">
                    <FooterCol 

                        heading="Social Links"
                        links={
                            [
                                {
                                    title: 'Instagram',
                                    path: 'http://instagram.com',
                                },
                                {
                                    title: 'Linkdin',
                                    path: 'http://linkdin.com',
                                },
                                {
                                    title: 'Twitter',
                                    path: 'http://twitter.com',
                                },
                            ]
                        }
                    />
                </div>
            </div>  */}
            <div className="copyright">
                <div className="container">
                    <PText>© 2021 - Ram Singh | All rights reserved</PText>
                </div>
            </div>
        </FooterStyles>
    )
}

export default Footer
