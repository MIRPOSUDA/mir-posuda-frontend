import { Outlet } from "react-router-dom";
import MPNavbar from "../components/MPNavbar";
import MPFooter from "../components/MPFooter";
function RootLayout() {
  return (
    <div className="base-container flex h-full flex-col">
      <MPNavbar />
      <main className="grow">
        <Outlet />
      </main>
      <MPFooter />
    </div>
  );
}

export default RootLayout;
