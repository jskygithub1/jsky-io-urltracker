
const modalHTML = `<div   class="modal fade"
                id="jskyModal"
                aria-labelledby="jskyModalLabel"
                aria-hidden="true"
            >
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="jskyModalLabel">
                                Oops!
                            </h5>
                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div class="modal-body">
                            xxxxxxxxxxxThe attempt to register has failed because this email address is already in use.
                        </div>

                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>`

const showModal = ( id: String, title: String, message: String ) => {
    const { Modal } = require("bootstrap");
debugger;

    const modalDiv = document.createElement( 'div' );
    modalDiv.innerHTML = modalHTML;

    document.body.append( modalDiv );


        const myModal = new Modal( '#jskyModal'  );
        myModal.show();


}

export { showModal };