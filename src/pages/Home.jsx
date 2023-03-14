import { useRef } from "react";
import Chat from "../components/chat/Chat";
import Sidebar from "../components/chat/Sidebar";

const Home = function () {
  const element = useRef(null);

  return (
    <div className="home">
      <div className="container" ref={element}>
        <Sidebar element={element} />
        <Chat element={element} />
      </div>
    </div>
  );
};

export default Home;
