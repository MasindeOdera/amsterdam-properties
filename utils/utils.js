// Function to help clean some strings in the property detail component
export function cleanString(value) {
    if (typeof value === 'string') {
        return value.replace(/[<>{}]/g, ''); // Remove characters from string
    }
    return value;
}
  