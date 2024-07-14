import "./topbar.css";
import {Search, Person, Chat, Notifications} from "@mui/icons-material";
import { NavLink } from "react-router-dom";
export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <NavLink className="logo" to="/home">Facebook</NavLink>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <NavLink className="topbarLink" to="/home">Home</NavLink>
          <NavLink className="topbarLink" to="/timeline">Timeline</NavLink>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            {newFunction()}
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <NavLink to="/profile">
        <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
        </NavLink>      
      </div>
      <NavLink className="sign_out" to="/login"><div className="signout">Sign-out</div></NavLink>
      
    </div>
  );

  function newFunction() {
    return <span className="topbarIconBadge">2</span>;
  }
}
