  /* marcusprogramador.github.io/quedalivre/?id=123 */
  /* https://developer.mozilla.org/en-US/docs/Web/API/URL */
  
  const parsedUrl = new URL(window.location.href);
  console.log(parsedUrl.searchParams.get("id")); // "123"
  const div = document.getElementById("res");
  div.innerHTML = parsedUrl.searchParams.get("id"); 
