import React, { Fragment,lazy, useContext } from 'react'
import NoJFC from 'src/components/NoJFC'
import WalletContext from '../../wallet'
import blogSingle from "../widgets/assets/images/blog-single-copy.jpg"
import { BlogHeadlineTitles } from '../widgets/assets/theme/blogstyles'
import Blog from '../widgets/Blog'
import { Container, Row, Col, Media } from "reactstrap";
const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))

const Post1 = () => {
  const {account, jfcBalance} = useContext(WalletContext);
  

const jfcBal = parseFloat(jfcBalance)
console.log(parseFloat(jfcBalance))
  return (
<div>
    {parseFloat(jfcBal) >= 10000 ? (
         <Fragment>
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
                   
                   <h3 className="align-items-center">
                     Why JayFieldNet is the GOAT
                   </h3>
                   <ul className="blog-social">
                     <li className="digits">03 May 2021</li>
                     <li>
                       <i className="icofont icofont-user"></i>Author{" "}
                       <span>Name </span>
                     </li>
                     
                     
                   </ul>
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
             </div>
           </Col>
         </Row>
       </Container>
     </Fragment>
      ) : (
          <>
          <NoJFC/>
          
        </>
      )}
      
      </div>
  )
}

export default Post1
