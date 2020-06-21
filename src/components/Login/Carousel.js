import React, {Component} from 'react';
import makeCarousel from 'react-reveal/makeCarousel';
import Slide from 'react-reveal/Slide';
import styled, { css } from 'styled-components';

const width = '700px', height='120px';
const Container = styled.div`
    margin:auto;
    position: relative;
    overflow: hidden;
    width: ${width};
`;
const Children  = styled.div`
    width: ${width};
    position: relative;
    height: ${height};
    color: gray;
    font-size:13px;
`;

const CarouselUI = ({ position, total, handleClick, children }) => (
    <Container>
      <Children>
        {children}
      </Children>
    </Container>
  );
  const Carousel = makeCarousel(CarouselUI);
  
  class CarouselApp extends Component{
     render (){
         return(
                <Carousel>
                    <Slide right>
                        <div>
                            <p>
                                <span style={{fontSize:'20px'}}>&#10077;</span> It's not that I'm so smart, 
                                it's just that I stay with problems longer <span style={{fontSize:'20px'}}>&#10078;</span>
                                <br></br>&#9998; Albert Einstein</p>
                        </div>
                    </Slide>
                    <Slide right>
                        <div>
                            <p>
                                <span style={{fontSize:'20px'}}>&#10077;</span> Learn from the mistakes of others.
                                 You can't live long enough to make them all yourself <span style={{fontSize:'20px'}}>&#10078;</span>
                                <br></br>&#9998; Eleanor Roosevelt</p>
                        </div>
                    </Slide>
                    <Slide right>
                        <div>
                            <p>
                                <span style={{fontSize:'20px'}}>&#10077;</span> It takes a wise man to learn from mistakes, but an even wiser man 
                                to learn from others <span style={{fontSize:'20px'}}>&#10078;</span>
                                <br></br>&#9998; Anonymous</p>
                        </div>
                    </Slide>
                </Carousel>
         );
     } 
  }
  export default CarouselApp;