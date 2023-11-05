# TageInput React Component

TageInput is a reusable React component that allows users to input and manage tags. It is designed to be easily integrated into your React applications. This README provides information on how to use the TageInput component in your project.

## Installation

You can install the TageInput component as a package using npm or yarn:

```bash
npm install tage-input
```

or

```bash
yarn add tage-input
```

## Usage

Once you've installed the package, you can import the TageInput component into your React application and use it as follows:

```javascript
import React, { useState } from "react";
import TageInput from "tage-input";

function YourComponent() {
  const [tags, setTags] = useState({ yourTagType: [] });

  return (
    <div>
      <TageInput tags={tags} setTags={setTags} type="yourTagType" />
    </div>
  );
}

export default YourComponent;
```

Make sure to replace `"yourTagType"` with the appropriate tag type you want to manage.

## Props

The TageInput component accepts the following props:

- `tags` (object): An object that contains the tags to be displayed and managed. The structure should be `{ [tagType]: [tags] }`.

- `setTags` (function): A function to update the tags when they are modified. It should accept the updated tags in the same format as the `tags` prop.

- `type` (string): The type of tags to manage. This should correspond to the key in the `tags` object.

- `error` (boolean, optional): A boolean value that can be used to indicate an error state. If set to `true`, the component will display a red border.

## Functionality

The TageInput component provides the following functionality:

- Tags can be added by typing text in the input field and pressing Enter or by separating tags with a comma.

- Existing tags can be removed by clicking the "×" button next to the tag.

- The component can display an optional error state with a red border when the `error` prop is set to `true`.

## Styling

You can customize the styling of the TageInput component by modifying the CSS in your project. The component itself uses the "tagInputContainer" class for the main container and relies on CSS for styling.

## License

This component is open-source and is available under the MIT License. You can find the license details in the LICENSE file included with this package.

## Issues

If you encounter any issues or have suggestions for improvements, please [open an issue](https://github.com/sorenammd/tag-input-reactjs/issues) on GitHub.

Thank you for using TageInput! We hope it adds value to your React application.