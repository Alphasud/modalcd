import './style.css';

export const Modal = (props) => {

    const handleUserClick = (data) => {
        props.handleResponse(data)
    }
    
    return (<div>
        {props.visible ? <div className='modal'>
            <p className='modal__text'>{props.message}</p>
            <button className='modal__button' onClick={() => handleUserClick(true)}>{props.buttonMessage}</button>
        </div> : ''}
    </div>

    );
}