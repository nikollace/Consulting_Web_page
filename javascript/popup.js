 // lista svih objekata koji su klase data-modal-target,tj sve nase slike
const openModalButtons=document.querySelectorAll('[data-modal-target]')
// lista svih objekata koji su klase data-close-button,tj svi dugmici za izlazak
const closeModalButtons=document.querySelectorAll('[data-close-button]') 
 // overlay koji posivi pozadinu i onemugucava klikanje na drugu sliku dok je popup aktivan
const overlay=document.getElementById('overlay')

openModalButtons.forEach(button=>{ //za svaku sliku pravimo event listener za klik gde uzimamo njegov modal i pozivamo funkciju openModal()
    button.addEventListener('click', ()=>{ 
        const modal=document.querySelector(button.dataset.modalTarget) 
        openModal(modal) 
    })
})

closeModalButtons.forEach(button=>{ //za svaki dugmic pravimo event listener za klik gde uzimamo njegov modal i pozivamo funkciju closeModal()
    button.addEventListener('click', ()=>{
        const modal=button.closest('.modal')
        closeModal(modal)
    })
})

function openModal(modal) { // za prosledjeni modal (ako nije null) pozivamo ga da bude aktivan tj pojavi se i takodje akiviramo overlay
    if(modal==null) return
    modal.classList.add('active')
    overlay.classList.add('active')

}

function closeModal(modal) { // slicno kao open, samo sto brisemo modal i overlay
    if(modal==null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}