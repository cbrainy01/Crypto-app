export default function getAmtValue(pctChangeSincePurchase, originalPrice, purchaseAmt) {
    const amtChange = (pctChangeSincePurchase / 100) * originalPrice;
    let x;
    if(pctChangeSincePurchase >= 0) { x = originalPrice + amtChange }
    else if(pctChangeSincePurchase < 0) { x = originalPrice - amtChange }

    const newCoinAmtValue = x * purchaseAmt;
    const formattedAmt = (newCoinAmtValue * 1.5).toFixed(3).replace(/[.,]00$/, "");
    return formattedAmt;
}