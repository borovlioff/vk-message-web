<script lang="ts">
    import {accountStore} from '../store/Account'
    import * as AccountService from "../services/Account"
    import { onMount } from 'svelte';
    import UserLine from "./UserLine.svelte";


    onMount(async ()=>{
        let response = await AccountService.get();
        let usersDB = await response.data.account;
        $accountStore = [...$accountStore, ...usersDB];
    });

    
</script>

<div>
<ul class="collection">
{#each $accountStore as { id, username }, i}
<UserLine name={username} id={id}></UserLine>
{/each}
</ul>
</div>