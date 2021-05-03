import React, { Fragment, useContext } from "react";
import blogSingle from "./assets/images/blog-single.jpg";
import comment from "./assets/images/comment.jpg";
import nine from "./assets/images/9.jpg";
import four from "./assets/images/4.jpg";
import twelve from "./assets/images/12.png";
import NoJFC from "../../components/NoJFC";
import {  useTokenBalance } from '@usedapp/core'
import fourteen from "./assets/images/14.png";
import { Container, Row, Col, Media } from "reactstrap";
import UserContext from '../../components/User/user';
import AccountHeader from "../../components/AccountHeader";

import Footer from "../../components/Footer/blog-footer";
const BlogSingle = () => {
  require( './assets/theme/blog.css')
    const {account} = useContext(UserContext);
    const JFC_ADDRESS = '0xe5d9D8EEB5b225A465523e2065834d9EC0Ed9aB8'
  const jfcBalance = useTokenBalance(JFC_ADDRESS, account)
  
  const jfcBal = parseFloat(jfcBalance)
  return (
    
    <div>
    {parseFloat(jfcBalance) >= 100 ? (
         <Fragment>
         <AccountHeader/>
       <Container fluid={true}>
         <Row>
           <Col sm="12">
             <div className="blog-single">
               <div className="blog-box blog-details">
                 <Media
                   className="img-fluid w-100"
                   src={blogSingle}
                   alt="blog-main"
                 />
                 <div className="blog-details">
                   <ul className="blog-social">
                     <li className="digits">03 May 2021</li>
                     <li>
                       <i className="icofont icofont-user"></i>Author{" "}
                       <span>Name </span>
                     </li>
                     
                     
                   </ul>
                   <h3 className="align-items-center">
                     Why JayFieldNet is the GOAT
                   </h3>
                   <div className="single-blog-content-top">
                     <p>
                       Lorem Ipsum is simply dummy text of the printing and
                       typesetting industry. Lorem Ipsum has been the industry's
                       standard dummy text ever since the 1500s, when an unknown
                       printer took a galley of type and scrambled it to make a
                       type specimen book. It has survived not only five
                       centuries, but also the leap into electronic typesetting,
                       remaining essentially unchanged. It was popularised in the
                       1960s with the release of Letraset sheets containing Lorem
                       Ipsum passages, and more recently with desktop publishing
                       software like Aldus PageMaker including versions of Lorem
                       Ipsum.
                     </p>
                     <p>
                       It is a long established fact that a reader will be
                       distracted by the readable content of a page when looking
                       at its layout. The point of using Lorem Ipsum is that it
                       has a more-or-less normal distribution of letters, as
                       opposed to using 'Content here, content here', making it
                       look like readable English. Many desktop publishing
                       packages and web page editors now use Lorem Ipsum as their
                       default model text, and a search for 'lorem ipsum' will
                       uncover many web sites still in their infancy. Various
                       versions have evolved over the years, sometimes by
                       accident, sometimes on purpose (injected humour and the
                       like
                     </p>
                   </div>
                 </div>
               </div>
               <Footer/>
             </div>
           </Col>
         </Row>
       </Container>
     </Fragment>
      ) : (
          <>
          <AccountHeader account={account}/>
          <NoJFC/>
          
        </>
      )}
      
      </div>
   
  );
};

export default BlogSingle;
