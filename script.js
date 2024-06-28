function toggleMenu(){
    const menuToggle = document.querySelector('.menuToggle');
    const navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active')
    navigation.classList.toggle('active')
}

const asideSection = document.querySelector("aside");
const mainSection = document.querySelector("main");

const signInBtn = document.getElementById("sign-in-btn");
const signUpBtn = document.getElementById("sign-up-btn");

signInBtn.addEventListener("click", () => {
    mainSection.classList.add("slideRight");
    asideSection.classList.add("slideLeft");
});
