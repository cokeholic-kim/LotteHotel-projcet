import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <div className='footermenu'>
                <div className="inner">
                    <ul>
                        <li>호텔소개</li>
                        <li>이용약관</li>
                        <li>개인정보약관</li>
                        <li>이메일무단수집금지</li>
                    </ul>
                </div>
            </div>
            <div className='inner'>
            ㈜대교 마이다스 호텔&amp;리조트
            Copyright © 2019 DAEKYO Co, LTD. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;