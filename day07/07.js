onload = function () {
    var li_1Ele = document.getElementById("li_1");
    //console.log(li_1Ele.innerHTML);

    var liEles = document.getElementsByTagName("li");
    //console.log(liEles[1].innerText);

    var li_2Eles = document.getElementsByName("li_2");
    // console.log(li_2Eles[0].innerText);

    var parentEle = li_1Ele.parentNode;
    // console.log(parentEle);

    // console.log(parentEle.childNodes);

    liEles = document.querySelector("#li_1");
    // console.log(liEles);

    liEles = document.querySelectorAll("li");
    // console.log(liEles);

    liEles = document.getElementsByClassName("li_3");
    console.log(liEles);
}