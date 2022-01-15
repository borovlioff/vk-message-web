import.meta.hot;

export default async function Log(){

        let eventSource = new EventSource(`${__SNOWPACK_ENV__.SNOWPACK_PUBLIC_API_URL}/event`)    

         eventSource.addEventListener('message', e => {
             console.log(e.data)
            if (e.lastEventId === '-1') {

                 eventSource.close()
            }
        },
         {once: true})
}
