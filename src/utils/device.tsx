// 判斷裝置
import { useState, useEffect } from 'react';

function useDevice() {
    const [device, setDevice] = useState("");
    const handleScreen = () => {
        if (window.innerWidth <= 576)
        setDevice("mobile");
        else if (window.innerWidth <= 1280)
        setDevice("pad");
        else
        setDevice("desktop");
    }

    useEffect(()=>{ 
        window.addEventListener('resize',handleScreen);
        handleScreen();
        return(()=>{
            window.removeEventListener('resize',handleScreen);
        })
    },[]);

   
  return device;
}

export default useDevice;