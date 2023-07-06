"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useUserAuth } from "./UserAuthContext";

const Navbar = () => {
  const { user, logOut } = useUserAuth();

  const router = useRouter();

  return (
    <header className="bg-white shadow-lg h-[5rem]  md:flex fixed top-0 w-full z-50">
      <img
        onClick={() => router.push("./")}
        className="cursor-pointer w-44 object-contain border flex-shrink-0 flex items-center justify-center px-4 lg:px-6 xl:px-8"
        src="https://streamsss.com/wp-content/themes/streamsss/assets/images/logo/logo-head.png"
        alt=""
      />

      <nav className="header-links contents font-semibold text-base lg:text-lg">
        <ul className="flex items-center ml-4 xl:ml-8 mr-auto">
          <li className="p-3 xl:p-6 active">
            <Link href="/dashboard">
              <span>Home</span>
            </Link>
          </li>
        </ul>
      </nav>

      <div className="border flex items-center px-4 lg:px-6 xl:px-8">
        <button
          onClick={() => router.push("/create-post")}
          className="mr-1 bg-black hover:bg-gray-700 text-white font-bold px-4 xl:px-6 py-2 xl:py-3 rounded"
        >
          Add Todo
        </button>

        {user ? (
          <>
            <button
              onClick={() => logOut()}
              className="bg-red-400 hover:bg-gray-700 text-white font-bold px-4 xl:px-6 py-2 xl:py-3 rounded"
            >
              signOut
            </button>
          </>
        ) : null}
      </div>
      <div className="dropdown dropdown-end border flex items-center px-4 lg:px-6 xl:px-8">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src="https://static.vecteezy.com/system/resources/previews/020/911/731/original/profile-icon-avatar-icon-user-icon-person-icon-free-png.png" />
          </div>
        </label>
        <div
          tabIndex={0}
          className="mt-36 p-2  dropdown-content bg-white shadow-xl rounded-lg w-72"
        >
          <>
            <div>
              {user ? (
                <div className="flex flex-col gap-3 p-5">
                  <p>{user.name}</p>
                  <p> {user.email}</p>
                  <button
                    onClick={() => router.push("/profile")}
                    className="btn btn-outline btn-primary"
                  >
                    Profile
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => signIn()}
                  className="btn btn-outline btn-primary"
                >
                  Login
                </button>
              )}
            </div>
          </>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
