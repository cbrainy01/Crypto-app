export default function getCurrencySymbol(currency) {
    switch (currency) {
        case "eur":
            return "€";
        case "gbp":
            return "£";
        case "btc":
            return "₿";
        case "eth":
            return "Ξ";
        default: return "$";
    }
}
