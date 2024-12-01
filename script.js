const formContainer = document.querySelector('.tl-input-container-itself');
const textInput = document.getElementById('textInput');
const addTodoButton = document.getElementById('addTodoButton');
const outputContainer = document.querySelector('.tl-output-container');
let outputTextArray = [];

// ADDING A NEW TODO FUNCTION

function addNewTodo(e) {
    e.preventDefault();

    if (textInput.value.length > 0) {
        
        // ADDING A NEW ELEMENT EACH TIME THE ADD BUTTON IS CLICKED
        outputContainer.innerHTML += `
            <div class="tl-output-itself">
                <p class="tl-output-itself-paragraph">${textInput.value}</p>
                <div class="tl-output-itself-buttons">
                    <button class="tl-output-itself-button tl-output-itself-delete-button">Delete</button>
                </div>
            </div>
        `;

        // PUSHING THE INPUT INTO THE ARRAY
        outputTextArray.push(textInput.value);
        localStorage.setItem('newTodo', JSON.stringify(outputTextArray));
        // RESETTING
        textInput.value = '';
        
        // DELETE BUTTON FUNCTIONALITIES
        const outputItself = document.querySelectorAll('.tl-output-itself');
        const deleteButton = document.querySelectorAll('.tl-output-itself-delete-button');
        
        for (let i = 0; i < deleteButton.length; i++) {
            // DELETE FUNCTION
            deleteButton[i].addEventListener('click', () => {
                outputTextArray.splice(i, 1);
                outputContainer.removeChild(outputItself[i]);
                localStorage.setItem('newTodo', JSON.stringify(outputTextArray));
            });
        };
    };
};

// INITIALIZING BUTTONS
addTodoButton.addEventListener('click', addNewTodo);

// RETRIEVING DATA FROM LOCAL STORAGE

function retrieveDataFromLocalStorage() {
    const outputItselfLC = JSON.parse(localStorage.getItem('newTodo'));

    if (outputItselfLC) {
        for (let i = 0; i < outputItselfLC.length; i++) {
            // ADDING A NEW ELEMENT EACH TIME THE ADD BUTTON IS CLICKED
            outputContainer.innerHTML += `
                <div class="tl-output-itself">
                    <p class="tl-output-itself-paragraph">${outputItselfLC[i]}</p>
                    <div class="tl-output-itself-buttons">
                        <button class="tl-output-itself-button tl-output-itself-delete-button">Delete</button>
                    </div>
                </div>
            `;

            // PUSHING THE INPUT INTO THE ARRAY
            outputTextArray.push(outputItselfLC[i]);
            localStorage.setItem('newTodo', JSON.stringify(outputTextArray));

            // DELETE BUTTON FUNCTIONALITIES
            const outputItself = document.querySelectorAll('.tl-output-itself');
            const deleteButton = document.querySelectorAll('.tl-output-itself-delete-button');
            
            for (let i = 0; i < deleteButton.length; i++) {
                // DELETE FUNCTION
                deleteButton[i].addEventListener('click', () => {
                    outputTextArray.splice(i, 1);
                    outputContainer.removeChild(outputItself[i]);
                    localStorage.setItem('newTodo', JSON.stringify(outputTextArray));
                });
            };
        };
    };
};

retrieveDataFromLocalStorage();