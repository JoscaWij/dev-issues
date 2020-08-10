export async function getIssues(query) {
  console.log(query);
  const response = await fetch(
    "https://api.github.com/search/issues?q=test" + query.searchInput
    /* alternativ: `link$query.searchInput` */
  );
  const result = await response.json();
  /*   console.log(result); */
  return result.items;
}
