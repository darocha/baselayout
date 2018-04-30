import * as Auth from '../components/authorization/authorization.service';

let headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
};

function addHeaders(key, value) {
    headers[key] = value;
}

export async function getData(url) {

    addHeaders('Authorization', 'bearer ' + Auth.getUserToken());
    
    return await fetch(url, { headers: headers, method: "GET" })
        .then(response => response.json())
        .then(json => { return json })
        .catch(function (response) {
            console.log(response)
        });
   
}

export async function postData(url, data) {

    addHeaders('Authorization', 'bearer ' + Auth.getUserToken());

    return await fetch(url, {
            headers: headers,
            method: "POST",
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(json => { return json })
        .catch(function (response) {
            console.log(response)
        });

}