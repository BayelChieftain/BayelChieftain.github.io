import React from "react";
import c from './Dialogs.module.css'

const Dialog = (props) => {
    return (
    <div className={c.dialogs}>
        <div className={c.dialogsItems}>
            <div className={c.dialog}>
                dymych
            </div>
            <div className={c.dialog}>
                dymych
            </div>
            <div className={c.dialog}>
                dymych
            </div>
            <div className={c.dialog}>
                dymych
            </div>
        </div>

        <div className={c.messages}>
            <div className={c.message}>Hi</div>
            <div className={c.message}>How is</div>
            <div className={c.message}>way samuraya</div>
        </div>
    </div>
    )
}

export default Dialog;