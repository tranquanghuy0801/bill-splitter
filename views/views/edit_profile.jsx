var React = require("react");
var Default = require("./layout/default")

class Edit_Profile extends React.Component {
	render() {

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

				<p className="user-profile-p">Edit Profile</p>

				<div className="login-container edit-profile-container">
					<form method="POST" action="/blitt/user_profile/edit_profile">
						<div class="form-group">
							<label for="testInput1">User Name</label>
							<input type="test" class="form-control" id="testInput1" placeholder="Enter Username" name="name" value={this.props.result.name}required/>
						</div>
						<div class="form-group">
							<label for="phone">Phone Number (+61)</label>
							<input type="text" class="form-control"  placeholder="Enter Phone Number (8 digit number)" name="mobile" pattern="[0-9]{10}" value={this.props.result.mobile}required/>
						</div>
						<button type="submit" class="btn btn-primary">Submit</button>
						<a href="/blitt/user_profile" class="btn btn-primary">Back</a>
					</form>

				</div>
			</Default>
		);
	}
}

module.exports = Edit_Profile;
