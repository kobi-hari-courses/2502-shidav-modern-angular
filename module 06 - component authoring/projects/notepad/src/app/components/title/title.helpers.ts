export function isColorDark(color: string): boolean {
    const element = document.createElement("div");
    element.style.color = color;
    document.body.appendChild(element);

    const computedColor = getComputedStyle(element).color;
    document.body.removeChild(element);

    const rgbMatch = computedColor.match(/\d+/g);
    if (!rgbMatch || rgbMatch.length < 3) return false;

    const [r, g, b] = rgbMatch.map(Number);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;

    return brightness < 128;
}
