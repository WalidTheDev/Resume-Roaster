const RoastForm = () => {
    return (
        <>
            <div className="bg-gray-900 text-white h-screen flex justify-center items-center">
                <div className=" w-[80vw] bg-gray-900 h-auto py-10 rounded-2xl  border border-transparent hover:border-2 hover:border-white ">   {/*  form card*/}
                    <form className=" flex flex-col items-center gap-9">
                        <h1 className="font-bold text-center text-4xl text-blue-300">
                            Roast My Resume
                        </h1>

                        {/* charcater selection div drop down */}
                        <div className="flex flex-col items-start w-full max-w-md">
                            <label htmlFor="character" className="text-white mb-1">Choose a character (who is roasting?):</label>
                            <select id="character" name="character" defaultValue="" className="border px-4 text-white bg-gray-800 py-2 rounded w-full">
                                <option value="" disabled>Select character</option>
                                <option value="hr">HR</option>
                                <option value="friend">Friend</option>
                                <option value="senior">Senior Developer</option>
                                <option value="manager">Manager</option>
                            </select>
                        </div>

                        {/* Roast Type Selection */}
                        <div className="flex flex-col items-start w-full max-w-md">
                            <label htmlFor="roastType" className="text-white mb-1">Select roast style:</label>
                            <select id="roastType" name="roastType" defaultValue="" className="border px-4 py-2 rounded w-full text-white bg-gray-800">
                                <option value="" disabled>Select roast type</option>
                                <option value="constructive">Constructive Criticism</option>
                                <option value="light">Light Roast</option>
                                <option value="dark">Dark Roast</option>
                                <option value="sarcastic">Sarcastic</option>
                            </select>
                        </div>

                        {/* File Upload */}
                        <div className="flex flex-col items-start w-full max-w-md">
                            <label htmlFor="resume" className="text-white mb-1">Upload your resume:</label>
                            <input id="resume" type="file" className="border px-4 py-2 rounded w-full text-white bg-gray-800" />
                        </div>

                        {/* Submit Button */}
                        <button type="submit" className="shadow bg-blue-100 text-black p-2 rounded-md">
                            Submit the form
                        </button>

                    </form>
                </div>
            </div>
            

        </>
    );
};

export default RoastForm;