# React Event Bus

## Usages

```javascript
import useEventBus from 'event-bus-reacts';

const App = () => {
    const {subscribe} = useEventBus('MyEvent')

    subscribe('alert',(data) => {
        console.log(data)
    })


    const handleEmitEvent = () => {
        MyEvent.emit('alert',{sayHello : "hello"})
    }

return (
        <>
            <button onClick={handleEmitEvent}>Emit Event</button>
        </>    
    )
}
```

