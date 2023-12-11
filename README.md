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

## Example

Check out the live example [here](https://codesandbox.io/p/sandbox/tag-input-reactjs-3f7vxg?layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clq0l14950006356mbk87jbit%2522%252C%2522sizes%2522%253A%255B69.72077550241322%252C30.27922449758678%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clq0l14940002356mzczsm8qb%2522%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clq0l14940003356mvxpfmvfd%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clq0l14950005356mc621i5a1%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B50%252C50%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clq0l14940002356mzczsm8qb%2522%253A%257B%2522id%2522%253A%2522clq0l14940002356mzczsm8qb%2522%252C%2522tabs%2522%253A%255B%255D%257D%252C%2522clq0l14950005356mc621i5a1%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clq0l14950004356mqhth5d1h%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522UNASSIGNED_PORT%2522%252C%2522port%2522%253A0%252C%2522path%2522%253A%2522%252F%2522%257D%255D%252C%2522id%2522%253A%2522clq0l14950005356mc621i5a1%2522%252C%2522activeTabId%2522%253A%2522clq0l14950004356mqhth5d1h%2522%257D%252C%2522clq0l14940003356mvxpfmvfd%2522%253A%257B%2522tabs%2522%253A%255B%255D%252C%2522id%2522%253A%2522clq0l14940003356mvxpfmvfd%2522%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Atrue%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D).


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
