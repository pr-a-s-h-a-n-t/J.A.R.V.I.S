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

  useEffect(() => {
    localStorage.setItem("playgrounds-data", JSON.stringify(folders));
  }, [folders]);

  const deleteCard = (folderId, cardID) => {
    setFolders((oldState) => {
      const newState = { ...oldState };
      delete newState[folderId].playgrounds[cardID];
      return newState;
    });
  };

  const deleteFolder = (folderId) => {
    setFolders((oldState) => {
      const newState = { ...oldState };
      delete newState[folderId];
      return newState;
    });
  };
  const addFolder = (folderName) => {
    setFolders((oldState) => {
      const newState = { ...oldState };
      newState[uuid()] = {
        title: folderName,
        playgrounds: {},
      };
      return newState;
    });
  };
  const addPlayground = (folderId, playgroundName, language) => {
    setFolders((oldState) => {
      const newState = { ...oldState };
      newState[0].playgrounds[0] = {
        title: playgroundName,
        language: language,
        code: languageMap[language].defaultCode,
      };
      return newState;
    });
  };
  const addPlaygroundAndFolder = (folderName, playgroundName, cardLanguage) => {
    setFolders((oldState) => {
      const newState = { ...oldState };
      newState[uuid()] = {
        title: folderName,
        playgrounds: {
          [uuid()]: {
            title: playgroundName,
            language: cardLanguage,
            code: languageMap[cardLanguage].defaultCode,
          },
        },
      };
      return newState;
    });
  };
  const editFolderTitle = (folderId, newFolderTitle) => {
    setFolders((oldState) => {
      const newState = { ...oldState };
      newState[folderId].title = newFolderTitle;
      return newState;
    });
  };
  const editPlaygroundTitle = (folderId, cardID, newCardTitle) => {
    setFolders((oldState) => {
      const newState = { ...oldState };
      newState[folderId].playgrounds[cardID].title = newCardTitle;
      return newState;
    });
  };
  const savePlayground = (folderId, cardID, newCode, newLanguage) => {
    setFolders((oldState) => {
      const newState = { ...oldState };
      newState[folderId].playgrounds[cardID].code = newCode;
      newState[folderId].playgrounds[cardID].language = newLanguage;
      return newState;
    });
  };
  const PlayGroundFeatues = {
    folders: folders,
    deleteCard: deleteCard,
    deleteFolder: deleteFolder,
    addFolder: addFolder,
    addPlayground: addPlayground,
    addPlaygroundAndFolder: addPlaygroundAndFolder,
    editFolderTitle: editFolderTitle,
    editPlaygroundTitle: editPlaygroundTitle,
    savePlayground: savePlayground,
  };
  return (
    <PlaygroundContext.Provider value={PlayGroundFeatues}>
      {children}
    </PlaygroundContext.Provider>
  );
};

export default PlaygroundProvider;
