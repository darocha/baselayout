import * as resources from './resources.json';
import jwt_decode from 'jwt-decode';

let permissions = [];

let _user = {
    roles: [],
    scopes: [],
    username: null,
    access_token:''
};

export async function login(user) 
{
    return await authenticate(user);
}

export function getUserToken()
{
    return _user.access_token;
}

async function authenticate(user) {

    permissions = [];

    try {

        
        let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1MjQ1OTAzODgsImV4cCI6MzMxNDQ2NTc1ODgsImF1ZCI6IkdCSVdlYkFwcCIsInN1YiI6Im1hcmNlbG8iLCJuYW1lIjoibWFyY2VsbyIsImVtYWlsIjoibWFyY2Vsb0BleGFtcGxlLmNvbSIsInNjb3BlcyI6InNjcmVlbjEgc2NyZWVuMiBzY3JlZW4zIiwidXNlcm5hbWUiOiJtYXJjZWxvIn0.oO45MP2aHg_kGqIv0_OlP7REBUcarYR_cG5lCCnhVi4";
 
        // if admin return admin token
        if (user.username.indexOf('admin') !== -1) {
            token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1MjQ1OTAzODgsImV4cCI6MzMxNDQ2NTc1ODgsImF1ZCI6IkdCSVdlYkFwcCIsInN1YiI6ImFkbWluIiwibmFtZSI6IkFkbWluIiwiZW1haWwiOiJhZG1pbkBleGFtcGxlLmNvbSIsInJvbGUiOiJhZG1pbmlzdHJhdG9yIiwic2NvcGVzIjoiYWRtaW5pc3RyYXRvciIsInVzZXJuYW1lIjoiYWRtaW4ifQ.CPM-tQqXFT_LDZnpQkny1eSdTvTok4QkHkpWG1xmLaE"
        }

        // request token from authorization server
        // let access_token = await fetch({'https://server/token', 'POST', user});
        
        // default unsuccessful response
        let response = {
            success: false,
            access_token: null,
            message: 'invalid credentials'
        };
        
        // imitate server behaviour for successful login
        response = await Promise.resolve({
            success: true,
            access_token: token
        });

        // success login
        if (response.success) {
            
            

            // check if there is a token
            if (response.access_token) {
        
                let access_token  = response.access_token;

                let decodedToken = jwt_decode(access_token);

                console.log('decodedToken', decodedToken);

                if (decodedToken.scopes) {
                    
                    // if there are no spaces in scopes
                    if (decodedToken.scopes.indexOf(' ') === -1) {
                        _user.scopes.push(decodedToken.scopes);
                    } else {
                        _user.scopes =  decodedToken.scopes.split(' ');
                    }
                }

                console.log(_user.scopes);

                _user.username = decodedToken.username;
                _user.email = decodedToken.email;
                response.user = _user;

                console.log('usr', _user);

                setPermissions();

                return response;

            }

        }
        
        return response;
       

    }
    catch(e) {
       console.log('login failed', e);
    }
}

export function getResourcesPermissions(navigation) {

    if (navigation) {
        return permissions.filter(a => {
           return a.leftNav === true
        });
    }

    return permissions;
}

export function setPermissions() {

    permissions = [];

    let userScopes = _user.scopes || [];
    
    resources.forEach((resource) => {
        
        // resource is not protected it is a public resource
        if (!resource.scopes || resource.scopes.length===0) { 
            permissions.push(resource); 
        }
        // resource is protected verify if user has the necessary scopes
        else {
            
            resource.scopes.forEach(scope => {
                if (userScopes.indexOf(scope) !== -1) {

                    let exists = permissions.filter(function (r) { return r.id === resource.id });

                    console.log('exists',exists);

                    if (!exists || exists.length===0) {
                        permissions.push(resource);
                    }
                }
            });
        }
    });

    console.log('permissions', permissions);
}

export function can(resourceId) {

    console.log('permissions', permissions);

    let resource = permissions.find(function (resource) {
        return resource.id === resourceId;
    });

    return resource != null;
}
