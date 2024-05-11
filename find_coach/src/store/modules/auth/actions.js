export default {
  async auth(context, payload) {
    const { mode } = payload;
    const signUp = "signUp";
    const signInWithPassword = "signInWithPassword";
    const modeMap = {
      signUp,
      signInWithPassword,
    };
    const fetchURL = `https://identitytoolkit.googleapis.com/v1/accounts:${
      modeMap[mode]
    }?key=${import.meta.env.VITE_FIREBASE_AUTH_API_KEY}`;

    const response = await fetch(fetchURL, {
      method: "POST",
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true,
      }),
    });
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(
        responseData.message || "Failed to authenticate. Try again later."
      );
      throw error;
    }

    localStorage.setItem("token", responseData.idToken);
    localStorage.setItem("userId", responseData.localId);

    context.commit("setUser", {
      token: responseData.idToken,
      userId: responseData.localId,
      tokenExpiration: responseData.expiresIn,
    });
  },

  tryLogin(context) {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    if (token && userId) {
      context.commit("setUser", {
        token,
        userId,
        tokenExpiration: null,
      });
    }
  },

  async login(context, payload) {
    return context.dispatch("auth", {
      ...payload,
      mode: "signInWithPassword",
    });
  },

  logout(context) {
    context.commit("setUser", {
      token: null,
      userId: null,
      tokenExpiration: null,
    });
  },

  async signup(context, payload) {
    return context.dispatch("auth", {
      ...payload,
      mode: "signUp",
    });
  },
};
