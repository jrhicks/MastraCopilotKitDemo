import { CopilotKit } from "@copilotkit/react-core";
import { CopilotChat } from "@copilotkit/react-ui";
import "@copilotkit/react-ui/styles.css";
import { MapPanel } from './components/MapPanel'

function App() {
  return (
    <CopilotKit runtimeUrl="http://localhost:4111/copilotkit" agent="weatherAgent">
      <div className="flex h-screen">
        {/* Left: Chat */}
        <div className="w-1/2 p-4 border-r border-gray-200 flex flex-col">
          <h1 className="text-4xl font-extrabold p-8 border-b border-gray-200">Agentic UI with CopilotKit & Mastra</h1>
          <div className="flex-1 overflow-auto">
            <CopilotChat labels={{ title: "Your Assistant", initial: "Hi! 👋 How can I assist you today?" }} />
          </div>
        </div>
        {/* Right: Canvas/Map */}
        <div className="w-1/2 h-full">
          <MapPanel />
        </div>
      </div>
    </CopilotKit>
  )
}

export default App
