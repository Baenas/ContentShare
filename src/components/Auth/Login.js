import React, { Component } from 'react'

class Login extends Component {
  render() {
    return (

      <div className="">
        <div className="jumbotron">
          <h1 className="display-4">ContentShare</h1>
          <p className="lead"> Just share </p>
        </div>
        <div className="container">
          <div className="row">

            <div className=" login-container  ">
              <div className="card text-white bg-light mb-3" >
                <div className="card-header text-secondary   ">LOGIN</div>
                <div className="card-body">
                  <div className="form-group">
                    <small id="emailHelp" className="form-text text-muted">Enter your username</small>

                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username" />
                  </div>
                  <hr></hr>
                  <div className="form-group">
                    <small id="emailHelp" className="form-text text-muted">Enter your password</small>

                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter password" />
                  </div>
                </div>
                <button type="submit" className="btn btn-secondary">Enter</button>
              </div>
            </div>

          </div>
        </div>
      </div>

    )
  }
}
export default Login