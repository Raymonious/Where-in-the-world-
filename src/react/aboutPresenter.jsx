import { useRecoilState } from "recoil";
import AboutView from "../view/aboutView.jsx";
import { isGrantedAccess } from "../model/atoms.js";
export default function About(){
   const[access] = useRecoilState(isGrantedAccess)
   return <AboutView access = {access}/>
}