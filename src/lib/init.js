import { THOUGHTSPOT_HOST, TS_USERNAME, TS_PASSWORD } from './constants'
import { init, AuthType, SearchEmbed, EmbedEvent, AuthStatus, Page, AppEmbed, LiveboardEmbed } from '@thoughtspot/visual-embed-sdk';
export function initialize() { 
  const emitter = init({
    thoughtSpotHost: THOUGHTSPOT_HOST,
    username: TS_USERNAME,
    authType: AuthType.TrustedAuthToken,
    getAuthToken: () => {
      return new Promise((resolve) => {
        fetch(`${THOUGHTSPOT_HOST}/api/rest/2.0/auth/token/full`, {
          headers: {
            "content-type": "application/json"
          },
          body: `{\"username\":\"${TS_USERNAME}\",\"validity_time_in_sec\":3000,\"org_id\":0,\"auto_create\":false,\"password\":\"${TS_PASSWORD}\"}`,
          method: "POST"
        })
        .then((response) => response.json())
        .then((data) => {
          resolve(data.token);
        });
      });
    },
  });
  emitter.on(AuthStatus.SDK_SUCCESS, () => {
    console.log(document.getElementById("tsEmbed"))
    if(window.location.pathname === '/analytics') {
      const tsSearch = new AppEmbed(document.getElementById("tsEmbed"), {
        pageId: Page.Home,
        showPrimaryNavbar: true,
        frameParams: {
          width: '100vw',
          height: '100vh'
        }
      });
      tsSearch
      // .on(EmbedEvent.Init, () => setIsEmbedLoading(true))
      // .on(EmbedEvent.Load, () => setIsEmbedLoading(false))
      .on(EmbedEvent.Error, console.error)
      .render();
    } else {
      const tsSearch = new LiveboardEmbed(document.getElementById("tsEmbed"), {
        frameParams: {
          width: '100vw',
          height: '100vh'
        },
        liveboardId: '959ca8fc-bbe5-47f1-bdff-2c73f9b0cb05',
      });
      tsSearch
      // .on(EmbedEvent.Init, () => setIsEmbedLoading(true))
      // .on(EmbedEvent.Load, () => setIsEmbedLoading(false))
      .on(EmbedEvent.Error, console.error)
      .render();
    }
  })
}
(() => {
  // console.log(process?.env)
  const interval = setInterval(() => {
    if(window.location.pathname === '/analytics') {
      clearInterval(interval)
      const node = document.createElement('div')
      node.setAttribute('id','tsEmbed')
      document.body.innerHTML=''
      document.body.appendChild(node);
      initialize()
    } else if(window.location.pathname === '/analytics-liveboard') {
      clearInterval(interval)
      const node = document.createElement('div')
      node.setAttribute('id','tsEmbed')
      document.body.innerHTML=''
      document.body.appendChild(node);
      initialize()
    }
  }, 50);
})()

