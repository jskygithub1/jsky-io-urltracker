const modalHTML = `<div   class="modal fade"
                id="jskyModal"
                aria-labelledby="jskyModalLabel"
                aria-hidden="true"
            >
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="jskyModalLabel">
                                [jsky_modal_title]
                            </h5>
                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div class="modal-body">
                            [jsky_modal_body]
                        </div>

                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>`

const showModal = (title: string, body: string) => {
    const {Modal} = require("bootstrap");
    debugger;

    const modalDiv = document.createElement('div');
    modalDiv.id = 'jskyModalParent';
    modalDiv.innerHTML = modalHTML;
    modalDiv.innerHTML = modalDiv.innerHTML.replace('[jsky_modal_title]', title);
    modalDiv.innerHTML = modalDiv.innerHTML.replace('[jsky_modal_body]', body);

    document.body.append(modalDiv);

    const myModal = new Modal('#jskyModal');
    const myModalEl = document.getElementById('jskyModal');
    myModal.show();

    // @ts-ignore
    myModalEl.addEventListener('hidden.bs.modal', event =>  {
        // remove modal from DOM
        const el = document.getElementById( 'jskyModalParent' );
        if ( el ) {
            el.remove();
        }
    });


}

export { showModal };