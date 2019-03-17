import React, { useState } from "react";
import { Form, FormField, TextInput, Button, Box, ThemeContext } from "grommet";

const Searchbar = props => {
  // Declare a new state variable, which we'll call "input"
  const [userInput, setInput] = useState("");

  return (
    <Box direction="row" pad="medium" className="vertical-center">
      <Form name="search" onSubmit={() => props.handleChange(userInput)}>
        <FormField>
          {/* Override Grommet theme for TextInput component */}
          <ThemeContext.Extend
            value={{
              global: { colors: { placeholder: "black", border: "black" } }
            }}
          >
            <TextInput
              onChange={e => setInput(e.target.value)}
              placeholder="Enter your zipcode"
              value={userInput}
            />
          </ThemeContext.Extend>
        </FormField>
        <Button color="black" type="submit" primary label="Submit" />
      </Form>
    </Box>
  );
};

export default Searchbar;
