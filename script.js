const ligarMenu = 1;
const desligarMenu = 0;
let headerOn =0;
function openHeader(){
    if(headerOn==0){
        document.documentElement.style.setProperty('--header-opacity', ligarMenu);
        headerOn=1;
    }
    else{
        document.documentElement.style.setProperty('--header-opacity', desligarMenu);
        headerOn=0;
    }
}