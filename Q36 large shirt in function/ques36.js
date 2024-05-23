function tshirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "i love typescript"; }
    console.log("design a ".concat(size, " tshirt ").concat(message, " printed on it"));
}
tshirt();
tshirt("medium");
tshirt("small", "dive into coding");
