import React from "react";
import ForgetForm from "../../components/register/forgetpassword";
import { Link } from "react-router-dom";
import "../HomePage.scss";

const ForgetPasswordPage = () => {
  return <div>
    <div  className="container">
      <div className="header">
        <h1>Welcome to the Online Bookstore</h1>
      </div>
      <div className="navbar">
        <Link to="/">
          Home
        </Link>
        <Link to="/login">Login</Link>
        <Link to="/products">Products</Link>
        <Link to="/registration">Registration</Link>
        <Link to="/cart">cart</Link>
        <Link to="/checkout">Checkout</Link>
        <Link to="/transactionadmin">Transaction</Link>
        <Link to="/useralldata">Usedata</Link>
        <Link to="/balance">Balance</Link>
        <Link to="/logout">Logout</Link>
        <Link to="/forgetpassword" className="active">Reset Password</Link>
      </div>
    </div>
    <ForgetForm />
    </div>;
};

export default ForgetPasswordPage;