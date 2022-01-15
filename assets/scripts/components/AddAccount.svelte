<script lang="ts">
  import { accountStore } from "../store/Account";
  import { creat } from "../services/Account";
  import textToObj from "../utils/TextaToArrayObject";

  let placeholder = "Добавьте аккаунты в формате логин:пароль";
  let username_value: string = "";
  async function addAccount() {
    if (username_value != "") {
      let accounts = textToObj({text:username_value, splitSymbol:":", keys:["username","password"]}) as {username: string, password: string}[];

      for (let account of accounts) {
        creat(account).then((response) => {
          let user = response.data;
          if (user?.username) {
            $accountStore = [
              ...$accountStore,
              {
                id: user.id,
                username: user.username,
              },
            ];
          }
        });
      }
    }
  }
</script>

<form class="z-depth-1">
  <textarea {placeholder} bind:value={username_value} />
  <button on:click|preventDefault={addAccount} class="btn">Добавить</button>
</form>

<style>
</style>
