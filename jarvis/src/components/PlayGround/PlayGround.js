import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { PlaygroundContext, languageMap } from "../../contex/EditorContext";

import { Buffer } from "buffer";
import axios from "axios";
import Navbar from "../NavBar";
import EditContainer from "../../components/Editor/EditContainer";
import InputConsole from "../../components/Editor/InputScreen";
import OutputConsole from "../../components/Editor/OutputScreen";

function PlayGround() {
  const { folderId, playgroundId } = useParams();
  const { folders, savePlayground } = useContext(PlaygroundContext);

  const [currentInput, setCurrentInput] = useState("");
  const [currentOutput, setCurrentOutput] = useState("");
  const [isFullScreen, setIsFullScreen] = useState(false);

  /*

playground error fix
*/
  const languageMap = {
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
      defaultCode: `console.log("Hii  Coder ") `,
      //  ----------------------------------- //
    },
  };

  const [title, setTitle] = useState("Array");
  const [language, setLanguage] = useState("javascript");
  const [code, setCode] = useState(languageMap["javascript"].defaultCode);

  const [currentLanguage, setCurrentLanguage] = useState(language);
  const [currentCode, setCurrentCode] = useState(code);

  /*============== end  ========================*/

  const saveCode = () => {
    savePlayground(folderId, playgroundId, currentCode, currentLanguage);
  };

  const encode = (str) => {
    return Buffer.from(str, "binary").toString("base64");
  };
  const decode = (str) => {
    return Buffer.from(str, "base64").toString();
  };
  // code, language, input -> token
  const postSubmission = async (language_id, source_code, std_in) => {
    const options = {
      method: "POST",
      url: "https://judge0-ce.p.rapidapi.com/submissions",
      params: { base64_encoded: true, fields: "*" },
      headers: {
        "content-type": "application/json",
        "Content-Type": "application/json",
        "X-RapidAPI-Key": "b4e5c5a05fmsh9adf6ec091523f8p165338jsncc58f31c26e1",
        "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
      },
      data: JSON.stringify({
        language_id: language_id,
        source_code: source_code,
        std_in: std_in,
      }),
    };
    const res = await axios.request(options);
    return res.data.token;
  };

  const getOutput = async (token) => {
    const options = {
      method: "GET",
      url: "https://judge0-ce.p.rapidapi.com/submissions/" + token,
      params: { base64_encoded: true, fields: "*" },
      headers: {
        "X-RapidAPI-Key": "3ed7a75b44mshc9e28568fe0317bp17b5b2jsn6d89943165d8",
        "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
      },
    };

    const res = await axios.request(options);
    if (res.data.status_id <= 2) {
      const res2 = await getOutput(token);
      return res2.data;
    }
    return res.data;
  };

  const runCode = async () => {
    const language_id = languageMap[currentLanguage].id;
    const source_code = encode(currentCode);
    const std_in = encode(currentInput);

    const token = await postSubmission(language_id, source_code, std_in);
    const res = await getOutput(token);

    const status_name = res.status.description;
    const decoded_output = decode(res.stdout ? res.stdout : "");
    const decoded_compile_output = decode(
      res.compile_output ? res.compile_output : ""
    );
    const decoded_error = decode(res.stderr ? res.stderr : "");
    let final_output = "";
    if (res.status_id !== 3) {
      if (decoded_compile_output === "") {
        final_output = decoded_error;
      } else {
        final_output = decoded_compile_output;
      }
    } else {
      final_output = decoded_output;
    }
    setCurrentOutput(status_name + "\n\n" + final_output);
  };

  function readFileContent(file) {
    const reader = new FileReader();
    return new Promise((resolve, reject) => {
      reader.onload = (event) => resolve(event.target.result);
      reader.onerror = (err) => reject(err);
      reader.readAsText(file);
    });
  }
  const placeFileContent = (file, setState) => {
    readFileContent(file)
      .then((content) => {
        setState(content);
      })
      .catch((err) => console.log(err));
  };
  const getFile = (e, setState) => {
    const input = e.target;
    if ("files" in input && input.files.length > 0) {
      placeFileContent(input.files[0], setState);
    }
  };
  return (
    <div>
      <Navbar isFullScreen={isFullScreen} />
      <div className="flex flex-row h-full">
        <div className={`${isFullScreen ? "w-full" : "w-3/4"}`}>
          <EditContainer
            title={title}
            currentLanguage={currentLanguage}
            setCurrentLanguage={setCurrentLanguage}
            currentCode={currentCode}
            setCurrentCode={setCurrentCode}
            folderId={folderId}
            playgroundId={playgroundId}
            saveCode={saveCode}
            runCode={runCode}
            isFullScreen={isFullScreen}
            setIsFullScreen={setIsFullScreen}
            getFile={getFile}
            currentInput={currentInput}
            setCurrentInput={setCurrentInput}
          />
        </div>
        {!isFullScreen && (
          <div className="w-1/4">
            <InputConsole
              getFile={getFile}
              currentInput={currentInput}
              setCurrentInput={setCurrentInput}
            />
            <OutputConsole currentOutput={currentOutput} />
          </div>
        )}
        {/* {isOpenModal.show && <Modal />} */}
      </div>
    </div>
  );
}

export default PlayGround;
