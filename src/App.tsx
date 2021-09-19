import Button from "./components/Button";
import Container from "./components/Container";
import Box from "./components/context/Box";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import User3 from "./components/context/User3";
import { UserContextProvider } from "./components/context/UserContext";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Input from "./components/Input";
import Oscar from "./components/Oscar";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Counter from "./components/state/Counter";
import LoggedIn from "./components/state/LoggedIn";
import User from "./components/state/User";
import User2 from "./components/state/User2";
import Status from "./components/Status";
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
      <Status status="loading" />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicpario</Heading>
      </Oscar>
      <hr />
      <Button
        handleClick={(event, id) => {
          console.log("Button clicked", event, id);
        }}
      />
      <hr />
      <Input handleChange={(event) => console.log(event)} />
      <hr />
      <Container styles={{ border: "1px solid cyan", padding: "1rem" }} />
      <hr />
      <LoggedIn />
      <hr />
      <User />
      <hr />
      <User2 />
      <hr />
      <Counter />
      <hr />

      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <hr />

      <UserContextProvider>
        <User3 />
      </UserContextProvider>
    </>
  );
};

export default App;
