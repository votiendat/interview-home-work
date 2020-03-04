import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
    <div class="container-fluid">
        <div class="row no-gutter">
            <div class="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
            <div class="col-md-8 col-lg-6">
                <div class="login d-flex align-items-center py-5">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-9 col-lg-8 mx-auto">
                                <img src={require("../../assets/images/zigvy-logo.svg")} class="img-fluid " alt="logo" />
                                <div class="login-heading h3 mb-4">Welcome back!</div>
                                <form method="POST" action="">
                                    <div class="form-label-group">
                                        <input type="email" id="inputEmail" name="inputEmail" class="form-control"
                                            placeholder="Email address" required autofocus />
                                        <label for="inputEmail">Email address</label>
                                    </div>

                                    <div class="form-label-group">
                                        <input type="password" id="inputPassword" name="inputPassword" class="form-control"
                                            placeholder="Password" required />
                                        <label for="inputPassword">Password</label>
                                    </div>

                                    <div class="custom-control custom-checkbox mb-3">
                                        <input type="checkbox" class="custom-control-input" id="customCheck1" />
                                        <label class="custom-control-label" for="customCheck1">Remember password</label>
                                    </div>
                                    <button
                                        class="btn btn-lg btn-block btn-login text-light text-uppercase font-weight-bold mb-2"
                                        type="submit">Sign in</button>
                                    <div class="text-center">
                                        <a class="small text-danger" href="/">Forgot password?</a></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}
}

export default Login;
