export async function get<T>(endpoint: string): Promise<T> {
  try {
    const response = await fetch(`http://localhost:4000/${endpoint}`);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return await response.json();
  } catch (err) {
    throw err;
  }
}
