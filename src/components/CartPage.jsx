import { useContext, useRef, useState } from "react";
import { MyContext } from "../contexts/MyContext";

const CartPage = () => {
  const { myState, setMyState } = useContext(MyContext);
  const [couponCode, setCouponCode] = useState(null);
  const couponCurrValue = useRef();

  let sum = 0;
  const mySet = new Set(myState);
  // myState.map((items) => mySet.add(items));
  const newArr = [...mySet];

  return (
    <div>
      <h1 className="text-4xl font-bold mt-16 text-left mb-5">Your cart</h1>

      <div className="flex">
        {console.log(couponCode)}
        <div className="w-3/4">
          {newArr.map((items, index) => {
            return (
              <div className="flex mb-8">
                <img src={items.img} className="w-1/4 rounded-lg" />
                <div className="w-full text-left ml-16">
                  <p className="text-xl font-bold mb-5">{items.name}</p>

                  <p className="text-md font-bold">
                    Total Price:{" "}
                    <span className="font-light">{items.price}</span>
                  </p>
                  <p className="text-md font-bold">
                    Quantity:{" "}
                    <span className="font-light">
                      {myState.filter((x) => x == items).length}
                    </span>
                  </p>
                </div>
              </div>
            );
          })}

          <div className="text-left mt-10">
            <p className="text-lg font-bold ">Have a coupon code ?</p>
            <input
              type="text"
              ref={couponCurrValue}
              placeholder="Type here"
              className="input mr-5 input-bordered input-error w-full max-w-xs"
            />
            <button
              className="btn btn-warning"
              onClick={() => {
                setCouponCode(couponCurrValue.current.value);
              }}
            >
              Redeem coupon
            </button>
            <div className="bg-accent p-5 rounded-xl mt-10 text-white">
              Something goes here !!!
            </div>
            <div className="bg-error p-5 rounded-xl mt-10 text-white">
              Coupon code is invalid !!!
            </div>
          </div>
        </div>

        <div className="w-1/4">
          <div className="bg-base-200 rounded-lg p-3">
            <p className="text-2xl font-semibold">Grand Total</p>
            <p className="text-md mt-8 font-bold">
              Total ({myState.length} items):{" "}
              {myState
                .map((x) => parseInt(x.price))
                .forEach((element) => {
                  sum = sum + element;
                })}{" "}
              {sum}
            </p>

            <button className="btn btn-active btn-primary mt-10">
              Proceed to pay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
