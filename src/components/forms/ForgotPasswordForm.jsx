import { Button, Stack, TextInput} from "@mantine/core";
import { Link } from "react-router-dom";
const ForgotPasswordForm= () => {
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
          <Button>Continue</Button> 
          <Text>
            Remember your password? <Link to='/'>Login here</Link>         </Text>
         
        </Stack>
      </form>
  )
};
export default ForgotPasswordForm;

