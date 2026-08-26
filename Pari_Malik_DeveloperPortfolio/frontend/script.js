const menuToggle=document.getElementById("menuToggle");
const navMenu=document.getElementById("navMenu");
if(menuToggle&&navMenu){
  menuToggle.addEventListener("click",()=>{const open=navMenu.classList.toggle("open");menuToggle.setAttribute("aria-expanded",open)});
  navMenu.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>navMenu.classList.remove("open")));
}
const form=document.getElementById("contactForm");
const statusEl=document.getElementById("formStatus");
const submitBtn=document.getElementById("submitBtn");
if(form){
 form.addEventListener("submit",async(event)=>{
  event.preventDefault(); statusEl.textContent="";
  const data=Object.fromEntries(new FormData(form).entries());
  Object.keys(data).forEach(k=>data[k]=data[k].trim());
  if(data.name.length<2||!data.email||!data.subject||data.message.length<10){statusEl.textContent="Please complete all fields correctly.";return}
  submitBtn.disabled=true;submitBtn.textContent="Sending...";
  const API_BASE=window.PORTFOLIO_API_BASE||"http://localhost:5000";
  try{
    const response=await fetch(`${API_BASE}/api/contact`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(data)});
    const result=await response.json(); if(!response.ok)throw new Error(result.message||"Unable to send");
    statusEl.textContent=result.message; form.reset();
  }catch(error){statusEl.textContent="The contact service is unavailable. Please try again later."}
  finally{submitBtn.disabled=false;submitBtn.textContent="Send Message"}
 });
}
