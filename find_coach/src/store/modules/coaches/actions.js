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

    const fetchURL = import.meta.env.VITE_FIREBASE_URL.replace('coaches.json', `coaches/${userId}.json`);
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
};
