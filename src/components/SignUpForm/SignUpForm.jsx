import { Component } from "react";
import { signUp } from "../../utilities/users-service";
import "./SignUpForm.css";

export default class SignUpForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    confirm: "",
    error: "",
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: "",
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const { name, email, password } = this.state;
      const formData = { name, email, password };
      // The promise returned by the signUp service
      // method will resolve to the user object included
      // in the payload of the JSON Web Token (JWT)
      const user = await signUp(formData);
      this.props.setUser(user);
    } catch {
      // An error occurred
      // Probably due to a duplicate email
      this.setState({ error: "Sign Up Failed - Try Again" });
    }
  };

  render() {
    const disable = this.state.password !== this.state.confirm;

    return (
      <>
        <div className='container'>
          <div className='form-container sign-in-container'>
            <form autoComplete='off' onSubmit={this.handleSubmit}>
              <h1>Sign Up</h1>
              <label>Name</label>
              <input
                type='text'
                name='name'
                value={this.state.name}
                onChange={this.handleChange}
                required
              />
              <label>Email</label>
              <input
                type='email'
                name='email'
                value={this.state.email}
                onChange={this.handleChange}
                required
              />
              <label>Password</label>
              <input
                type='password'
                name='password'
                value={this.state.password}
                onChange={this.handleChange}
                required
              />
              <label>Confirm</label>
              <input
                type='password'
                name='confirm'
                value={this.state.confirm}
                onChange={this.handleChange}
                required
              />
              <button type='submit' disabled={disable}>
                SIGN UP
              </button>
            </form>
          </div>
          <div className='overlay-container'>
            <div className='overlay'>
              <div className='overlay-panel overlay-left'></div>
              <div className='overlay-panel overlay-right'>
                <h1>Sign Up Now!</h1>
                <p>
                  Enter your personal details and start exploring the
                  marketplace!
                </p>
                <button className='ghost' onClick={this.props.toggleSignUp}>
                  {this.props.showSignUp ? "Sign Up" : "Sign Login"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
