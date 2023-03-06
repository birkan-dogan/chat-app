import Chats from "./Chats";
import Navbar from "./Navbar";
import Search from "./Search";

const Sidebar = function () {
  return (
    <div className="sidebar">
      <Navbar />
      <Search />
      <Chats />
    </div>
  );
};

export default Sidebar;
