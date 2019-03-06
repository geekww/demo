window.onload = function () {
    var xhr = new XMLHttpRequest();
    xhr.open('post','xx.php');
    xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
    xhr.send('name=1&tel=2');
    xhr.onreadystatechange = function () {
        if(xhr.readyState ===4 && xhr.status ===200){
            console.log(xhr.responseText);
        }
    }
}
