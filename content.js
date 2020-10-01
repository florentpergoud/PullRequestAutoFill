const  urlExpression = /(www|http:|https:)+[^\s]+[\w]/;
let mockupUrl = null;
let iOSUrl = null;
let androidUrl = null;

const searchForEditingPullRequestBody = () => {
    var description = document.getElementsByName('pull_request[body]')[0].value;

    if(mockupUrl && iOSUrl && androidUrl) {

        const formatedDescriptionEnd = 
        `Implementation Android |
| --------- | ------------------ | ---------------------- |
| ![image](${mockupUrl}) | ![image](${iOSUrl}) | ![image](${androidUrl}) |`;

        document.getElementsByName('pull_request[body]')[0].value = description.split(/Implementation Android/)[0] + formatedDescriptionEnd;
        clearInterval(checkInterval);
        return;
    }

    const editingPullRequestBody = document.getElementsByClassName("write-content js-write-bucket upload-enabled focused");
    if(editingPullRequestBody.length < 1) return;

    const mockupPart = description.split("| Mockup(s)")[1];
    const verticalBarSplitedMockupPart = mockupPart.split("|");
    const mockupValue = verticalBarSplitedMockupPart[8];
    const iOSValue = verticalBarSplitedMockupPart[9];
    const androidValue = verticalBarSplitedMockupPart[10];

    if(mockupValue.match(urlExpression)){
        mockupUrl = mockupValue.substring(urlExpression).trim().split('(')[1].split(')')[0];
        document.getElementsByName('pull_request[body]')[0].value = document.getElementsByName('pull_request[body]')[0].value.replaceAll("base=MOCKUP_URL",`base=${mockupUrl}`);  
    }

    if(mockupValue.match(urlExpression)){
        iOSUrl = iOSValue.substring(urlExpression).trim().split('(')[1].split(')')[0];
        document.getElementsByName('pull_request[body]')[0].value = document.getElementsByName('pull_request[body]')[0].value.replace("compare=IOS_SCREEN_URL",`compare=${iOSUrl}`);
    }
    
    if(mockupValue.match(urlExpression)){
        androidUrl = androidValue.substring(urlExpression).trim().split('(')[1].split(')')[0];
        document.getElementsByName('pull_request[body]')[0].value = document.getElementsByName('pull_request[body]')[0].value.replace("compare=ANDROID_SCREEN_URL",`compare=${androidUrl}`);
    }
   
}

const checkInterval = setInterval(searchForEditingPullRequestBody, 1000);
