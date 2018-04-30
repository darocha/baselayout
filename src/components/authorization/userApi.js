import * as Auth from './authorization.service';

let headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
};

function addHeaders(key, value) {
    headers[key] = value;
}

async function getData(url) {

    addHeaders(Authorization, 'bearer ' + Auth.getUserToken());
    
    let response = await fetch(url, {
        headers: headers,
        method: "GET"
    })
    .then(function (res) { console.log(res) })
    .catch(function (res) { console.log(res) })

}

async function postData(url, data) {

    addHeaders(Authorization, 'bearer ' + Auth.getUserToken());

    let response = await fetch(url, {
        headers: headers,
        method: "POST",
        body: JSON.stringify(data)
    })
    .then(function(res){ console.log(res) })
    .catch(function(res){ console.log(res) })

}