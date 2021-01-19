<script>
  import { Router, Route, Link } from "svelte-routing";

  // Used for SSR. A falsy value is ignored by the Router.
  export let url = "";


</script>

<Router url="{url}">
  <nav>
    <Link to="/">Home</Link>
    <Link to="about">About</Link>
    <Link to="blog">Blog</Link>
  </nav>
  <div>
    <Route path="/" component="{Home}" />

    <Route path="about" component="{About}" />
    <Route path="blog/*" component="{Blog}" />

    <Route path="*" component="{PNF}" />
  </div>
</Router>
