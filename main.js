const inp1El = document.getElementById("inp1")
const inp2El = document.getElementById("inp2")

inp1El.addEventListener("input", () => {
    if (document.activeElement === inp1El) {
        inp2El.value = parseInt(inp1El.value, 2) // Binary to decimal
    }
})

inp2El.addEventListener("input", () => {
    if (document.activeElement === inp2El) {
        inp1El.value = parseInt(inp2El.value).toString(2) // Decimal to binary
    }
})


