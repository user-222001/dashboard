"use client";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { useUserAuth } from "../../components/UserAuthContext";
import { useRouter } from "next/navigation";

// const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }) {
  const { user } = useUserAuth();
  const router = useRouter();

  return (
    <div className="flex flex-row">
      {user ? (
        <>
          <Navbar />
          <div className="fixed">
            <Sidebar />
          </div>
          <div className="ml-[14%] w-screen  mt-24 p-1">{children}</div>
        </>
      ) : (
        router.push("/login")
      )}
    </div>
  );
}
