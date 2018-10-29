const addAction = {
    type: 'add',
};

const removeAction = {
    type: 'remove',
};

const addActionten = {
    type: 'addTen',
};

const removeActionten = {
    type: 'removeTen',
};

const resetAction = {
    type: 'reset',
};





// REDUCER

const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case 'add':
            return state + 1;
        case 'remove':
            return state - 1;
        case 'addTen':
            return state + 10;
        case 'removeTen':
            return state - 10;
        case 'reset':
            return state = 0;
        default:
            return state;
    }
}
// STORE
const { createStore } = Redux;
const store = createStore(counterReducer);

// MAIN
const renderStore = document.getElementById('sttore');
const render = () => {
    renderStore.innerHTML = store.getState();
}

store.subscribe(render);
render();

const add = document.getElementById('add');
add.addEventListener('click', () => {
    store.dispatch(addAction)
});

const remove = document.getElementById('remove');
remove.addEventListener('click', () => {
    store.dispatch(removeAction)
});

const addTen = document.getElementById('addTen');
addTen.addEventListener('click', () => {
    store.dispatch(addActionten)
});

const removeTen = document.getElementById('removeTen');
removeTen.addEventListener('click', () => {
    store.dispatch(removeActionten)
});

const reset = document.getElementById('reset');
reset.addEventListener('click', () => {
    store.dispatch(resetAction)
});