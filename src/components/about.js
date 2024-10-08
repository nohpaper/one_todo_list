import {useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { changeAll } from '../store/data.js';

export default function DetailPage(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();
    const data = useSelector((state)=> state.data.items );
    const findData = data.find((data)=> data.id === Number(params.id));
    
    const [currentData, setCurrentData] = useState({
        title:findData.title,
        content:findData.content,
        isDone:findData.isDone,
    });

  return (
    <div
      className="wrap w-[300px] h-[60vh] relative border-8 border-gray-100 rounded-[30px] overflow-auto bg-white shadow-2xl max-md:w-[100%] max-md:h-[100svh] max-md:rounded-[0] max-md:border-white">
      <NavLink to="/" className="w-[50%] block mt-[10px] ml-[15px] text-[20px]">←</NavLink>
        <form action="">
          <div className="flex items-start justify-between gap-[5px] pt-[5px] px-[15px]">
            <textarea name="" id="" required className="min-w-[224px] text-2xl font-bold rounded-md resize-none outline-offset-4 focus:outline-blue-600" value={currentData.title} onChange={(e)=>{
                setCurrentData((prev)=>({...prev, title:e.target.value}));
            }} onKeyDown={(e)=>{e.key === "Enter" && e.preventDefault();}}></textarea>
          </div>
          <div className="pt-[15px] px-[15px]">
            <input type="checkbox" id="0" checked={currentData.isDone} onChange={()=>{
                setCurrentData((prev)=>({...prev, isDone:!prev.isDone}));
            }} className="absolute top-0 left-0 opacity-0" />
            <label htmlFor="0" className={`
              h-[20px] relative block pl-[30px] cursor-pointer text-[10px] ${currentData.isDone ? "text-gray-400" : "text-white"}
              before:w-[20px] before:h-[100%] before:absolute before:left-0 before:top-0 before:rounded-md before:border-[1px] before:border-gray-400 ${currentData.isDone ? "before:bg-gray-400" : "before:bg-white"}
              after:w-[20px] after:h-[100%] after:absolute after:left-0 after:top-0 after:bg-[url('/public/icon_chk_color.svg')] after:bg-cover
            `}>완료했어요!</label>
          </div>
          <div className="pt-[30px] px-[15px] text-right">
            <textarea name="" id="" rows="10" value={currentData.content} onChange={(e)=>{
                setCurrentData((prev)=>({...prev, content:e.target.value}));
            }}
            className="w-[100%] rounded-md outline-1 outline outline-offset-4 outline-gray-400 resize-none"></textarea>
            <button type="submit" className="px-[10px] py-[3px] mt-[5px] rounded-md text-white text-[14px] bg-blue-600" onClick={()=>{
                navigate("/"); //list로 이동
                //입력 값 저장
                dispatch(changeAll({ index:Number(params.id), title:currentData.title, content:currentData.content, isDone:currentData.isDone }));
            }}>SAVE</button>
          </div>
        </form>
    </div>
  )
}