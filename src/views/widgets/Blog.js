import React, {Fragment,useContext} from 'react'
import { Container, Row, Col, Card, Media } from "reactstrap";
import blog from "./assets/images/blog-filler.jpg";
import blog2 from "./assets/images/blog-filler2.jpg";
import blog3 from "./assets/images/blog-filler3.jpg";
import blog5 from "./assets/images/blog-filler5.jpg";
import blog6 from "./assets/images/blog-filler6.jpg";
import {BlogTitles, BlogHeadlineTitles} from "./assets/theme/blogstyles";

import WalletContext from '../../wallet'
import { formatUnits , formatEther} from '@ethersproject/units'
import NoJFC from 'src/components/NoJFC';
const Blog = () => {
  const {etherBalance, jfcBalance} =  useContext(WalletContext)
  
  console.log(parseFloat(jfcBalance));
  // render
  return (
    <>
    {jfcBalance >= 10000 ? (
      <Fragment>
        
        <h1></h1>
        <Container fluid={true}>
          <h2>Business Brain</h2>

          <Row>
            <Col xl="6 box-col-12">
              <Card>
                <div to='/blog-test' className="blog-box blog-shadow">
                
                  <Media  className="img-fluid" src={blog} alt="" />
                  
                  <div className="blog-details">
                    <p className="digits">25 July 2019</p>
                    <h4>
                      <BlogHeadlineTitles to="/blog-test">
                      How COIVD Shaped the Digital Frontier 
                      </BlogHeadlineTitles>
                    </h4>
                   
                  </div>
                  <p className="mt-2">
                          inventore veritatis et quasi architecto beatae vitae
                          dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                          voluptas sit.
                    </p>
                </div>
              </Card>
            </Col>
            <Col xl="6 box-col-12">
              <Card>
                <div className="blog-box blog-list row">
                  <Col sm="5">
                    <Media className="img-fluid sm-100-w" src={blog2} alt="" />
                  </Col>
                  <Col sm="7">
                    <div className="blog-details">
                      <div className="blog-date digits">
                        January 02  2019
                      </div>
                      
                        
                      
                      <BlogTitles to="/blog-test">Why JayFieldNet is the GOAT</BlogTitles>
                    
                      
                      <div className="blog-bottom-content">
                        
                        <hr />
                        <p className="mt-2">
                          inventore veritatis et quasi architecto beatae vitae
                          dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                          voluptas sit.
                        </p>
                      </div>
                    </div>
                  </Col>
                </div>
              </Card>
              <Card>
                <div className="blog-box blog-list row">
                  <Col sm="5">
                    <Media className="img-fluid sm-100-w" src={blog3} alt="" />
                  </Col>
                  <Col sm="7">
                    <div className="blog-details">
                      <div className="blog-date digits">
                        January 02  2019
                      </div>
                      <BlogTitles to="/blog-test">All About Web3</BlogTitles>
                      <div className="blog-bottom-content">
                        
                        <hr />
                        <p className="mt-0">
                          inventore veritatis et quasi architecto beatae vitae
                          dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                          voluptas sit.
                        </p>
                      </div>
                    </div>
                  </Col>
                </div>
              </Card>
            </Col>
            <Col md="6" xl="3 set-col-6">
              <Card>
                <div className="blog-box blog-grid text-center">
                  <Media
                    className="img-fluid top-radius-blog"
                    src={blog5}
                    alt=""
                  />
                  <div className="blog-details-main">
                    
                    <hr />
                    
                    <BlogTitles to="/blog-test">How Decentralized Apps Are Changing the Game</BlogTitles>
                    <p className="mt-0">
                          inventore veritatis et quasi architecto beatae vitae
                          dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                          voluptas sit.
                        </p>
                  </div>
                </div>
              </Card>
            </Col>
            <Col md="6" xl="3 set-col-6">
              <Card>
                <div className="blog-box blog-grid text-center">
                  <Media
                    className="img-fluid top-radius-blog"
                    src={blog6}
                    alt=""
                  />
                  <div className="blog-details-main">
                    
                    <hr />
                    <BlogTitles to="/blog-test">Why DiFi is Here to Stay</BlogTitles>
                    <p className="mt-0">
                          inventore veritatis et quasi architecto beatae vitae
                          dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                          voluptas sit.
                        </p>
                  </div>
                </div>
              </Card>
            </Col>
            <Col md="6" xl="3 set-col-6">
              <Card>
                <div className="blog-box blog-grid text-center">
                  <Media
                    className="img-fluid top-radius-blog"
                    src={blog5}
                    alt=""
                  />
                  <div className="blog-details-main">
                    
                    <hr />
                    <BlogTitles to="/blog-test">Will the value of Bitcoin crash?</BlogTitles>
                    
                    <p className="mt-0">
                          inventore veritatis et quasi architecto beatae vitae
                          dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                          voluptas sit.
                        </p>
                  </div>
                </div>
              </Card>
            </Col>
            <Col md="6" xl="3 set-col-6">
              <Card>
                <div className="blog-box blog-grid text-center">
                  <Media
                    className="img-fluid top-radius-blog"
                    src={blog6}
                    alt=""
                  />
                  <div className="blog-details-main">
                    
                    <hr />
                    <BlogTitles to="/blog-test">11 Coins Better than Bitcoin</BlogTitles>
                    
                    <p className="mt-0">
                          inventore veritatis et quasi architecto beatae vitae
                          dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                          voluptas sit.
                        </p>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </Fragment>
    ): (
      <>
      <NoJFC/>
      </>
    )
  }
  </>
    
  )
}

export default Blog
