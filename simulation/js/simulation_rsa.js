

function get_prime() {
    var primes;
    primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,

        73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239,

        241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397];

    return (primes[Math.floor(Math.random() * primes.length)]);
}
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function rsa1_validate() {
    let p = parseInt(document.rsa_form1.p_primenumber.value);
    let q = parseInt(document.rsa_form1.q_primenumber.value);

    if (isNaN(p) || isNaN(q)) {
        Swal.fire({
            backdrop: false,
            target: '#boxx',
            position: 'center',
            customClass: { container: 'position-absolute', popup: "swal2-popup" },
            title: 'Missing Values',
            text: "Please enter both P and Q.",
            icon: 'warning'
        });
        return;
    }

    if (p < 2 || p > 400 || q < 2 || q > 400) {
        Swal.fire({
            backdrop: false,
            target: '#boxx',
            position: 'center',
            customClass: { container: 'position-absolute', popup: "swal2-popup" },
            title: 'Invalid Range',
            text: "Enter values between 2 and 400.",
            icon: 'error'
        });
        return;
    }

    if (!isPrime(p) || !isPrime(q)) {
        Swal.fire({
            backdrop: false,
            target: '#boxx',
            position: 'center',
            customClass: { container: 'position-absolute', popup: "swal2-popup" },
            title: 'Not Prime',
            text: "One or both entered numbers are not prime. Enter valid prime numbers.",
            icon: 'error'
        });
        return;
    }

    if (p === q) {
        Swal.fire({
            backdrop: false,
            target: '#boxx',
            position: 'center',
            customClass: { container: 'position-absolute', popup: "swal2-popup" },
            title: 'Invalid Input',
            text: "P and Q should not be the same.",
            icon: 'error'
        });
        return;
    }


    Swal.fire({
        backdrop: false,
        target: '#boxx',
        position: 'center',
        customClass: { container: 'position-absolute', popup: "swal2-popup" },
        title: 'Valid!',
        text: `Prime numbers accepted. Now click on Calculate N and PHI(N).`,
        icon: 'success'
    });

    // Enable Generate E button directly
    document.getElementById("calcNPhi").disabled = false;

}

function calculateNPhi() {
    let p = parseInt(document.rsa_form1.p_primenumber.value);
    let q = parseInt(document.rsa_form1.q_primenumber.value);

    if (isNaN(p) || isNaN(q)) {
        Swal.fire({
            title: 'Missing Values',
            text: "Enter P and Q first.",
            icon: 'warning'
        });
        return;
    }

    let n = p * q;
    let phi = (p - 1) * (q - 1);

    // ✅ Auto-fill only when button is clicked
    document.rsa_form2.n_p_multiply_q.value = n;
    document.rsa_form2.phi.value = phi;

    Swal.fire({
        title: 'Calculated!',
        text: `N = ${n},  Φ(N) = ${phi}`,
        icon: 'success'
    });

    // Enable Generate E button
    document.getElementById("cell6").disabled = false;
}




function gcd(a, h) {
    var temp;
    while (1) {
        temp = a % h;

        if (temp == 0) {
            return h;
        }
        a = h;
        h = temp;
    }
}



