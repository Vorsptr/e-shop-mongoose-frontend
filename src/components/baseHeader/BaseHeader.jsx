import { Outlet } from "react-router-dom";
import Navbar from "../../pages/Navbar/Navbar";
import PolicyHeader from "../../pages/policyHeader/PolicyHeader";
import DarkWhite from "./DarkWhiteMode";
export default function BaseHeader() {
  return (
    <>
      <Navbar />
      <Outlet />
      <PolicyHeader />
    </>
  );
}
