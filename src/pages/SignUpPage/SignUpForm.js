import {InputContainer} from "./styled";
import { Button, TextField } from "@mui/material";
import useForm from "../../hooks/useForm";
import { Link } from "react-router-dom";

const SignUpForm = () => {
  const [form, onChange, clear] = useForm({ email: "", password: "" , name:""});

  const onSubmitForm = (event) => {
    console.log(form)
    event.preventDefault();
  };

  return (
    <InputContainer>
      <form onSubmit={onSubmitForm}>
      <TextField
          name={"name"}
          value={form.name}
          onChange={onChange}
          label={"Name"}
          variant={"outlined"}
          fullWidth
          margin="normal"
          required
          autoFocus
          
        />
        <TextField
          name={"email"}
          value={form.email}
          onChange={onChange}
          label={"E-mail"}
          variant={"outlined"}
          fullWidth
          margin="normal"
          required
          type={"email"}
        />
        <TextField
          name={"password"}
          value={form.password}
          onChange={onChange}
          label={"Password"}
          variant={"outlined"}
          fullWidth
          margin="normal"
          type={"password"}
          required
        />
        {/* <Link to={'/AdicionarReceitas'}> */}
        <Button
          required
          type={"onSubmit"}
          fullWidth
          variant={"contained"}
          color={"primary"}
        >
          Cadastrar
        </Button>
        {/* </Link> */}
      </form>
    </InputContainer>
  );
};

export default SignUpForm;