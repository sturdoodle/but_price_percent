import "bootstrap/dist/css/bootstrap.css";
import Gads from "./cmpnt/Gads";
import Header from "./cmpnt/Header";
import { useEffect, useState } from "react";
function V2Percent() {
  const [initialPrice, setInitialPrice] = useState(0)
  const [percent, setPercent] = useState(0)
  const [finalPrice, setFinalPrice] = useState(0)
  const [PercentAmount, setPercentAmount] = useState(0)
  // 2.nd percentage
  const [percent2, setPercent2] = useState(0)
  const [finalPrice2, setFinalPrice2] = useState(0)
  const [percentAmount2, setPercentAmount2] = useState(0)


  useEffect(() => {
    let result1 = percentCalc(initialPrice, percent)
    setPercentAmount(result1?.percentamount)
    setFinalPrice(result1?.final_price)
  }, [initialPrice, percent])


  useEffect(() => {
    let result2 = percentCalc(finalPrice, percent2)
    setPercentAmount2(result2?.percentamount)
    setFinalPrice2(result2?.final_price)
  }, [finalPrice, percent2])


  // function for percentage calc
  const percentCalc = (price, percentag) => {
    let percentageamount = (price * (percentag / 100))
    let final_pricee = price + percentageamount

    let result = {
      percentamount: percentageamount,
      final_price: final_pricee
    }
    return result
  }
  return (
    <>
      <Header />
      <div className="Appk">
        <div className="container-xxl bd-gutter">
          <div className="col-md-11 mx-auto">

            <div className="row mt-5">
              <div className="form-group col-6">
                <label htmlFor="initialPrice " className="lead col-form-label">Initial Price</label>
                <div className="col-sm-10">
                  <input type="number" className="form-control" id="initialPrice" name="initialPrice" value={initialPrice}
                    onChange={e => { setInitialPrice(Number(e.target.value)) }} placeholder="Inital Price" />
                </div>
              </div>

              <div className="form-group col-6" >
                <label htmlFor="percent" className="lead col-form-label">Base Percentage</label>
                <div className="col-sm-10">
                  <input type="number" className="form-control" id="percent" name="percent" value={percent}
                    onChange={e => { setPercent(Number(e.target.value)) }} placeholder="Percentage" />
                </div>
              </div>
            </div>

            {/* percentage 2 */}
            <div className="row mt-2">
              <div className="form-group col-6">
                <label htmlFor="initialPrice " className="lead col-form-label">Base Price</label>
                <p className="col-sm-10 display-5 text-center text-success">{finalPrice}</p>
              </div>

              <div className="form-group col-6" >
                <label htmlFor="percent" className="lead col-form-label">2nd Percentage </label>
                <div className="col-sm-10">
                  <input type="number" className="form-control" id="percent" name="percent" value={percent2}
                    onChange={e => { setPercent2(Number(e.target.value)) }} placeholder="Percentage" />
                </div>
              </div>
            </div>

            <div className="form-group mt-2 row">
              <label htmlFor="exampleFormControlInput1 " className="display-5 text-center">Final Price</label>
              <p className="display-2 text-center text-success">{finalPrice2}</p>
            </div>
            <div className="form-group mt-2">
            <Gads />
            </div>

            <div className="form-group mt-5 row">
              <span className="lead">BreakDown</span>
              <table className="table">

                <tbody>
                  <tr>
                    <th scope="row">Inital Price</th>
                    <td></td>
                    <td>{initialPrice}</td>
                  </tr>
                  <tr>
                    <th scope="row">Percentage | Amount</th>
                    <td>{percent === undefined ? "--" : percent} %</td>
                    <td className="text-primary">+ {PercentAmount}</td>
                  </tr>
                  <tr>
                    <th scope="row">Base Price</th>
                    <td></td>
                    <td className="text-success font-weight-bold">{finalPrice}</td>
                  </tr>
                  <tr>
                    <th scope="row">Percentage | Amount</th>
                    <td>{percent === undefined ? "--" : percent2} %</td>
                    <td className="text-primary">+ {percentAmount2}</td>
                  </tr>
                  <tr>
                    <th scope="row">Final Price</th>
                    <td></td>
                    <td className="text-success font-weight-bold">{finalPrice2}</td>
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
    </>
  );
}

export default V2Percent;
