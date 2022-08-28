const toastifyElement = document.getElementById("alert");
toastifyElement.style.display="none";

export const toastify = (msg)=>{
    toastifyElement.style.display="flex";
    



        toastifyElement.children[0].innerHTML = msg;
        toastifyElement.children[1].addEventListener("click", () => {
        toastifyElement.style.right = "-100%";
        });
    // setTimeout(function () {
    //   toastifyElement.style.right = "-100%";
    // }, options.time || 3000);

   
    

};
