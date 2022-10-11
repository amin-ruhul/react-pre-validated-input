# React Validate Input

## Installation

```
npm i react-pre-validated-input
```

## Usage

```javascript
import { Input } from "react-pre-validated-input";

<Input
  name="Last Name"
  minLen={5}
  validateReg={/^[a-zA-Z]+$/}
  inputChange={(data) => console.log(data)}
/>;
```

## Accepted Props List:

| Name                |       Type       |                               Description |
| :------------------ | :--------------: | ----------------------------------------: |
| name                |      String      |                           name="username" |
| type                |      String      |                 type="text", type="email" |
| isRequired          |     Boolean      |   isRequired={true} or isRequired={false} |
| isDisable           |     Boolean      |     isDisable={true} or isDisable={false} |
| minLen              |     Integer      |                                minLen={0} |
| maxLen              |     Integer      |                               maxLen ={0} |
| validateReg         |      Object      |               validateReg={/^[a-zA-Z]+$/} |
| inputContainerStyle |      Object      |    inputContainerStyle={{padding:"10px"}} |
| inputStyle          |      Object      |            inputStyle={{fontSize:"16px"}} |
| errorStyle          |      Object      |           errorStyle={{background:"red"}} |
| containerClass      | String or Object |                 containerClass="my-class" |
| inputClass          | String or Object |                 containerClass="my-class" |
| errorClass          | String or Object |                 containerClass="my-class" |
| inputChange         |     function     | inputChange={(data) => console.log(data)} |
