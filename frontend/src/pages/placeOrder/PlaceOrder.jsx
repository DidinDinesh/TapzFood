import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './PlaceOrder.css'
import { StoreContext } from "../../context/StoreContext"
import axios from 'axios'




const PlaceOrder = () => {

  const { getTotalCartAmount, token, food_list, cartItems, url } = useContext(StoreContext);

  const [ data, setData ] = useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipCode:"",
    country:"",
    phone:""
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({...data,[name]:value}))
  }

  const placeOrder = async (event) => {
    event.preventDefault();
    let orderItems = [];
    food_list.map((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    })

    let orderData = {
      address:data,
      items:orderItems,
      amount:getTotalCartAmount()+5,
    }
    let response = await axios.post(url+"/api/order/place", orderData,{headers:{token}});
    if (response.data.success) {
      const {session_url} = response.data;
      window.location.replace(session_url);
    }
    else {
      alert("Error")
    }
  }

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/cart")
    }
    else if(getTotalCartAmount()===0) {
      navigate("/cart")
    }
  },[token])


  return (
    <form onSubmit={placeOrder} className="place-order">
      <div className="place-order-left">
        <h2 className="title">Delivery Information</h2>
        <div className="multi-fields">
          <input onChange={onChangeHandler} name="firstName" value={data.firstName} type="text" placeholder="First name" required/>
          <input onChange={onChangeHandler} name="lastName" value={data.lastName} type="text" placeholder="Last name" required/>
        </div>
        <input onChange={onChangeHandler} name="email" value={data.email} type="email" placeholder="Email address" required/>
        <input onChange={onChangeHandler} name="street" value={data.street} type="text" placeholder="street" required/>
        <div className="multi-fields">
          <input onChange={onChangeHandler} name="city" value={data.city} type="text" placeholder="City" required/>
          <input onChange={onChangeHandler} name="state" value={data.state} type="text" placeholder="State"  required/>
        </div>
        <div className="multi-fields">
          <input onChange={onChangeHandler} name="zipCode" value={data.zipCode} type="text" placeholder="Zip Code" required/>
          <input onChange={onChangeHandler} name="country" value={data.country} type="text" placeholder="Country"  required/>
        </div>
        <input onChange={onChangeHandler} name="phone" value={data.phone} type="text" placeholder="Phone" required/>
      </div>

      <div className="place-order-right">
        <div className="cart-total">
            <h2>Cart Total</h2>
            <div>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>${getTotalCartAmount() === 0 ? 0 : 5}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <b>Total</b>
                <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 5 }</b>
              </div>
            </div>
            <button type="submit">PROCEED TO Payment</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
