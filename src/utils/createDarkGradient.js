export default function createDarkGradient(ctx) {
    const gradient = ctx.createLinearGradient(0, 0, 0, 100);
    gradient.addColorStop(0, "#00FF5F8F");
    gradient.addColorStop(0.15, "#FFFFFF32");
    gradient.addColorStop(1, "#00FF5F00 ");
    return gradient;
}