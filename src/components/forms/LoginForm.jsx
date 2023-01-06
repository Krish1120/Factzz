import React, { useState } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  Container,
  CustomInput,
  CustomRadioInput,
  ErrorMessages,
  RadioBackground,
  RadioContainer,
  SubmitButton,
  Text,
} from "../Styles/StyledUIComponents";
import { useDispatch } from "react-redux";
import { setUserAuthentication } from "../../redux/UserReducer";
import { useNavigate } from "react-router-dom";
import { IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required!"),
  password: Yup.string()
    .min(6, "Too Short!")
    .max(50, "Too Long!")
    .required("Password is required!"),
});

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={loginSchema}
        onSubmit={(values) => {
          dispatch(setUserAuthentication({ isAuthenticated: true }));
          navigate("/");
        }}
      >
        {({ errors, touched, handleChange }) => (
          <Form style={{ width: "100%" }}>
            <Container>
              <CustomInput
                name="email"
                type="email"
                placeholder="Email..."
                onChange={handleChange}
              />
              {errors.email && touched.email ? (
                <ErrorMessages>{errors.email}</ErrorMessages>
              ) : null}
              <CustomInput
                name="password"
                placeholder="Password..."
                type={showPassword ? "text" : "password"}
                onChange={handleChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? (
                        <VisibilityOff sx={{ color: "#bbb" }} />
                      ) : (
                        <Visibility sx={{ color: "#bbb" }} />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
              />
              {errors.password && touched.password ? (
                <ErrorMessages>{errors.password}</ErrorMessages>
              ) : null}
              <SubmitButton type="submit">Login</SubmitButton>
              <Container
                direction="row"
                width="80%"
                justify="space-between"
                Mjustify="space-around"
                Mwidth="100%"
                m="1rem 0"
              >
                <Container direction="row">
                  <Text
                    as="label"
                    htmlFor="keepLoggedin"
                    color="grey"
                    cursor="pointer"
                    m="0 0 0 1.5rem"
                  >
                    Keep Logged in
                    <RadioContainer>
                      <CustomRadioInput
                        type="radio"
                        id="keepLoggedin"
                        value="keepLoggedin"
                      />
                      <RadioBackground className="checkmark" />
                    </RadioContainer>
                  </Text>
                </Container>
                <Text color="grey" cursor="pointer">
                  Forgot Password?
                </Text>
              </Container>
            </Container>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default LoginForm;
