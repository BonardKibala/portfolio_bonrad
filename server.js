window.addEventListener('load', () => {
    fetch("https://6074590b066e7e0017e79af0.mockapi.io/Portfolio/V1/developper").then(function (response) {
        return response.json();
    })
        .then(function (data) {
            for (let me of data) {
                const portrait__title = document.querySelector(".portrait__title");
                const portrait__description = document.querySelector(".portrait__description");
                const content_title = document.createTextNode(
                    `${me.firstname} ${me.lastname} ${me.middlename}`
                );
                let contentItemFooter;

                const content_description = document.createTextNode(`${me.description}`);
                portrait__title.appendChild(content_title);  //Toutes cette fonction nous permet au faite d'afficher les contacts dans json
                portrait__description.appendChild(content_description);

                const typed = new Typed('.job--animated', {
                    strings: [
                        `${me.work1}`,
                        `${me.work2}`,
                        `${me.work3}`,
                        `${me.work4}`
                    ],
                    typeSpeed: 150,
                    backspedd: 150,
                    loop: true
                });


            }
        });

    // ---------------------------------------------------
    // fetch("http://localhost:3000/works").then(function (response) {
    //     return response.json();
    // })
    //     .then(function (data) {
    //         for (let footerWork of data) {
    //             let listSkills = document.querySelector('.ui.list.skills');
    //             let itemListFooter = document.createElement('div');
    //             itemListFooter.classList.add("item");
    //             let contentItemFooter = document.createTextNode(`${footerWork}`);
    //             itemListFooter.appendChild(contentItemFooter);
    //             listSkills.appendChild(itemListFooter);
    //         }
    //     });
    // ---------------------------------------------------
    // fetch("http://localhost:3000/address").then(function (response) {
    //     return response.json();
    // })
    //     .then(function (data) {
    //         for (let add of data) {
    //             let address = document.querySelector('#address');
    //             let address_footer = createAddress(add);
    //             address.insertAdjacentHTML("beforeend", address_footer);

    //         }
    //     });

    //-----------------------------------------------
    fetch("https://6074590b066e7e0017e79af0.mockapi.io/Portfolio/V1/hardSkills").then(function (response) {
        return response.json();
    })
        .then(function (data) {

            data.forEach(hardskill => {
                createHardSkills(hardskill);
            })
        });
    // -----------------------------------
    fetch("https://6074590b066e7e0017e79af0.mockapi.io/Portfolio/V1/softSkills").then(function (response) {
        return response.json();
    })
        .then(function (data) {
            data.forEach(softskill => {
                let contentItems = document.querySelector('.contentItems');
                let li = document.createElement('li');
                let itemContent = document.createTextNode(`${softskill}`);
                li.appendChild(itemContent);
                contentItems.appendChild(li);
            });


        });

    // ------------------------------
    fetch("https://6074590b066e7e0017e79af0.mockapi.io/Portfolio/V1/projects").then(function (response) {
        return response.json();
    })
        .then(function (data) {
            let i=0
            data.forEach(project => {
                let title = document.querySelectorAll('.project__title');
                let h2 = document.createElement('h2');
                let titleContent = document.createTextNode(`${project.title}`);
                h2.appendChild(titleContent);
                title[i].appendChild(h2);

                let imageContent = document.querySelectorAll('.project__imageContent');
                let image = document.querySelectorAll('.project__image');
                image[i].setAttribute("src",`${project.image}`);
                imageContent[i].appendChild(image[i]);


                let description = document.querySelectorAll('.project__description');
                let paragraph = document.createElement('p');
                let viewMore=document.querySelectorAll('.ui.circular.button'); 
                let paragraphContent=document.createTextNode(`${project.description}`);
                paragraph.appendChild(paragraphContent);
                description[i].insertBefore(paragraph,viewMore[i]);
                i++;
            });

        });
        // -----------------------------------------

});

// function createAddress(add) {
//     return `${add.address1}<br>
// ${add.address2}<i class="cd flag" id="flag-rdc"></i><br>
// <i class="ui whatsapp green icon" id="Telephone"></i> ${add.whatsapp} <br>
// <i class="ui facebook blue icon" id="facebook"></i>${add.facebook}`
// }
let i = 0;
function createHardSkills(hardskill) {
    let hardskillIcon = document.querySelectorAll('.hardSkills__icon');
    let hardskillName = document.querySelectorAll('.hardSkills__name');
    hardskillName[i].textContent = `${hardskill}`;
    hardskillIcon[i].append(hardskillName[i]);
    i++;
}