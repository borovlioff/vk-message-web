<script>
    import SendMessage from "./components/SendMessage.svelte";
    import AddAccount from "./components/AddAccount.svelte";
    import Log from "./components/Log.svelte";
    import UsersList from "./components/UsersList.svelte"
</script>

<div class="row section">
    
    <div class="col">
        <SendMessage ></SendMessage>
    </div>
    <div class="col section"><AddAccount ></AddAccount></div>
    <div class="col section"><UsersList></UsersList></div>
    <div class="col l12 s12">
        <Log/>
    </div>
</div>
