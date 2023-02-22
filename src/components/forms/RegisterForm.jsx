import { Button, PasswordInput, Stack, Text, TextInput} from "@mantine/core";
import { Link } from "react-router-dom";
const RegisterForm = () => {
  return(
    <form
        style={{
          marginTop: "1rem",
        }}
      >
        <Stack>
          <TextInput label="Your Name" placeholder="Enter your name" />
          <TextInput
            type="email"
            placeholder="jhon@npmart.com"
            label="Your Email"
          />
          <PasswordInput label="password" placeholder="At least 6 character" />
          <PasswordInput label="Confirm Your password" />
          <Button>Continue</Button> 
          <Text>
            By creating an account, you agree to our{" "}
            <Link to='/'>Terms of service</Link> and
            <Link to='/'>Privacy Policy</Link>
          </Text>
        </Stack>
      </form>
  )
};
export default RegisterForm;

