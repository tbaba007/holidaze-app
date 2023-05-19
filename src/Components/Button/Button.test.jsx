import { screen,render } from "@testing-library/react";
import Button from './Button'
describe('should check if button exists',()=>{
    it('should check if button with texts exists',()=>{
       const text="test"
       const {getByText}=render(<Button text={text}/>)

        const buttonElement=getByText(text);
        expect(buttonElement).toBeInTheDocument();
    })
})