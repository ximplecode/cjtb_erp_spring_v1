(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Paging_filter");
            this.set_titletext("Paging_filter");
            if (Form == this.constructor)
            {
                this._setFormPosition(1024,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_data0", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"COL0\" type=\"INT\" size=\"256\"/><Column id=\"COL1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COL0\">1</Col><Col id=\"COL1\">data1</Col></Row><Row><Col id=\"COL0\">2</Col><Col id=\"COL1\">data2</Col></Row><Row><Col id=\"COL0\">3</Col><Col id=\"COL1\">data3</Col></Row><Row><Col id=\"COL0\">4</Col><Col id=\"COL1\">data4</Col></Row><Row><Col id=\"COL0\">5</Col><Col id=\"COL1\">data5</Col></Row><Row><Col id=\"COL0\">6</Col><Col id=\"COL1\">data6</Col></Row><Row><Col id=\"COL0\">7</Col><Col id=\"COL1\">data7</Col></Row><Row><Col id=\"COL0\">8</Col><Col id=\"COL1\">data8</Col></Row><Row><Col id=\"COL0\">9</Col><Col id=\"COL1\">data9</Col></Row><Row><Col id=\"COL0\">10</Col><Col id=\"COL1\">data10</Col></Row><Row><Col id=\"COL0\">11</Col><Col id=\"COL1\">data11</Col></Row><Row><Col id=\"COL0\">12</Col><Col id=\"COL1\">data12</Col></Row><Row><Col id=\"COL0\">13</Col><Col id=\"COL1\">data13</Col></Row><Row><Col id=\"COL0\">14</Col><Col id=\"COL1\">data14</Col></Row><Row><Col id=\"COL0\">15</Col><Col id=\"COL1\">data15</Col></Row><Row><Col id=\"COL0\">16</Col><Col id=\"COL1\">data16</Col></Row><Row><Col id=\"COL0\">17</Col><Col id=\"COL1\">data17</Col></Row><Row><Col id=\"COL0\">18</Col><Col id=\"COL1\">data18</Col></Row><Row><Col id=\"COL0\">19</Col><Col id=\"COL1\">data19</Col></Row><Row><Col id=\"COL0\">20</Col><Col id=\"COL1\">data20</Col></Row><Row><Col id=\"COL0\">21</Col><Col id=\"COL1\">data21</Col></Row><Row><Col id=\"COL0\">22</Col><Col id=\"COL1\">data22</Col></Row><Row><Col id=\"COL0\">23</Col><Col id=\"COL1\">data23</Col></Row><Row><Col id=\"COL0\">24</Col><Col id=\"COL1\">data24</Col></Row><Row><Col id=\"COL0\">25</Col><Col id=\"COL1\">data25</Col></Row><Row><Col id=\"COL0\">26</Col><Col id=\"COL1\">data26</Col></Row><Row><Col id=\"COL0\">27</Col><Col id=\"COL1\">data27</Col></Row><Row><Col id=\"COL0\">28</Col><Col id=\"COL1\">data28</Col></Row><Row><Col id=\"COL0\">29</Col><Col id=\"COL1\">data29</Col></Row><Row><Col id=\"COL0\">30</Col><Col id=\"COL1\">data30</Col></Row><Row><Col id=\"COL0\">31</Col><Col id=\"COL1\">data31</Col></Row><Row><Col id=\"COL0\">32</Col><Col id=\"COL1\">data32</Col></Row><Row><Col id=\"COL0\">33</Col><Col id=\"COL1\">data33</Col></Row><Row><Col id=\"COL0\">34</Col><Col id=\"COL1\">data34</Col></Row><Row><Col id=\"COL0\">35</Col><Col id=\"COL1\">data35</Col></Row><Row><Col id=\"COL0\">36</Col><Col id=\"COL1\">data36</Col></Row><Row><Col id=\"COL0\">37</Col><Col id=\"COL1\">data37</Col></Row><Row><Col id=\"COL0\">38</Col><Col id=\"COL1\">data38</Col></Row><Row><Col id=\"COL0\">39</Col><Col id=\"COL1\">data39</Col></Row><Row><Col id=\"COL0\">40</Col><Col id=\"COL1\">data40</Col></Row><Row><Col id=\"COL0\">41</Col><Col id=\"COL1\">data41</Col></Row><Row><Col id=\"COL0\">42</Col><Col id=\"COL1\">data42</Col></Row><Row><Col id=\"COL0\">43</Col><Col id=\"COL1\">data43</Col></Row><Row><Col id=\"COL0\">44</Col><Col id=\"COL1\">data44</Col></Row><Row><Col id=\"COL0\">45</Col><Col id=\"COL1\">data45</Col></Row><Row><Col id=\"COL0\">46</Col><Col id=\"COL1\">data46</Col></Row><Row><Col id=\"COL0\">47</Col><Col id=\"COL1\">data47</Col></Row><Row><Col id=\"COL0\">48</Col><Col id=\"COL1\">data48</Col></Row><Row><Col id=\"COL0\">49</Col><Col id=\"COL1\">data49</Col></Row><Row><Col id=\"COL0\">50</Col><Col id=\"COL1\">data50</Col></Row><Row><Col id=\"COL0\">51</Col><Col id=\"COL1\">data51</Col></Row><Row><Col id=\"COL0\">52</Col><Col id=\"COL1\">data52</Col></Row><Row><Col id=\"COL0\">53</Col><Col id=\"COL1\">data53</Col></Row><Row><Col id=\"COL0\">54</Col><Col id=\"COL1\">data54</Col></Row><Row><Col id=\"COL0\">55</Col><Col id=\"COL1\">data55</Col></Row><Row><Col id=\"COL0\">56</Col><Col id=\"COL1\">data56</Col></Row><Row><Col id=\"COL0\">57</Col><Col id=\"COL1\">data57</Col></Row><Row><Col id=\"COL0\">58</Col><Col id=\"COL1\">data58</Col></Row><Row><Col id=\"COL0\">59</Col><Col id=\"COL1\">data59</Col></Row><Row><Col id=\"COL0\">60</Col><Col id=\"COL1\">data60</Col></Row><Row><Col id=\"COL0\">61</Col><Col id=\"COL1\">data61</Col></Row><Row><Col id=\"COL0\">62</Col><Col id=\"COL1\">data62</Col></Row><Row><Col id=\"COL0\">63</Col><Col id=\"COL1\">data63</Col></Row><Row><Col id=\"COL0\">64</Col><Col id=\"COL1\">data64</Col></Row><Row><Col id=\"COL0\">65</Col><Col id=\"COL1\">data65</Col></Row><Row><Col id=\"COL0\">66</Col><Col id=\"COL1\">data66</Col></Row><Row><Col id=\"COL0\">67</Col><Col id=\"COL1\">data67</Col></Row><Row><Col id=\"COL0\">68</Col><Col id=\"COL1\">data68</Col></Row><Row><Col id=\"COL0\">69</Col><Col id=\"COL1\">data69</Col></Row><Row><Col id=\"COL0\">70</Col><Col id=\"COL1\">data70</Col></Row><Row><Col id=\"COL0\">71</Col><Col id=\"COL1\">data71</Col></Row><Row><Col id=\"COL0\">72</Col><Col id=\"COL1\">data72</Col></Row><Row><Col id=\"COL0\">73</Col><Col id=\"COL1\">data73</Col></Row><Row><Col id=\"COL0\">74</Col><Col id=\"COL1\">data74</Col></Row><Row><Col id=\"COL0\">75</Col><Col id=\"COL1\">data75</Col></Row><Row><Col id=\"COL0\">76</Col><Col id=\"COL1\">data76</Col></Row><Row><Col id=\"COL0\">77</Col><Col id=\"COL1\">data77</Col></Row><Row><Col id=\"COL0\">78</Col><Col id=\"COL1\">data78</Col></Row><Row><Col id=\"COL0\">79</Col><Col id=\"COL1\">data79</Col></Row><Row><Col id=\"COL0\">80</Col><Col id=\"COL1\">data80</Col></Row><Row><Col id=\"COL0\">81</Col><Col id=\"COL1\">data81</Col></Row><Row><Col id=\"COL0\">82</Col><Col id=\"COL1\">data82</Col></Row><Row><Col id=\"COL0\">83</Col><Col id=\"COL1\">data83</Col></Row><Row><Col id=\"COL0\">84</Col><Col id=\"COL1\">data84</Col></Row><Row><Col id=\"COL0\">85</Col><Col id=\"COL1\">data85</Col></Row><Row><Col id=\"COL0\">86</Col><Col id=\"COL1\">data86</Col></Row><Row><Col id=\"COL0\">87</Col><Col id=\"COL1\">data87</Col></Row><Row><Col id=\"COL0\">88</Col><Col id=\"COL1\">data88</Col></Row><Row><Col id=\"COL0\">89</Col><Col id=\"COL1\">data89</Col></Row><Row><Col id=\"COL0\">90</Col><Col id=\"COL1\">data90</Col></Row><Row><Col id=\"COL0\">91</Col><Col id=\"COL1\">data91</Col></Row><Row><Col id=\"COL0\">92</Col><Col id=\"COL1\">data92</Col></Row><Row><Col id=\"COL0\">93</Col><Col id=\"COL1\">data93</Col></Row><Row><Col id=\"COL0\">94</Col><Col id=\"COL1\">data94</Col></Row><Row><Col id=\"COL0\">95</Col><Col id=\"COL1\">data95</Col></Row><Row><Col id=\"COL0\">96</Col><Col id=\"COL1\">data96</Col></Row><Row><Col id=\"COL0\">97</Col><Col id=\"COL1\">data97</Col></Row><Row><Col id=\"COL0\">98</Col><Col id=\"COL1\">data98</Col></Row><Row><Col id=\"COL0\">99</Col><Col id=\"COL1\">data99</Col></Row><Row><Col id=\"COL0\">100</Col><Col id=\"COL1\">data100</Col></Row><Row><Col id=\"COL0\">101</Col><Col id=\"COL1\">data101</Col></Row><Row><Col id=\"COL0\">102</Col><Col id=\"COL1\">data102</Col></Row><Row><Col id=\"COL0\">103</Col><Col id=\"COL1\">data103</Col></Row><Row><Col id=\"COL0\">104</Col><Col id=\"COL1\">data104</Col></Row><Row><Col id=\"COL0\">105</Col><Col id=\"COL1\">data105</Col></Row><Row><Col id=\"COL0\">106</Col><Col id=\"COL1\">data106</Col></Row><Row><Col id=\"COL0\">107</Col><Col id=\"COL1\">data107</Col></Row><Row><Col id=\"COL0\">108</Col><Col id=\"COL1\">data108</Col></Row><Row><Col id=\"COL0\">109</Col><Col id=\"COL1\">data109</Col></Row><Row><Col id=\"COL0\">110</Col><Col id=\"COL1\">data110</Col></Row><Row><Col id=\"COL0\">111</Col><Col id=\"COL1\">data111</Col></Row><Row><Col id=\"COL0\">112</Col><Col id=\"COL1\">data112</Col></Row><Row><Col id=\"COL0\">113</Col><Col id=\"COL1\">data113</Col></Row><Row><Col id=\"COL0\">114</Col><Col id=\"COL1\">data114</Col></Row><Row><Col id=\"COL0\">115</Col><Col id=\"COL1\">data115</Col></Row><Row><Col id=\"COL0\">116</Col><Col id=\"COL1\">data116</Col></Row><Row><Col id=\"COL0\">117</Col><Col id=\"COL1\">data117</Col></Row><Row><Col id=\"COL0\">118</Col><Col id=\"COL1\">data118</Col></Row><Row><Col id=\"COL0\">119</Col><Col id=\"COL1\">data119</Col></Row><Row><Col id=\"COL0\">120</Col><Col id=\"COL1\">data120</Col></Row><Row><Col id=\"COL0\">121</Col><Col id=\"COL1\">data121</Col></Row><Row><Col id=\"COL0\">122</Col><Col id=\"COL1\">data122</Col></Row><Row><Col id=\"COL0\">123</Col><Col id=\"COL1\">data123</Col></Row><Row><Col id=\"COL0\">124</Col><Col id=\"COL1\">data124</Col></Row><Row><Col id=\"COL0\">125</Col><Col id=\"COL1\">data125</Col></Row><Row><Col id=\"COL0\">126</Col><Col id=\"COL1\">data126</Col></Row><Row><Col id=\"COL0\">127</Col><Col id=\"COL1\">data127</Col></Row><Row><Col id=\"COL0\">128</Col><Col id=\"COL1\">data128</Col></Row><Row><Col id=\"COL0\">129</Col><Col id=\"COL1\">data129</Col></Row><Row><Col id=\"COL0\">130</Col><Col id=\"COL1\">data130</Col></Row><Row><Col id=\"COL0\">131</Col><Col id=\"COL1\">data131</Col></Row><Row><Col id=\"COL0\">132</Col><Col id=\"COL1\">data132</Col></Row><Row><Col id=\"COL0\">133</Col><Col id=\"COL1\">data133</Col></Row><Row><Col id=\"COL0\">134</Col><Col id=\"COL1\">data134</Col></Row><Row><Col id=\"COL0\">135</Col><Col id=\"COL1\">data135</Col></Row><Row><Col id=\"COL0\">136</Col><Col id=\"COL1\">data136</Col></Row><Row><Col id=\"COL0\">137</Col><Col id=\"COL1\">data137</Col></Row><Row><Col id=\"COL0\">138</Col><Col id=\"COL1\">data138</Col></Row><Row><Col id=\"COL0\">139</Col><Col id=\"COL1\">data139</Col></Row><Row><Col id=\"COL0\">140</Col><Col id=\"COL1\">data140</Col></Row><Row><Col id=\"COL0\">141</Col><Col id=\"COL1\">data141</Col></Row><Row><Col id=\"COL0\">142</Col><Col id=\"COL1\">data142</Col></Row><Row><Col id=\"COL0\">143</Col><Col id=\"COL1\">data143</Col></Row><Row><Col id=\"COL0\">144</Col><Col id=\"COL1\">data144</Col></Row><Row><Col id=\"COL0\">145</Col><Col id=\"COL1\">data145</Col></Row><Row><Col id=\"COL0\">146</Col><Col id=\"COL1\">data146</Col></Row><Row><Col id=\"COL0\">147</Col><Col id=\"COL1\">data147</Col></Row><Row><Col id=\"COL0\">148</Col><Col id=\"COL1\">data148</Col></Row><Row><Col id=\"COL0\">149</Col><Col id=\"COL1\">data149</Col></Row><Row><Col id=\"COL0\">150</Col><Col id=\"COL1\">data150</Col></Row><Row><Col id=\"COL0\">151</Col><Col id=\"COL1\">data151</Col></Row><Row><Col id=\"COL0\">152</Col><Col id=\"COL1\">data152</Col></Row><Row><Col id=\"COL0\">153</Col><Col id=\"COL1\">data153</Col></Row><Row><Col id=\"COL0\">154</Col><Col id=\"COL1\">data154</Col></Row><Row><Col id=\"COL0\">155</Col><Col id=\"COL1\">data155</Col></Row><Row><Col id=\"COL0\">156</Col><Col id=\"COL1\">data156</Col></Row><Row><Col id=\"COL0\">157</Col><Col id=\"COL1\">data157</Col></Row><Row><Col id=\"COL0\">158</Col><Col id=\"COL1\">data158</Col></Row><Row><Col id=\"COL0\">159</Col><Col id=\"COL1\">data159</Col></Row><Row><Col id=\"COL0\">160</Col><Col id=\"COL1\">data160</Col></Row><Row><Col id=\"COL0\">161</Col><Col id=\"COL1\">data161</Col></Row><Row><Col id=\"COL0\">162</Col><Col id=\"COL1\">data162</Col></Row><Row><Col id=\"COL0\">163</Col><Col id=\"COL1\">data163</Col></Row><Row><Col id=\"COL0\">164</Col><Col id=\"COL1\">data164</Col></Row><Row><Col id=\"COL0\">165</Col><Col id=\"COL1\">data165</Col></Row><Row><Col id=\"COL0\">166</Col><Col id=\"COL1\">data166</Col></Row><Row><Col id=\"COL0\">167</Col><Col id=\"COL1\">data167</Col></Row><Row><Col id=\"COL0\">168</Col><Col id=\"COL1\">data168</Col></Row><Row><Col id=\"COL0\">169</Col><Col id=\"COL1\">data169</Col></Row><Row><Col id=\"COL0\">170</Col><Col id=\"COL1\">data170</Col></Row><Row><Col id=\"COL0\">171</Col><Col id=\"COL1\">data171</Col></Row><Row><Col id=\"COL0\">172</Col><Col id=\"COL1\">data172</Col></Row><Row><Col id=\"COL0\">173</Col><Col id=\"COL1\">data173</Col></Row><Row><Col id=\"COL0\">174</Col><Col id=\"COL1\">data174</Col></Row><Row><Col id=\"COL0\">175</Col><Col id=\"COL1\">data175</Col></Row><Row><Col id=\"COL0\">176</Col><Col id=\"COL1\">data176</Col></Row><Row><Col id=\"COL0\">177</Col><Col id=\"COL1\">data177</Col></Row><Row><Col id=\"COL0\">178</Col><Col id=\"COL1\">data178</Col></Row><Row><Col id=\"COL0\">179</Col><Col id=\"COL1\">data179</Col></Row><Row><Col id=\"COL0\">180</Col><Col id=\"COL1\">data180</Col></Row><Row><Col id=\"COL0\">181</Col><Col id=\"COL1\">data181</Col></Row><Row><Col id=\"COL0\">182</Col><Col id=\"COL1\">data182</Col></Row><Row><Col id=\"COL0\">183</Col><Col id=\"COL1\">data183</Col></Row><Row><Col id=\"COL0\">184</Col><Col id=\"COL1\">data184</Col></Row><Row><Col id=\"COL0\">185</Col><Col id=\"COL1\">data185</Col></Row><Row><Col id=\"COL0\">186</Col><Col id=\"COL1\">data186</Col></Row><Row><Col id=\"COL0\">187</Col><Col id=\"COL1\">data187</Col></Row><Row><Col id=\"COL0\">188</Col><Col id=\"COL1\">data188</Col></Row><Row><Col id=\"COL0\">189</Col><Col id=\"COL1\">data189</Col></Row><Row><Col id=\"COL0\">190</Col><Col id=\"COL1\">data190</Col></Row><Row><Col id=\"COL0\">191</Col><Col id=\"COL1\">data191</Col></Row><Row><Col id=\"COL0\">192</Col><Col id=\"COL1\">data192</Col></Row><Row><Col id=\"COL0\">193</Col><Col id=\"COL1\">data193</Col></Row><Row><Col id=\"COL0\">194</Col><Col id=\"COL1\">data194</Col></Row><Row><Col id=\"COL0\">195</Col><Col id=\"COL1\">data195</Col></Row><Row><Col id=\"COL0\">196</Col><Col id=\"COL1\">data196</Col></Row><Row><Col id=\"COL0\">197</Col><Col id=\"COL1\">data197</Col></Row><Row><Col id=\"COL0\">198</Col><Col id=\"COL1\">data198</Col></Row><Row><Col id=\"COL0\">199</Col><Col id=\"COL1\">data199</Col></Row><Row><Col id=\"COL0\">200</Col><Col id=\"COL1\">data200</Col></Row><Row><Col id=\"COL0\">201</Col><Col id=\"COL1\">data201</Col></Row><Row><Col id=\"COL0\">202</Col><Col id=\"COL1\">data202</Col></Row><Row><Col id=\"COL0\">203</Col><Col id=\"COL1\">data203</Col></Row><Row><Col id=\"COL0\">204</Col><Col id=\"COL1\">data204</Col></Row><Row><Col id=\"COL0\">205</Col><Col id=\"COL1\">data205</Col></Row><Row><Col id=\"COL0\">206</Col><Col id=\"COL1\">data206</Col></Row><Row><Col id=\"COL0\">207</Col><Col id=\"COL1\">data207</Col></Row><Row><Col id=\"COL0\">208</Col><Col id=\"COL1\">data208</Col></Row><Row><Col id=\"COL0\">209</Col><Col id=\"COL1\">data209</Col></Row><Row><Col id=\"COL0\">210</Col><Col id=\"COL1\">data210</Col></Row><Row><Col id=\"COL0\">211</Col><Col id=\"COL1\">data211</Col></Row><Row><Col id=\"COL0\">212</Col><Col id=\"COL1\">data212</Col></Row><Row><Col id=\"COL0\">213</Col><Col id=\"COL1\">data213</Col></Row><Row><Col id=\"COL0\">214</Col><Col id=\"COL1\">data214</Col></Row><Row><Col id=\"COL0\">215</Col><Col id=\"COL1\">data215</Col></Row><Row><Col id=\"COL0\">216</Col><Col id=\"COL1\">data216</Col></Row><Row><Col id=\"COL0\">217</Col><Col id=\"COL1\">data217</Col></Row><Row><Col id=\"COL0\">218</Col><Col id=\"COL1\">data218</Col></Row><Row><Col id=\"COL0\">219</Col><Col id=\"COL1\">data219</Col></Row><Row><Col id=\"COL0\">220</Col><Col id=\"COL1\">data220</Col></Row><Row><Col id=\"COL0\">221</Col><Col id=\"COL1\">data221</Col></Row><Row><Col id=\"COL0\">222</Col><Col id=\"COL1\">data222</Col></Row><Row><Col id=\"COL0\">223</Col><Col id=\"COL1\">data223</Col></Row><Row><Col id=\"COL0\">224</Col><Col id=\"COL1\">data224</Col></Row><Row><Col id=\"COL0\">225</Col><Col id=\"COL1\">data225</Col></Row><Row><Col id=\"COL0\">226</Col><Col id=\"COL1\">data226</Col></Row><Row><Col id=\"COL0\">227</Col><Col id=\"COL1\">data227</Col></Row><Row><Col id=\"COL0\">228</Col><Col id=\"COL1\">data228</Col></Row><Row><Col id=\"COL0\">229</Col><Col id=\"COL1\">data229</Col></Row><Row><Col id=\"COL0\">230</Col><Col id=\"COL1\">data230</Col></Row><Row><Col id=\"COL0\">231</Col><Col id=\"COL1\">data231</Col></Row><Row><Col id=\"COL0\">232</Col><Col id=\"COL1\">data232</Col></Row><Row><Col id=\"COL0\">233</Col><Col id=\"COL1\">data233</Col></Row><Row><Col id=\"COL0\">234</Col><Col id=\"COL1\">data234</Col></Row><Row><Col id=\"COL0\">235</Col><Col id=\"COL1\">data235</Col></Row><Row><Col id=\"COL0\">236</Col><Col id=\"COL1\">data236</Col></Row><Row><Col id=\"COL0\">237</Col><Col id=\"COL1\">data237</Col></Row><Row><Col id=\"COL0\">238</Col><Col id=\"COL1\">data238</Col></Row><Row><Col id=\"COL0\">239</Col><Col id=\"COL1\">data239</Col></Row><Row><Col id=\"COL0\">240</Col><Col id=\"COL1\">data240</Col></Row><Row><Col id=\"COL0\">241</Col><Col id=\"COL1\">data241</Col></Row><Row><Col id=\"COL0\">242</Col><Col id=\"COL1\">data242</Col></Row><Row><Col id=\"COL0\">243</Col><Col id=\"COL1\">data243</Col></Row><Row><Col id=\"COL0\">244</Col><Col id=\"COL1\">data244</Col></Row><Row><Col id=\"COL0\">245</Col><Col id=\"COL1\">data245</Col></Row><Row><Col id=\"COL0\">246</Col><Col id=\"COL1\">data246</Col></Row><Row><Col id=\"COL0\">247</Col><Col id=\"COL1\">data247</Col></Row><Row><Col id=\"COL0\">248</Col><Col id=\"COL1\">data248</Col></Row><Row><Col id=\"COL0\">249</Col><Col id=\"COL1\">data249</Col></Row><Row><Col id=\"COL0\">250</Col><Col id=\"COL1\">data250</Col></Row><Row><Col id=\"COL0\">251</Col><Col id=\"COL1\">data251</Col></Row><Row><Col id=\"COL0\">252</Col><Col id=\"COL1\">data252</Col></Row><Row><Col id=\"COL0\">253</Col><Col id=\"COL1\">data253</Col></Row><Row><Col id=\"COL0\">254</Col><Col id=\"COL1\">data254</Col></Row><Row><Col id=\"COL0\">255</Col><Col id=\"COL1\">data255</Col></Row><Row><Col id=\"COL0\">256</Col><Col id=\"COL1\">data256</Col></Row><Row><Col id=\"COL0\">257</Col><Col id=\"COL1\">data257</Col></Row><Row><Col id=\"COL0\">258</Col><Col id=\"COL1\">data258</Col></Row><Row><Col id=\"COL0\">259</Col><Col id=\"COL1\">data259</Col></Row><Row><Col id=\"COL0\">260</Col><Col id=\"COL1\">data260</Col></Row><Row><Col id=\"COL0\">261</Col><Col id=\"COL1\">data261</Col></Row><Row><Col id=\"COL0\">262</Col><Col id=\"COL1\">data262</Col></Row><Row><Col id=\"COL0\">263</Col><Col id=\"COL1\">data263</Col></Row><Row><Col id=\"COL0\">264</Col><Col id=\"COL1\">data264</Col></Row><Row><Col id=\"COL0\">265</Col><Col id=\"COL1\">data265</Col></Row><Row><Col id=\"COL0\">266</Col><Col id=\"COL1\">data266</Col></Row><Row><Col id=\"COL0\">267</Col><Col id=\"COL1\">data267</Col></Row><Row><Col id=\"COL0\">268</Col><Col id=\"COL1\">data268</Col></Row><Row><Col id=\"COL0\">269</Col><Col id=\"COL1\">data269</Col></Row><Row><Col id=\"COL0\">270</Col><Col id=\"COL1\">data270</Col></Row><Row><Col id=\"COL0\">271</Col><Col id=\"COL1\">data271</Col></Row><Row><Col id=\"COL0\">272</Col><Col id=\"COL1\">data272</Col></Row><Row><Col id=\"COL0\">273</Col><Col id=\"COL1\">data273</Col></Row><Row><Col id=\"COL0\">274</Col><Col id=\"COL1\">data274</Col></Row><Row><Col id=\"COL0\">275</Col><Col id=\"COL1\">data275</Col></Row><Row><Col id=\"COL0\">276</Col><Col id=\"COL1\">data276</Col></Row><Row><Col id=\"COL0\">277</Col><Col id=\"COL1\">data277</Col></Row><Row><Col id=\"COL0\">278</Col><Col id=\"COL1\">data278</Col></Row><Row><Col id=\"COL0\">279</Col><Col id=\"COL1\">data279</Col></Row><Row><Col id=\"COL0\">280</Col><Col id=\"COL1\">data280</Col></Row><Row><Col id=\"COL0\">281</Col><Col id=\"COL1\">data281</Col></Row><Row><Col id=\"COL0\">282</Col><Col id=\"COL1\">data282</Col></Row><Row><Col id=\"COL0\">283</Col><Col id=\"COL1\">data283</Col></Row><Row><Col id=\"COL0\">284</Col><Col id=\"COL1\">data284</Col></Row><Row><Col id=\"COL0\">285</Col><Col id=\"COL1\">data285</Col></Row><Row><Col id=\"COL0\">286</Col><Col id=\"COL1\">data286</Col></Row><Row><Col id=\"COL0\">287</Col><Col id=\"COL1\">data287</Col></Row><Row><Col id=\"COL0\">288</Col><Col id=\"COL1\">data288</Col></Row><Row><Col id=\"COL0\">289</Col><Col id=\"COL1\">data289</Col></Row><Row><Col id=\"COL0\">290</Col><Col id=\"COL1\">data290</Col></Row><Row><Col id=\"COL0\">291</Col><Col id=\"COL1\">data291</Col></Row><Row><Col id=\"COL0\">292</Col><Col id=\"COL1\">data292</Col></Row><Row><Col id=\"COL0\">293</Col><Col id=\"COL1\">data293</Col></Row><Row><Col id=\"COL0\">294</Col><Col id=\"COL1\">data294</Col></Row><Row><Col id=\"COL0\">295</Col><Col id=\"COL1\">data295</Col></Row><Row><Col id=\"COL0\">296</Col><Col id=\"COL1\">data296</Col></Row><Row><Col id=\"COL0\">297</Col><Col id=\"COL1\">data297</Col></Row><Row><Col id=\"COL0\">298</Col><Col id=\"COL1\">data298</Col></Row><Row><Col id=\"COL0\">299</Col><Col id=\"COL1\">data299</Col></Row><Row><Col id=\"COL0\">300</Col><Col id=\"COL1\">data300</Col></Row><Row><Col id=\"COL0\">301</Col><Col id=\"COL1\">data301</Col></Row><Row><Col id=\"COL0\">302</Col><Col id=\"COL1\">data302</Col></Row><Row><Col id=\"COL0\">303</Col><Col id=\"COL1\">data303</Col></Row><Row><Col id=\"COL0\">304</Col><Col id=\"COL1\">data304</Col></Row><Row><Col id=\"COL0\">305</Col><Col id=\"COL1\">data305</Col></Row><Row><Col id=\"COL0\">306</Col><Col id=\"COL1\">data306</Col></Row><Row><Col id=\"COL0\">307</Col><Col id=\"COL1\">data307</Col></Row><Row><Col id=\"COL0\">308</Col><Col id=\"COL1\">data308</Col></Row><Row><Col id=\"COL0\">309</Col><Col id=\"COL1\">data309</Col></Row><Row><Col id=\"COL0\">310</Col><Col id=\"COL1\">data310</Col></Row><Row><Col id=\"COL0\">311</Col><Col id=\"COL1\">data311</Col></Row><Row><Col id=\"COL0\">312</Col><Col id=\"COL1\">data312</Col></Row><Row><Col id=\"COL0\">313</Col></Row><Row><Col id=\"COL0\">314</Col></Row><Row><Col id=\"COL0\">315</Col></Row><Row><Col id=\"COL0\">316</Col></Row><Row><Col id=\"COL0\">317</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_data1", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"COL0\" type=\"INT\" size=\"256\"/><Column id=\"COL1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_data2", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"COL0\" type=\"STRING\" size=\"256\"/><Column id=\"COL1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_output","17","40","403","268",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.getSetter("useinputpanel").set("false");
            obj.set_binddataset("ds_data1");
            obj.set_formats("<Formats>\n  <Format id=\"default\">\n    <Columns>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n    </Columns>\n    <Rows>\n      <Row band=\"head\" size=\"24\"/>\n      <Row band=\"body\" size=\"24\"/>\n    </Rows>\n    <Band id=\"head\">\n      <Cell col=\"0\" disptype=\"normal\" text=\"COL0\"/>\n      <Cell col=\"1\" disptype=\"normal\" text=\"COL1\"/>\n    </Band>\n    <Band id=\"body\">\n      <Cell col=\"0\" disptype=\"normal\" text=\"bind:COL0\"/>\n      <Cell col=\"1\" disptype=\"normal\" text=\"bind:COL1\"/>\n    </Band>\n  </Format>\n</Formats>\n");
            obj.getSetter("position").set("absolute");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"300\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"COL0\"/><Cell col=\"1\" text=\"COL1\"/></Band><Band id=\"body\"><Cell text=\"bind:COL0\"/><Cell col=\"1\" text=\"bind:COL1\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_execute","427","40","90","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("execute");
            obj.getSetter("position").set("absolute");
            this.addChild(obj.name, obj);

            obj = new Static("sta_input0","21","373","37","30",null,null,null,null,null,null,this);
            obj.set_text("input0");
            obj.set_visible("false");
            obj.getSetter("position").set("absolute");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_input0","64","373","55","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_visible("false");
            obj.getSetter("position").set("absolute");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var cmb_input0_innerdataset = new nexacro.NormalDataset("cmb_input0_innerdataset", obj);
            cmb_input0_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">5</Col></Row><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">10</Col></Row><Row><Col id=\"codecolumn\">15</Col><Col id=\"datacolumn\">15</Col></Row><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">20</Col></Row><Row><Col id=\"codecolumn\">25</Col><Col id=\"datacolumn\">25</Col></Row><Row><Col id=\"codecolumn\">30</Col><Col id=\"datacolumn\">30</Col></Row><Row><Col id=\"codecolumn\">40</Col><Col id=\"datacolumn\">40</Col></Row><Row><Col id=\"codecolumn\">50</Col><Col id=\"datacolumn\">50</Col></Row></Rows>");
            obj.set_innerdataset(cmb_input0_innerdataset);
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_input2","274","373","55","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_data2");
            obj.set_codecolumn("COL0");
            obj.set_datacolumn("COL1");
            obj.set_visible("false");
            obj.getSetter("position").set("absolute");
            this.addChild(obj.name, obj);

            obj = new Static("sta_output0","334","373","45","30",null,null,null,null,null,null,this);
            obj.set_text("page /");
            obj.set_visible("false");
            obj.getSetter("position").set("absolute");
            this.addChild(obj.name, obj);

            obj = new Static("sta_output1","382","373","40","30",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_input1","165","373","55","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_visible("false");
            obj.getSetter("position").set("absolute");
            var cmb_input1_innerdataset = new nexacro.NormalDataset("cmb_input1_innerdataset", obj);
            cmb_input1_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">5</Col></Row><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">10</Col></Row></Rows>");
            obj.set_innerdataset(cmb_input1_innerdataset);
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("sta_input1","124","373","37","30",null,null,null,null,null,null,this);
            obj.set_visible("false");
            obj.getSetter("position").set("absolute");
            obj.set_text("input1");
            this.addChild(obj.name, obj);

            obj = new Div("divPage","46","328","330","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_border("0px");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","17","14","507","18",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Paging process using filter");
            obj.set_cssclass("sta_WF_subtitP");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1024,768,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("paging_sample.xfdl", function() {
        /*
         * File Name   : np_Grid_Format_Paging_filter.xfdl
         * Description : Grid를 이용한 페이징처리1
         */

        this.fv_nTotCount   = 0;	// 전체레코드수
        this.fv_nStart		= 1;   	// 시작 번호
        this.fv_nEnd		= 10;   // 끝 번호
        this.fv_nNowPage    = 1;   	// 현재 페이지
        this.fv_nPageSize	= 10;   // 한페이지 최대 레코드수
        this.fv_nPageScale	= 10;	// 화면 최대 페이지수
        this.fv_nTotPage    = 0;	// 전체페이지수

        /*  버튼클릭  */
        this.btn_execute_onclick = function(obj,  e)
        {
            this.ds_data0.filter("");
            this.fv_nNowPage = 1;
            this.fv_nTotCount  = this.ds_data0.getRowCount();	// 전체레코드수


            this.fn_retrieve();
        };

        /*  onitemchanged - 한페이지 최대 레코드수 */
        this.cmb_input0_onitemchanged = function(obj, e)
        {
        	this.fv_nPageSize = Number(this.cmb_input0.value);
        }

        /*  onitemchanged -화면 최대 페이지수  */
        this.cmb_input1_onitemchanged = function(obj, e)
        {
        	this.fv_nPageScale = Number(this.cmb_input1.value);
        }

        /*  onitemchanged  - 페이지 선택*/
        this.cmb_input2_onitemchanged = function(obj, e)
        {
        	this.fv_nNowPage  =  this.cmb_input2.value;
            this.fn_retrieve();
        };

        /*
         * Function Name : fn_retrieve
         * Description   : 서버에서 조회한것처럼 원본에서 filter 처리
         * Parameter     :
         * Return        :
         * Example       : fn_retrieve();
         */
        this.fn_retrieve = function()
        {
            var nStrat = parseInt((this.fv_nNowPage - 1) / this.fv_nPageScale) * (this.fv_nPageScale * this.fv_nPageSize) + 1;
            var nEnd   = parseInt((this.fv_nNowPage - 1) / this.fv_nPageScale) * (this.fv_nPageScale * this.fv_nPageSize) + (this.fv_nPageScale * this.fv_nPageSize);

            this.ds_data0.filter("COL0 >= " + nStrat + " && COL0 <= " + nEnd);

            this.fn_makePage();
            this.fn_Paging();
        };

        /*
         * Function Name : fn_Paging
         * Description   : 페이지 번호 클릭시 filter 처리
         * Parameter     :
         * Return        :
         * Example       : fn_Paging();
         */
        this.fn_Paging = function()
        {
            this.fv_nEnd   = this.fv_nNowPage * this.fv_nPageSize;
            this.fv_nStart = this.fv_nEnd - this.fv_nPageSize + 1;

            this.ds_data1.copyData(this.ds_data0, true);
            this.ds_data1.filter("COL0 >= " + this.fv_nStart + " && COL0 <= " + this.fv_nEnd);
        }

        /*
         * Function Name : fn_pageClick
         * Description   : 페이지 번호 클릭시 화면디스플레이 변경
         * Parameter     :
         * Return        :
         * Example       : fn_pageClick();
         */
        this.fn_pageClick = function(obj)
        {
            this.fv_nNowPage 	  = obj.userData;
            this.cmb_input2.set_value(this.fv_nNowPage);

        	var nStartPage = Math.floor((Number(this.fv_nNowPage)-1) / Number(this.fv_nPageScale));
        	    nStartPage = (nStartPage * this.fv_nPageScale) + 1;
        	var nEndPage   = Number(nStartPage + this.fv_nPageScale);

        	for (var i = nStartPage; i < nEndPage; i++ )
        	{
                if (this.divPage.form.components["btn_"+i] == null)
                {
                    break;
                }

                this.divPage.form["btn_"+i].set_color("black");
                this.divPage.form["btn_"+i].set_font("굴림,9");
        	}

            obj.set_color("blue");
            obj.set_font("굴림,9,bold");

        	this.fn_Paging();
        };

        /*
         * Function Name : fn_pageChange
         * Description   : << , < , > , >> 버튼 클릭시 원본에서 filter 처리할수 있도록 함
         * Parameter     :
         * Return        :
         * Example       : fn_pageChange();
         */
        this.fn_pageChange = function(obj)
        {
            this.fv_nNowPage = obj.userData;
            this.fn_retrieve();
        };

        /*
         * Function Name : fn_makePage
         * Description   : 페이징 처리 부분 동적생성
         * Parameter     :
         * Return        :
         * Example       : fn_makePage();
         */
        this.fn_makePage = function()
        {
        	if (this.components["divPage"] != null)
        	{
        		var objDelete = this.removeChild("divPage");
        		objDelete.destroy();
        	}

        	var objDiv = new Div;
        	objDiv.init("divPage",  85, 327, 330, 30, null, null);
        	this.addChild("divPage", objDiv);
        	objDiv.set_border("0px");
        	objDiv.show();

        	var nLeft   = 100;
        	var nWidth  = 20;
        	var nTop	= 5;

        	var nBottom = 25;
        	var nTab	= 1;

        	if (Math.floor(this.fv_nTotCount % this.fv_nPageSize) > 0)
        	{
        		this.fv_nTotPage = Math.floor(this.fv_nTotCount / this.fv_nPageSize) + 1;
        	}
        	else
        	{
        		this.fv_nTotPage = Math.floor(this.fv_nTotCount / this.fv_nPageSize);
        	}

        	var nStartPage = Math.floor((Number(this.fv_nNowPage)-1) / Number(this.fv_nPageScale));
        	    nStartPage = (nStartPage * this.fv_nPageScale) + 1;
        	var nEndPage   = Number(nStartPage + this.fv_nPageScale);

        	for (var i = nStartPage; i < nEndPage ; i++)
        	{
        		if (i > this.fv_nTotPage)
        		{
        			break;
        		}
        		nLeft -= 10;
        	}

        	var objBtn = null;
        	// <<
        	objBtn = this.fn_getObjButton("first", nLeft, nTop, nWidth, nBottom, "1", "<<", 0);
        	if (nStartPage > this.fv_nPageScale)
        	{
        		objBtn.addEventHandler("onclick", this.fn_pageChange, this);
        	}
        	else
        	{
        		objBtn.set_enable(false);
        	}
        	nLeft = nLeft + nWidth;

        	// <
        	objBtn = this.fn_getObjButton("before", nLeft, nTop, nWidth, nBottom, nStartPage-1, "<", nTab);
        	if (nStartPage > this.fv_nPageScale)
        	{
        		objBtn.addEventHandler("onclick", this.fn_pageChange, this);
        	}
        	else
        	{
        		objBtn.set_enable(false);
        	}
        	nLeft = nLeft + nWidth;

        	// Paging
        	for (var i = nStartPage ; i < nEndPage ; i++)
        	{
        		nLeft = nLeft + nWidth;
        		if (i > this.fv_nTotPage)
        		{
        			break;
        		}

        		var rtn = i;
        		rtn = rtn.toString();

        		objBtn = this.fn_getObjButton("btn_"+i, nLeft, nTop, nWidth, nBottom, i, rtn, nTab);
        		objBtn.addEventHandler("onclick", this.fn_pageClick, this);
        		objBtn.set_border("0 none #808080ff");

        		if (i == this.fv_nNowPage)
        		{
        			objBtn.set_color("blue");
        			objBtn.set_font("Dotum,9,bold");
        		}
        		else
        		{
        			objBtn.set_color("Black");
        			objBtn.set_font("Dotum,9");
        		}
        	}

        	if (i == nEndPage)
        	{
        		nLeft = nLeft + nWidth + nWidth;
        	}
        	else
        	{
        		nLeft = nLeft + nWidth;
        	}

        	// >
        	objBtn = this.fn_getObjButton("next", nLeft, nTop, nWidth, nBottom, nEndPage, ">", nTab);
        	if (nEndPage <= this.fv_nTotPage)
        	{
        		objBtn.addEventHandler("onclick", this.fn_pageChange, this);
        	}
        	else
        	{
        		objBtn.set_enable(false);
        	}
        	nLeft = nLeft + nWidth;

        	// >>
        	objBtn = this.fn_getObjButton("end", nLeft, nTop, nWidth, nBottom, this.fv_nTotPage, ">>", nTab);
        	if (nEndPage < this.fv_nTotPage)
        	{
        		objBtn.addEventHandler("onclick", this.fn_pageChange, this);
        	}
        	else
        	{
        		objBtn.set_enable(false);
        	}
        	nLeft = nLeft + nWidth;
        	this.fn_setDisplay();
        };

        /*
         * Function Name : fn_getObjButton
         * Description   : Button Create
         * Parameter     : ID, Left, Top, Width, Bottom, userData, Text, Tab
         * Return        : Button Object
         * Example       : fn_getObjButton();
         */
        this.fn_getObjButton = function(sId, nLeft, nTop, nWidth, nBottom, sData, sText, nTab)
        {
        	var objBtn = new Button;
        	objBtn.init(sId, nLeft, nTop, nWidth, nBottom, null, null);
        	objBtn.userData = sData;
        	objBtn.set_text(sText);
        	objBtn.set_taborder(nTab);
        	this.divPage.addChild(sId, objBtn);
        	objBtn.show();
        	return objBtn;
        };

        /*
         * Function Name : fn_setDisplay
         * Description   : Display
         * Parameter     :
         * Return        :
         * Example       : fn_setDisplay();
         */
        this.fn_setDisplay = function()
        {
        	if (this.fv_nTotCount > 0)
        	{
        		this.ds_data2.clearData();
        		for (var i = 1; i <= this.fv_nTotPage; i++)
        		{
        			this.ds_data2.addRow();
        			this.ds_data2.setColumn((i-1), "COL0", i);
        			this.ds_data2.setColumn((i-1), "COL1", i);
        		}

        		this.sta_input0.set_visible(true);
        		this.sta_input1.set_visible(true);
        		this.cmb_input0.set_visible(true);
        		this.cmb_input1.set_visible(true);

        		this.cmb_input0.set_value(this.fv_nPageSize);
        		this.cmb_input1.set_value(this.fv_nPageScale);
        		this.sta_output0.set_visible(true);
        		this.sta_output1.set_visible(true);
        		this.sta_output1.set_text(this.fv_nTotCount);
        		this.cmb_input2.set_visible(true);
        		this.cmb_input2.set_value(this.fv_nNowPage);
        	}
        	else
        	{
        		this.sta_input0.set_visible(false);
        		this.sta_input1.set_visible(false);
        		this.cmb_input0.set_visible(false);
        		this.cmb_input1.set_visible(false);
        		this.sta_output0.set_visible(false);
        		this.sta_output1.set_visible(false);
        		this.cmb_input2.set_visible(false);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_execute.addEventHandler("onclick",this.btn_execute_onclick,this);
            this.cmb_input0.addEventHandler("onitemchanged",this.cmb_input0_onitemchanged,this);
            this.cmb_input2.addEventHandler("onitemchanged",this.cmb_input2_onitemchanged,this);
            this.cmb_input1.addEventHandler("onitemchanged",this.cmb_input1_onitemchanged,this);
        };
        this.loadIncludeScript("paging_sample.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
