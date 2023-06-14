let button = document.querySelector("button").addEventListener("click", function(){
     let inputURL=document.querySelector("input").value;
     fetch(inputURL)
     .then(res=>res.blob())
     .then(blob => {
          const url = URL.createObjectURL(blob);
          const a= document.createElement("a");
          a.href=url;
          a.download="image";
          document.body.appendChild(a);
          a.click()
          document.body.removeChild(a);
          URL.revokeObjectURL(url)

     } )
    
})