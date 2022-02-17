function toBlack(itemToTransform) {
    itemToTransform.style.backgroundColor = "#222323";
    itemToTransform.style.color = "#f0f6f0";
    itemToTransform.style.padding = "1%, 0, 2%, 2%";
}

function toWhite (itemToTransform) {
    itemToTransform.style.backgroundColor = "#f0f6f0";
    itemToTransform.style.color = "#222323";
    itemToTransform.style.padding = "0";
}

export { toBlack , toWhite };