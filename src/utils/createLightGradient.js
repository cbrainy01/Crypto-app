export default function createLightGradient(ctx) {
    const gradient = ctx.createLinearGradient(0, 0, 0, 100);
    gradient.addColorStop(0, "#2550EA8F");
    gradient.addColorStop(0.15, "#2550EA32");
    gradient.addColorStop(1, "#2550EA00");
    return gradient;
}