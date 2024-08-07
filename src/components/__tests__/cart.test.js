import { fireEvent, render ,screen} from "@testing-library/react";
import { act } from "react";
import { async } from "regenerator-runtime";
import RestaurentMenu from "../RestaurentMenu";
import MOCK_DATA from "../Mocks/MockresMenu.json"
import { Provider } from "react-redux";
import appStore from "../../utils/Appstore"
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"
import Cart from "../Cart";
import exp from "constants";

global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA);
        }
    })
})

it("should Load Restaurent Menu Component",async()=>{

  await act(async()=>
  render(<BrowserRouter>
  <Provider store={appStore}>
    <Header/>
    <RestaurentMenu/>
    <Cart/>
    </Provider>
    </BrowserRouter>
  
  ) );
  const accordianHeader = screen.getByText("Recommended(18)");
  fireEvent.click(accordianHeader);
  expect(screen.getAllByTestId("foodItems").length).toBe(18);
  expect(screen.getByText("🛒[0]")).toBeInTheDocument();
  const addbtn= screen.getAllByRole("button",{name:"Add+"});
  fireEvent.click(addbtn[0]);
  expect(screen.getByText("🛒[1]")).toBeInTheDocument();
  expect(screen.getAllByTestId("foodItems").length).toBe(19);
  fireEvent.click(screen.getByRole("button",{name:"Clear Cart"}));
  expect(screen.getAllByTestId("foodItems").length).toBe(18);
  expect(screen.getByText("Cart Is Empty. Please Add Something to the cart")).toBeInTheDocument();

})