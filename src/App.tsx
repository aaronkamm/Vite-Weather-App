import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState } from "react";

function App() {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false
      }
    }
  }));

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <div className="prose">
        <h1>Welcome to Weather App!</h1>
        <div>
          <p>Enter your zip code to retrieve the weather:</p>
        </div>
      </div>
    </QueryClientProvider>
  )
}

export default App
