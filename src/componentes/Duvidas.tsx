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
        <div className="">
            <div className="w-full py-4 mx-auto max-w-sm ">            
            {finishedTimeout &&
                        <button className="flex shadow-neutral-100 mr-8">
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
                <div className="bg-gray-700 flex flex-col space-x-1 space-y-2 p-10 justify-center items-center">
                    <a href="https://pepper.com.br/checkout/index.html?p=17026&o=10373" ></a>
                    <h3 className="text-3xl font-bold text-green-800 animate-ping">Quero meu acesso agora</h3>
                </div>             
            </div>
        } 
    </div>

)
}