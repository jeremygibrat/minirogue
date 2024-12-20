export function updateAttribute(currentValue: number, maxValue: number, quantity: number) {
    if (currentValue < maxValue) {
        currentValue = currentValue + quantity
    }
    if (currentValue < 0) {
        currentValue = 0
    }
    return currentValue;
}