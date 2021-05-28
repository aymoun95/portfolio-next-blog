import React, { useState } from "react";
import NavBarLayout from "../layouts/NavBarLayout";
import {
  Flex,
  Box,
  Heading,
  CircularProgress,
  Text,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import Button from "../components/custom/Button";
import ErrorMessage from "../components/custom/ErrorMessage";
import { InputField } from "../components/custom/InputField";
import Head from "next/head";
import { validateField } from "../utils/helpers";
import { EMAIL_REGEX, NAME_REGEX } from "../utils/regex";
import animatedEmail from "../animations/email.json";
import Lottie from "../components/custom/Lottie";

export default function Contact() {
  const shadow = useColorModeValue(
    "0px 5px 5px 0px rgba(0, 0, 0, 0.2)",
    "0px 0px 2px 2px rgba(0, 0, 0, 0.2)"
  );
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isNameInvalid, setIsNameInvalid] = useState(false);
  const [isEmailInvalid, setIsEmailInvalid] = useState(false);
  const [isMessageInvalid, setIsMessageInvalid] = useState(false);

  const checkFields = () => {
    const emailValidation = !validateField(email, EMAIL_REGEX);
    const nameValidation = !validateField(name, NAME_REGEX);
    const messageValidation = message === "";
    setIsEmailInvalid(emailValidation);
    setIsNameInvalid(nameValidation);
    setIsMessageInvalid(messageValidation);

    return emailValidation || nameValidation || messageValidation;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    let data = {
      name,
      email,
      message,
    };

    if (checkFields()) {
      return;
    }
    setIsLoading(true);
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.status === 200) {
          setSubmitted(true);
          setEmail("");
          setMessage("");
        }
        if (res.status === 403) {
          setError("Please fill out all fields.");
        }
        if (res.status === 406) {
          setError("Please fill the fields with correct info.");
        }
      })
      .catch((e) => {
        setSubmitted(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <NavBarLayout>
      <Head>
        <title>Contact - Aymen Ben Zlaouia</title>
      </Head>
      <Flex align="center" justify="center" w="100%" mb={3}>
        <Flex
          width={{ base: "80%", md: "70%" }}
          borderWidth={0}
          borderRadius={8}
          shadow={shadow}
          direction={{ base: "column", md: "row" }}
        >
          {submitted ? (
            <Flex
              direction="column"
              alignItems="center"
              textAlign="center"
              m={6}
              w="90%"
              h={300}
              p={2}
            >
              <Heading mb={3} color="red.500">
                {name}
              </Heading>
              <Heading>Thank you for sending the email</Heading>
              <Text>Check the blog from time to time to learn new things</Text>
              <Lottie animation={animatedEmail} />
            </Flex>
          ) : (
            <>
              <Stack
                p={8}
                w={{ base: "100%", md: "40%" }}
                borderRightWidth={{ base: 0, md: 1 }}
              >
                <Box textAlign="center">
                  <Heading>Write Me</Heading>
                </Box>
                <Box my={4} textAlign="left">
                  {error && <ErrorMessage message={error} />}
                  <InputField
                    isRequired
                    isInvalid={isNameInvalid}
                    label="Name"
                    value={name}
                    placeholder="Full Name"
                    size="lg"
                    variant="flushed"
                    onChange={(event) => {
                      setName(event.target.value);
                    }}
                    onBlur={() =>
                      setIsNameInvalid(
                        !validateField(name, NAME_REGEX) && name !== ""
                      )
                    }
                    id="name"
                  />
                  <InputField
                    isRequired
                    isInvalid={isEmailInvalid}
                    label="Email"
                    value={email}
                    mt={6}
                    size="lg"
                    placeholder="Example@example.com"
                    variant="flushed"
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                    onBlur={() =>
                      setIsEmailInvalid(
                        !validateField(email, EMAIL_REGEX) && email !== ""
                      )
                    }
                    id="email"
                  />
                </Box>
              </Stack>
              <Flex
                w={{ base: "100%", md: "60%" }}
                direction="column"
                justifyContent="space-between"
              >
                <InputField
                  textarea
                  isInvalid={isMessageInvalid}
                  rows="13"
                  size="lg"
                  maxLength="700"
                  value={message}
                  px={{ base: 8, md: 2 }}
                  borderWidth={0}
                  height="100%"
                  placeholder="Write Message..."
                  focusBorderColor="transparent"
                  variant="flushed"
                  onChange={(event) => setMessage(event.target.value)}
                  onBlur={() => setIsMessageInvalid(message === "")}
                />
                <Button
                  borderRadius={0}
                  borderBottomLeftRadius={{ base: 8, md: 0 }}
                  borderBottomRightRadius={8}
                  colorScheme="red"
                  bg="red.500"
                  variant="solid"
                  type="submit"
                  onClick={handleSubmit}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <CircularProgress
                      isIndeterminate
                      size="24px"
                      color="teal"
                    />
                  ) : (
                    "SUBMIT"
                  )}
                </Button>
              </Flex>{" "}
            </>
          )}
        </Flex>
      </Flex>
    </NavBarLayout>
  );
}
