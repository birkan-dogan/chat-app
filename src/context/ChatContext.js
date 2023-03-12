import { createContext, useContext, useReducer } from "react";
import { useAuthContext } from "./AuthContext";

const ChatContext = createContext();

const ChatContextProvider = function ({ children }) {
  const { currentUser } = useAuthContext();

  const INITIAL_STATE = {
    chatId: "null",
    user: {},
  };

  // creating reducer
  const chatReducer = (state, action) => {
    switch (action.type) {
      case "Change_user":
        return {
          user: action.payload,
          chatId: currentUser.uid + action.payload.uid,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE);

  return (
    <ChatContext.Provider value={{ data: state, dispatch }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChatContext = function () {
  return useContext(ChatContext);
};

export default ChatContextProvider;
