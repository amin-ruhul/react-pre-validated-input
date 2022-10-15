import Input from "./lib/components/Input";
import { Select } from "./lib";

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
        type="textarea"
        validateReg={/^[a-zA-Z]+$/}
        inputChange={(data) => console.log(data)}
      />

      <Select
        placeholder="Select city"
        selectOptions={[{ label: "a", value: "a" }]}
      />
    </div>
  );
}

export default App;
