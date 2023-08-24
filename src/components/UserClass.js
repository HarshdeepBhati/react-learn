import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy User",
        location: "Default",
        bio: "Dummy Bio",
        avatar_url: "dummy",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/HarshdeepBhati");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }
  render() {
    const { name, location, bio, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url}></img>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h3>Profile: {bio}</h3>
      </div>
    );
  }
}

export default UserClass;
