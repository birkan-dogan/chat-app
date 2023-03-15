import Chats from "./Chats";
import Navbar from "./Navbar";
import Search from "./Search";

const Sidebar = function ({ element }) {
  return (
    <div className="sidebar">
      <Navbar />
      <Search />
      <Chats element={element} />
    </div>
  );
};

export default Sidebar;
