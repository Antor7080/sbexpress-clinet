/* eslint-disable jsx-a11y/no-distracting-elements */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useEffect, useState } from 'react';
// import Marquee from "react-fast-marquee";

const Notice = () => {
    const [noticeData, setNoticeData] = useState([])
    const Authorization = localStorage.getItem("token")
    const config = {
        headers: {
            Authorization
        }
    };
    useEffect(() => {

        fetch(`https://backend.sbexpressbd.com/notice?status=active&page=1`, config)
            .then(res => res.json())
            .then(data => {
                setNoticeData(data.data);

            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div className='pb-3 notice'>
            <div className='d-flex w-100 align-items-center bg-light border shadow'>
                <h6 className='bg-danger shadow p-3 m-0' style={{}}>নোটিশ </h6>
                <marquee>
                    {noticeData.map(notice => <li className='px-5 pb-3 d-inline  '>{notice.notice}</li>)}
                </marquee>

            </div>
        </div>
    );
};

export default Notice;