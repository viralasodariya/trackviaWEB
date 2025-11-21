import { useEffect } from "react";
import { API_ENDPOINTS } from "../utils/constants";
import apiService from "../api/http";
import { useNavigate } from "react-router-dom";


export default function LoadingScreen() {
    const navigate=useNavigate();

    useEffect(()=>{
        console.log("Loading Screen Mounted");
        const checkBilling=async()=>{
            try{
                const shop=new URLSearchParams(window.location.search).get("shop");
                console.log("Shop parameter:",shop);
                const response=await apiService.get(API_ENDPOINTS.CHECK_BILLING,{ params: { shop } });

                const {billed,plan} =response.data;
                if(billed){
                    navigate('/dashboard')

                }else{
                    navigate('/pricing')
                }

            }catch(error){
                console.error("Error checking billing status:",error);
            }
        }

        checkBilling();
    }, [])

    return(
        <div>
            <h1>Loading...</h1>
        </div>
    )
}