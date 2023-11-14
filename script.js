let nami = document.getElementById('nama');
let nim = document.getElementById('nim');

let tnami = document.getElementById('tnama');
let tnim = document.getElementById('tnim');

let terima = document.getElementById('yes');
let tolak = document.getElementById('no');

let btn = document.getElementById('btn1');



function swal() {
    Swal.fire({
        title: 'Hallo :)',
        text: 'Apa jenis kelamin anda?',
        icon: 'question',
        showDenyButton: true,
        confirmButtonText: 'Cowok',
        denyButtonText: 'Cewek'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Hallo Ganteng :)',
                text: 'kamu mau gak Jadi pacar aku?',
                icon: 'question',
                showDenyButton: true,
                denyButtonText: 'Enggak!',
                confirmButtonText: 'Mauuu:)'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: 'Hallo Gantengnya aku <3',
                        input: 'text',
                        text: 'masukkan nama kamu',
                        confirmButtonText: 'Lanjut'
                    }).then((result) => {
                        if (result.value) {
                            nama = result.value;
                            console.log(nama);
                            nami.innerHTML = "Hallo Gantengnya aku :)";
                            nim.innerHTML = "I Love U " + nama + " <3";
                            terima.style.display = "block";
                        }
                    });
                }else if (result.isDenied) {
                    Swal.fire ({
                        title: 'Yahh...',
                        text: 'masukkan nama kamu',
                        input: 'text',
                        imageUrl: 'https://w7.pngwing.com/pngs/171/442/png-transparent-sad-emoji-face-crying-emotions-expression-cartoon-emoticon-yellow-cute.png',
                        imageHeight: 200,
                        imageWidth: 200,
                        confirmButtonText: 'Lanjut'
                    }).then((result) => {
                        if (result.value) {
                            nama = result.value;
                            console.log(nama);
                            tnami.innerHTML = "Yahh ditolak :(";
                            tnim.innerHTML = "Padahal aku udah lama suka sama kamu " + nama;
                            tolak.style.display = "block";
                        }
                    });
                }
            });
        } else if (result.isDenied) {
            Swal.fire ({
                title: 'Hallo Cantik :)',
                text: 'Kamu mau gak jadi pacar aku?',
                icon: 'question',
                showDenyButton: true,
                denyButtonText: 'Enggak!',
                confirmButtonText: 'Mauuu:)'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: 'Hallo Cantiknya aku <3',
                        input: 'text',
                        text: 'Maskkan nama kamu',
                        confirmButtonText: 'lanjut'
                    }).then((result) => {
                        if (result.value) {
                            nama = result.value;
                            console.log(nama);
                            nami.innerHTML = "Hallo Cantiknya aku :)";
                            nim.innerHTML = "I Love U " + nama + " Cantikkk <3";
                            terima.style.display = "block";
                        }
                    });

                }else if (result.isDenied) {
                    Swal.fire ({
                        title: 'Yahh...',
                        text: 'masukkan nama kamu',
                        input: 'text',
                        imageUrl: 'https://w7.pngwing.com/pngs/171/442/png-transparent-sad-emoji-face-crying-emotions-expression-cartoon-emoticon-yellow-cute.png',
                        imageHeight: 200,
                        imageWidth: 200,
                        confirmButtonText: 'Lanjut'
                    }).then((result) => {
                        if (result.value) {
                            nama = result.value;
                            console.log(nama);
                            tnami.innerHTML = "Yahh ditolak :(";
                            tnim.innerHTML = "Padahal aku udah lama suka sama kamu " + nama;
                            tolak.style.display = "block";
                        }
                    });
                }
            });
        }
    });


    btn.style.display = "none";
}

