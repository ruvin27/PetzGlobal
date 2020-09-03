import React, { Component } from "react";
import { Navbar, Dropdown} from "react-bootstrap";
import "./css/appointments.css";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import events from "./event";
import { Link } from "react-router-dom";
import { FcMenu } from "react-icons/fc";
import { logoutUser } from "../../actions/authActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);

export class Schedule extends Component {
  constructor(...args) {
    super(...args)

    this.state = { events }
  }

  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })




  handleSelect = ({ start, end }) => {
    const title = window.prompt('New Event name')
    if (title)
      this.setState({
        events: [
          ...this.state.events,
          {
            start,
            end,
            title,
          },
        ],
      })
  }
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

 

  render() {
    return (
      <div>
        <div>
          <Navbar style={{ background: "#201e4d" }}>
            <Link to="/dashboard">
            <FontAwesomeIcon
              icon={faPaw}
              size="3x"
              style={{ color: "#fff" }}
            ></FontAwesomeIcon>
            <Navbar.Brand
              className="nav_brand"
              style={{ color: "#fff", fontSize: "40px" }}
            >
              PetzGlobal
            </Navbar.Brand>
            </Link>
            <button
              
              onClick={this.onLogoutClick}
              className="btn waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </button>
          </Navbar>
        </div>

        
             

        <h3
          style={{
            background: "#FFAE33",
            padding: "15px",
            margin: "auto",
            marginTop: "10px",
            marginBottom:"15px",
            maxWidth: "80%",
            textAlign: "left",
          }}
        >
        
         <Dropdown>
            <Dropdown.Toggle variant="" id="dropdown-basic" style={{fontSize: "25px" , fontWeight: 'bold'}}>
              <FcMenu size="35px" />Schedule 
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="approve_appoinment">Approve Appoinment</Dropdown.Item>
              <Dropdown.Item href="add_appoinment">Add Appoinment</Dropdown.Item>
              <Dropdown.Item href="appointments">My Appoinments</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        
        </h3>
        
        {/* Calendar comes here */}
        <div className="Scheduler">
          <DnDCalendar
            selectable
            localizer={localizer}
            events={this.state.events}
            defaultView="month"
            onSelectEvent={event => alert(event.title)}
            onSelectSlot={this.handleSelect}
            resizable
            style={{ height: "75vh", width: "80vw", margin: "auto" }}
          />
          
          
        </div>
      </div>
    );
  }
}


Schedule.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Schedule);
