localStorage.getItem("activelink")
  const links = document.getElementById("list")
if(links!==null){
  links.addEventListener('click', function(e) { 
    
    const elementsLi = document.querySelectorAll('a.active')
    
    if (elementsLi.length>0){
      elementsLi[0].classList.remove("active")
    }
    // activelink=localStorage.getItem("activelink")
    // element=document.getElementById(activelink)
    
    e.target.classList.add("active")
    localStorage.setItem("activelink",document.getElementsByClassName("active")[0].innerHTML)
    //localStorage.setItem("activelink", e.target.text)
    // e.target.classList.remove("active")

    //localStorage.setItem("activelinkclasses", e.target.classList)
    
    
  },
  )

}


// const links = document.getElementById("list")
// if(links!==null){
//   links.addEventListener('click', function(e) { 
    
//     const elementsLi = document.querySelectorAll('a.active')
    
//     if (elementsLi.length>0){
//       elementsLi[0].classList.remove("active")
//     }
//     // activelink=localStorage.getItem("activelink")
//     // element=document.getElementById(activelink)
    
//     e.target.classList.add("active")
    
//     localStorage.setItem("activelink", e.target.text)
//     // e.target.classList.remove("active")

//     //localStorage.setItem("activelinkclasses", e.target.classList)
    
    
//   },
//   )
// }

// window.onload=(e)=>{
//  // const x = document.getElementsByClassName("active")[0].innerHTML
//   localStorage.setItem("activelink",document.getElementsByClassName("active")[0].innerHTML)
//   xyz()
// activelink=localStorage.getItem("activelink"),
// classes=localStorage.getItem("activelinkclasses")
// element=document.getElementById(activelink)
// element.classList.add("active")

// }



// // activelink=localStorage.getItem("activelink"),
// // classes=localStorage.getItem("activelinkclasses")
// // element=document.getElementById(activelink)
// // element.classList.add("active")







    