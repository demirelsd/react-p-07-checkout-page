import React from "react";

const taxRate = 0.18;
const shipping = 25;

const CardTotal = ({products}) => {
  const subTotal =products.reduce((acc,product)=>acc+ +(product.price * product.dampingRate* product.amount).toFixed(2),0 )

  
  return (
    <table className="table w-100">
      <tbody>
        <tr className="text-end">
          <th className="text-start">Subtotal</th>
          <td>
            $<span className="subtotal">{subTotal}</span>
          </td>
        </tr>
        <tr className="text-end">
          <th className="text-start">Tax(18%)</th>
          <td>
            $<span className="tax">{(subTotal * taxRate).toFixed(2)} </span>
          </td>
        </tr>
        <tr className="text-end">
          <th className="text-start">Shipping</th>
          <td>
            $<span className="shipping">{subTotal < 3000 ? shipping : 0}</span>
          </td>
        </tr>
        <tr className="text-end">
          <th className="text-start">Total</th>
          <td>
            $
            <span className="total">
              {(
                subTotal +
                +(subTotal * 0.18).toFixed(2) +
                (subTotal < 3000 ? shipping : 0)
              ).toFixed(2)}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default CardTotal;
