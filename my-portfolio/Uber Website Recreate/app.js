function checkNationality() {
    const isNigerian = confirm("Are you Nigerian");
    if(!isNigerian) {
        alert("Access denied. This services is only available in Nigeria.");

        window.location.href = "https://google.com";
    }
}