import { useCopilotAction } from "@copilotkit/react-core";

export function CopilotActions() {
  useCopilotAction({
    name: "locationIdentified",
    description: "Alert the user when their location has been identified (latitude and longitude)",
    available: "remote",
    parameters: [
      {
        name: "latitude",
        type: "number",
        description: "The latitude of the identified location",
        required: true,
      },
      {
        name: "longitude",
        type: "number",
        description: "The longitude of the identified location",
        required: true,
      },
    ],
    handler: async ({ latitude, longitude }) => {
      alert(`Your location has been identified:\nLatitude: ${latitude}\nLongitude: ${longitude}`);
    },
  });
  return null;
}