const STORAGE_USERKEY = 'userData'

let gUserData = {
    name: 'New User',
    email: '',
    age: 18,
    bgColor: '#000000',
    txtColor: '#000000',
    bDay: '1990-10-29',
    bTime: '21:21'
}

function onSaveUserInfo(ev){
    ev.preventDefault()
    gUserData.name = document.querySelector('.user-name').value
    gUserData.email = document.querySelector('.email').value
    gUserData.age = document.querySelector('.age').value
    gUserData.bgColor = document.querySelector('.bg-color').value
    gUserData.txtColor = document.querySelector('.txt-color').value
    gUserData.bDay = document.querySelector('.date').value
    gUserData.bTime = document.querySelector('.time').value
    console.log('gUserData:', gUserData)
    
    saveToStorage(STORAGE_USERKEY, gUserData)
}

function onSetAge(val){
    gUserData.age = val     
    document.querySelector('.age-num').innerText = val
    //saveToStorage(STORAGE_USERKEY, gUserData)
}


function onGetUserInfo(){
    let storedUserInfo = loadFromStorage(STORAGE_USERKEY)
    if (!storedUserInfo || storedUserInfo === []) return
    renderUserFromStorage(storedUserInfo)
}

function onGetAppColor(btn, color) {
    let elBackgroundColor = document.querySelector('.bg-color')
    let elTextColor = document.querySelector('.txt-color')

    if (elBackgroundColor.name === btn) {
        document.body.style.backgroundColor = color
        gUserData.bgColor = color
    }
    if (elTextColor.name === btn) {
        document.body.style.color = color
        gUserData.txtColor = color
    }

    //saveToStorage(STORAGE_USERKEY, gUserData)
}

function onChangeTime(time) {
    gUserData.bTime = time
    //saveToStorage(STORAGE_USERKEY, gUserData)
}

function onChangeDate(date) {
    gUserData.bDay = date
    //saveToStorage(STORAGE_USERKEY, gUserData)
}



function renderUserFromStorage(currUserData){
    
    document.querySelector('.user-name').value = currUserData.name
    document.querySelector('.email').value = currUserData.email
    document.querySelector('.age').value = currUserData.age
    document.querySelector('.bg-color').value = currUserData.bgColor
    document.querySelector('.txt-color').value = currUserData.txtColor
    document.querySelector('.date').value = currUserData.bDay
    document.querySelector('.time').value = currUserData.bTime
    document.querySelector('.age-num').innerText = currUserData.age
    document.body.style.backgroundColor = currUserData.bgColor
    document.body.style.color = currUserData.txtColor
}

function getBday(){
    let storedUserInfo = loadFromStorage(STORAGE_USERKEY)
    if (!storedUserInfo || storedUserInfo === []) return
    let currUserData = loadFromStorage(STORAGE_USERKEY)    
    let bDay = currUserData.bDay.split('-')
    
    var myBirthday, today, bday, diff, days;
    myBirthday = [+bDay[2],+bDay[1]]; // 6th of February
    
    today = new Date();
    bday = new Date(today.getFullYear(),myBirthday[1]-1,myBirthday[0]);
    if( today.getTime() > bday.getTime()) {
        bday.setFullYear(bday.getFullYear()+1);
    }
    diff = bday.getTime()-today.getTime();
    days = Math.floor(diff/(1000*60*60));
    alert(`${days} hours until ${currUserData.name}'s birthday!`);
}

function onReturnToMain(ev){
    ev.preventDefault()
    location.href='index.html'
}