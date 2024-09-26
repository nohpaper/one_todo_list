import { NavLink, useNavigate } from "react-router-dom";

export default function DetailPage(){
  const navigate = useNavigate();

  return (
    <div
      className="wrap w-[300px] h-[60vh] relative border-8 border-gray-100 rounded-[30px] overflow-auto bg-white shadow-2xl max-md:w-[100%] max-md:h-[100svh] max-md:rounded-[0] max-md:border-white">
      <NavLink to="" onClick={() => {navigate(-1)}} className="w-[50%] block mt-[10px] ml-[15px] text-[20px]">←</NavLink>
      <div className="flex items-start justify-between gap-[5px] pt-[5px] px-[15px]">
        <textarea name="" id="" className="min-w-[224px] text-2xl font-bold rounded-md resize-none outline-offset-4 focus:outline-blue-600" onKeyDown={(e)=>{e.key === "Enter" && e.preventDefault();}}></textarea>
      </div>
      <div className="pt-[15px] px-[15px]">
        <input type="checkbox" id="0" className="absolute top-0 left-0 opacity-0"/>
        <label htmlFor="0" className={`
          h-[20px] relative block pl-[30px] cursor-pointer text-[10px] text-gray-400
          before:w-[20px] before:h-[100%] before:absolute before:left-0 before:top-0 before:rounded-md before:border-[1px] before:border-gray-400 before:bg-white
          after:w-[20px] after:h-[100%] after:absolute after:left-0 after:top-0 after:bg-[url('/public/icon_chk_white.svg')] after:bg-cover
        `}>완료했어요!</label>
      </div>
      <div className="pt-[30px] px-[15px] text-right">
        <textarea name="" id="" rows="10" className="w-[100%] rounded-md outline-1 outline outline-offset-4 outline-gray-400 resize-none"></textarea>
        <button type="button" className="px-[10px] py-[3px] mt-[5px] rounded-md text-white text-[14px] bg-blue-600">SAVE</button>
      </div>
    </div>
  )
}