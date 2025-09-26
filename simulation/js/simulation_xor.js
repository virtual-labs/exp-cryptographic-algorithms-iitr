// Encrypt: message + key → Base64 string
function xorConvertBase64(text, key) {
    var kL = key.length;
    let result = [];

    for (let i = 0; i < text.length; i++) {
        let xorVal = text.charCodeAt(i) ^ key.charCodeAt(i % kL);
        result.push(String.fromCharCode(xorVal));
    }
    // Convert to Base64 so it's always readable
    return btoa(result.join(""));
}

// Decrypt: Base64 + key → original message
function xorDecryptBase64(base64Text, key) {
    var kL = key.length;
    let decoded = atob(base64Text);  // decode Base64 string back to raw XORed chars
    let result = [];

    for (let i = 0; i < decoded.length; i++) {
        let xorVal = decoded.charCodeAt(i) ^ key.charCodeAt(i % kL);
        result.push(String.fromCharCode(xorVal));
    }
    return result.join("");
}

var message;

function xor_generate1() {
    var a = document.getElementById("cell1");
    var b = document.getElementById("cell2");

    if (a.value == "" && b.value == "") {
        Swal.fire({
            backdrop: false,
            target: '#boxx',
            position: 'center',
            customClass: {
                container: 'position-absolute',
                popup: "swal2-popup"
            },
            text: "First enter message and secret key.",
        });

    } else if (a.value == "") {
        Swal.fire({
            backdrop: false,
            target: '#boxx',
            position: 'center',
            customClass: {
                container: 'position-absolute',
                popup: "swal2-popup"
            },
            title: 'Oops..',
            text: "You have not entered a message.",
            icon: 'info'
        });

    } else if (b.value == "") {
        Swal.fire({
            backdrop: false,
            target: '#boxx',
            position: 'center',
            customClass: {
                container: 'position-absolute',
                popup: "swal2-popup"
            },
            title: 'Oops..',
            text: "You have not entered a secret key.",
            icon: 'info'
        });

    } else {
        message = document.xor_form1.msg.value;
        document.xor_form1.msg.value = message;
        var key = document.xor_form1.secret_key.value;
        document.xor_form1.secret_key.value = key;
        document.xor_form1.enc.value = xorConvertBase64(message, key);

        document.getElementById("cell4").disabled = false;
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function xor_generate2() {
    var c = document.getElementById("cell3");

    if (c.value == "") {
        Swal.fire({
            backdrop: false,
            target: '#boxx',
            position: 'center',
            customClass: {
                container: 'position-absolute',
                popup: "swal2-popup"
            },
            title: 'Oops..',
            text: "First enter your secret key.",
            icon: 'info'
        });

    } else {
        var secret = document.xor_form2.sec.value;
        document.xor_form2.sec.value = secret;
        document.xor_form2.dec.value = xorDecryptBase64(document.xor_form1.enc.value, secret);

        await sleep(1000);

        if (message == document.xor_form2.dec.value) {
            Swal.fire({
                backdrop: false,
                target: '#boxx',
                position: 'center',
                customClass: {
                    container: 'position-absolute',
                    popup: "swal2-popup"
                },
                title: 'Done',
                text: "Entered message and decrypted message matches.",
                icon: 'success'
            });

        } else {
            Swal.fire({
                backdrop: false,
                target: '#boxx',
                position: 'center',
                customClass: {
                    container: 'position-absolute',
                    popup: "swal2-popup"
                },
                title: 'Oops...',
                text: "Input message and decrypted message do not match. Please reset and follow the instructions.",
                icon: 'error'
            });
        }
    }
}

