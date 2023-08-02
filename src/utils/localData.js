export const setLocalData = (code, value) =>{
    localStorage.setItem(code, JSON.stringify(value))
}
export const getLocalData = (code) =>{
    return JSON.parse(localStorage.getItem(code))
}