# TagInput React Component

TagInput is a reusable React component that allows users to input and manage tags. It is designed to be easily integrated into your React applications. This README provides information on how to use the TagInput component in your project.

## Installation

You can install the TagInput component as a package using npm or yarn:

```bash
npm install tag-input-reactjs
```

or

```bash
yarn add tag-input-reactjs
```

## Usage
![image](https://github.com/sorenammd/tag-input-reactjs/assets/107199800/73515473-ab39-4522-9a93-a873d14acbff)

Once you've installed the package, you can import the TagInput component into your React application and use it as follows:

```javascript
import React, { useState } from "react";
import TagInput from "tag-input-reactjs";

function YourComponent() {
  const [tags, setTags] = useState({ yourTagType: [] });

  return (
    <div>
      <TagInput tags={tags?.yourTagType} setTags={setTags} name="yourTagType" error={false} />
    </div>
  );
}

export default YourComponent;
```

Make sure to replace `"yourTagType"` with the appropriate tag type you want to manage.

## Props

The TagInput component accepts the following props:

- `tags` (object): An object that contains the tags to be displayed and managed. The structure should be `{ [tagType]: [tags] }`.

- `name` (string): The type of tags to manage. This should correspond to the key in the `tags` object.

- `setTags` (function): A function to update the tags when they are modified. It should accept the updated tags in the same format as the `tags` prop.

- `error` (boolean, optional): A boolean value that can be used to indicate an error state. If set to `true`, the component will display a red border.

## Functionality

The TagInput component provides the following functionality:

- Tags can be added by typing text in the input field and pressing Enter or by separating tags with a comma.

- Existing tags can be removed by clicking the "×" button next to the tag.

- The component can display an optional error state with a red border when the `error` prop is set to `true`.

## Styling

You can customize the styling of the TagInput component by modifying the CSS in your project. The component itself uses the "tagInputContainer" class for the main container and relies on CSS for styling.

## License

This component is open-source and is available under the MIT License. You can find the license details in the LICENSE file included with this package.

## Issues

If you encounter any issues or have suggestions for improvements, please [open an issue](https://github.com/your-repo/issues) on GitHub.

Thank you for using TagInput! We hope it adds value to your React application.
