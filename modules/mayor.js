const MAYOR = {
  adjust(action = {}, police = {}) {
    if (police.status === "block") {
      return { policy: "strict", note: "security_escalation" };
    }
    if (action.type === "help") {
      return { policy: "open", note: "citizen_support" };
    }
    return { policy: "stable" };
  },
};

export default MAYOR;
