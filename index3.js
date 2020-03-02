const fname=document.querySelector("#firstname");
const button=document.querySelector("#btn");
button.addEventListener("click",function()
{
    showing.textContent=fname.value;
}
);

const showing=document.querySelector("#show");

