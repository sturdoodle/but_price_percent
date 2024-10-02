import "bootstrap/dist/css/bootstrap.css";
import Gads from "./cmpnt/Gads";
import Header from "./cmpnt/Header";
import { useEffect, useState } from "react";
function App() {
  const [initialPrice,setInitialPrice]=useState(0)
  const [percent,setPercent]=useState()
  const [finalPrice,setFinalPrice]=useState(0)
  useEffect(()=>{   
    setFinalPrice(initialPrice+(initialPrice*(percent/100)))
  },[initialPrice,percent])
  return (
    <>
      <Header />
      <div className="Appk">
        <div className="container-xxl bd-gutter">
          <div className="col-md-8 mx-auto">
          <div className="form-group mt-5">
            <label htmlFor="initialPrice ">Enter Price</label>
            <input type="number" className="form-control" id="initialPrice" name="initialPrice" value={initialPrice} 
            onChange={e=>{setInitialPrice(Number(e.target.value))}} placeholder="Inital Price"/>
          </div>
          <div className="form-group mt-2">
            <label htmlFor="percent">Enter Percentage</label>
            <input type="number" className="form-control" id="percent" name="percent" value={percent} 
            onChange={e=>{setPercent(Number(e.target.value))}} placeholder="Percentage"/>
          </div>
          <div className="form-group mt-5">
            <label htmlFor="exampleFormControlInput1 ">Final Price</label>
            <p className="display-2">{finalPrice}</p>
          </div>
            <div className="form-group mt-3">
            {/* <Gads /> */}
            </div>
          </div>
        </div>
      </div>
      <div className="fixed-bottom">
      {/* <Gads /> */}
      </div>
    </>
  );
}

export default App;
