const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const retryRequest = async (fn, retries = 3, delayMs = 1000) => {
  try {
    return await fn();
  } catch (error) {
    if (retries <= 0) {
      throw new Error("Max retries reached: " + error.message);
    }
    console.log(
      `Retrying after error: ${error.message}. Retries left: ${retries}`
    );
    await delay(delayMs);
    return retryRequest(fn, retries - 1, delayMs);
  }
};

const fetchWithRateLimit = async (
  url,
  headers,
  retries = 3,
  delayMs = 1000
) => {
  return retryRequest(
    async () => {
      const response = await fetch(url, { headers });
      if (response.status === 429) {
        throw new Error("Rate limit exceeded");
      }
      if (!response.ok) {
        throw new Error(`Failed to fetch from ${url}: ${response.statusText}`);
      }
      return response.json();
    },
    retries,
    delayMs
  );
};

module.exports = { fetchWithRateLimit };
