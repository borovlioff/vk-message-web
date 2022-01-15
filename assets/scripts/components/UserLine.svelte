<script lang=ts>
    import { fade } from 'svelte/transition';
    import {accountStore} from '../store/Account';
    import * as AccountService from "../services/Account"
    export let name = "";
    export let id = 0;

    async function remove(){
        await AccountService.remove({id});
        $accountStore = $accountStore.filter(function(value, index, arr){ 
			if (value.id != id) return value;
		});
    }
</script>


<li class="collection-item" transition:fade >{name}<div class="secondary-content"><i class="material-icons" on:click={remove}>delete</i></div></li>