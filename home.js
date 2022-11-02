
const links = document.getElementById("list")
if(links!==null){
  links.addEventListener('click', function(e) { 
    
    const elementsLi = document.querySelectorAll('a.active')
    
    if (elementsLi.length>0){
      elementsLi[0].classList.remove("active")
    }
    
    
    e.target.classList.add("active")
    
    localStorage.setItem("activelink", e.target.text)
    

    localStorage.setItem("activelinkclasses", e.target.classList)
    
    
  },
  )

}






activelink=localStorage.getItem("activelink"),
classes=localStorage.getItem("activelinkclasses")
element=document.getElementById(activelink)
element.classList.add("active")







    