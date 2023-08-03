console.log("Another custom approaching")
fetch("https://randomuser.me/api/?results=1")
    .then(response => response.json())
    .then(data => console.log(data));

console.log("Our valued customer, please wait for a while. We are fetching your data.")