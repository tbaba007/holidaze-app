import React from 'react';
import  ButtonStyle  from './Button.module.scss';

const Button=({text,width,onClick})=>{
    return <button className={ButtonStyle.container} style={{width:width}} onClick={onClick}>{text}</button>;
};


export default Button;

