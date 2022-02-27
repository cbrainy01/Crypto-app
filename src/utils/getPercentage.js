export default function percentage(partialValue, totalValue) {
    if(isNaN(partialValue) || isNaN(totalValue)) {return null}
    return Math.round( (100 * partialValue) / totalValue )
} 