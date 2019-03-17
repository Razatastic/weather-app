import React, { useState } from "react";
import { Grommet, Form, FormField, TextInput, Button, Box } from "grommet";

const Searchbar = props => {
  // Declare a new state variable, which we'll call "userInput"
  const [userInput, setInput] = useState("");
  // Custom theme
  const customTheme = {
    global: {
      colors: {
        placeholder: "black"
      }
    }
  };

  return (
    <Grommet theme={customTheme}>
      <Box direction="row" pad="medium" className="vertical-center">
        <Form name="search" onSubmit={() => props.handleChange(userInput)}>
          <FormField>
            <TextInput
              onChange={e => setInput(e.target.value)}
              placeholder="Enter your zipcode"
              value={userInput}
            />
          </FormField>
          <Button color="black" type="submit" primary label="Submit" />
        </Form>
      </Box>
    </Grommet>
  );
};

export default Searchbar;
