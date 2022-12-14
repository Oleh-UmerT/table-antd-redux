import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

export const logger = createLogger({
  duration: true,
  collapsed: true,
  colors: {
    title: (action) => {
      return action.error ? 'firebrick' : 'deepskyblue';
    },
    prevState: () => '#1C5FAF',
    action: () => '#149945',
    nextState: () => '#A47104',
    error: () => '#ff0005'
  }
});

const middleware = [thunk];

middleware.push(logger);

export { middleware };