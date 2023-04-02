# React Event Bus

## Old Usages ( < v 1.0.0 )

```javascript
import useEventBus from "event-bus-react";

const App = () => {
  const { subscribe } = useEventBus("MyEvent"); // default EventBus

  subscribe("alert", (data) => {
    console.log(data);
  });

  const handleEmitEvent = () => {
    MyEvent.emit("alert", { sayHello: "hello" });
  };

  return (
    <>
      <button onClick={handleEmitEvent}>Emit Event</button>
    </>
  );
};
```

---

## New Usages ( >= v1.0.0 )

1.) Install event-bus-react package from npm.js

```javascript
npm i event-bus-react
```

2.) Declare useEventBus() in the entry file of react or next.js project.

```javascript
import useEventBus from "event-bus-react";

useEventBus();
```

3.) Subscribe the event anywhere in the component or pages.

```javascript
import { subscribe } from "event-bus-react";

subscribe(
  "show-alert",
  () => {
    // do something...
  },
  []
);
```

4.) Emit the event wherever you are in the component tree.

```javascript
EventBus.emit("show-alert");
```

---

## Api Declaration

### useEventBus(name)

```javascript
useEventBus(); // EventBus
useEventBus("MyCustomEvent");
```

## subscribe(eventName, callBack, dependencies)

```javascript
subscribe("show-alert", (data) => {
  alert(data?.message);
});

subscribe(
  "show-result",
  () => {
    console.log(a + b);
  },
  [a, b]
);
```

## emit(eventName, data)

```javascript
EventBus.emit("show-alert", { message: "hello" });

MyCustomEvent.emit("show-result");
```
