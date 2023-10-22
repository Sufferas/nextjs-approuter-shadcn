
import Image from 'next/image';
import '../css/style1.css'
import '../css/style2.css'
import '../css/style3.css'
import '../css/style4.css'
import React from 'react';


const Page: React.FC = () => {
  // @ts-ignore
    return (

      <main className="chakra-ui-dark">
          <div className="css-ohwg9z">
              <div className="chakra-container css-188j5z7">
                  <div className="chakra-stack css-lt20f">
                      <div id="home" className="css-1ktc0u0">
                          <div className="chakra-container css-vhc7ah">
                              <div className="chakra-stack css-1bqfdcd">
                                  <h1 className="chakra-text css-1gmj64d">
                                      <div style={{
                                          opacity: 1,
                                          transform: 'translateY(0px) scale(1) translateZ(0px)'
                                      }} className="css-0">
                                          Scale and Change
                                          <span className="css-0"><br/></span> your Image</div>
                                  </h1>
                                  <div className="chakra-text css-rl4bcm">

                                      <div style={{
                                          opacity: 1,
                                          transform: 'translateY(0px) scale(1) translateZ(0px)'
                                      }} className="css-1bsgmhw"></div>

                                      On this page, you can scale images, change formats, and place logos within your pictures.
                                      </div>
                                  </div>
                              </div>
                          </div>
                      <div className="css-ziep4m">
                          <div
                              style={{
                                  opacity: 1,
                                  transform: 'translateY(0px) scale(1) translateZ(0px)'
                              }}
                              className="css-0"
                          >

                              <div className="css-v89234">
                                  <Image
                                      alt="AI. do you now how"
                                      src="/home_image.jfif"
                                      width={1200}
                                      height={762}
                                      decoding="async"
                                      style={{ color: "transparent" }}
                                  />

                              </div>
                          </div>
                      </div>

                      </div>


                  </div>
              </div>

          <div id="benefits" className="css-zzf9h2">
              <div className="chakra-container css-1pyds5b">
                  <div className="chakra-stack css-i1iwfd">
                      <div className="chakra-stack css-u2tusj">
                          <div className="css-1xk03wa">
                              <div className="css-0" style={{ opacity: 1, transform: 'translateY(0px) scale(1) translateZ(0px)' }}>
                                  <div className="chakra-stack css-27fr1v">
                                      <div className="css-10rjqys">
                                          <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" focusable="false" className="chakra-icon css-s48i3l" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                              <circle cx="12" cy="12" r="10"></circle>
                                              <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                                              <line x1="9" y1="9" x2="9.01" y2="9"></line>
                                              <line x1="15" y1="9" x2="15.01" y2="9"></line>
                                          </svg>
                                      </div>
                                      <div className="css-0">
                                          <h2 className="chakra-heading css-awqvv2">Scale</h2>
                                          <p className="chakra-text css-rtpycv">You can view the size of the image in real-time, as well as zoom in and out. Additionally, you can read the width and height values of the image.</p>
                                      </div>
                                  </div>
                              </div>
                              <div className="css-0" style={{ opacity: 1, transform: 'translateY(0px) scale(1) translateZ(0px)' }}>
                                  <div className="chakra-stack css-27fr1v">
                                      <div className="css-10rjqys">
                                          <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round"  focusable="false" className="chakra-icon css-s48i3l" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                              <line x1="4" y1="21" x2="4" y2="14"></line>
                                              <line x1="4" y1="10" x2="4" y2="3"></line>
                                              <line x1="12" y1="21" x2="12" y2="12"></line>
                                              <line x1="12" y1="8" x2="12" y2="3"></line>
                                              <line x1="20" y1="21" x2="20" y2="16"></line>
                                              <line x1="20" y1="12" x2="20" y2="3"></line>
                                              <line x1="1" y1="14" x2="7" y2="14"></line>
                                              <line x1="9" y1="8" x2="15" y2="8"></line>
                                              <line x1="17" y1="16" x2="23" y2="16"></line>
                                          </svg>
                                      </div>
                                      <div className="css-0">
                                          <h2 className="chakra-heading css-awqvv2">Format</h2>
                                          <p className="chakra-text css-rtpycv">You can compress the images or specify the maximum size allowed for the images. Additionally, you can choose a format that you prefer for the images.</p>
                                      </div>
                                  </div>
                              </div>
                              <div className="css-0" style={{ opacity: 1, transform: 'translateY(0px) scale(1) translateZ(0px)' }}>
                                  <div className="chakra-stack css-27fr1v">
                                      <div className="css-10rjqys">
                                          <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" focusable="false" className="chakra-icon css-s48i3l" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                              <rect x="3" y="3" width="7" height="7"></rect>
                                              <rect x="14" y="3" width="7" height="7"></rect>
                                              <rect x="14" y="14" width="7" height="7"></rect>
                                              <rect x="3" y="14" width="7" height="7"></rect>
                                          </svg>
                                      </div>
                                      <div className="css-0">
                                          <h2 className="chakra-heading css-awqvv2">Watermark</h2>
                                          <p className="chakra-text css-rtpycv">Place a watermark over your images, so everyone knows that they belong to you.</p>
                                      </div>
                                  </div>
                              </div>

                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </main>



  );
};

export default Page;
