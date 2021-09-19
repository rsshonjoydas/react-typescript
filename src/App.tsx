import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import "./styles.css";

const App = () => {
  const personName = {
    first: "Shonjoy",
    last: "Das",
  };

  const nameList = [
    {
      first: "Bruce",
      last: "Wayne",
    },
    {
      first: "Clark",
      last: "Kent",
    },
    {
      first: "Princess",
      last: "Diana",
    },
  ];

  return (
    <>
      <Greet name="RS" messageCount={20} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
    </>
  );
};

export default App;
