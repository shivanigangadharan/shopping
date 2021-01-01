import React from 'react';
import { Link } from 'react-router-dom';
import shop from '../shop.png';
import { Carousel, Card } from 'antd';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import Footer from '../components/footer';

const { Meta } = Card;

const ImgCard = styled(Card)`
    margin: 0 auto;

`
const Box = styled.div`
    border: 3px solid red;
`
const Flex = styled.div`
    display: flex;
    align-content: center;
    margin-top: 5%;
    width: 96%;
`

function Homepage() {
    const contentStyle = {
        height: '460px',
        color: '#fff',
        width: '80%',
        marginTop: '40px',
        lineHeight: '160px',
        textAlign: 'center',
        border: '4px solid white',
        boxShadow: '1px 1px 5px 2px lightgrey',
    };
    const numarr = [1, 2, 3];

    return (
        <div>
            <center>
                <Box>
                    <Carousel autoplay>
                        <div>
                            <img
                                style={contentStyle}
                                src="https://www.finplus.co.in/wp-content/uploads/2017/05/Sell-products-online-why-should-I-start-selling-online.jpg" />
                        </div>
                        <div>
                            <img
                                style={contentStyle}
                                src="https://www.finplus.co.in/wp-content/uploads/2017/05/Sell-products-online-why-should-I-start-selling-online-1.jpg" />
                        </div>
                        <div>
                            <img
                                style={contentStyle}
                                src="https://d2hhgs6eoqpuyl.cloudfront.net/uploads/blog_image/file/796/online-shopping-ecommerce-ss-1920.png" />

                        </div>

                        <div>
                            <img
                                style={contentStyle}
                                src="https://trak.in/wp-content/uploads/2018/11/Ecommerce-Online-To-Offline.jpg" />
                        </div>
                    </Carousel>
                </Box>

                <Flex>

                    {numarr.map((i) => {
                        return (
                            <ImgCard
                                hoverable
                                style={{ width: 240 }}
                                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                            >
                                <Meta title="Europe Street beat" description="Pre order limited edition dresses now and avail a discount of flat 40% on all western wear and footwear" />
                            </ImgCard>
                        )
                    })}
                </Flex>
            </center>
            <Footer />
        </div>
    )
}

export default Homepage;