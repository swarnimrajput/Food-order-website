import { fireEvent, render,screen } from "@testing-library/react"
import { act } from "react"
import { async } from "regenerator-runtime"
import Body from "../Body"
import MOCK_DATA from "../Mocks/Mockreslistdata.json"
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"
import RestaurentCard from "../Restaurantcard"

global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA);
        }
    })
})

it("should return the body component with search",async()=>{

   await act(async()=>
   render(<BrowserRouter>
    <Body/>
    </BrowserRouter>
  )
   ) ;
   const cardsBeforeFilter=screen.getAllByTestId("rescard");
   expect(cardsBeforeFilter.length).toBe(8);
   const TopRatedButton =screen.getByRole("button",{name:"Top Rated Restaurants"});
   fireEvent.click(TopRatedButton);
    const cardsAfterFilter =screen.getAllByTestId("rescard");
   expect(cardsAfterFilter.length).toBe(8);
})