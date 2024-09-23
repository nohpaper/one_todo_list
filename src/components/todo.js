import {useState} from "react";

export default function OneTodo(){
    const [inputContent, setInputContent] = useState("");
    const [data, setData] = useState([]);

    /** TODO::
     *      1. enter 입력 시 input value send
     *      2. input focus css
     *      3. delete 기능
     * */
    return (
        <div className="wrap w-[300px] h-[60vh] border-8 border-gray-100 rounded-[30px] bg-white shadow-2xl">
            <h4 className="pt-[30px] pl-[15px] text-2xl font-bold">TODO LIST</h4>
            <div className="min-h-[calc(60vh-135px)] pt-[20px] box-border">
                {data.map(function(data, index){
                    return <div key={index} className="w-[100%] flex justify-between relative px-[10px] mt-[5px] box-border">
                        <div>
                            <input type="checkbox" id={index} checked={data.isDone}
                             className="absolute top-0 left-0 opacity-0"
                             onChange={(e)=>{
                                //데이터 변경
                                setData((prev)=>{
                                    return prev.map((task, idx) =>
                                      //index & idx가 같을 경우 값 변경
                                      idx === index ? {...task, isDone: !task.isDone} : task
                                    )
                                });
                            }}/>
                            <label htmlFor={index} className={`
                              relative pl-[30px] cursor-pointer ${data.isDone ? "line-through text-gray-400" : "text-black"}
                              before:w-[20px] before:h-[20px] before:absolute before:left-0 before:top-0 before:rounded-md before:border-[1px] before:border-gray-400 ${data.isDone ? "before:bg-gray-400" : "before:bg-white"}
                              after:w-[20px] after:h-[20px] after:absolute after:left-0 after:top-0 after:bg-[url('/public/icon_chk_white.svg')] after:bg-cover
                            `}>{data.content}</label>
                        </div>
                        <button type="button" className="
                          w-[25px] h-[25px] text-red-600 text-[13px] border-[1px] border-white rounded-md bg-white
                          hover:shadow-md hover:border-gray-100
                        ">X</button>
                    </div>
                })}
            </div>
            <div className="flex items-center justify-center gap-1 pt-[15px] overflow-hidden">
                <input type="text" className="w-[225px] h-[25px] rounded-md bg-gray-300" value={inputContent} onChange={(e)=>{
                    setInputContent(e.target.value);
                }}/>
                <button type="button" className="w-[25px] h-[25px] text-white rounded-md bg-blue-600" onClick={()=>{
                    if(inputContent !== ""){
                        setData((prev)=>[...prev, {content:inputContent, isDone:false, isDelete:false}]);
                        setInputContent("");
                    }
                }}>↑</button>
            </div>
        </div>
    )
}