import React from 'react';
import { Link } from 'react-router-dom';
import Title from '../components/Title';
import { API_URL } from '../config/apiurl';
import './Specialoffer.css';

const SpecialLists = ({list})=>{
    return(
        <li>
            <Link to={`special/${list.e_no}`}>
                <div className='imgdiv'>
                    <img src={`${API_URL}/upload/event/${list.e_img1}`} alt="" />
                </div>
                <div className='textdiv'>
                    
                    <h3>{list.e_title}</h3>
                    <p>
                        {list.e_titledesc}
                    </p>
                    <div>
                        기간 :{list.e_time}
                    </div>
                </div>
            </Link>
        </li>
    )
}

const SpecialOfferPage = ({data}) => {
    console.log(data)
    return (
        <div className='specialpage'>
            <div className='inner'>
                <Title title="Special" />
                <ul>
                    {data.map(d=><SpecialLists key={d.e_no} list={d}/>)}
                </ul>
             </div>
        </div>
    );
};

export default SpecialOfferPage;