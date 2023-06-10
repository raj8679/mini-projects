let token = JSON.parse(localStorage.getItem("token")) || null;
console.log(token)
const loginPageRedirect =() => {
    
    window.location.href="login.html"
}
const freelancersPageRedirect =() => {
    if(token) {
        window.location.href="freelancers.html"
    } else {
        window.location.href = "error.html"
    }
    
}
const reportsPageRedirect =() => {
    if(token) {
        window.location.href="reports.html"
    } else {
        window.location.href = "error.html"
    }
}