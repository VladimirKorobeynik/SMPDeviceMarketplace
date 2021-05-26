window.onload = function() {
    setTimeout(function() {
        const preloader = document.getElementById('preload')
        if (!preloader.classList.contains('pageLoad')) {
            preloader.classList.add('pageLoad')
        }
    }, 800)
}

async function sendRequest(method, url, body = null) {
    return await fetch(url).then(Response => {
        return Response.text();
    })
}


let arrayFilterBtn = Array.from(document.getElementsByClassName('filter-btn'));
sendRequest('GET', 'http://localhost/web/test.php')
    .then(data => document.getElementById('card-grid').innerHTML = data)
    .catch(err => console.log(err));

arrayFilterBtn.forEach(element => {
    element.onclick = function() {
        switch (element.getAttribute('name')) {
            case 'all':
                sendRequest('GET', 'http://localhost/web/test.php')
                    .then(data => document.getElementById('card-grid').innerHTML = data)
                    .catch(err => console.log(err));
                break;
            case 'device':
                sendRequest('GET', 'http://localhost/web/showDevice.php')
                    .then(data => document.getElementById('card-grid').innerHTML = data)
                    .catch(err => console.log(err));
                break;
            case 'detector':
                sendRequest('GET', 'http://localhost/web/ShowDetector.php')
                    .then(data => document.getElementById('card-grid').innerHTML = data)
                    .catch(err => console.log(err));
            default:
                break;
        }
    }
});

sendRequest('GET', 'http://localhost/web/Session.php')

function getProduct(id) {
    const data = {
        id: id,
        deleteOperation: true,
    }
    fetch('test.php', {
        method: 'POST',
        body: JSON.stringify(data),
    }).then(function(response) {
        window.location.reload();
    }).catch(function(error) {
        console.log(error);
    });
}

document.getElementById('addProductBtnSend').onclick = () => {
    let name = document.getElementById("addFieldName").value;
    let category = document.getElementById("addFieldCategorie").value;
    let count = document.getElementById("addFieldCount").value;
    let price = document.getElementById("addFieldPrice").value;
    let image = document.getElementById("addFieldPhoto").value;
    let description = document.getElementById("addFieldDescription").value;

    let arr = image.split("path");
    let productObj = {
        "name": name,
        "category": category,
        "count": count,
        "price": price,
        "image": "images/" + arr[1],
        "description": description,
    }

    fetch('test.php', {
        method: 'POST',
        body: JSON.stringify(productObj),
    }).then(function(response) {
        window.location.reload();
    }).catch(function(error) {
        console.log(error);
    });
}

document.getElementById('addProductBtn').onclick = function() {
    modalControl(document.getElementById('addModal'), 'add');
}

//Function modal control
function modalControl(modal, modalName) {
    if (modalName == 'add') {

    }

    let overlay = document.querySelector('.modal_bg');

    modal.childNodes[1].childNodes[3].onclick = function() {
        hideModal(modal);
        clearField();
    }

    overlay.classList.add('modal_bg_active');
    modal.style.display = 'block';

    overlay.addEventListener('click', function() {
        hideModal(modal);
        clearField();
    });

    document.body.addEventListener('keyup', function(e) {
        if (e.keyCode == 27) {
            hideModal(modal);
            clearField();
        }
    });
}

//Hide modal window
function hideModal(modal) {
    let overlay = document.querySelector('.modal_bg');
    modal.style.display = 'none';
    overlay.classList.remove('modal_bg_active');
}

//Clear modal 
function clearField() {
    let inputForm = document.getElementsByClassName('input_form');
    for (let i = 0; i < inputForm.length; i++) {
        inputForm[i].value = '';
    }
    document.getElementById('addFieldDescription').value = '';
}