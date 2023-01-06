const observedObject = document.querySelector('.#');
const actionObject = document.querySelectorAll('.#');
// const speed = 300;

const observerOptions ={ 
    root:null,
    threshold: 1.0, 
    // rootMargin:
}

 const releventFunc = () => clientdivs.forEach(div => {
    //Write logic for what will happen to actionObject when observedObject is observed...
})

//Intersection observer to see when observedObject is in view
const observer = new IntersectionObserver((entries, observer ) => {
    entries.forEach(entry => {
        if (entry.isIntersecting){
        console.log(entry.target)
        releventFunc()
        }    
    })
    
   }
 , observerOptions)

//Call the observe function on the observed object
numcountObserver.observe(posts)
 