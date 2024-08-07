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
   const cardsBeforesearch =screen.getAllByTestId("rescard");
   expect(cardsBeforesearch.length).toBe(8);
   const SearchButton =screen.getByRole("button",{name:"Search"});
   const searchInput = screen.getByTestId("searchInput");
   fireEvent.change(searchInput,{target:{value:"burger"}});
   fireEvent.click(SearchButton);
    const cardsAftersearch =screen.getAllByTestId("rescard");
   expect(cardsAftersearch.length).toBe(1);
})