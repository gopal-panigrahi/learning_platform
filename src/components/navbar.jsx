import React, { Component } from "react";
import PersistentLogo from "../res/persistent.png";
import ProfilePhoto from "../res/profile.jpg";
import "./css/navbar.css";

class NavBar extends Component {
    state = {};
    render() {
        return (
            <nav class="navbar navbar-expand-xl navbar-dark">
                <a href="#" class="navbar-brand">
                    <img src={PersistentLogo}></img>
                    <b>PSL University</b>
                </a>
                <button
                    type="button"
                    class="navbar-toggler"
                    data-toggle="collapse"
                    data-target="#navbarCollapse"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div
                    id="navbarCollapse"
                    class="collapse navbar-collapse justify-content-start"
                >
                    <form class="navbar-form form-inline">
                        <div class="input-group search-box">
                            <input
                                type="text"
                                id="search"
                                class="form-control"
                                placeholder="Search here..."
                            ></input>
                            <span class="input-group-addon">
                                <i class="material-icons"></i>
                            </span>
                        </div>
                    </form>
                    <div class="navbar-nav ml-auto">
                        <a href="#" class="nav-item nav-link active">
                            <i class="fa fa-home"></i>
                            <span>Home</span>
                        </a>
                        <a href="#" class="nav-item nav-link">
                            <i class="fa fa-gears"></i>
                            <span>Projects</span>
                        </a>
                        <a href="#" class="nav-item nav-link">
                            <i class="fa fa-users"></i>
                            <span>Team</span>
                        </a>
                        <a href="#" class="nav-item nav-link">
                            <i class="fa fa-pie-chart"></i>
                            <span>Reports</span>
                        </a>
                        <a href="#" class="nav-item nav-link">
                            <i class="fa fa-briefcase"></i>
                            <span>Careers</span>
                        </a>
                        <a href="#" class="nav-item nav-link">
                            <i class="fa fa-envelope"></i>
                            <span>Messages</span>
                        </a>
                        <a href="#" class="nav-item nav-link">
                            <i class="fa fa-bell"></i>
                            <span>Notifications</span>
                        </a>
                        <div class="nav-item dropdown">
                            <a
                                href="#"
                                data-toggle="dropdown"
                                class="nav-item nav-link dropdown-toggle user-action"
                            >
                                <img className="profile"
                                    src={ProfilePhoto}
                                    // class="avatar"
                                    alt="Avatar"
                                ></img>{" "}
                                Hiren Ambekar <b class="caret"></b>
                            </a>
                            <div class="dropdown-menu">
                                <a href="#" class="dropdown-item">
                                    <i class="fa fa-user-o"></i> Profile
                                </a>
                                <a href="#" class="dropdown-item">
                                    <i class="fa fa-calendar-o"></i> Calendar
                                </a>
                                <a href="#" class="dropdown-item">
                                    <i class="fa fa-sliders"></i> Settings
                                </a>
                                <div class="divider dropdown-divider"></div>
                                <a href="#" class="dropdown-item">
                                    <i class="material-icons"></i> Logout
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavBar;
