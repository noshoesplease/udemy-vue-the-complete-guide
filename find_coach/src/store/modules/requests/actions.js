export default {
  async contactCoach(context, payload) {
    const newRequest = {
      userEmail: payload.email,
      message: payload.message,
    };

    const fetchURL = import.meta.env.VITE_FIREBASE_REQUESTS_URL.replace(
      "requests.json",
      `requests/${payload.id}.json`
    );

    const response = await fetch(fetchURL, {
      method: "POST",
      body: JSON.stringify(newRequest),
    });

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || "Failed to send request.");
      throw error;
    }

    newRequest.id = responseData.name;
    newRequest.coachId = payload.id;

    context.commit("addRequest", newRequest);
  },

  async fetchRequests(context) {
    const coachId = context.rootGetters.userId;

    const authToken = context.rootGetters.token;
    const fetchURL = import.meta.env.VITE_FIREBASE_REQUESTS_URL.replace(
      "requests.json",
      `requests/${coachId}.json?auth=${authToken}`
    );

    const response = await fetch(fetchURL);
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || "Failed to fetch requests.");
      throw error;
    }

    const requests = [];
    for (const key in responseData) {
      const request = {
        id: key,
        coachId: coachId,
        userEmail: responseData[key].userEmail,
        message: responseData[key].message,
      };
      requests.push(request);
    }

    context.commit("setRequests", requests);
  },
};
