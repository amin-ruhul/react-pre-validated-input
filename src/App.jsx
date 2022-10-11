import Input from "./lib/components/Input";

function App() {
  const inputStyle = {
    padding: "30px",
  };

  return (
    <div>
      <h1>Validate Input</h1>
      <Input
        name="First Name"
        minLen={5}
        isDisable={true}
        inputChange={(data) => console.log(data)}
      />
      <Input
        name="Last Name"
        minLen={5}
        validateReg={/^[a-zA-Z]+$/}
        inputChange={(data) => console.log(data)}
      />
      <Input
        type="email"
        name="email"
        minLen={5}
        inputChange={(data) => console.log(data)}
      />
    </div>
  );
}

export default App;
