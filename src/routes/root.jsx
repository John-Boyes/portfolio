import Main from "../components/main";
import Navbar from "../components/Navbar";
import { 
    Outlet,
    useNavigation,
 } from "react-router-dom";

export default function Root() {
    const navigation = useNavigation();

    return (
      <>
        <Navbar />
        <div
            id="detail"
            className={
                navigation.state === "loading" ? "loading" : ""
              }
        >
            <Outlet />
        </div>
      </>
    );
  }