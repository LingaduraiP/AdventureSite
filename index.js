// Selecting Elements

const selectElement=(s)=>document.querySelector(s)

// Open The menu onclidk
selectElement('.open').addEventListener('click',()=>{
    selectElement('.nav_list').classList.add('active')
})
// Close The menu onclidk
selectElement('.close').addEventListener('click',()=>{
    selectElement('.nav_list').classList.remove('active')
})