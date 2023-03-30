import { useEffect } from "react";

const useEventBus = (eventName = "EventBus") => {
  const events = {};

  const on = (event, callback) => {
    !events[event] ? (events[event] = callback) : events[event];
  };

  const emit = (event, data) => {
    if (!events[event]) return;
    events[event](data);
  };

  const subscribe = (event, callback) => {
    on(event, callback);
  };

  useEffect(() => {
    if (window !== "undefined") {
      window[eventName] = { emit };
    }
  }, [events]);

  return { subscribe };
};

export default useEventBus;
