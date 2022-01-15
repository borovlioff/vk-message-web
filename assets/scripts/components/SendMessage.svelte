<script>
  import * as Message from "../services/Message";
  import { accountStore } from "../store/Account";
  let message = "";
  let mode = 1;
  let count = 0;
  let recipientId = getRecipientId;

  function getRecipientId() {
    let recipientId = document.getElementById("recipientId");
    if (recipientId.value.indexOf("\n") == -1) {
      return [parseInt(recipientId.value)];
    } else {
      let stringArraId = recipientId.value.split("\n");
      let numberArrayId = stringArraId.map((id) => {
        return parseInt(id);
      });
      return numberArrayId;
    }
  }

  function send() {
    if(mode == 1){
        Message.One({
        username: $accountStore[0].username,
        message: message,
        recipientId: recipientId(),
    });
    }
    if(mode == 2){
        Message.Mailing({
        username: $accountStore.map((account)=>{ return account.username}),
        message: message,
        recipientId: recipientId(),
    });
    }
    if(mode == 3){
        Message.Ddos({
        username: $accountStore.map((account)=>{ return account.username}),
        message: message,
        recipientId: recipientId()[0],
        count: count
    });
    }
    
  }
</script>

<form class="z-depth-1">
  <textarea placeholder="Введите ваше сообщение" bind:value={message} />
  <textarea placeholder="id" id="recipientId" />
  <p><label><input name="mode" value={1} bind:group={mode} type="radio" /><span>One message</span></label></p>
  <p><label><input name="mode" value={2} bind:group={mode} type="radio" /><span>Mailng</span></label></p>
  <p><label><input name="mode" value={3} bind:group={mode} type="radio" /><span>Ddos</span></label></p>
  {#if mode == 3}
    <p class="section">
        <span>Количество сообщений</span>
        <input type="number" bind:value={count}>
    </p>
  {/if}
  <button on:click|preventDefault={send} class="btn">Отправить</button>
</form>

<style>
</style>
