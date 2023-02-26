const featurebtn=document.getElementById('m1');
const companybtn=document.getElementById('m2');
const featureblog=document.getElementById('m3');
const companyblog=document.getElementById('m4')
featurebtn.addEventListener('click',()=>{
   if( featureblog.classList.contains('display-none')){
    featureblog.classList.remove('display-none')
   }
   else{
    featureblog.classList.add('display-none')
   }


})
companybtn.addEventListener('click',()=>{
    if( companyblog.classList.contains('display-none')){
     companyblog.classList.remove('display-none')
    }
    else{
     companyblog.classList.add('display-none')
    }
 
 
 })