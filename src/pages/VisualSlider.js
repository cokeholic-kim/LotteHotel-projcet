import React from 'react';
import { Carousel } from 'antd';

const contentStyle = {
    margin: 0,
    height: '60px',
    color: '#fff',
    lineHeight: '30px',
    textAlign: 'center',
    position: 'absolute',
    left:'50%',
    bottom:'20px',
    transform:'translateX(-50%)',
  };


const VisualSlider = () => {
    const onChange = (currentSlide) => {
        console.log(currentSlide);
      };

      const backstyle1 = {
        height:'800px',
        position:'relative',
        backgroundImage: "URL('images/visual_main22.jpg')"
    }
    const backstyle2 = {
        height:'800px',
        position:'relative',
        backgroundImage: "URL('images/visual_main23.jpg')"
    }
    const backstyle3 = {
        height:'800px',
        position:'relative',
        backgroundImage: "URL('images/visual_main24.jpg')"
    }
    const backstyle4 = {
        height:'800px',
        position:'relative',
        backgroundImage: "URL('images/visual_main25.jpg')"
    }

    return (
        <div>
            <Carousel afterChange={onChange} autoplay>
                <div>
                    <div style={backstyle1}>
                        <h3 style={contentStyle}>1</h3>
                    </div>
                </div>
                <div>
                    <div style={backstyle2}>
                        <h3 style={contentStyle}>1</h3>
                    </div>
                </div>
                <div>
                    <div style={backstyle3}>
                        <h3 style={contentStyle}>1</h3>
                    </div>
                </div>
                <div>
                    <div style={backstyle4}>
                        <h3 style={contentStyle}>1</h3>
                    </div>
                </div>
            </Carousel>    
        </div>
    );
};

export default VisualSlider;