function validate(){
    const usernameNode = document.querySelector("#username");
    const usernameVal = usernameNode.value; //gia tri dien vao input
    if(usernameVal==""){
        alert("Vui long dien vao username");
        return false;
    }

    const fullnameNode = document.querySelector("#fullname");
    const fullnameVal = fullnameNode.value;
    if(fullnameVal==""){
        alert("Vui long dien vao fullname");
        return false;
    }
}
