import User from "./User";
import UserClass from "./UserClass";
const About = () => {
  return (
    <div>
      <h1>About us</h1>
      <div>This is react course about page</div>
      <User name={"Harshdeep"} />
      <UserClass name={"Harsh"} />
    </div>
  );
};

export default About;
