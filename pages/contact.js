import React, { useState } from "react";
import NavBarLayout from "../layouts/NavBarLayout";
import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  CircularProgress,
  Text,
  InputGroup,
  InputRightElement,
  Icon,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import Button from "../components/custom/Button";
import ErrorMessage from "../components/custom/ErrorMessage";
import { InputField } from "../components/custom/InputField";
import Head from "next/head";

export default function Contact() {
  const shadow = useColorModeValue(
    "0px 5px 5px 0px rgba(0, 0, 0, 0.2)",
    "0px 0px 2px 2px rgba(0, 0, 0, 0.2)"
  );
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsLoading(true);

    try {
      setIsLoggedIn(true);
      setIsLoading(false);
      setShowPassword(false);
    } catch (error) {
      setError("Invalid username or password");
      setIsLoading(false);
      setEmail("");
      setPassword("");
      setShowPassword(false);
    }
  };

  return (
    <NavBarLayout>
      <Head>
        <title>Contact - Aymen Ben Zlaouia</title>
      </Head>
      <Flex align="center" justify="center" w="100%">
        <Flex
          width="70%"
          borderWidth={0}
          borderRadius={8}
          shadow={shadow}
          direction={{ base: "column", md: "row" }}
        >
          <Stack
            p={8}
            w={{ base: "100%", md: "40%" }}
            borderRightWidth={{ base: 0, md: 1 }}
          >
            {isLoggedIn ? (
              <Box textAlign="center">
                <Text>{email} logged in!</Text>
                <Button
                  variantColor="orange"
                  variant="outline"
                  width="full"
                  mt={4}
                  onClick={() => setIsLoggedIn(false)}
                >
                  Sign out
                </Button>
              </Box>
            ) : (
              <>
                <Box textAlign="center">
                  <Heading>Write Me</Heading>
                </Box>
                <Box my={4} textAlign="left">
                  <form onSubmit={handleSubmit}>
                    {error && <ErrorMessage message={error} />}
                    <InputField
                      isRequired
                      label="Name"
                      placeholder="Full Name"
                      size="lg"
                      variant="flushed"
                      onChange={(event) =>
                        setPassword(event.currentTarget.value)
                      }
                    />
                    <InputField
                      isRequired
                      label="Email"
                      mt={6}
                      size="lg"
                      placeholder="Example@example.com"
                      variant="flushed"
                      onChange={(event) => setEmail(event.currentTarget.value)}
                    />
                  </form>
                </Box>
              </>
            )}
          </Stack>
          <Flex
            w={{ base: "100%", md: "60%" }}
            direction="column"
            justifyContent="space-between"
          >
            <InputField
              textarea
              rows="13"
              size="lg"
              maxLength="700"
              px={{ base: 8, md: 2 }}
              borderWidth={0}
              height="100%"
              placeholder="Write Message..."
              focusBorderColor="transparent"
              variant="flushed"
              onChange={(event) => setEmail(event.currentTarget.value)}
            />
            <Button
              borderRadius={0}
              borderBottomLeftRadius={{ base: 8, md: 0 }}
              borderBottomRightRadius={8}
              colorScheme="red"
              bg="red.500"
              variant="solid"
              type="submit"
            >
              {isLoading ? (
                <CircularProgress isIndeterminate size="24px" color="teal" />
              ) : (
                "SUBMIT"
              )}
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </NavBarLayout>
  );
}
