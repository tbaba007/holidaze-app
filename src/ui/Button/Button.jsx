import  ButtonStyle  from "./Button.module.scssß";

const Button=({text,width,onClick})=>{
    return <button className={ButtonStyle.container} style={{width:width}} onClick={onClick}>{text}</button>
}

export default Button;