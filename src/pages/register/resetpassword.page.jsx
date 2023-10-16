import React from "react";
import ResetForm from "../../components/register/resetForm";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../HomePage.scss";

const ResetPasswordPage = () => {
    const navigate = useNavigate();
    const { token, id } = useParams();

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
        <Link to="/users/reset-password/:token/:id" className="active">Reset password</Link>
      </div>
    </div>
    
    <ResetForm token={token} id={id} navigate={navigate}/></div>;
};

export default ResetPasswordPage;