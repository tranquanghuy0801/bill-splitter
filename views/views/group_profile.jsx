var React = require("react");
var Default = require("./layout/default")

class Group_Profile extends React.Component {
  render() {
    let url = "/blitt/groupList/"+this.props.group_id+"/groupProfilePost"
    return (
      <Default title={this.props.title} cookieAvailable={this.props.cookieAvailable} user_name={this.props.user_name}>

            {/* <ul class="nav nav-tabs nav-fill" id="myTab" role="tablist">
              <li class="nav-item ">
                  <a class="nav-link active" id="home-tab"  href="/blitt" role="tab" >Personal</a>
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
                  <a class="nav-link" id="details-tab"  href="/blitt/user_profile" role="tab" >Edit Details</a>
              </li>
            </ul> */}
            <h2 style={{textAlign:"center"}}>{this.props.result[0].name}</h2>
            <img className="profile-page-img"src={this.props.result[0].image}/>

            <p className="user-profile-p">Change Profile pic</p>
            <form enctype="multipart/form-data" action={url} method="POST" className="profile-pic-form">
                <div class="form-group">
                    <div class="input-group mb-3">
                        <div class="custom-file">
                            <input type="file" name="myFile" class="custom-file-input" id="inputGroupFile02"/>
                            <label class="custom-file-label" for="inputGroupFile02">Choose file</label>
                        </div>
                        <div class="input-group-append">
                            <input class="input-group-text"type="submit" value="Upload"/>
                        </div>
                    </div>
                </div>
            </form>

      </Default>
    );
  }
}

module.exports = Group_Profile;
