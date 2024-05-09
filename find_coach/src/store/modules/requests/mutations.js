export default {
  addRequest(state, payload) {
    // this assumes payload has been sanitized and validated and totally processed
    state.requests.push(payload);
  },
  setRequests(state, payload) {
    state.requests = payload;
  },
};
