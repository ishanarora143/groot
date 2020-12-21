import { LOADING, INPUT_QUERY, ADD_MESSAGE } from "./actionTypes";

export const loading = () => ({
  type: LOADING
});

export const addMessage = response => ({
  type: ADD_MESSAGE,
  message: response.data.data.queryResult
});

export const inputQuery = e => ({
  type: INPUT_QUERY,
  input: e.target.value
});
