"use client";
// components/Img.tsx
import React from 'react';
import Image from 'next/image';
// import { imageLoader } from '../utils/imageLoader'; // Adjust the path as necessary

interface ImageLoaderProps {
  src: string;
  width: number;
  quality?: number;
}

const imageLoader = ({ src, width, quality }: ImageLoaderProps): string => {
  return `${src}?w=${width}&q=${quality || 75}`;
};


interface ImgProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string; // Optional className for additional styling
}

const Img: React.FC<ImgProps> = ({ src, alt, width, height, className }) => {
  return (
    <div className={className}>
      <Image
        loader={imageLoader} // Custom loader function
        src={src}
        alt={alt}
        width={width}
        height={height}
        layout="responsive" // Adjust layout as needed
      />
    </div>
  );
};

export default Img;
