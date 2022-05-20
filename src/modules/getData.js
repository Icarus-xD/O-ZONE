const getData = (str) => {
    return fetch(`https://o-zone-9f14a-default-rtdb.firebaseio.com/goods.json`)
        .then(response => response.json());
};

export default getData