# react-native-month-year-picker

A month-year-picker for React apps

# Usage

Install the month-year-picker from npm with `npm install react-native-month-year-picker --save`. Then, require it from your app's JavaScript files with `import MonthYear from 'react-native-month-year-picker'`.

```js
import React, { useState } from 'react';
import moment from 'moment'
import MonthYearPicker from 'react-native-month-year-picker';

export const ExampleComponent = ()=> {
  const [month, setMonth] = useState(moment().format('MM'))
  const [year, setYear] = useState(moment().format('YYYY'))
    return (
      <MonthYearPicker
       month={month}
       setMonth={setMonth}
       year={year}
       setYear={setYear}
      />
    );
};


## Props

<table>
  <tr>
    <th>Prop</th>
    <th>Required</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>accessibilityLabel</td>
    <td>No</td>
    <td>String</td>
    <td>VoiceOver will read this string when a user selects the associated element.</td>
  </tr>
  <tr>
    <td>allowFontScaling</td>
    <td>No</td>
    <td>Bool</td>
    <td>Specifies whether fonts should scale to respect Text Size accessibility settings. </td>
  </tr>

  <tr>
    <td>Disabled</td>
    <td>No</td>
    <td>Bool</td>
    <td>Disables the button</td>
  </tr>
  <tr>
    <td>Style</td>
    <td>No</td>
    <td>View Style Prop</td>
    <td>The style for the button</td>
  </tr>
  <tr>
    <td>styleDisabled</td>
    <td>No</td>
    <td>View Style Prop</td>
    <td>The style for the disabled button</td>
  </tr>
  <tr>
    <td>containerStyle</td>
    <td>No</td>
    <td>View Style Prop</td>
    <td>The style for the container</td>
  </tr>
  <tr>
    <td>disabledContainerStyle</td>
    <td>No</td>
    <td>View Style Prop</td>
    <td>The style for the container when the button is disabled</td>
  </tr>
  <tr>
    <td>childGroupStyle</td>
    <td>No</td>
    <td>View Style Prop</td>
    <td>The style for the child views</td>
  </tr>
  <tr>
    <td>androidBackground</td>
    <td>No</td>
    <td>Background Prop Type</td>
    <td>The background for andriod devices.</td>
  </tr>
  <tr>
    <td>onPress</td>
    <td>No</td>
    <td>Function</td>
    <td>Handler to be called when the user taps the button. </td>
  </tr>
</table>
```
