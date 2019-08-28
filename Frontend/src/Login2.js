
import React, { Component } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
class Login2 extends Component {  

  constructor(props){
    super(props)
    this.comp={value: ''};
    this.state = {
        username : null,
        password: null,
      }
      this.authenticatefunction = this.authenticatefunction.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
      this.handleInputChange = this.handleInputChange.bind(this)
  }

   authenticatefunction = async function(username, password) {
    fetch('http://127.0.0.1:8000/api/users/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: this.state.username,
        password: this.state.password,
      }),
    }).then((responseJson) => {
         console.log("heyy " + responseJson);
         if( responseJson.message ==='Authenticated')
         {          
           window.localStorage.setItem('user',responseJson.user);

           if(responseJson.role ==='admin'){
            this.comp.value = "/adminpage"
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
handleSubmit = async function(event) {
  //event.preventDefault()
  const data = this.state
  console.log("Final data is: ", data);
  window.localStorage.setItem('racf',this.state.username)
  // if(this.state.username==='senior'){
  //   console.log('value is ' , this.state);
  //   console.log('username is',this.state.username);
  //   console.log('password is ',this.state.password);
  //   this.comp.value ="/dashboard";
  //   this.authenticatefunction(this.state.username, this.state.password);  
  // }
  // else if(this.state.username ==='admin'){
  //   console.log("hi")
  //   this.authenticatefunction(this.state.username, this.state.password);
  //  this.comp.value ="/adminpage"
  // }
 
  // else{
    
  //   this.authenticatefunction(this.state.username, this.state.password);
  //   this.comp.value = "/home"
  //   console.log('wrong');
  // }
}

handleInputChange = async function(event) {
  //event.preventDefault()
  await this.setState({
      [event.target.name]: event.target.value
  })
  // this.setState({ value: event.target.value })
  this.handleSubmit()  
}
  
  
  render() {
    const {username} = this.state
          const {password} = this.state
    //let comp2 = this.comp;
    return (
      <div id='loginId' >               
      <div className="Login"> 
      <br />
      <br />
      <br />
      <div className="t"><h2> Login </h2></div>
      <div>
      {/* <p>Full name is: {username}  {password}</p> */}

      <form onSubmit={this.handleSubmit}>
      &nbsp;&nbsp;Racf Id :&nbsp;&nbsp;&nbsp; 
      <input type="text" value={username} placeholder=" Racf ID" name='username'  onChange={this.handleInputChange}  size="30"  required ></input>
      <div><br />Password :&nbsp;
      <input type="password" value={password} placeholder="Password" name='password' size ="30" onChange={this.handleInputChange}></input></div>      

       <br />
       <br />        

       <Link to="/SignUp"><button class="button2">Sign Up</button></Link>    
       <Link to ="/home"><button className='button1' value="Login" > Login </button></Link>
       <div><Link to="/ForgotPassword"><button class ="button3">Forgot Password</button></Link></div> 
       </form>  
      
      </div>
      <br/>     
      
      </div>
      </div>
    );

    }
  }
      export default Login2