import { render,screen } from "@testing-library/react"
import RestaurentCard from "../Restaurantcard"
import MOCK_DATA from "../Mocks/rescardMock.json"
import "@testing-library/jest-dom"



it("should able to Render Restaurent component with props data",()=>{
    render(<RestaurentCard resdata={MOCK_DATA}/>);
   const name= screen.getByText("Burger King");
   expect(name).toBeInTheDocument();
})