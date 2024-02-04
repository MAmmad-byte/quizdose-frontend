import { Box, Heading, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import PageLayout from "../components/PageLayout";
import ShadowBox from "../components/ShadowBox";
import { isMod, validateUser } from "../services/authServices";
// import { Link } from "react-router-dom";
import TextBoxSkeleton from "../components/sekeleton/TextBoxSkeleton";
import userServices from "../services/userServices";

export default function Users() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    if (!isMod()) window.location = "/";
    else {
      fetchUsers();
    }
  }, []);
  async function fetchUsers() {
    setLoading(true);
    try {
      const response = await userServices.fetchAllUsers();
      setUsers(response.data);
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  }
  return (
    <Box
      minHeight={"calc(100vh - 30px)"}
      pt={70}
      pb={10}
      width="100%"
      bg={"#244743"}
    >
      <PageLayout
        styles={{
          width: "100%",
        }}
      >
        <ShadowBox style={{ backgroundColor: "#244743" }}>
          <Heading as={"h2"}>All Users</Heading>
          {error
            ? !(users.length > 0) && (
                <Text color={"red"}>
                  Error! Failed to fetch users. Contact Support
                </Text>
              )
            : null}
          {users.length > 0 &&
            users.map((user) => (
              //   <Link key={user._id} to={`/user/user/${user._id}`}>
              <ShadowBox
                key={user._id}
                style={{ marginTop: "20px", backgroundColor: "#244743" }}
              >
                <Text fontSize={15} fontWeight={600}>
                  Name: {user.firstName} {user.lastName}
                </Text>
                <Text color={"#ffb409"} fontSize={15} fontWeight={600}>
                  Email: {user.email}
                </Text>
              </ShadowBox>
              //   </Link>
            ))}
          {loading && (
            <>
              <TextBoxSkeleton /> <TextBoxSkeleton />
              <TextBoxSkeleton />
            </>
          )}
        </ShadowBox>
      </PageLayout>
    </Box>
  );
}
