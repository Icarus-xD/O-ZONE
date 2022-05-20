export const searchFilter = (goods, value) => {
    return goods.filter(goodsItem => goodsItem.title.toLowerCase().includes(value.toLowerCase()));
};

export const categoryFilter = (goods, value) => {
    return goods.filter(goodsItem => goodsItem.category === value);
};

export const priceFilter = (goods, value, how) => {
    return goods.filter(goodsItem => goodsItem.price >= from && goodsItem.price <= to);
};