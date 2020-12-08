import React from 'react'
import '../../assets/scss/popup.scss'
class Popup extends React.Component {

  
    render() {
        return (
            <div>
                <p>This is a example of a <a class="cta" href="#google">css modal</a></p>
                <div id="google" class="modaloverlay">
                    <div id="google" class="modal">
                        <a href="#close" class="close">&times;</a>
                        <div>
                            <h1>Here is some content inside the Modal.</h1>
                            <p>If the modal shrinks below the breakpoint then the modal goes full screen for mobile use.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Popup;