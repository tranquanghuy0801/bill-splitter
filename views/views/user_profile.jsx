var React = require("react");
var Default = require("./layout/default")

class User_Profile extends React.Component {
  render() {
    let passwordChange = this.props.password ? 
                          <div class="alert alert-success" role="alert">
                            Password change successful.
                          </div>:"";
    let editChange = this.props.edit ? 
                      <div class="alert alert-success" role="alert">
                        Edit profile successful.
                      </div>
                      : "";
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
            <div class="tab-content" id="myTabContent">
              <img className="profile-page-img"src={this.props.result.image}/>

              <br/>
              <form enctype="multipart/form-data" action="/blitt/user_profile/postProfilePic" method="POST" className="profile-pic-form">
                  <h6 className="user-profile-p">Change Profile Picture</h6>
                  <div class="form-group">
                      <div class="input-group mb-3">
                          <div class="custom-file">
                              <label for="inputGroupFile02"/>
                              <input type="file" name="myFile" accept="image/*" id="inputGroupFile02"/>
                          </div>
                          <div class="input-group-append">
                              <input class="input-group-text" type="submit" value="Upload"/>
                          </div>
                      </div>
                  </div>
                  {passwordChange}
                  {editChange}
                  <table className="table table-bordered">
                      <tr>
                          <th scope="row">Name</th>
                          <td>{this.props.result.name}</td>
                      </tr>
                      <tr>
                          <th scope="row">Phone Number</th>
                          <td>{this.props.result.mobile}</td>
                      </tr>
                  </table>
                  <div className="user-page-edit-container">
                      <a className="btn btn-danger" href="/blitt/user_profile/edit_profile">Edit Profile</a>
                      <a className="btn btn-danger delete-button" href="/blitt/user_profile/change_password">Change Password</a>
                  </div>
              </form>
            </div>


      </Default>
    );
  }
}

module.exports = User_Profile;
