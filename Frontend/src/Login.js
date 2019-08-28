
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import Header from './Header';
import './Login.css';
// import { RequestListView } from "./RequestListView"

export class Login extends Component {

    constructor(props) {
        super(props)
        this.comp={value: ''};
        this.state = {
            racfId: null,
            password: null,
            redirect: false
        }
    }

    handleSubmit = (event) => {
      event.preventDefault()
      const data = this.state
      console.log("Final data is: ", data)

      this.comp.value = "/home"

      fetch('http://127.0.0.1:8000/api/users/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: this.state.racfId,
          password: this.state.password,
        }),
      }).then((response) => response.json())
            .then((responseJson) => {
           console.log("fetched data",responseJson);
           if( responseJson.message ==='Authenticated')
           {          
            window.localStorage.setItem('racf',this.state.racfId);
  
             if(responseJson.role ==='admin'){
              //this.comp.value = "/adminpage"
             }
  
             else if(responseJson.role==='senior management'){
             this.comp.value = "/dashboard"
            // console.log('senior is authenticated')
             }
             else{                 
              this.comp.value = "/home"
             }
         }
         else{
          window.alert("Unauthenticated user");      
          this.comp.value = "/login"
         }
       })
       .catch((error) => {
           console.log("reset client error-------",error);
      });
      
  }

  // handleSubmit = async function(event) {
  //   //event.preventDefault()
  //   const data = this.state
  //   console.log("Final data is: ", data);
  
  //   window.localStorage.setItem('user',this.state.racfId);


  //   if(this.state.username=='senior'){
  //     console.log('value is ' , this.state);
  //     console.log('username is',this.state.username);
  //     console.log('password is ',this.state.password);
  //     this.comp.value ="/dashboard";
  //     this.authenticatefunction(this.state.username, this.state.password);  
  //   }
  //   else if(this.state.username =='admin'){
  //     console.log("hi")
  //    this.comp.value ="/adminpage"
  //   }
  //   else if(this.state.username == 'user') {
  //     this.comp.value = "/home"
  //     console.log('1')
  //   }
  //   else{
  // //    window.alert('Please enter a valid racf id or SignUp');
  //     console.log('else wala username ');
  //   }
  // }
  

  handleInputChange = (event) => {
      event.preventDefault()
      this.setState({
          [event.target.name]: event.target.value
      })
  }

  // caseid(){
  //   console.log(this.id);
  //   window.localStorage.setItem('racf',this.id);
  // }

    render() {
        const { racfId } = this.state
        const { password } = this.state
        
         return (

            <div className="App"><br /><br />
                <div className="t"><h3> Login Page</h3></div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                    Racf Id :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" value={ racfId } placeholder=" Racf ID" name="racfId" size="30" onChange={ this.handleInputChange } required></input>
                    </div>
                    <br />
                    
                    <div>
                    Password:&nbsp;&nbsp;&nbsp;&nbsp; <input type="password" value={ password } placeholder="Password" name="password" size="30" onChange={ this.handleInputChange } required></input>
                    </div><br />
                
                    <div>
                   
                    {/* <p><button className="btn btn-success" >Login</button></p>                     */}
                    <Link to="/SignUp"><button class="button2">Sign Up</button></Link>    
                    {/* <Link to ="/home" ><button className='button1' value="Login" > Login </button></Link> */}

                    <button className='button1' value="Login" > Login </button>
                    {/* <RequestListView /> */}
                    
                    </div>

                    
                    <div><Link to="/ForgotPassword"><button class ="button3">Forgot Password</button></Link></div> 

                    {/* <Link to="/Login"><button className="button2 btn btn-primary"> Back to Login</button></Link> */}
                </form> 
                   
            </div>
        );
    }
}

export default Login;