import { createContext, useState, useEffect } from "react";
import { v4 as uuid } from "uuid";

export const PlaygroundContext = createContext();

export const languageMap = {
  cpp: {
    id: 54,
    defaultCode:
      "#include <iostream>\n" +
      "using namespace std;\n\n" +
      "int main() {\n" +
      '\tcout << "Hello World!";\n' +
      "\treturn 0;\n" +
      "}",
  },
  java: {
    id: 62,
    defaultCode: `public class Main {
            public static void main(String[] args) {
                System.out.println("Hello World!");
            }
    }`,
  },
  python: {
    id: 71,
    defaultCode: `print("Hello World")`,
  },
  javascript: {
    id: 63,
    defaultCode: `console.log(" ❤️ "  ) `,
    //  ----------------------------------- //
  },
};

const PlaygroundProvider = ({ children }) => {
  const initialItems = {
    // [uuid()]: {
    [0]: {
      title: "DSA",
      playgrounds: {
        // [uuid()]: {
        [0]: {
          title: "Stack imp",
          language: "cpp",
          code: languageMap["cpp"].defaultCode,
        },
        // [uuid()]: {
        [1]: {
          title: "Array",
          language: "javascript",
          code: languageMap["javascript"].defaultCode,
        },
      },
    },
  };

  const [folders, setFolders] = useState(() => {
    let localData = localStorage.getItem("playgrounds-data");
    if (localData === null || localData === undefined) {
      return initialItems;
    }
    return JSON.parse(localData);
  });
 
  const savePlayground = (folderId, cardID, newCode, newLanguage) => {
    setFolders((oldState) => {
      const newState = { ...oldState };
      newState[folderId].playgrounds[cardID].code = newCode;
      newState[folderId].playgrounds[cardID].language = newLanguage;
      return newState;
    });
  };
  const PlayGroundFeatues = {
    
    savePlayground: savePlayground,
  };
  return (
    <PlaygroundContext.Provider value={PlayGroundFeatues}>
      {children}
    </PlaygroundContext.Provider>
  );
};

export default PlaygroundProvider;
