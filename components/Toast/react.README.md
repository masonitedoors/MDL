# Toast
## Usage

MDL Toast is geared towards [react-toastify](https://www.npmjs.com/package/react-toastify).

As in react-toastify, there are two parts to using MDL Toast:
- The toast container
- The toast component

## Toast container
MDL Toast provides a default look and feel via CSS styles which are encapsulated in `toastContainerProps`.

Typical usage:

```jsx
import { ToastContainer } from 'react-toastify'
import { toastContainerProps } from '@masonite/external-ui-react'

function App(){
  return (
    <div>
      <RestOfTheSite />
      <ToastContainer {...toastContainerProps} />
    </div>
  );
}
```

## Toast component

When the time comes to show an actual toast, MDL provides a `Toast` component which includes standard default styles and can be passed into react-toastify's toast() function.

Typical usage:

```jsx
import { toast } from 'react-toastify'
import { Toast} from '@masonite/external-ui-react'

const onClick = () => {
  toast(
    <Toast heading="🧐 Wait a sec">
      Some filter changes you made require updates to related filters.
      Some options may not be available.
      Please update those affected filters indicated in red.
    </Toast>,
    { autoClose: false, closeOnClick: false }
  )
}
```

### Props

In addition to heading and children, Toast supports the following props:

- `headingIcon`: An svg icon (as provided by `@masonite/svg-icons`) to show to the left of the heading.
- `buttons`: If provided, the given markup will be displayed centered below the toast body. This can also be a function which, per the react-toastify specification, will be provided a `closeToast` parameter to allow the markup to close the toast.
- `classNames`, etc. Any further props, including classNames, will be added to the outside `div` container of the toast to allow for custom styling.
