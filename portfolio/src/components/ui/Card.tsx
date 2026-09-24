import React from "react";

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
title,
description,
imageUrl,
onClick,
}) => {
    return (
        <div className="rounded-lg shadow-md overflow-hidden cursor-pointer w-full h-auto border border-gray-50">

            <div className="relative w-full h-100 m-auto overflow-hidden rounded-4sxl shadow-lg flex items-center justify-center">
                <div style={{backgroundImage: `url(${imageUrl})`}} className="absolute inset-0 bg-cover bg-center blur-xl scale-110"></div>

                <div className="absolute inset-0 bg-black/30"></div>

                <img src={imageUrl} alt="project preview" className="relative z-10 max-h-[80%] max-w-[80%] object-contain rounded-lg shadow-md m-auto" />
            </div>
            
            <div className="bg-[#F8F8FF] p-1 text-wrap">
                <h1 className="text-2xs font-bold">
                    {title}
                </h1>
                <p className="text-xs">
                    {description}
                </p>
            </div>

            <div className="bg-[#FAFAFA] text-center flex justify-center pb-2 pt-2 border border-gray-200">
                <button className="bg-black border rounded-2xl w-50 h-5 text-white text-xs" onClick={onClick}>
                    Open in GitHub
                </button>
            </div>
        </div>
    );
}
//