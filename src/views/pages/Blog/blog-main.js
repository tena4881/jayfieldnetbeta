import React, { Fragment, useContext } from "react";
import NoJFC from "../../components/NoJFC";
import {  useTokenBalance } from '@usedapp/core'
import UserContext from '../../components/User/user';
import blog from "./assets/images/blog-filler.jpg";
import blog2 from "./assets/images/blog-filler2.jpg";
import blog3 from "./assets/images/blog-filler3.jpg";
import blog5 from "./assets/images/blog-filler5.jpg";
import blog6 from "./assets/images/blog-filler6.jpg";
import { Container, Row, Col, Card, Media } from "reactstrap";
import './assets/theme/blog2.css';
import Footer from "../../components/Footer/blog-footer";
import AccountHeader from "../../components/AccountHeader";
import { BlogHeader,BlogHeadlineTitles,BlogHeaderTitle, BlogTitles, ExchangeH4, ProfileCard } from "../Profile/Profile";
import Navbar from "../../components/Navbar/NavBar";
const BlogMain = () => {
    const {account} = useContext(UserContext);
    const JFC_ADDRESS = '0xe5d9D8EEB5b225A465523e2065834d9EC0Ed9aB8'
  const jfcBalance = useTokenBalance(JFC_ADDRESS, account)
  
  const jfcBal = parseFloat(jfcBalance)
  return (
    <div>
    {parseFloat(jfcBalance) >= 10000 ? (
          <Fragment>
            <Navbar />
          
          <BlogHeader></BlogHeader>
          <Container fluid={true}>
            <BlogHeaderTitle>Business Brain</BlogHeaderTitle>
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
                      <ul className="blog-social">
                        <li>
                          <i className="icofont icofont-user"></i>Antenhe Tena
                        </li>
                        
                      </ul>
                    </div>
                    
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
                          <ul className="blog-social">
                            <li>by: Admin</li>
                            
                          </ul>
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
                          <ul className="blog-social">
                            <li>by: Admin</li>
                          </ul>
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
                      <ul className="blog-social">
                        <li className="digits">9 April 2019</li>
                        <li className="digits">by: Admin</li>
                       
                      </ul>
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
                      <ul className="blog-social">
                        <li className="digits">9 April 2019</li>
                        <li className="digits">by: Admin</li>
                        
                      </ul>
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
                      <ul className="blog-social">
                        <li className="digits">9 April 2019</li>
                        <li className="digits">by: Admin</li>
                    
                      </ul>
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
                      <ul className="blog-social">
                        <li className="digits">9 April 2019</li>
                        <li className="digits">by: Admin</li>
                     
                      </ul>
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
          <Footer/>
        </Fragment>
      ) : (
          <>
          <Navbar />
          <NoJFC/>
          
        </>
      )}
      
      </div>
  );
};

export default BlogMain;


