import { Comparison, ComparisonProps } from "../Comparison/Comparison"
import { options } from "colorette"

type Rows = "id_methods" | "user_volume" | "gov_law" | "id_methods_accuracy"
const comparison: ComparisonProps<Rows> = {
  options: [
    { id: "id_methods", title: "ID Methods" },
    { id: "id_methods_accuracy", title: "ID Methods Accuracy" },
    { id: "user_volume", title: "User Volume" },
    { id: "gov_law", title: "Governing Law" },
  ],
  columns: [
    {
      title: "Anonymous Users",
      values: {
        id_methods: <>Cookie, Fingerprinting</>,
        id_methods_accuracy: "Low",
        user_volume: <>High (~100x to registered)</>,
        gov_law: <>Country of user location</>,
      },
    },
    {
      title: "Registered Users",
      values: {
        id_methods_accuracy: "100%",
        id_methods: <>Email, Internal ID</>,
        user_volume: <>Low</>,
        gov_law: <>Terms of Services / Privacy Policy</>,
      },
    },
  ],
}

export function UserState() {
  return <Comparison {...comparison} />
}
