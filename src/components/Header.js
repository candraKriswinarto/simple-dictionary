import { useContext, useState } from "react";
import { InputContext } from "../App";

const Header = () => {
  const [value, setValue] = useState("");
  const { inputValue, setInputValue } = useContext(InputContext);

  const handleInputChange = e => setValue(e.target.value);

  const handleSubmit = () => {
    setInputValue(value);
    setValue("");
  }

  const handleInputKeyDown = (e) => {
    if(e.key === 'Enter') {
      setInputValue(value);
      setValue("")
    }
  }

  return (
    <div className="bg-gray-700">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-center text-white">Simple Dictionary</h1>
        <p className="text-center mt-1 mb-10 text-slate-300 text-lg">Find definisions for word</p>
      
        <div className="flex items-center justify-center mt-5">
          <div className="flex border-2 border-gray-200 rounded">
            <input className="px-4 py-2 md:w-80" type="text" placeholder="Search..." onChange={handleInputChange} value={value} onKeyDown={handleInputKeyDown} />
            <button className="bg-blue-400 border-l px-4 py-2 text-white" onClick={handleSubmit}>Search</button>
          </div>
        </div>

        { inputValue && (
          <h3 className="text-gray-50 text-center mt-4">Result for: <span className="text-white font-bold">{inputValue}</span></h3>
        ) }
      </div>
    </div>
  );
};

export default Header;
