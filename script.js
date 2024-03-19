let input = document.getElementById('input-id');
let button = document.getElementById('but-id');
let success = document.getElementById('success-id');
let alert = document.getElementById('alert-id');
let error = document.getElementById('error-id');


button.addEventListener('click',()=>{
  success.style.display = "none";
  alert.style.display = "none";
  error.style.display = "none";
  if(input.value.includes("@") && input.value.endsWith(".com")){
    success.style.display = 'block'
    input.value = "";
  }
  else{
    alert.style.display = "block";
    error.style.display = "block";
  }
})

