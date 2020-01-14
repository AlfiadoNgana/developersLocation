/**
 * Types
 */
export const Types = {
  SHOW: 'modal/SHOW',
  HIDE: 'modal/HIDE',
};

/**
 * Reducers
 */

const INITIAL_STATE = {
  visible: false,
  cordinates: null,
};

export default function modal(state = INITIAL_STATE, actions) {
  switch (actions.type) {
    case Types.SHOW:
      return {
        visible: true,
        cordinates: actions.payload.cordinates,
      };
    case Types.HIDE:
      return {
        visible: false,
        cordinates: null,
      };
    default:
      return state;
  }
}

/**
 * Actions
 */
export const Creators = {
  showModal: cordinates => ({
    type: Types.SHOW,
    payload: { cordinates },
  }),

  hideModal: () => ({
    type: Types.HIDE,
  }),
};
