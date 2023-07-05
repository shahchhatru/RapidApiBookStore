import { MouseEventHandler } from "react";

export interface CustomButtonProps{
    title:string;
    containerStyles?:string;
    handleClick?:MouseEventHandler<HTMLButtonElement>;
    btnType?:"button" | "submit";
    textStyles?:string;
    rightIcon?:string;
    isDisabled?:boolean;
}

export interface SearchManuFacturerProps{
    manufacturer:string;
    setManufacturer:(manufacturer:string)=> void;
}

export interface BookProps {
    book_id:number;
    name:string;
    author:string;
    votes:number;
    cover:string;
    url:string;
}