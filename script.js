import{getJSON} from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.0/api.js";
import{renderHTML} from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.0/element.js";

getJSON ("http://t.if.co.id/714240060/",null,null,responseFunction);
renderHTML("root", "home.html");

function renderDatadariJson(){
    getJSON("http://t.if.co.id/json/bagus.json","coba","coba lagi", responseFunction)
}
console.log("renderDatadariJson", renderDatadariJson());

function responseFunction(response){
    if(response.status === 200) {
       console.log('HTTP Status:', response.status);
       console.log('Response Data:', response.data);
    
    }else{
        console.error("Eror fetching data:", response
        )
    }

   

}
