console.log('added');
// Define Variable
const getTitle = document.getElementById('title');
// define Function
function toggleId(){
    if(window.innerWidth<760){
        if(getTitle.id=== "title"){
            getTitle.id="hamburger";
        }else{
            getTitle.id="title";
        }
    }

};

getTitle.addEventListener('click',toggleId);
