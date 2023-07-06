"use client";
import Login from "./login/page";
import { useUserAuth } from "./../components/UserAuthContext";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const { user } = useUserAuth();
  return <div>{user ? router.push("/dashboard") : <Login />}</div>;
};
export default page;
