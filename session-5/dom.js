function addText(){
    const wrapperNode = document
        .getElementById("wrapper");
    wrapperNode.innerText = "Hihi";
}

function getMe(){
    const meNodes =
        document
            .getElementsByClassName('me');
    meNodes[0].innerText = "Me 1";
    meNodes[1].innerText = "Me 2";
}

function getMe2(){
    const divNodes = document
        .getElementsByTagName('div');
    divNodes[0].innerText = "Me 1";
    divNodes[1].innerText = "Me 2";
    divNodes[2].innerText = "Me 3";
}

function getMe3(){
    const wrapper = document.querySelector("#wrapper")
    wrapper.innerText = "Hello";

    const classMe = document.querySelector('.me');
    classMe[0].innerText= "1";
    classMe[1].innerText= "2";

    const divNodes =document.querySelector('div');
    divNodes[0].innerText = "1";
    divNodes[1].innerText = "2";
}
