var React = require("react");
var Default = require("./layout/default")

class Change_Password extends React.Component {
  render() {
    let alertPassword = this.props.oriPassword?<div class="alert alert-secondary" role="alert">
  Somewhere is wrong!
</div>:"";
    return (
      <Default title={this.props.title} cookieAvailable={this.props.cookieAvailable} user_name={this.props.user_name}>
            <ul class="nav nav-tabs nav-fill" id="myTab" role="tablist">
              <li class="nav-item ">
                <a class="nav-link" id="home-tab"  href="/blitt" role="tab" >Personal</a>
              </li>
              <li class="nav-item ">
                <a class="nav-link" id="profile-tab"  href="/blitt/groupList" role="tab" >Group</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="contact-tab"  href="/blitt/friendList" role="tab" >Friends</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="activity-tab"  href="/blitt/activityList" role="tab" >Activity</a>
              </li>
              <li class="nav-item ">
                <a class="nav-link active" id="details-tab"  href="/blitt/user_profile" role="tab" >Edit Details</a>
              </li>
            </ul>
            <br/>
            <img className="profile-page-img"src={this.props.result.image}/>

            <p className="user-profile-p">Change Password</p>
            <div className="login-container edit-profile-container">
                {alertPassword}
                <form method="POST" action="/blitt/user_profile/change_password">
                    <div class="form-group">
                        <label for="exampleInputPassword3">Old Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword3" placeholder="Password" name="oldPassword" required/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" name="password" required/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword2">Confirm Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword2" placeholder="Confirm Password" name="confirmPassword" required/>
                    </div>
                    <input type="password" name="originalPassword" value={this.props.result.password}  hidden/>
                    <button type="submit" class="btn btn-primary">Submit</button>
                    <a href="/blitt/user_profile" class="btn btn-primary">Back</a>
                </form>

            </div>


      </Default>
    );
  }
}

module.exports = Change_Password;
