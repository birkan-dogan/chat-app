const Navbar = function () {
  return (
    <div className="navbar">
      <span className="logo">Chat App</span>
      <div className="user">
        {/* this will come from firestore */}
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt=""
        />
        <span>Birkan</span>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
