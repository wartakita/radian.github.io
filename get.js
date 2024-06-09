// Function to get parameter value from URL
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

// Function to encode string to base64
function base64Encode(str) {
    return btoa(str);
}

// Here we pass our streaming source
const src = {
    hls: base64Encode(getParameterByName('hls') || '')
};
