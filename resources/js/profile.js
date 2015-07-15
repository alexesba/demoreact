var UserImage = React.createClass({
    render: function() {
        return (<div><img src={this.props.image} alt="XXX"className="img-responsive"/></div>);
    }
});
var UserInfo = React.createClass({
  render: function(){
    return (
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#"><UserImage image={this.props.image_url}/></a>
        </div>
        <div id="navbar" className="navbar-collapse collapse">
          <ul className="nav navbar-nav navbar-right">
            <li><a href="#">Settings</a></li>
            <li><a href="#">Help</a></li>
          </ul>
        </div>
      </div>

    );
  }
})
var AppointmentRow = React.createClass({
  render: function(){
    var appointment = this.props.appointment
    return(<tr>
           <td>{appointment.created_at}</td>
           <td>{appointment.start}</td>
           <td>{appointment.physician_name}</td>
           </tr>);
  }
});
var AppointmentTable = React.createClass({
  render: function(){
    var patientList = [];
    this.props.appointments.forEach(function(appointment){
      patientList.push(<AppointmentRow appointment={appointment} key={appointment.id} />);
    }.bind(this));
    return (
      <table>
        <thead>
          <th>Date</th>
          <th>Time</th>
          <th>Doctor Name</th>
        </thead>
        <tbody>{patientList}</tbody>
      </table>
    );
  }
});

var UserProfile = React.createClass({
  render: function(){
    return (
      <div>
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <UserInfo info={this.props.userInfo}/>
        </nav>

        <AppointmentTable appointments={this.props.appointments}/>
      </div>
    );
  }
});
var APPOINTMENTS = [
  {
    "created_at" : "2015-04-21T10:44:51-06:00",
    "end" : "2015-04-24T07:30:00-06:00",
    "id" : 695,
    "patient_id" : 16,
    "physician_id" : 14,
    "start" : "2015-04-24T07:00:00-06:00",
    "updated_at" : "2015-04-21T10:44:51-06:00",
    "patient_name" :"Mike Ross",
    "physician_name" : "Gregory House"
  },
  {
    "created_at" : "2015-04-21T10:44:51-06:00",
    "end" : "2015-04-24T07:30:00-06:00",
    "id" : 696,
    "patient_id" : 17,
    "physician_id" : 13,
    "start" : "2015-04-24T07:00:00-06:00",
    "updated_at" : "2015-04-21T10:44:51-06:00",
    "patient_name" :"Mike Ross",
    "physician_name" : "Alejandro Espinoza"
  }
];

var userInfo = {
  name: "Dr. Jonh",
  email: "jonh@example.com",
  image_url: "https://placeholdit.imgix.net/~text?txt=Profile%20Image&w=150&h=150"
}

React.render(<UserProfile appointments={APPOINTMENTS} userinfo={userInfo}/>, document.body)
