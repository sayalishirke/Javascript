
if(window.location.pathname==='/home.html'){
  localStorage.setItem("activelink", "Home")  
}

activelink=localStorage.getItem("activelink");
element=document.getElementById(activelink);
element.classList.add("active");
const links = document.getElementById("list")
if(links!==null){
  links.addEventListener('click', function(e) {
    localStorage.removeItem("activelink")
    localStorage.setItem("activelink", e.target.text)
  },
  ) 
}







    