function getValue(){
    const fullNameNode = document.querySelector("#fullname");
    const value = fullNameNode.value; //get
    //alert(value);

    fullNameNode.value = "Hi";
}

function changeBgColor(){
     const bgDiv = document.querySelector("#bg");
     bgDiv.style.backgroundColor = "black"; //đổi sang màu đén
}
