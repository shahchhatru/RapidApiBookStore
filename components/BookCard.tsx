'use client';

import React from 'react'
import { useState } from 'react';
import Image from 'next/image';
import { BookProps } from '@/types';
import CustomButton from './CustomButton';
import { CardDetails } from '.';


interface BookCardProps {
    book:BookProps;
}

const BookCard = ({book}:BookCardProps) => {
    const {book_id,name,author,votes,cover}=book;
   
    const [isOpen,setIsOpen] =useState(false);

  return (
    <div className='car-card group'>
        <div className='car-card__content'>
            <h2 className='car-card__content-title'>
                {name} by {author}
            </h2>
        </div>
        <p className='flex mt-6 text-[32px] font-extrabold'>
            <span className='self-start text-[14px] font-semibold'>
               $
            </span>
            50
            <span className='self-end text-[14px] font-semibold font-medium'>
                /day
            </span>
        </p>
        <div className='relative w-full h-40 my-3 object-contain'>
            <Image src ={cover}  alt={`${name} ${author}`} fill  priority className='object-contain'/>
        </div>
        <div className='relative flex w-full mt-2 '>
            <div className='flex group-hover:invisible w-full justify-between text-gray'>
                {/**icons -img 1 */}
                <div className="flex flex-col justify-center items-center gap-2">
                   
                </div>
                {/**icons-img 2 */}
                <div className="flex flex-col justify-center items-center gap-2">
                    
                </div>
                 {/**icons-img 2 */}
                <div className="flex flex-col justify-center items-center gap-2">
                     
                </div>
            </div>
            <div className="car-card__btn-container">
          <CustomButton
            title='View More'
            containerStyles='w-full py-[16px] rounded-full bg-primary-blue'
            textStyles='text-white text-[14px] leading-[17px] font-bold'
            rightIcon='/right-arrow.svg'
            handleClick={() => setIsOpen(true)}
          />
        </div>
        </div>
      { /* <CardDetails isOpen={isOpen} closeModal={()=>setIsOpen(false)} car ={car}/>*/}
    </div>
  )
}

export default BookCard