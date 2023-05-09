import React from 'react';

const Modal = (props) => {
    return (
        <div className="modal" tabindex="-1" style={{display:"block"}} role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Modal</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>{props.message}</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary">Save changes</button>
                                <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={()=>props.closeModal()}>{props.closeName ? props.closeName : "Close"}</button>
                            </div>
                        </div>
                    </div>
                </div>
    );
};

export default Modal;