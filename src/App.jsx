import { useState } from "react"
function App() {

  // const [resume , setResume] = useState("");
  // const api = import.meta.env.VITE_GEMINI_API_KEY;
  // function handleSubmit(e){

  // }

  const handleSubmit = (e) => {
      e.preventDefault();

  }

  return (
    <>
      {/* <h1>Resume Roaster , {api}</h1> */}
      <div className="w-[100vw] h-[100vh] bg-gray-300 flex justify-center items-center">
        <div className="from-card w-[80vw] bg-gray-700 h-auto py-10 rounded-2xl p-5 border-5 border-black">

          <form className="flex flex-col items-center gap-4">
            <h1 className="font-bold text-center text-2xl text-blue-300">
              Roast My Resume
            </h1>

            <select id="cars" name="cars" defaultValue="Select Value" className="border px-4 py-2 rounded">
              <option disabled>Select Value</option>
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="fiat">Fiat</option>
              <option value="audi">Audi</option>
            </select>

            <input type="file" className="border px-4 py-2 rounded" />

            <select id="cars" name="cars" defaultValue="Select Value" className="border px-4 py-2 rounded">
              <option disabled>Select Value</option>
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="fiat">Fiat</option>
              <option value="audi">Audi</option>
            </select>
            <button onClick={handleSubmit} className="shadow bg-blue-100 p-2 rounded-md">Submit the form</button>
            
            <div className="w-[80%] border h-12">

            </div>
          </form>

        </div>
      </div>

    </>
  )
}

export default App
/*

*/