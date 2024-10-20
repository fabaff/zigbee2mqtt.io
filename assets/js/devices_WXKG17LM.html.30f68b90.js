"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[37470],{60609:(e,t,a)=>{a.r(t),a.d(t,{comp:()=>l,data:()=>r});var o=a(24691);const i={},l=(0,a(89260).A)(i,[["render",function(e,t){const a=(0,o.g2)("RouteLink");return(0,o.uX)(),(0,o.CE)("div",null,[t[7]||(t[7]=(0,o.Lk)("h1",{id:"aqara-wxkg17lm",tabindex:"-1"},[(0,o.Lk)("a",{class:"header-anchor",href:"#aqara-wxkg17lm"},[(0,o.Lk)("span",null,"Aqara WXKG17LM")])],-1)),(0,o.Lk)("table",null,[t[6]||(t[6]=(0,o.Lk)("thead",null,[(0,o.Lk)("tr",null,[(0,o.Lk)("th"),(0,o.Lk)("th")])],-1)),(0,o.Lk)("tbody",null,[t[2]||(t[2]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Model"),(0,o.Lk)("td",null,"WXKG17LM")],-1)),(0,o.Lk)("tr",null,[t[1]||(t[1]=(0,o.Lk)("td",null,"Vendor",-1)),(0,o.Lk)("td",null,[(0,o.bF)(a,{to:"/supported-devices/#v=Aqara"},{default:(0,o.k6)((()=>t[0]||(t[0]=[(0,o.eW)("Aqara")]))),_:1})])]),t[3]||(t[3]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Description"),(0,o.Lk)("td",null,"Wireless remote switch E1 (double rocker)")],-1)),t[4]||(t[4]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Exposes"),(0,o.Lk)("td",null,"battery, voltage, click_mode, action, linkquality")],-1)),t[5]||(t[5]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Picture"),(0,o.Lk)("td",null,[(0,o.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/WXKG17LM.png",alt:"Aqara WXKG17LM"})])],-1))])]),t[8]||(t[8]=(0,o.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="adapter-firmware" tabindex="-1"><a class="header-anchor" href="#adapter-firmware"><span>Adapter firmware</span></a></h3><p>In order for this device to work (fully), at least the following firmware is required on your adapter:</p><ul><li>CC2530/CC2531: <a href="https://github.com/Koenkk/Z-Stack-firmware/tree/Z-Stack_Home_1.2_20211115/20211116/coordinator/Z-Stack_Home_1.2/bin" target="_blank" rel="noopener noreferrer"><code>20211115</code></a></li><li>CC1352/CC2652: <a href="https://github.com/Koenkk/Z-Stack-firmware/tree/7c5a6da0c41855d42b5e6506e5e3b496be097ba3/coordinator/Z-Stack_3.x.0/bin" target="_blank" rel="noopener noreferrer"><code>20211114</code></a></li><li>CC2538: <a href="https://github.com/jethome-ru/zigbee-firmware/tree/master/ti/coordinator/cc2538_cc2592" target="_blank" rel="noopener noreferrer"><code>20211222</code></a></li><li>Conbee II: <a href="http://deconz.dresden-elektronik.de/deconz-firmware/deCONZ_ConBeeII_0x26720700.bin.GCF" target="_blank" rel="noopener noreferrer"><code>0x26720700</code></a></li></ul><p><em>Note that if you have already paired the device you will need to repair it after upgrading your adapter firmware.</em></p><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric"><span>Voltage (numeric)</span></a></h3><p>Voltage of the battery in millivolts. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id="click-mode-enum" tabindex="-1"><a class="header-anchor" href="#click-mode-enum"><span>Click mode (enum)</span></a></h3><p>Click mode, fast: only supports single click which will be send immediately after clicking, multi: supports more events like double and hold. Value can be found in the published state on the <code>click_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;click_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;click_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>fast</code>, <code>multi</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>single_left</code>, <code>single_right</code>, <code>single_both</code>, <code>double_left</code>, <code>double_right</code>, <code>hold_left</code>, <code>hold_right</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',16))])}]]),r=JSON.parse('{"path":"/devices/WXKG17LM.html","title":"Aqara WXKG17LM control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Aqara WXKG17LM control via MQTT","description":"Integrate your Aqara WXKG17LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-11-30T20:10:17.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Adapter firmware","slug":"adapter-firmware","link":"#adapter-firmware","children":[]}]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Voltage (numeric)","slug":"voltage-numeric","link":"#voltage-numeric","children":[]},{"level":3,"title":"Click mode (enum)","slug":"click-mode-enum","link":"#click-mode-enum","children":[]},{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1729448538000},"filePathRelative":"devices/WXKG17LM.md"}')}}]);