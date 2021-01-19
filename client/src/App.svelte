<script>
  import { Router, Route, Link } from "svelte-routing";

  // Used for SSR. A falsy value is ignored by the Router.
  export let url = "";

  import Home from "./pages/home.svelte";
  import Settings from "./pages/settings.svelte";
  import PNF from "./pages/pnf.svelte";

  import BoxList from "./pages/box/list.svelte";
  import BoxCreate from "./pages/box/create.svelte";

  import ToDoList from "./pages/todo/list.svelte";
  import ToDoCreate from "./pages/todo/create.svelte";

  import NotesList from "./pages/notes/list.svelte";
  import NotesCreate from "./pages/notes/create.svelte";
</script>

<Router url="{url}">
  <nav>
    <Link to="/">Home</Link>
    <Link to="about">About</Link>
    <Link to="blog">Blog</Link>
  </nav>
  <div>
    <Route path="/" component="{Home}" />
    <Route path="settings" component="{Settings}" />

    <Route path="box" component="{BoxList}" />
    <Route path="box/create" component="{BoxCreate}" />

    <Route path="to-do" component="{ToDoList}" />
    <Route path="to-do/create" component="{ToDoCreate}" />

    <Route path="notes" component="{NotesList}" />
    <Route path="notes/create" component="{NotesCreate}" />

    <Route path="*" component="{PNF}" />
  </div>
</Router>
