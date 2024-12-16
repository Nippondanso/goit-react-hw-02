class UseLocalStorage {
	static setValue = (key, value) => {
		window.localStorage.setItem(key, JSON.stringify(value));
	}
	
	static getValue = (key) => {
		return localStorage.getItem(key);
	}
}

export default UseLocalStorage;