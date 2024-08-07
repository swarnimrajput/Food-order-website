import{render,screen} from "@testing-library/react"
import Contact from "../../Contact"
import "@testing-library/jest-dom"
 
describe("Content of Contact Us page",()=>{
it("should be able to load contact us component ",()=>{
        render(<Contact/>);
        const Heading=screen.getByRole("heading");
        expect(Heading).toBeInTheDocument();
       })
       it("Should Load button inside the component",()=>{
           render(<Contact/>);
           const button=screen.getByRole("button");
           expect(button).toBeInTheDocument();
       })
       test("should be able to load contact us component ",()=>{
           render(<Contact/>);
           const Heading=screen.getByText("Submit");
           expect(Heading).toBeInTheDocument();
          })
       test("should be able to load contact us component ",()=>{
           render(<Contact/>);
           const Heading=screen.getAllByPlaceholderText("name");
           expect(Heading)
          })   
          test("Should Load 2 input boxes in the component",()=>{
           render(<Contact/>);
           const inputboxes=screen.getAllByRole("textbox");
           //console.log(inputboxes.length);
           expect(inputboxes.length).not.toBe(3);
       })  
})

