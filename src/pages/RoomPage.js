import React from 'react';
import RoomItem from '../components/RoomItem';
import Title from '../components/Title';

const RoomPage = ({data,isreserve,reserveRoom}) => {
    //reserveRoom배열이 빈 배열이 아닐때.
    //객실 항목배열 data를 필터링함 
    //항목의 r_no가 reserveRoom배열의 요소에 없는 항목만 새로운 배열로 리턴
    //ex> reserveRoom --> [21,22] --> 21번과 22번 항목만 제외하고 새로운 배열로 리턴
    //배열을 순환하며 <RoomItem/>

    /*
        if(reserveRoom){
            const newdata = data.filter(da=>reserveRoom.indexOf(da.r_no)===-1)
            const listitems = newdata.map(da=><RoomItem item={da}/>)
        }else{
            const listitems = data.map(da=><RoomItem={da}/>)
        }
    */
    const listitems = reserveRoom ? data.filter(da=>reserveRoom.indexOf(da.r_no)=== -1)
    .map((da,index) =><RoomItem key={index} item={da}/>) : data.map((d,index)=><RoomItem key={index} item={d}/>)
    return (
        <div className='inner'>
            {/* 예약페이지가 아닐 경우에만 title컴포넌트 나타내기 */}
            {!isreserve && <Title title="Room"/>}
            {isreserve && <div>객실</div>}
            <Title title="Room"/>
            <ul>
                {listitems}
            </ul>
        </div>
    );
};

export default RoomPage;