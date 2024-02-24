import React from "react";
import "../css/signup.css";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const auth = getAuth(app);

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password).then((value) =>
      alert("Success")
    );
  };

  const handleGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      alert("Google Sign-in Success");
    } catch (error) {
      console.error("Google Sign-in Error:", error.code, error.message);
    }
  };
  return (
    <div className="Main">
      <div className="Left"></div>
      <div className="Right">
        <div>
          <Card className="w-96">
            <CardHeader
              variant="gradient"
              color="gray"
              className="mb-4 grid h-28 place-items-center"
            >
              <Typography
                variant="h4"
                fontWeight="normal"
                fontFamily="Montserrat, sans-serif"
                color="white"
              >
                Sign Up
              </Typography>
            </CardHeader>
            <CardBody className="flex flex-col gap-4">
              <Input
                label="Email"
                size="lg"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                required
              />
              <Input
                label="Password"
                size="lg"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                required
              />
              <div className="-ml-2.5">
                <Checkbox label="Remember Me" />
              </div>
            </CardBody>
            <CardFooter className="pt-0">
              <Button onClick={createUser} variant="gradient" fullWidth>
                Sign up
              </Button>
              <Typography variant="small" className="mt-6 flex justify-center">
                Don&apos;t have an account?
                <Typography
                  as="a"
                  href="#signup"
                  variant="small"
                  color="blue-gray"
                  className="ml-1 font-bold"
                  onClick={handleGoogle}
                >
                  Sign up with Google
                </Typography>
              </Typography>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};
