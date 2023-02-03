import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDatas } from '../modules/special';
import Specialoffer from '../pages/Specialoffer';
import SpecialOfferPage from '../pages/SpecialOfferPage';

const SpecialContainer = ({isMain}) => {
    const{loading,data,error}=useSelector(state=>state.special.specials);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getDatas())
    },[])
    if (loading) return <div>로딩중입니다...</div>
    if (error) return <div>에러가 발생했습니다</div>
    if (!data) return <div>데이터가 없습니다.</div>
    if(isMain){
        return (
                <Specialoffer data={data}></Specialoffer>
        );
    }else{
        return(
            <div>
                <SpecialOfferPage data={data}/>
            </div>
        )
    }
    
};

export default SpecialContainer;