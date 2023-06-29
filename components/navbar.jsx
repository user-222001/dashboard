"use client";
import React from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const { data: session } = useSession();
  console.log(session);
  const router = useRouter();

  return (
    <header className="bg-white shadow-lg h-[5rem]  md:flex fixed top-0 w-full z-50">
      <img
        onClick={() => router.push("/")}
        className="cursor-pointer w-44 object-contain border flex-shrink-0 flex items-center justify-center px-4 lg:px-6 xl:px-8"
        src="https://streamsss.com/wp-content/themes/streamsss/assets/images/logo/logo-head.png"
        alt=""
      />

      <nav className="header-links contents font-semibold text-base lg:text-lg">
        <ul className="flex items-center ml-4 xl:ml-8 mr-auto">
          <li className="p-3 xl:p-6 active">
            <Link href="/profile" className="">
              <span>Home</span>
            </Link>
          </li>
          <li className="p-3 xl:p-6">
            <Link href="">
              <span>Services</span>
            </Link>
          </li>
          <li className="p-3 xl:p-6">
            <Link href="">
              <span>About</span>
            </Link>
          </li>

          <li className="p-3 xl:p-6">
            <Link href="">
              <span>Contacts</span>
            </Link>
          </li>
          <li className="p-3 xl:p-6">
            <Link href="" className="flex items-center">
              <span>Pages</span>
              <svg
                className="h-3 opacity-30 ml-2 svg-inline--fa fa-chevron-down fa-w-14 fa-7x"
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="chevron-down"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M441.9 167.3l-19.8-19.8c-4.7-4.7-12.3-4.7-17 0L224 328.2 42.9 147.5c-4.7-4.7-12.3-4.7-17 0L6.1 167.3c-4.7 4.7-4.7 12.3 0 17l209.4 209.4c4.7 4.7 12.3 4.7 17 0l209.4-209.4c4.7-4.7 4.7-12.3 0-17z"
                ></path>
              </svg>
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

        {session ? (
          <>
            <button
              onClick={() => router.push("/profile")}
              className="mr-1 bg-black hover:bg-gray-700 text-white font-bold px-4 xl:px-6 py-2 xl:py-3 rounded"
            >
              Profile
            </button>
            <button
              onClick={() => signOut()}
              className="bg-red-400 hover:bg-gray-700 text-white font-bold px-4 xl:px-6 py-2 xl:py-3 rounded"
            >
              signOut
            </button>{" "}
          </>
        ) : (
          <>
            <button
              onClick={() => signIn()}
              className="mr-1 bg-black hover:bg-gray-700 text-white font-bold px-4 xl:px-6 py-2 xl:py-3 rounded"
            >
              SignIn
            </button>
            <button
              onClick={() => signOut()}
              className="bg-black hover:bg-gray-700 text-white font-bold px-4 xl:px-6 py-2 xl:py-3 rounded"
            >
              SignUp
            </button>
          </>
        )}
      </div>
      <div className="dropdown dropdown-end border flex items-center px-4 lg:px-6 xl:px-8">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            {session ? (
              <img src={session.user.image} alt="" />
            ) : (
              <img src="https://static.vecteezy.com/system/resources/previews/020/911/731/original/profile-icon-avatar-icon-user-icon-person-icon-free-png.png" />
            )}
          </div>
        </label>
        <div
          tabIndex={0}
          className="mt-36 p-2  dropdown-content bg-white shadow-xl rounded-lg w-72"
        >
          <>
            <div>
              {session ? (
                <div className="flex flex-col gap-3 p-5">
                  <p>{session.user.name}</p>
                  <p> {session.user.email}</p>
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
