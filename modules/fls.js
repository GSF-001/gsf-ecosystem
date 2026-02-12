const FLS = {
  evaluate(action = {}) {
    if (action.amount != null && action.amount <= 0) {
      return { allowed: false, reason: "invalid_amount" };
    }
    if (action.type === "reward" && action.amount > 5000) {
      return { allowed: false, reason: "reward_limit" };
    }
    return { allowed: true };
  },
};

export default FLS;
