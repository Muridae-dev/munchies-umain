export type DeliveryTime = { min: number; max?: number };

export const deliveryTimes: DeliveryTime[] = [
  {
    min: 0,
    max: 10,
  },
  {
    min: 10,
    max: 30,
  },
  {
    min: 30,
    max: 60,
  },
  {
    min: 60,
  },
];

export const toggleFilters = (
  value: string,
  selectedItems: string[],
  setSelectedItems: (items: string[]) => void
) => {
  const updated = selectedItems.includes(value)
    ? selectedItems.filter((itemValue) => itemValue !== value)
    : [...selectedItems, value];
  setSelectedItems(updated);
};

export const toggleDeliveryTime = (
  inputDeliveryTime: DeliveryTime,
  selectedDeliveryTimes: DeliveryTime[],
  setSelectedDeliveryTimes: (range: DeliveryTime[]) => void
) => {
  const isSameDeliveryTime = (a: DeliveryTime, b: DeliveryTime) =>
    a.min === b.min && a.max === b.max;
  const exists = selectedDeliveryTimes.some((deliveryTime) =>
    isSameDeliveryTime(deliveryTime, inputDeliveryTime)
  );

  const updatedDeliveryTimes = exists
    ? selectedDeliveryTimes.filter(
        (deliveryTime) => !isSameDeliveryTime(deliveryTime, inputDeliveryTime)
      )
    : [...selectedDeliveryTimes, inputDeliveryTime];

  setSelectedDeliveryTimes(updatedDeliveryTimes);
};
