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
                <Carousel defaultWait={7000}>
                    <Slide right>
                        <div>
                            <p>
                                <span style={{fontSize:'20px'}}>&#10077;</span><span style={{fontSize:'15px'}}> It's not that I'm so smart, 
                                it's just that I stay with problems longer </span> <span style={{fontSize:'20px'}}>&#10078;</span>
                                <br></br><span style={{fontSize:'15px'}}>&#64; Albert Einstein </span></p>
                        </div>
                    </Slide>
                    <Slide right>
                        <div>
                            <p>
                                <span style={{fontSize:'20px'}}>&#10077;</span><span style={{fontSize:'15px'}}> Learn from the mistakes of others.
                                 You can't live long enough to make them all yourself </span><span style={{fontSize:'20px'}}>&#10078;</span>
                                <br></br><span style={{fontSize:'15px'}}>&#64; Eleanor Roosevelt </span></p>
                        </div>
                    </Slide>
                    <Slide right>
                        <div>
                            <p>
                                <span style={{fontSize:'20px'}}>&#10077;</span><span style={{fontSize:'15px'}}> It takes a wise man to learn from mistakes, but an even wiser man 
                                to learn from others </span><span style={{fontSize:'20px'}}>&#10078;</span>
                                <br></br><span style={{fontSize:'15px'}}>&#64; Anonymous </span></p>
                        </div>
                    </Slide>
                </Carousel>
         );
     } 
  }
  export default CarouselApp;