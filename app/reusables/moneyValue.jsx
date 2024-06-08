const moneyValue = (value) => {
    const moneyVal = value.replace(/[^0-9.]/g, '');
    return moneyVal;
};

export default moneyValue;
