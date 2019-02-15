import React, { useState } from "react";
import { Form, FormField, TextInput, Button, Box } from "grommet";

const Searchbar = props => {
  // Declare a new state variable, which we'll call "input"
  const [userInput, setInput] = useState("");

  return (
    <Box
      direction="row"
      border={{ color: "brand", size: "large" }}
      pad="medium"
      style={{ backgroundColor: "white" }}
      className="center-stuff"
    >
      <Form name="search" onSubmit={() => props.handleChange(userInput)}>
        <FormField>
          <TextInput
            onChange={e => setInput(e.target.value)}
            placeholder="Enter your zipcode"
            value={userInput}
          />
        </FormField>
        <Button type="submit" primary label="Submit" />
      </Form>
    </Box>
  );
};

export default Searchbar;
