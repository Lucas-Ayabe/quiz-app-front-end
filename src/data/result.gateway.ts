type RegisterResultDTO = {
  quizId: number;
  score: number;
};

export const ResultGateway = {
  async register(result: RegisterResultDTO) {
    console.log("Saved");

    return fetch("http://localhost:3001/results", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(result),
    }).then((res) => res.json());
  },
};
