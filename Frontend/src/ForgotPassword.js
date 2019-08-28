import React, { Component } from 'react';
// import './ForgotPassword.css';
import { Link } from 'react-router-dom';


class ForgotPassword extends Component {

  
  constructor(props) {
    super(props)
    this.state = {

        racfId: null,
        email: null,
        verifierEmail: null

    }
  //  this.handleInputChange = this.handleInputChange.bind(this)
  //  this.handleSubmit = this.handleSubmit.bind(this) 
}

  handleSubmit = (event) => {
    event.preventDefault()
    const data = this.state
    console.log("Final data is: ", data)

    fetch('http://127.0.0.1:8000/api/users/forgot', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }) 
       .then((response) => response.json())
       .then((responseJson) => {
           console.log(responseJson);
           window.alert("Password is "+responseJson.message);
           this.props.history.push("/Login");
       })
       .catch((error) => {
           console.log("reset client error-------",error);
      });
    
}

handleInputChange = (event) => {
  event.preventDefault()
  this.setState({
      [event.target.name]: event.target.value
  })
}
  render() {
    const { racfId } = this.state
    const { email } = this.state
    const { verifierEmail } = this.state

    return (

      <div className="App"><br /><br />
      <div className="t"><h3> ForgotPassword </h3></div>
      <form onSubmit={this.handleSubmit}>
          <div>
          Racf Id :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" value={ racfId } placeholder=" Racf ID" name="racfId" maxLength="7" size="30" onChange={ this.handleInputChange } required></input>
          </div>
          <br />
          <div>
          Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="email" value={ email } placeholder="Email ID (xyz@abcd.com)" name="email" size="30" onChange={ this.handleInputChange } required></input>
          </div><br />          
          <div>
          Security Key: <input type="text" value={ verifierEmail } placeholder="Security Key" name="verifierEmail" size="30" onChange={ this.handleInputChange } required></input>
          </div><br />

          <p><button className="btn btn-success" >Submit</button></p>
          {/* { ./Login } */}
          {/* <Link to="/Login"><button className="button2 btn btn-primary"> Back to Login</button></Link> */}
      </form>

  </div>
);
  }
}

export default ForgotPassword;