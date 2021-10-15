import React, { useState } from "react";
import { storiesOf } from '@storybook/react';

import { Modal } from '../components';

const stories = storiesOf('App Test', module);

stories.add('App', () => {

    const [isVisible, setIsVisible] = useState(false)

    const handleModalResponse = (data) => {
        data ? setIsVisible(false) : '';
    }

    return (
        <div>
            <div onClick={() => setIsVisible(true)}>Click to display modal</div>
            <Modal visible={isVisible} message='Thank you for your answers' buttonMessage='OKAY!' handleResponse={handleModalResponse} />
        </div>
    )
});