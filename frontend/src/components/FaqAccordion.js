import React, { useState } from 'react';
import '../App.css'


function Content(props) {

    const [isOpen, SetisOpen] = useState(false);

    return (
        <div className='container'>
            <div classname='' onClick={() => SetisOpen(!isOpen)}>
                <div className='card p-3'>

                    <h5 className='question ' >{props.ques}
                        <div className='icons'>
                            <div classname="Down">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                </svg>
                            </div>
                        </div>
                    </h5>

                    {isOpen && <div >{props.children}</div>}
                </div>
            </div>
        </div >
    )
}

export default Content;