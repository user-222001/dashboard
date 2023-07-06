"use client";
import React from "react";
import Login from "./login/page";
import { useUserAuth } from "./../components/UserAuthContext";
import { redirect } from "next/navigation";

const page = () => {
  const { user } = useUserAuth();

  return <div>{user ? redirect("./dashboard") : <Login />}</div>;
};
export default page;
