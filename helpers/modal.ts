
const showModal = ( id: String, title: String, message: String ) => {
    const { Modal } = require("bootstrap");
    const myModal = new Modal( id );
    myModal.show();
}

export { showModal };