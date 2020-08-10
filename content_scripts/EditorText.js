const elementText = document.querySelectorAll("p,h1,h2,h3,h4,h5,h6");
for (let i = 0; i < elementText.length; i++) {
    elementText[i].classList.add("getText");
}

editText();

function editText() {
    document.querySelectorAll('.getText').forEach(item => {
        item.addEventListener('click', event => {
            const textInitial = item.innerHTML;
            const typeInitial = item.nodeName;
            const classInitial = item.className;
            const idInitial = item.id;
            const widthInitial = item.offsetWidth;
            const heightInitial = item.offsetHeight;

            let textArea = document.createElement('textarea');

            textArea.style.resize = 'none';
            textArea.style.border = 'none';
            textArea.style.boxSizing = 'border-box';
            textArea.style.width = widthInitial + 'px';
            textArea.style.height = heightInitial + 'px';
            textArea.id = idInitial;
            textArea.classList.add('textareaEdit');
            for (let j = 0; j < classInitial.split(" ").length; j++) {
                textArea.classList.add(classInitial.split(" ")[j]);
            }

            textArea.appendChild(document.createTextNode(textInitial));
            item.replaceWith(textArea);

            document.addEventListener('keypress', e => {
                if (e.key === 'Enter') {
                    validateText(typeInitial, classInitial, idInitial);
                }
            })
        })
    })
}

function validateText(typeInitial, classInitial, idInitial) {
    document.querySelectorAll('.textareaEdit').forEach(it => {
        const textEdited = it.value;

        let elementInitial = document.createElement(typeInitial);

        elementInitial.id = idInitial;
        for (let k = 0; k < classInitial.split(" ").length; k++) {
            elementInitial.classList.add(classInitial.split(" ")[k]);
        }

        elementInitial.appendChild(document.createTextNode(textEdited))
        it.replaceWith(elementInitial);

        editText();
    });
}