function sub() {

    var a = document.rsa_form1.p_primenumber.value * document.rsa_form1.q_primenumber.value;
    var b = (document.rsa_form1.p_primenumber.value - 1) * (document.rsa_form1.q_primenumber.value - 1);
    var c = document.rsa_form2.n_p_multiply_q.value
    var d = document.rsa_form2.phi.value
    if (a == c && b == d) {
        Swal.fire({
            backdrop: false,
            target: '#boxx',
            position: 'center',
            width: '450',
            customClass: {
                container: 'position-absolute',
                popup: "swal2-popup"
            },
            text: "Entered values are correct.",
            icon: 'success',
        });

        document.getElementById("cell6").disabled = false;
    }
    else if (c == "" && d == "") {
        Swal.fire({
            backdrop: false,
            target: '#boxx',
            position: 'center',
            customClass: {
                container: 'position-absolute',
                popup: "swal2-popup"
            },
            title: 'Values Missing',
            text: "Enter the value of N and PHI.",
            icon: 'info'
        });
    }
    else if (c == "" && d != "") {
        Swal.fire({
            backdrop: false,
            target: '#boxx',
            position: 'center',
            customClass: {
                container: 'position-absolute',
                popup: "swal2-popup"
            },
            title: 'Value Missing',
            text: "Enter the value of N.",
            icon: 'info'
        });
    }
    else if (c != "" && d == "") {
        Swal.fire({
            backdrop: false,
            target: '#boxx',
            position: 'center',
            customClass: {
                container: 'position-absolute',
                popup: "swal2-popup"
            },
            title: 'Value Missing',
            text: "Enter the value of PHI.",
            icon: 'info'
        });
    }
    else if (a != c && b == d) {
        Swal.fire({
            backdrop: false,
            target: '#boxx',
            position: 'center',
            customClass: {
                container: 'position-absolute',
                popup: "swal2-popup"
            },
            title: 'Oops..',
            text: "Enter the correct value of N.",
            icon: 'info'
        });

    }
    else if (a == c && b != d) {
        Swal.fire({
            backdrop: false,
            target: '#boxx',
            position: 'center',
            customClass: {
                container: 'position-absolute',
                popup: "swal2-popup"
            },
            title: 'Oops..',
            text: "Enter the correct value of PHI.",
            icon: 'info'
        });

    }
    else {
        Swal.fire({
            backdrop: false,
            target: '#boxx',
            position: 'center',
            customClass: {
                container: 'position-absolute',
                popup: "swal2-popup"
            },
            title: 'Oops..',
            text: "Enter the correct values of N and PHI.",
            icon: 'error'
        });

    }


}

function rsa2_generate() {

    //  document.rsa_form2.n_p_multiply_q.value = document.rsa_form1.p_primenumber.value * document.rsa_form1.q_primenumber.value;
    var d = (document.rsa_form1.p_primenumber.value - 1) * (document.rsa_form1.q_primenumber.value - 1);
    var e = 2;
    while (e < d) {
        if (gcd(e, d) == 1)
            break;
        else
            e++;
    }
    document.rsa_form2.e_random.value = e;
    document.getElementById("cell2").disabled = false;
}



function rsa3_generate() {
    var d1 = 1 / document.rsa_form2.e_random.value;
    var d = d1 % document.rsa_form2.phi.value
    document.rsa_form3.d_mod.value = d;
    document.rsa_form3.publickey.value = `(${document.rsa_form2.n_p_multiply_q.value},${document.rsa_form2.e_random.value})`;
    document.rsa_form3.privatekey.value = `(${document.rsa_form2.n_p_multiply_q.value},${document.rsa_form3.d_mod.value})`;
    document.getElementById("cell3").disabled = false;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function rsa4_generate() {
    if (document.rsa_form4.message.value > 520) {
        return Swal.fire({
            backdrop: false,
            target: '#boxx',
            position: 'center',
            customClass: {
                container: 'position-absolute',
                popup: "swal2-popup"
            },
            title: 'Oops..',
            text: "Enter message in valid range.",
            icon: 'warning'
        });
    }
    var message = document.rsa_form4.message.value;
    console.log("message ", message)
    var c = Math.pow(message, document.rsa_form2.e_random.value);
    var m = Math.pow(c, document.rsa_form3.d_mod.value);
    c = c % document.rsa_form2.n_p_multiply_q.value;
    m = m % document.rsa_form2.n_p_multiply_q.value;
    document.rsa_form4.encrypt.value = Math.round(c);
    document.rsa_form4.decrypt.value = Math.round(m);

    await sleep(1000);

    if (message == document.rsa_form4.decrypt.value) {
        Swal.fire({
            backdrop: false,
            target: '#boxx',
            position: 'center',
            customClass: {
                container: 'position-absolute',
                popup: "swal2-popup"
            },
            title: 'Done',
            text: "Entered message and decrypred message matches.",
            icon: 'success'
        });
    }

}