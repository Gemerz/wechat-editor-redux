/* @flow */
// ------------------------------------
// Constants
// ------------------------------------
export const RICHTEXT_EDITING = 'RICHTEXT_EDITING'

// ------------------------------------
// Actions
// ------------------------------------
// NOTE: "Action" is a Flow interface defined in https://github.com/TechnologyAdvice/flow-interfaces
// If you're unfamiliar with Flow, you are completely welcome to avoid annotating your code, but
// if you'd like to learn more you can check out: flowtype.org.
// DOUBLE NOTE: there is currently a bug with babel-eslint where a `space-infix-ops` error is
// incorrectly thrown when using arrow functions, hence the oddity.
export function richtextEditing (value: string = "ssksksks"): Action {
  return {
    type: RICHTEXT_EDITING,
    richtext: value
  }
}

// This is a thunk, meaning it is a function that immediately
// returns a function for lazy evaluation. It is incredibly useful for
// creating async actions, especially when combined with redux-thunk!
// NOTE: This is solely for demonstration purposes. In a real application,
// you'd probably want to dispatch an action of COUNTER_DOUBLE and let the
// reducer take care of this logic.
//export const doubleAsync = (): Function => {
//  return (dispatch: Function, getState: Function): Promise => {
//    return new Promise((resolve: Function): void => {
//      setTimeout(() => {
//        dispatch(increment(getState().counter))
//        resolve()
//      }, 200)
//    })
//  }
//}

export const actions = {
  richtextEditing
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [RICHTEXT_EDITING]: (state: string, action: {richtext: string}): string => state + action.richtext
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = 'text'
export default function richtextReducer (state: string = initialState, action: Action): string {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
