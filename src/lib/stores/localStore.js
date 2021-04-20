import { writable } from 'svelte/store';
let particlesConfig = {
  fpsLimit: 60,
  particles: {
    color: {
      value: '#000'
    }, 
    links: {
      color: '#000',
      enable: true,
      distance: 50
    },
    move: {
      enable: true,
      speed: 1,
      outModes: {
        default: "bounce"
      }
    },
    size: {
      value: 1
    }
  }
}
const createLocalStore = (key) => {
  const {
    subscribe,
    set,
    update
  } = writable();

  return {
    subscribe,
    set,
    update,
    useLocalStorage: () => {
      const json = localStorage.getItem(key);
      if (json) {
        set(json);
      }
      subscribe(current => {
        localStorage.setItem(key, current);
      });
    }
  };
}


// If localStorage has the key then it will be used
// if not the default will be used. Format:
// export const var = createLocalStore(key, default)
export const theme = createLocalStore('theme');
