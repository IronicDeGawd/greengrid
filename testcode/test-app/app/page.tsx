import type { NextPage } from "next";
import React from 'react';

import { useCallback } from "react";
import { Button } from "@mui/material";

const Desktop6: NextPage = () => {
    const onBuyerClick = useCallback(() => {
        window.open("/desktop8");
    }, []);

    const onSellerClick = useCallback(() => {
        window.open("/");
    }, []);

    return (
        <div className="relative bg-white w-full h-screen overflow-hidden text-left text-5xl font-inter text-black">
            <img className="absolute w-full" alt="" src="/rectangle-32.svg" />
            <div className="absolute top-0 left-0 bg-purple-400 w-full h-440" />
            <div className="absolute top-29 left-45 bg-palegoldenrod-100 rounded-3xl shadow-md w-231 h-86" />
            <div className="absolute left-1141 bg-palegoldenrod-100 rounded-3xl w-231 h-86" />
            <Button
                className="absolute top-41 left-101 w-40 py-2 bg-blue-500 text-white"
                onClick={onBuyerClick}
            >
                Buyer
            </Button>
            <Button
                className="absolute top-50 left-1200 w-40 py-2 bg-blue-500 text-white"
                onClick={onSellerClick}
            >
                Seller
            </Button>
            <img className="absolute top-315 left-595 w-250 h-246" alt="" src="/ellipse-2.svg" />
            <img
                className="absolute top-301 left-577 w-286 h-286 object-cover"
                alt=""
                src="/greengrid-logo-1-1@2x.png"
            />
            <div className="absolute left-497 bg-gainsboro-100 w-447 h-86" style={{ top: '622px', boxShadow: '0 4px 4px rgba(250, 169, 222, 0.25)' }} />
            <div className="absolute left-497 bg-gainsboro-100 w-447 h-86" style={{ top: '769px' }} />
            <div className="absolute top-648 left-531 w-314 h-55" style={{ color: 'rgba(0, 0, 0, 0.75)' }}>
                User Id
            </div>
            <div className="absolute top-786 left-534 w-266 h-53">
                Password
            </div>
            <div className="absolute top-924 left-220 text-6xl font-bold w-277 h-61 text-shadow-md">
                Login With MetaMask
            </div>
            <img
                className="absolute top-919 left-101 w-70.41 h-66 overflow-hidden"
                alt=""
                src="/logosmetamaskicon.svg"
            />
        </div>
    );
};

export default Desktop6;
