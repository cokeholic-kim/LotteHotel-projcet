import React from 'react';
import RoomItem from '../components/RoomItem';
import Title from '../components/Title';

const RoomPage = ({data}) => {
    return (
        <div className='inner'>
            <Title title="Room"/>
            <ul>
                {data.map((d,index)=><RoomItem key={index} item={d}/>)}
            </ul>
        </div>
    );
};

export default RoomPage;