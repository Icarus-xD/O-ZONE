import getData from "./getData";
import postData from "./postData";

const second = () => {
    const cartBtn = document.getElementById('cart');

    getData().then(json => console.log(json));
};

export default second;