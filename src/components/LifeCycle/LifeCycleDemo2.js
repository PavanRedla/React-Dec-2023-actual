import React, { Component } from "react";

export default class LifeCycleDemo2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1,
      userInfo: {},
    };
  }
  fetchUserData = async (id) => {
    let resp = await fetch(
      `https://jsonplaceholder.typicode.com/users/${this.state.id}`
    );
    let userInfo = await resp.json();
    this.setState({ userInfo: userInfo });
  };
  increment = () => {
    this.setState({ id: this.state.id + 1 });
  };
  componentDidMount() {
    this.fetchUserData(this.state.id); // this will be called when the component is rendered or mounted for the first time.
  }
  componentDidUpdate() {
    this.fetchUserData(this.state.id); // this will be called everytime when we change the state means when we click the increment button. Because componentDidUpdate() function gets called everytime the state gots changed and component gets rerendered.
  }
  render() {
    return (
      <>
        <h2>
          User Id is {this.state.id} and plz check console for the details of
          this user
        </h2>
        <button onClick={this.increment}>increment</button>
        <hr />

        <div className="col-sm-3">
          <div className="card text-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREZNQ6Pte02JNcAfeti0b-oiumHtdNOkXQrCZp7bfQYuxe44LbbaIN0MccovXN04stLDg&usqp=CAU"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{this.state.userInfo?.name}</h5>
              <p className="card-text">Email : {this.state.userInfo?.email}</p>
              <p className="card-text">Address : {this.state.userInfo?.city}</p>
              <p className="card-text">Phone : {this.state.userInfo?.phone}</p>
              <a href="#" className="btn btn-primary">
                Details
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}
