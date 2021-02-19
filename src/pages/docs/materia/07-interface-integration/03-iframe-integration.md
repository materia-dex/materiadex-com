---
title: Iframe Integration
tags: frontend integration, documentation
---

Materia can be used within other sites as an iframe. An iframe shows an exact version of the Materia frontend site and can have custom prefilled settings.

# Why You May Want This

Integrating the Materia site directly into your web application can be useful for a variety of reasons.

The interface allows users to buy, sell, send, or provide liquidity for ERC20 tokens and EthItems. An iframe integration may be useful if your application provides services around these tokens. For example, users can buy WUSD through a Materia iframe on your site, then allow users to lend that WUSD on your site.

It can also be useful if your application requires users to acquire some token in order to use some service. For example, allow users to buy WUSD tokens so they can engage in farm pools on the [Covenants Dapps](https://covenants.eth.link).

# iframe vs. custom UI

One benefit of an iframe integration is that the your site will automatically keep up with any improvements/additions to the site. After the initital integration is setup no further work is needed to pull in updates as the exchange site is updated over time.

# Live Example

<iframe src="https://materia.exchange/#/swap?exactField=input&exactAmount=1&inputCurrency=0x020810D775fC019480CD56ECb960389d3477039D" 
  id="materia-dex"
  height="660px"   
  width="100%"
  style="
    border: 0;
    margin: 0 auto;
    margin-bottom: .5rem;
    display: block;
    border-radius: 10px;
    max-width: 960px;
    min-width: 300px;
  "/>

# Add To Your Site

To include a Materia iframe within your site just add an iframe element within your website code and link to the Materia frontend.

Linking to a WUSD/GIL swap page would look something like this. To link to a token of your choice replace the address after "outputCurrency" with the token address of the token you want to link to.

```html
<iframe 
  id="materia-dex"
  src="https://materia.exchange/#/swap?outputCurrency=0x020810D775fC019480CD56ECb960389d3477039D" 
  height="660px"   
  width="100%"
  style="
    border: 0;
    margin: 0 auto;
    margin-bottom: .5rem;
    display: block;
    border-radius: 10px;
    max-width: 960px;
    min-width: 300px;
"/>
```

More custom linking documentation in the <Link to='/docs/materia/interface-integration/custom-interface-linking'>Custom Linking</Link> page.
