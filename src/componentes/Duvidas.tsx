import { useState } from "react";
import React from "react";

export function Duvidas() {
  const [finishedTimeout, setFinishedTimeout] = React.useState(false);
  React.useEffect(() => {
    const id = setTimeout(() => {
      setFinishedTimeout(true);
    }, 60000);

    return () => clearTimeout(id);
  }, []);

    return (
        <div>        
        <div >
            <div className="pt-4 justify-center items-center flex flex-1 space-x-1 space-y-2">            
            {finishedTimeout &&
                        <button className="flex shadow-neutral-100 ">
                            <a
                                href="https://pepper.com.br/checkout/index.html?p=17026&o=10373"
                                className="  min-w-[320px]  max-w-[480px] shadow flex justify-center py-4 border animate-bounce border-transparent text-lg font-semibold rounded-lg text-white bg-green-800 hover:bg-blue-900"
                            >
                                QUERO MEU ACESSO AGORA!
                            </a>                
                        </button>                        
                    }            
            </div>            
        </div>        
        {finishedTimeout &&
            <div>
                <div className="bg-gray-700 flex flex-col space-x-1 space-y-2 p-4 justify-center items-center">
                    <a href="https://pepper.com.br/checkout/index.html?p=17026&o=10373" ></a>
                    <h3 className="text-2xl font-bold text-green-800 animate-ping text-center">Quero meu acesso <br/>AGORA!!!</h3>
                </div>             
            </div>
        } 
    </div>

)
}