import {useState} from "react";

export default function OneTodo(){
    const [inputContent, setInputContent] = useState("");
    const [data, setData] = useState([]);
    const dataSend = () => {
      if(inputContent !== ""){
        setData((prev)=>[...prev, {content:inputContent, isDone:false, isDelete:false}]);
        setInputContent("");
      }
    }

    return (
        <div className="wrap w-[300px] h-[60vh] relative border-8 border-gray-100 rounded-[30px] bg-white shadow-2xl max-md:w-[100%] max-md:h-[100svh] max-md:rounded-[0] max-md:border-white">
            <h4 className="pt-[30px] pl-[15px] text-2xl font-bold">TODO LIST</h4>
            <div className="min-h-[calc(60vh-135px)] pt-[20px] box-border">
                {data.map(function(data, index){
                    return !data.isDelete ? <div key={index} className="w-[100%] flex justify-between relative px-[10px] mt-[5px] box-border">
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
                            <label htmlFor="" className={`
                              relative pl-[30px] cursor-pointer ${data.isDone ? "line-through text-gray-400" : "text-black"}
                              before:w-[20px] before:h-[20px] before:absolute before:left-0 before:top-0 before:rounded-md before:border-[1px] before:border-gray-400 ${data.isDone ? "before:bg-gray-400" : "before:bg-white"}
                              after:w-[20px] after:h-[20px] after:absolute after:left-0 after:top-0 after:bg-[url('/public/icon_chk_white.svg')] after:bg-cover
                            `}>{data.content}</label>
                        </div>
                        <button type="button" className="
                          w-[25px] h-[25px] text-red-600 text-[13px] border-[1px] border-white rounded-md bg-white
                          hover:shadow-md hover:border-gray-100
                        "
                        onClick={()=>{
                            setData((prev)=>{
                                return prev.map((task, idx)=>
                                  idx === index ? {...task, isDelete: !task.isDelete} : task
                                )
                            });
                        }}
                        >X</button>
                    </div> : null
                })}
            </div>
            <div className="flex items-center justify-center gap-1 pt-[15px] overflow-hidden box-border max-md:w-[100%] max-md:absolute max-md:bottom-0 max-md:py-[15px]">
                <input type="text" className="w-[225px] h-[25px] pl-[8px] rounded-md box-border bg-gray-300 focus:outline-none max-md:w-[75vw] max-md:h-[35px]" value={inputContent} onChange={(e)=>{
                    setInputContent(e.target.value);
                }}
                 onKeyDown={(e)=>{ e.key === "Enter" && dataSend() }}
                />
                <button type="button" className="w-[25px] h-[25px] text-white rounded-md bg-blue-600 max-md:w-[35px] max-md:h-[35px] max-md:text-[18px]" onClick={()=>dataSend()}>↑</button>
            </div>
        </div>
    )
}