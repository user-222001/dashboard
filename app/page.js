"use client";
import Login from "./login/page";
import { useUserAuth } from "./../components/UserAuthContext";

export default function Home() {
  const { user } = useUserAuth();
  return (
    <div className="">
      {user ? <a href="/dashboard">go to dashboard</a> : <Login />}
    </div>
  );
}
