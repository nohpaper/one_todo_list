import {useState} from "react";

export default function OneTodo(){
    const [inputContent, setInputContent] = useState("");
    const [data, setData] = useState([]);

    /** TODO::
     *      1. checkbox value=true 되면 data value change
     * */
    return (
        <div className="wrap w-[300px] h-[60vh] border-8 border-gray-100 rounded-[30px] bg-white shadow-2xl">
            <h4 className="pt-[30px] pl-[15px] text-2xl font-bold">TODO LIST</h4>
            <div className="min-h-[calc(60vh-135px)] bg-amber-100">
                {data.map(function(data, index){
                    return <div>
                        <input type="checkbox" id={index} value={data.isDone} checked={!data.isDone} onChange={(e)=>{
                            console.log(e.target.value)
                            console.log(data)
                            //setData((prev)=>[...prev, {isDone:!prev}])
                        }}/>
                        <label htmlFor={index}>{data.content}</label>
                    </div>
                })}
            </div>
            <div className="flex items-center justify-center gap-1 pt-[15px]">
                <input type="text" className="w-[225px] h-[25px] rounded-md bg-gray-300" value={inputContent} onChange={(e)=>{
                    setInputContent(e.target.value);
                }}/>
                <button type="button" className="w-[25px] h-[25px] text-white rounded-md bg-blue-600" onClick={()=>{
                    if(inputContent !== ""){
                        setData((prev)=>[...prev, {content:inputContent, isDone:false}]);
                        setInputContent("");
                    }
                }}>↑</button>
            </div>
        </div>
    )
}