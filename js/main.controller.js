'use strict'


function onInit() {
    getBday()
    greetUser()
}

function greetUser(){     
    let storedUserInfo = loadFromStorage(STORAGE_USERKEY)
    if (!storedUserInfo || storedUserInfo === []){
        document.querySelector('.welcome-site-name').innerText = `Welcome ${gUserData.name} To Place Keeper`
        
    }else{
        document.querySelector('.welcome-site-name').innerText = `Welcome ${storedUserInfo.name} To Place Keeper`
    }
}
