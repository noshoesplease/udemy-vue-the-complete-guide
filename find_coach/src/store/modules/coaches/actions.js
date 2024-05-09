export default {
  async registerCoach(context, data) {
    const userId = context.rootGetters.userId;
    const coachData = {
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas,
    };

    const fetchURL = import.meta.env.VITE_FIREBASE_COACHES_URL.replace(
      "coaches.json",
      `coaches/${userId}.json`
    );
    const response = await fetch(fetchURL, {
      method: "PUT",
      body: JSON.stringify(coachData),
    });

    // const responseData = await response.json();

    if (!response.ok) {
      // error ...
    }

    context.commit("registerCoach", {
      ...coachData,
      id: userId,
    });
  },
  async loadCoaches(context, payload) {
    if (!payload.forceRefresh && !context.getters.shouldUpdate) return;

    let response;
    let responseData;

    try {
      response = await fetch(import.meta.env.VITE_FIREBASE_COACHES_URL);
      responseData = await response.json();
    } catch {
      const error = new Error(responseData?.message || "Failed to fetch!");
      throw error;
    }

    if (!response.ok) {
      const error = new Error(responseData?.message || "Failed to fetch!");
      throw error;
    }

    const coaches = [];
    for (const key in responseData) {
      const coach = {
        id: key,
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        description: responseData[key].description,
        hourlyRate: responseData[key].hourlyRate,
        areas: responseData[key].areas,
      };
      coaches.push(coach);
    }

    context.commit("setCoaches", coaches);
    context.commit("setFetchTimestamp");
  },
};
