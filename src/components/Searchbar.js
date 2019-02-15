import React, { useState } from "react";
import { Form, FormField, TextInput, Button } from "grommet";
import { FormNextLink } from "grommet-icons";

const Searchbar = props => {
  // Declare a new state variable, which we'll call "input"
  const [userInput, setInput] = useState("");

  return (
    <div className="bar-style">
      <Form name="search" onSubmit={() => props.handleChange(userInput)}>
        <FormField label="Where are you located?">
          <TextInput
            onChange={e => setInput(e.target.value)}
            placeholder="Enter your zipcode"
            value={userInput}
          />
        </FormField>
        <Button type="submit" primary label="Submit" />
      </Form>
    </div>
  );
};

export default Searchbar;
