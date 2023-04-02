import { useEffect } from "react";

const events = {};

const on = (event, callback) => {
  !events[event] ? (events[event] = callback) : false;
};

const useEventBus = (eventName = "EventBus") => {
  const emit = (event, data) => {
    if (!events[event]) {
      throw new Error(`Subscriber name '${event}' not found!`);
    } else {
      events[event](data);
    }
  };

  useEffect(() => {
    if (window !== "undefined") {
      window[eventName] = { emit };
    }
  }, []);
};

export const subscribe = (event, callback, deps = []) => {
  useEffect(() => {
    on(event, callback);

    return () => {
      delete events[event];
    };
  }, [...deps]);
};

export default useEventBus;
