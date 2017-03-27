// index.ts

const clientDeviceID = generate_uuidv4();
const clientDeviceName = "testClient-" + clientDeviceID;
const clientVersion = "1.0";

const clientAppId = 15;

const ucWebUrl = "http://localhost:7224";
const usrName = "usr1";
const usrPwd = "pwd1";


// Result of the create UCServer session
interface ICreateUCSSession {
	sessionid: string;
}

function generate_uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,
    function(c) {
       var uuid = Math.random() * 16 | 0, v = c == 'x' ? uuid : (uuid & 0x3 | 0x8);
       return uuid.toString(16);
    });
 }
 

async function createSession(pUserName: string, pUserPassword: string, pClientAppId:number)
{
    const url = ucWebUrl + "/ws/client/createsession?clientappid=" + pClientAppId; 
    const loginBase64 = btoa(pUserName + ":" + (pUserPassword ?? ""));
    const authorizationString = "Basic " + loginBase64;

    const requestHeaders: Record<string, string> = {
        "Authorization": authorizationString,
        "x-epid": generate_uuidv4(), // pseudo-Zufallsguid
        "x-no401": "1",
        "Content-Type": "application/json"
    };

    const requestPayload = {
        negotiate: {
            iClientProtocolVersion: 70,
            optionalParams: {
                clientDeviceID,
                clientDeviceName,
                waitForReconnectTimeInSec: 5
            }
        },
        logon: {
            u8sVersion: clientVersion
        }
    };
    const requestBody = JSON.stringify(requestPayload);
    const options = {
        method: "POST",
        headers: requestHeaders,
        body: requestBody
    };

    const sessionResponse = await fetch(url, options);
    const response: unknown = await sessionResponse.json();
    console.info(response); 

	// @ts-ignore
    if (response.error) { // @ts-expect-error
        const logonError = response.error as AsnLogonError;
        return logonError.iErrorDetail;
    } else {
        const session = response as ICreateUCSSession;
        if (session && session.sessionid) {
            return session.sessionid;
        }
    }
    return "";
}


async function destroySession(pSessionId: string)
{
    const url = ucWebUrl + "/ws/client/destroysession?ucsessionid=" + pSessionId; 
    const options = {
        method: "GET"
    };

    const sessionResponse = await fetch(url, options);
    const response: unknown = await sessionResponse.json();
    console.info(response); 
}



const result = createSession(usrName, usrPwd, clientAppId);
// destroySession(result);
