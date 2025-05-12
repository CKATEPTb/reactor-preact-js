# Preact Fork with reactor-core-js compatibility

## 📌 Purpose

This fork of [Preact](https://github.com/preactjs/preact) adds support for handling reactive publishers from 
the [@ckateptb/reactor-core-js](https://github.com/CKATEPTb/reactor-core-js) library. The primary goal of this fork 
is to enable seamless integration of reactive streams into Preact components.

## 🚀 Features

1. **Reactive Children Rendering:**

	* A publisher passed as a child will be rendered as a reactive object. The view will automatically update when the publisher emits new values (via `onNext`).

2. **Reactive Props Handling:**

	* A publisher passed as a prop will be treated as a reactive result, and the component will update on every emission.
	* To prevent a prop from being treated as reactive, prepend the prop name with an underscore (`_`). For example, `_publisher` will not be handled as a publisher.

3. **Class Component Support Only:**

	* This feature works exclusively with **class components**. Functional components are **not supported**.

## 💡 Usage

### Example with Reactive Children

```tsx
import { Publisher, Sinks } from '@ckateptb/reactor-core-js';
import { Component } from 'preact';

export default class MyComponent extends Component<{
	publisher: Publisher<any>
	_publisher: Publisher<any>
}> {
  public render() {
    return (
      <div>
        {this.props.publisher} // publisher result
     	{this.props._publisher} // publisher 
      </div>
    );
  }
}
```

In the above example:

* The `publisher` prop will be updated reactively if it is a publisher.
* The `_publisher` will be treated as a static value and will not be updated reactively.

## 🔗 Original Preact Repository

For more information about the original Preact library, visit the [Preact GitHub page](https://github.com/preactjs/preact).

## ⚠️ Important

* Only **class components** support this feature.
* If a prop should not be treated as reactive, its name must start with an underscore (`_`).
