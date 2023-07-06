import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="w-[80%] ml-[17%] mt-[7rem] ">{children}</div>
    </>
  );
}
