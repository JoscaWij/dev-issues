export async function getIssues(props) {
  /*  console.log(props); */
  const response = await fetch(
    "https://api.github.com/search/issues?q=test" + props.searchInput
  );
  const result = await response.json();
  console.log(result);
  /*   return result; */
}
