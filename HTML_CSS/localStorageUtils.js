/**
 * Function to add favourite list to local storage
 * @param key : unique key to store the values
 * @param  value : actual value to be stor in local storage
 */
 const addToLocalStorage = (key, value) =>{ 
    localStorage.setItem(key, JSON.stringify(value));
}

/**
 * Function to retrieve data from local storage
 * @param  key: unique key retrieve the value
 * @returns value associated with the given key
 */
const getFromLocalStorage =(key) =>{
    return JSON.parse(localStorage.getItem(key))
}

export {addToLocalStorage, getFromLocalStorage}