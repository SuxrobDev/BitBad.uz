const addDetectClick = ({setOpen,classes = []}) => {
    window.addEventListener('click', function (e){
        if(!classes.some(item => e.target.classList.contains(item))){
            setOpen(false);
        }
    })
}

const removeDetectClick = () => {
    window.removeEventListener('click', addDetectClick, false);
}

export {addDetectClick,removeDetectClick};