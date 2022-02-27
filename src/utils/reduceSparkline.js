export default function reduceSparkline(data) {
    return data.map((obj) => {
      const sparklineLength = obj["sparkline_in_7d"].price.length;
      const newSparkline = obj["sparkline_in_7d"].price.filter(
        (num, index) =>
          index % 6 == 0 || index == 0 || index == sparklineLength - 1
      );
      const updatedObj = { ...obj, sparkline_in_7d: { price: newSparkline } };
      return updatedObj;
    });
}