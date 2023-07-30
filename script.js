const hiddenBarIcon = document.getElementById('hidden-bar');
const dropDownMenu = document.getElementById('drop-down');

hiddenBarIcon.onclick = function(){
    dropDownMenu.classList.toggle("open");
}
