function showTab(tabName) {
    const loginTab = document.getElementById("loginTab");
    const createTab = document.getElementById("createTab");
    const loginForm = document.getElementById("loginForm");
    const createForm = document.getElementById("createForm");

    if (tabName === "login") {
        loginTab.classList.add("active");
        createTab.classList.remove("active");
        loginForm.style.display = "block";
        createForm.style.display = "none";
    } else {
        createTab.classList.add("active");
        loginTab.classList.remove("active");
        createForm.style.display = "block";
        loginForm.style.display = "none";
    }
}