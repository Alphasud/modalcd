# What is it ?

A simple modal with customizable message and button message.

# Installation

`npm i modal-cd --save`

Then...

`import { Modal } from 'modal-cd';`

# Use

You need to set a visible state in your component :

`const [isVisible, setIsVisible] = useState(false)`

then, you need to set up the function that will receive the user click event on the modal close button: 


`const handleModalResponse = (data) => { data ? setIsVisible(false) : ''};`


finally, you can use the modal component with several props, here is an exemple :

`<Modal visible={isVisible} message='Thank you for your answers' buttonMessage='OKAY!' handleResponse={handleModalResponse} />`

The `isVisible` boolean passed as the `visible`prop controls the visibility of the modal, when you pass it to `true` the modal appears.

The `message`prop lets you enter any text you want to see displayed on the modal.

The `buttonMessage`prop lets you enter any text you want to see displayed on the modal button.

The `handleResponse`prop allows you to receive the click event on the modal button, the data you will receive is a boolean (`true` when user click), you can tie it to a function that will modify the visible state.






