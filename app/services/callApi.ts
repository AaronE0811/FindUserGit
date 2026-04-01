export const callApi = async ({ search }: { search: string }) => {
  const url = `https://api.github.com/users/${search}`;

  const response = await fetch(url);
  const data = await response.json();
  return data;
};
