import "bootstrap/dist/css/bootstrap.css";
import Gads from "./cmpnt/Gads";
import Header from "./cmpnt/Header";
import { useEffect, useState } from "react";
function App() {
  const [initialPrice,setInitialPrice]=useState()
  const [percent,setPercent]=useState()
  const [finalPrice,setFinalPrice]=useState(0)
  const [PercentAmount,setPercentAmount]=useState(0)
  useEffect(()=>{ 
    const per_amount=initialPrice*(percent/100)  
    setPercentAmount(per_amount.toFixed(2))
    setFinalPrice((initialPrice+(per_amount)).toFixed(2))
  },[initialPrice,percent])
  return (
    <>
      <Header />
      <div className="Appk">
        <div className="container-xxl bd-gutter">
          <div className="col-md-8 mx-auto">
          <div className="form-group row mt-5">
            <label htmlFor="initialPrice " class="lead col-sm-2 col-form-label">Initial Price</label>
            <div class="col-sm-10">
            <input type="number" className="form-control" id="initialPrice" name="initialPrice" value={initialPrice} 
            onChange={e=>{setInitialPrice(Number(e.target.value))}} placeholder="Inital Price"/>
            </div>
          </div>
          <div className="form-group mt-2 row" >
            <label htmlFor="percent" class="lead col-sm-2 col-form-label">Percentage</label>
            <div class="col-sm-10">
            <input type="number" className="form-control" id="percent" name="percent" value={percent} 
            onChange={e=>{setPercent(Number(e.target.value))}} placeholder="Percentage"/>
            </div>
          </div>
          <div className="form-group mt-5 row">
            <label htmlFor="exampleFormControlInput1 " className="display-5 text-center">Final Price</label>
            <p className="display-2 text-center text-success">{finalPrice}</p>
          </div>
          <div className="form-group mt-5 row">
          <span className="lead">BreakDown</span>
          <table class="table">
            {/* <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead> */}
            <tbody>
              <tr>
                <th scope="row">Inital Price</th>
                <td></td>
                <td>{initialPrice}</td>
              </tr>
              <tr>
                <th scope="row">Percentage | Amount</th>
                <td>{percent===undefined?"--":percent} %</td>
                <td className="text-primary">{PercentAmount}</td>
              </tr>
              <tr>
                <th scope="row">Final Price</th>
                <td></td>
                <td className="text-success font-weight-bold">{finalPrice}</td>
              </tr>
            </tbody>
          </table>
          </div>
            {/* <div className="form-group mt-3">
            <Gads />
            </div> */}
          </div>
        </div>
      </div>
      <div className="fixed-bottom">
      <Gads />
      </div>
    </>
  );
}

export default App;
