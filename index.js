console.log('added');
// Define Variable
const getTitle = document.getElementById('title');
const countImage = document.querySelectorAll('.background')
let index=0;
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
const changeImage = function(){
    countImage[index].classList.remove('active');
    index=index+1;
    if(index<countImage.length){
        countImage[index].classList.add('active');
    }else {
        index = 0;
        countImage[index].classList.add('active');
    }
}

getTitle.addEventListener('click',toggleId);

setInterval(changeImage,3000);