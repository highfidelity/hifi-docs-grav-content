---
title: 'Overlays'
taxonomy:
    category:
        - docs
---

The Overlays API enables a user to create and interact with overlays. Overlays are 2D or 3D objects that simplify the UI and are only visible to you, allowing you to access additional information without leaving your space.  

- [Properties](#properties)
- [Methods](#methods)
- [Events](#events)

| **Properties** <a id="properties"></a> | Type   | Description |
| ----------------------------- | ------ | ----------- |
| `[Overlays.keyboardFocusOverlay](#p1)]` | string | Get or set the web3d overlay that has keyboard focus. If no overlay is set, get returns null; set to null to clear keyboard focus.            |


| Methods                                  |
| ---------------------------------------- |
| `[Overlays.addOverlay(QString,QVariant)](#m1)]`    |
| `[Overlays.cloneOverlay(OverlayID)](#m2)]`         |
| `[Overlays.deleteOverlay(OverlayID)](#m3)]`        |
| `[Overlays.editOverlay(OverlayID,QVariant)](#m4)]` |
| `[Overlays.editOverlays(QVariant)](#m5)]`          |
| `[Overlays.editPanel(OverlayID,QVariant)](#m6)]`   |
| `[Overlays.findOverlays(glm::vec3,float)](#m7)]`   |
| `[Overlays.findRayIntersection(PickRay,bool,QScriptValue,QScriptValue,bool,bool)](#m8)]` |
| `[Overlays.getKeyboardFocusOverlay()](#m9)]`       |
| `[Overlays.getOverlayAtPoint(glm::vec2)](#m10)]`    |
| `[Overlays.getOverlayObject(OverlayID)](#m11)]`     |
| `[Overlays.getOverlaysProperties(OverlayID,QString)](#m12)]` |
| `[Overlays.getOverlayType(OverlayID)](#m13)]`       |
| `[Overlays.getProperty(OverlayID,QString)](#m14)]`  |
| `[Overlays.getProperties(OverlayID,QString)](#m15)]`  |
| `[Overlays.height()](#m16)]`          
| `[Overlays.isAddedOverlay(OverlayID)](#m17)]`       |
| `[Overlays.isLoaded(OverlayID)](#m18)]`             |
| `[Overlays.sendHoverEnterOverlay(id, event)](#m19)]`             |
| `[Overlays.sendHoverLeaveOverlay(overlayID, event)](#m20)]`             |
| `[Overlays.sendHoverOverOverlay(overlayID, event)](#m21)]`             |
| `[Overlays.sendMouseMoveOnOverlay(overlayID, event)](#m22)]`             |
| `[Overlays.sendMousePressOnOverlay(overlayID, event)](#m23)]`             |
| `[Overlays.sendMouseReleaseOnOverlay(overlayID, event)](#m24)]`             |
| `[Overlays.setKeyboardFocusOverlay(OverlayID)](#m25)]` |
| `[Overlays.textSize(OverlayID,QString)](#m26)]`     |
| `[Overlays.width()](#m27)]`                         |

| Events                                   |
| ---------------------------------------- |
| `[Overlays.hoverEnterOverlay(OverlayID,PointerEvent)](#e1)]` |
| `[Overlays.hoverLeaveOverlay(OverlayID,PointerEvent)](#e2)]` |
| `[Overlays.hoverOverOverlay(OverlayID,PointerEvent)](#e3)]` |
| `[Overlays.mouseDoublePressOffOverlay()](#e4)]`    |
| `[Overlays.mouseDoublePressOnOverlay(OverlayID,PointerEvent)](#e5)]` |
| `[Overlays.mouseMoveOnOverlay(OverlayID,PointerEvent)](#e6)]` |
| `[Overlays.mousePressOffOverlay()](#e7)]`          |
| `[Overlays.mousePressOnOverlay(OverlayID,PointerEvent)](#e8)]` |
| `[Overlays.mouseReleaseOnOverlay(OverlayID,PointerEvent)](#e9)]` |
| `[Overlays.overlayDeleted(OverlayID)](#e10)]`       |


  
##Methods
      
###addOverlay         

    

    
    <h4 class="name" id=".addOverlay"><span class="type-signature">(static) </span>addOverlay<span class="signature">(type, properties)</span><span class="type-signature"> → {<a href="Uuid.html">Uuid</a>}</span></h4>
    

    



<div class="description">
    Add an overlay to the scene.
</div>









    <h5>Parameters:</h5>
    

<table class="params">
    <thead>
    <tr>
        
        <th>Name</th>
        

        <th>Type</th>

        

        

        <th class="last">Description</th>
    </tr>
    </thead>

    <tbody>
    

        <tr>
            
                <td class="name"><code>type</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="Overlays.html#.OverlayType">Overlays.OverlayType</a></span>


            
            </td>

            

            

            <td class="description last">The type of the overlay to add.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>properties</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="Overlays.html#.OverlayProperties">Overlays.OverlayProperties</a></span>


            
            </td>

            

            

            <td class="description last">The properties of the overlay to add.</td>
        </tr>

    
    </tbody>
</table>






<dl class="details">

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    
</dl>













<h5>Returns:</h5>

        
<div class="param-desc">
    The ID of the newly created overlay.
</div>



<dl>
    <dt>
        Type
    </dt>
    <dd>
        
<span class="param-type"><a href="Uuid.html">Uuid</a></span>


    </dd>
</dl>

    




    <h5>Example</h5>
    
        <p class="code-caption">Add a cube overlay in front of your avatar.</p>
    
    <pre class="prettyprint"><code><span class="kwd">var</span><span class="pln"> overlay </span><span class="pun">=</span><span class="pln"> </span><span class="typ">Overlays</span><span class="pun">.</span><span class="pln">addOverlay</span><span class="pun">(</span><span class="str">"cube"</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    position</span><span class="pun">:</span><span class="pln"> </span><span class="typ">Vec3</span><span class="pun">.</span><span class="pln">sum</span><span class="pun">(</span><span class="typ">MyAvatar</span><span class="pun">.</span><span class="pln">position</span><span class="pun">,</span><span class="pln"> </span><span class="typ">Vec3</span><span class="pun">.</span><span class="pln">multiplyQbyV</span><span class="pun">(</span><span class="typ">MyAvatar</span><span class="pun">.</span><span class="pln">orientation</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> x</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0</span><span class="pun">,</span><span class="pln"> y</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0</span><span class="pun">,</span><span class="pln"> z</span><span class="pun">:</span><span class="pln"> </span><span class="pun">-</span><span class="lit">3</span><span class="pln"> </span><span class="pun">})),</span><span class="pln">
    rotation</span><span class="pun">:</span><span class="pln"> </span><span class="typ">MyAvatar</span><span class="pun">.</span><span class="pln">orientation</span><span class="pun">,</span><span class="pln">
    dimensions</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> x</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0.3</span><span class="pun">,</span><span class="pln"> y</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0.3</span><span class="pun">,</span><span class="pln"> z</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0.3</span><span class="pln"> </span><span class="pun">},</span><span class="pln">
    solid</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">true</span><span class="pln">
</span><span class="pun">});</span></code></pre>



        
            

    

    
    <h4 class="name" id=".cloneOverlay"><span class="type-signature">(static) </span>cloneOverlay<span class="signature">(overlayID)</span><span class="type-signature"> → {<a href="Uuid.html">Uuid</a>}</span></h4>
    

    



<div class="description">
    Create a clone of an existing overlay.
</div>









    <h5>Parameters:</h5>
    

<table class="params">
    <thead>
    <tr>
        
        <th>Name</th>
        

        <th>Type</th>

        

        

        <th class="last">Description</th>
    </tr>
    </thead>

    <tbody>
    

        <tr>
            
                <td class="name"><code>overlayID</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="Uuid.html">Uuid</a></span>


            
            </td>

            

            

            <td class="description last">The ID of the overlay to clone.</td>
        </tr>

    
    </tbody>
</table>






<dl class="details">

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    
</dl>













<h5>Returns:</h5>

        
<div class="param-desc">
    The ID of the new overlay.
</div>



<dl>
    <dt>
        Type
    </dt>
    <dd>
        
<span class="param-type"><a href="Uuid.html">Uuid</a></span>


    </dd>
</dl>

    




    <h5>Example</h5>
    
        <p class="code-caption">Add an overlay in front of your avatar, clone it, and move the clone to be above the 
    original.</p>
    
    <pre class="prettyprint"><code><span class="kwd">var</span><span class="pln"> position </span><span class="pun">=</span><span class="pln"> </span><span class="typ">Vec3</span><span class="pun">.</span><span class="pln">sum</span><span class="pun">(</span><span class="typ">MyAvatar</span><span class="pun">.</span><span class="pln">position</span><span class="pun">,</span><span class="pln"> </span><span class="typ">Vec3</span><span class="pun">.</span><span class="pln">multiplyQbyV</span><span class="pun">(</span><span class="typ">MyAvatar</span><span class="pun">.</span><span class="pln">orientation</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> x</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0</span><span class="pun">,</span><span class="pln"> y</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0</span><span class="pun">,</span><span class="pln"> z</span><span class="pun">:</span><span class="pln"> </span><span class="pun">-</span><span class="lit">3</span><span class="pln"> </span><span class="pun">}));</span><span class="pln">
</span><span class="kwd">var</span><span class="pln"> original </span><span class="pun">=</span><span class="pln"> </span><span class="typ">Overlays</span><span class="pun">.</span><span class="pln">addOverlay</span><span class="pun">(</span><span class="str">"cube"</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    position</span><span class="pun">:</span><span class="pln"> position</span><span class="pun">,</span><span class="pln">
    rotation</span><span class="pun">:</span><span class="pln"> </span><span class="typ">MyAvatar</span><span class="pun">.</span><span class="pln">orientation</span><span class="pun">,</span><span class="pln">
    dimensions</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> x</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0.3</span><span class="pun">,</span><span class="pln"> y</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0.3</span><span class="pun">,</span><span class="pln"> z</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0.3</span><span class="pln"> </span><span class="pun">},</span><span class="pln">
    solid</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">true</span><span class="pln">
</span><span class="pun">});</span><span class="pln">

</span><span class="kwd">var</span><span class="pln"> clone </span><span class="pun">=</span><span class="pln"> </span><span class="typ">Overlays</span><span class="pun">.</span><span class="pln">cloneOverlay</span><span class="pun">(</span><span class="pln">original</span><span class="pun">);</span><span class="pln">
</span><span class="typ">Overlays</span><span class="pun">.</span><span class="pln">editOverlay</span><span class="pun">(</span><span class="pln">clone</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    position</span><span class="pun">:</span><span class="pln"> </span><span class="typ">Vec3</span><span class="pun">.</span><span class="pln">sum</span><span class="pun">({</span><span class="pln"> x</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0</span><span class="pun">,</span><span class="pln"> y</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0.5</span><span class="pun">,</span><span class="pln"> z</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0</span><span class="pun">},</span><span class="pln"> position</span><span class="pun">)</span><span class="pln">
</span><span class="pun">});</span></code></pre>



        
            

    

    
    <h4 class="name" id=".deleteOverlay"><span class="type-signature">(static) </span>deleteOverlay<span class="signature">(overlayID)</span><span class="type-signature"></span></h4>
    

    



<div class="description">
    Delete an overlay.
</div>









    <h5>Parameters:</h5>
    

<table class="params">
    <thead>
    <tr>
        
        <th>Name</th>
        

        <th>Type</th>

        

        

        <th class="last">Description</th>
    </tr>
    </thead>

    <tbody>
    

        <tr>
            
                <td class="name"><code>overlayID</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="Uuid.html">Uuid</a></span>


            
            </td>

            

            

            <td class="description last">The ID of the overlay to delete.</td>
        </tr>

    
    </tbody>
</table>






<dl class="details">

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    
</dl>

















    <h5>Example</h5>
    
        <p class="code-caption">Create an overlay in front of your avatar then delete it.</p>
    
    <pre class="prettyprint"><code><span class="kwd">var</span><span class="pln"> overlay </span><span class="pun">=</span><span class="pln"> </span><span class="typ">Overlays</span><span class="pun">.</span><span class="pln">addOverlay</span><span class="pun">(</span><span class="str">"cube"</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    position</span><span class="pun">:</span><span class="pln"> </span><span class="typ">Vec3</span><span class="pun">.</span><span class="pln">sum</span><span class="pun">(</span><span class="typ">MyAvatar</span><span class="pun">.</span><span class="pln">position</span><span class="pun">,</span><span class="pln"> </span><span class="typ">Vec3</span><span class="pun">.</span><span class="pln">multiplyQbyV</span><span class="pun">(</span><span class="typ">MyAvatar</span><span class="pun">.</span><span class="pln">orientation</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> x</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0</span><span class="pun">,</span><span class="pln"> y</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0</span><span class="pun">,</span><span class="pln"> z</span><span class="pun">:</span><span class="pln"> </span><span class="pun">-</span><span class="lit">3</span><span class="pln"> </span><span class="pun">})),</span><span class="pln">
    rotation</span><span class="pun">:</span><span class="pln"> </span><span class="typ">MyAvatar</span><span class="pun">.</span><span class="pln">orientation</span><span class="pun">,</span><span class="pln">
    dimensions</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> x</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0.3</span><span class="pun">,</span><span class="pln"> y</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0.3</span><span class="pun">,</span><span class="pln"> z</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0.3</span><span class="pln"> </span><span class="pun">},</span><span class="pln">
    solid</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">true</span><span class="pln">
</span><span class="pun">});</span><span class="pln">
</span><span class="kwd">print</span><span class="pun">(</span><span class="str">"Overlay: "</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> overlay</span><span class="pun">);</span><span class="pln">
</span><span class="typ">Overlays</span><span class="pun">.</span><span class="pln">deleteOverlay</span><span class="pun">(</span><span class="pln">overlay</span><span class="pun">);</span></code></pre>



        
            

    

    
    <h4 class="name" id=".editOverlay"><span class="type-signature">(static) </span>editOverlay<span class="signature">(overlayID, properties)</span><span class="type-signature"> → {boolean}</span></h4>
    

    



<div class="description">
    Edit an overlay's properties.
</div>









    <h5>Parameters:</h5>
    

<table class="params">
    <thead>
    <tr>
        
        <th>Name</th>
        

        <th>Type</th>

        

        

        <th class="last">Description</th>
    </tr>
    </thead>

    <tbody>
    

        <tr>
            
                <td class="name"><code>overlayID</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="Uuid.html">Uuid</a></span>


            
            </td>

            

            

            <td class="description last">The ID of the overlay to edit.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>properties</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="Overlays.html#.OverlayProperties">Overlays.OverlayProperties</a></span>


            
            </td>

            

            

            <td class="description last">The properties changes to make.</td>
        </tr>

    
    </tbody>
</table>






<dl class="details">

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    
</dl>













<h5>Returns:</h5>

        
<div class="param-desc">
    <code>true</code> if the overlay was found and edited, otherwise <code>false</code>.
</div>



<dl>
    <dt>
        Type
    </dt>
    <dd>
        
<span class="param-type">boolean</span>


    </dd>
</dl>

    




    <h5>Example</h5>
    
        <p class="code-caption">Add an overlay in front of your avatar then change its color.</p>
    
    <pre class="prettyprint"><code><span class="kwd">var</span><span class="pln"> overlay </span><span class="pun">=</span><span class="pln"> </span><span class="typ">Overlays</span><span class="pun">.</span><span class="pln">addOverlay</span><span class="pun">(</span><span class="str">"cube"</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    position</span><span class="pun">:</span><span class="pln"> </span><span class="typ">Vec3</span><span class="pun">.</span><span class="pln">sum</span><span class="pun">(</span><span class="typ">MyAvatar</span><span class="pun">.</span><span class="pln">position</span><span class="pun">,</span><span class="pln"> </span><span class="typ">Vec3</span><span class="pun">.</span><span class="pln">multiplyQbyV</span><span class="pun">(</span><span class="typ">MyAvatar</span><span class="pun">.</span><span class="pln">orientation</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> x</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0</span><span class="pun">,</span><span class="pln"> y</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0</span><span class="pun">,</span><span class="pln"> z</span><span class="pun">:</span><span class="pln"> </span><span class="pun">-</span><span class="lit">3</span><span class="pln"> </span><span class="pun">})),</span><span class="pln">
    rotation</span><span class="pun">:</span><span class="pln"> </span><span class="typ">MyAvatar</span><span class="pun">.</span><span class="pln">orientation</span><span class="pun">,</span><span class="pln">
    dimensions</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> x</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0.3</span><span class="pun">,</span><span class="pln"> y</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0.3</span><span class="pun">,</span><span class="pln"> z</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0.3</span><span class="pln"> </span><span class="pun">},</span><span class="pln">
    solid</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">true</span><span class="pln">
</span><span class="pun">});</span><span class="pln">

</span><span class="kwd">var</span><span class="pln"> success </span><span class="pun">=</span><span class="pln"> </span><span class="typ">Overlays</span><span class="pun">.</span><span class="pln">editOverlay</span><span class="pun">(</span><span class="pln">overlay</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    color</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> red</span><span class="pun">:</span><span class="pln"> </span><span class="lit">255</span><span class="pun">,</span><span class="pln"> green</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0</span><span class="pun">,</span><span class="pln"> blue</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0</span><span class="pln"> </span><span class="pun">}</span><span class="pln">
</span><span class="pun">});</span><span class="pln">
</span><span class="kwd">print</span><span class="pun">(</span><span class="str">"Success: "</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> success</span><span class="pun">);</span></code></pre>



        
            

    

    
    <h4 class="name" id=".editOverlays"><span class="type-signature">(static) </span>editOverlays<span class="signature">(propertiesById)</span><span class="type-signature"> → {boolean}</span></h4>
    

    



<div class="description">
    Edit multiple overlays' properties.
</div>









    <h5>Parameters:</h5>
    

<table class="params">
    <thead>
    <tr>
        
        <th>Name</th>
        

        <th>Type</th>

        

        

        <th class="last">Description</th>
    </tr>
    </thead>

    <tbody>
    

        <tr>
            
                <td class="name"><code>propertiesById</code></td>
            

            <td class="type">
            
                
<span class="param-type">object.&lt;<a href="Uuid.html">Uuid</a>, <a href="Overlays.html#.OverlayProperties">Overlays.OverlayProperties</a>&gt;</span>


            
            </td>

            

            

            <td class="description last">An object with overlay IDs as keys and
    <a href="Overlays.html#.OverlayProperties">OverlayProperties</a> edits to make as values.</td>
        </tr>

    
    </tbody>
</table>






<dl class="details">

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    
</dl>













<h5>Returns:</h5>

        
<div class="param-desc">
    <code>true</code> if all overlays were found and edited, otherwise <code>false</code> (some may have
    been found and edited).
</div>



<dl>
    <dt>
        Type
    </dt>
    <dd>
        
<span class="param-type">boolean</span>


    </dd>
</dl>

    




    <h5>Example</h5>
    
        <p class="code-caption">Create two overlays in front of your avatar then change their colors.</p>
    
    <pre class="prettyprint"><code><span class="kwd">var</span><span class="pln"> overlayA </span><span class="pun">=</span><span class="pln"> </span><span class="typ">Overlays</span><span class="pun">.</span><span class="pln">addOverlay</span><span class="pun">(</span><span class="str">"cube"</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    position</span><span class="pun">:</span><span class="pln"> </span><span class="typ">Vec3</span><span class="pun">.</span><span class="pln">sum</span><span class="pun">(</span><span class="typ">MyAvatar</span><span class="pun">.</span><span class="pln">position</span><span class="pun">,</span><span class="pln"> </span><span class="typ">Vec3</span><span class="pun">.</span><span class="pln">multiplyQbyV</span><span class="pun">(</span><span class="typ">MyAvatar</span><span class="pun">.</span><span class="pln">orientation</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> x</span><span class="pun">:</span><span class="pln"> </span><span class="pun">-</span><span class="lit">0.3</span><span class="pun">,</span><span class="pln"> y</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0</span><span class="pun">,</span><span class="pln"> z</span><span class="pun">:</span><span class="pln"> </span><span class="pun">-</span><span class="lit">3</span><span class="pln"> </span><span class="pun">})),</span><span class="pln">
    rotation</span><span class="pun">:</span><span class="pln"> </span><span class="typ">MyAvatar</span><span class="pun">.</span><span class="pln">orientation</span><span class="pun">,</span><span class="pln">
    dimensions</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> x</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0.3</span><span class="pun">,</span><span class="pln"> y</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0.3</span><span class="pun">,</span><span class="pln"> z</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0.3</span><span class="pln"> </span><span class="pun">},</span><span class="pln">
    solid</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">true</span><span class="pln">
</span><span class="pun">});</span><span class="pln">
</span><span class="kwd">var</span><span class="pln"> overlayB </span><span class="pun">=</span><span class="pln"> </span><span class="typ">Overlays</span><span class="pun">.</span><span class="pln">addOverlay</span><span class="pun">(</span><span class="str">"cube"</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    position</span><span class="pun">:</span><span class="pln"> </span><span class="typ">Vec3</span><span class="pun">.</span><span class="pln">sum</span><span class="pun">(</span><span class="typ">MyAvatar</span><span class="pun">.</span><span class="pln">position</span><span class="pun">,</span><span class="pln"> </span><span class="typ">Vec3</span><span class="pun">.</span><span class="pln">multiplyQbyV</span><span class="pun">(</span><span class="typ">MyAvatar</span><span class="pun">.</span><span class="pln">orientation</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> x</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0.3</span><span class="pun">,</span><span class="pln"> y</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0</span><span class="pun">,</span><span class="pln"> z</span><span class="pun">:</span><span class="pln"> </span><span class="pun">-</span><span class="lit">3</span><span class="pln"> </span><span class="pun">})),</span><span class="pln">
    rotation</span><span class="pun">:</span><span class="pln"> </span><span class="typ">MyAvatar</span><span class="pun">.</span><span class="pln">orientation</span><span class="pun">,</span><span class="pln">
    dimensions</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> x</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0.3</span><span class="pun">,</span><span class="pln"> y</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0.3</span><span class="pun">,</span><span class="pln"> z</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0.3</span><span class="pln"> </span><span class="pun">},</span><span class="pln">
    solid</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">true</span><span class="pln">
</span><span class="pun">});</span><span class="pln">

</span><span class="kwd">var</span><span class="pln"> overlayEdits </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{};</span><span class="pln">
overlayEdits</span><span class="pun">[</span><span class="pln">overlayA</span><span class="pun">]</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> color</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> red</span><span class="pun">:</span><span class="pln"> </span><span class="lit">255</span><span class="pun">,</span><span class="pln"> green</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0</span><span class="pun">,</span><span class="pln"> blue</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="pun">};</span><span class="pln">
overlayEdits</span><span class="pun">[</span><span class="pln">overlayB</span><span class="pun">]</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> color</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> red</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0</span><span class="pun">,</span><span class="pln"> green</span><span class="pun">:</span><span class="pln"> </span><span class="lit">255</span><span class="pun">,</span><span class="pln"> blue</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="pun">};</span><span class="pln">
</span><span class="kwd">var</span><span class="pln"> success </span><span class="pun">=</span><span class="pln"> </span><span class="typ">Overlays</span><span class="pun">.</span><span class="pln">editOverlays</span><span class="pun">(</span><span class="pln">overlayEdits</span><span class="pun">);</span><span class="pln">
</span><span class="kwd">print</span><span class="pun">(</span><span class="str">"Success: "</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> success</span><span class="pun">);</span></code></pre>



        
            

    

    
    <h4 class="name" id=".findOverlays"><span class="type-signature">(static) </span>findOverlays<span class="signature">(center, radius)</span><span class="type-signature"> → {Array.&lt;<a href="Uuid.html">Uuid</a>&gt;}</span></h4>
    

    



<div class="description">
    Return a list of 3D overlays with bounding boxes that touch a search sphere.
</div>









    <h5>Parameters:</h5>
    

<table class="params">
    <thead>
    <tr>
        
        <th>Name</th>
        

        <th>Type</th>

        

        

        <th class="last">Description</th>
    </tr>
    </thead>

    <tbody>
    

        <tr>
            
                <td class="name"><code>center</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#Vec3">Vec3</a></span>


            
            </td>

            

            

            <td class="description last">The center of the search sphere.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>radius</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            

            <td class="description last">The radius of the search sphere.</td>
        </tr>

    
    </tbody>
</table>






<dl class="details">

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    
</dl>













<h5>Returns:</h5>

        
<div class="param-desc">
    An array of overlay IDs with bounding boxes that touch a search sphere.
</div>



<dl>
    <dt>
        Type
    </dt>
    <dd>
        
<span class="param-type">Array.&lt;<a href="Uuid.html">Uuid</a>&gt;</span>


    </dd>
</dl>

    




    <h5>Example</h5>
    
        <p class="code-caption">Create two cube overlays in front of your avatar then search for overlays near your avatar.</p>
    
    <pre class="prettyprint"><code><span class="kwd">var</span><span class="pln"> overlayA </span><span class="pun">=</span><span class="pln"> </span><span class="typ">Overlays</span><span class="pun">.</span><span class="pln">addOverlay</span><span class="pun">(</span><span class="str">"cube"</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    position</span><span class="pun">:</span><span class="pln"> </span><span class="typ">Vec3</span><span class="pun">.</span><span class="pln">sum</span><span class="pun">(</span><span class="typ">MyAvatar</span><span class="pun">.</span><span class="pln">position</span><span class="pun">,</span><span class="pln"> </span><span class="typ">Vec3</span><span class="pun">.</span><span class="pln">multiplyQbyV</span><span class="pun">(</span><span class="typ">MyAvatar</span><span class="pun">.</span><span class="pln">orientation</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> x</span><span class="pun">:</span><span class="pln"> </span><span class="pun">-</span><span class="lit">0.3</span><span class="pun">,</span><span class="pln"> y</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0</span><span class="pun">,</span><span class="pln"> z</span><span class="pun">:</span><span class="pln"> </span><span class="pun">-</span><span class="lit">3</span><span class="pln"> </span><span class="pun">})),</span><span class="pln">
    rotation</span><span class="pun">:</span><span class="pln"> </span><span class="typ">MyAvatar</span><span class="pun">.</span><span class="pln">orientation</span><span class="pun">,</span><span class="pln">
    dimensions</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> x</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0.3</span><span class="pun">,</span><span class="pln"> y</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0.3</span><span class="pun">,</span><span class="pln"> z</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0.3</span><span class="pln"> </span><span class="pun">},</span><span class="pln">
    solid</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">true</span><span class="pln">
</span><span class="pun">});</span><span class="pln">
</span><span class="kwd">print</span><span class="pun">(</span><span class="str">"Overlay A: "</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> overlayA</span><span class="pun">);</span><span class="pln">
</span><span class="kwd">var</span><span class="pln"> overlayB </span><span class="pun">=</span><span class="pln"> </span><span class="typ">Overlays</span><span class="pun">.</span><span class="pln">addOverlay</span><span class="pun">(</span><span class="str">"cube"</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    position</span><span class="pun">:</span><span class="pln"> </span><span class="typ">Vec3</span><span class="pun">.</span><span class="pln">sum</span><span class="pun">(</span><span class="typ">MyAvatar</span><span class="pun">.</span><span class="pln">position</span><span class="pun">,</span><span class="pln"> </span><span class="typ">Vec3</span><span class="pun">.</span><span class="pln">multiplyQbyV</span><span class="pun">(</span><span class="typ">MyAvatar</span><span class="pun">.</span><span class="pln">orientation</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> x</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0.3</span><span class="pun">,</span><span class="pln"> y</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0</span><span class="pun">,</span><span class="pln"> z</span><span class="pun">:</span><span class="pln"> </span><span class="pun">-</span><span class="lit">3</span><span class="pln"> </span><span class="pun">})),</span><span class="pln">
    rotation</span><span class="pun">:</span><span class="pln"> </span><span class="typ">MyAvatar</span><span class="pun">.</span><span class="pln">orientation</span><span class="pun">,</span><span class="pln">
    dimensions</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> x</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0.3</span><span class="pun">,</span><span class="pln"> y</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0.3</span><span class="pun">,</span><span class="pln"> z</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0.3</span><span class="pln"> </span><span class="pun">},</span><span class="pln">
    solid</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">true</span><span class="pln">
</span><span class="pun">});</span><span class="pln">
</span><span class="kwd">print</span><span class="pun">(</span><span class="str">"Overlay B: "</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> overlayB</span><span class="pun">);</span><span class="pln">

</span><span class="kwd">var</span><span class="pln"> overlaysFound </span><span class="pun">=</span><span class="pln"> </span><span class="typ">Overlays</span><span class="pun">.</span><span class="pln">findOverlays</span><span class="pun">(</span><span class="typ">MyAvatar</span><span class="pun">.</span><span class="pln">position</span><span class="pun">,</span><span class="pln"> </span><span class="lit">5.0</span><span class="pun">);</span><span class="pln">
</span><span class="kwd">print</span><span class="pun">(</span><span class="str">"Overlays found: "</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> JSON</span><span class="pun">.</span><span class="pln">stringify</span><span class="pun">(</span><span class="pln">overlaysFound</span><span class="pun">));</span></code></pre>



        
            

    

    
    <h4 class="name" id=".findRayIntersection"><span class="type-signature">(static) </span>findRayIntersection<span class="signature">(pickRay, precisionPicking<span class="signature-attributes">opt</span>, overlayIDsToInclude<span class="signature-attributes">opt</span>, overlayIDsToExclude<span class="signature-attributes">opt</span>, visibleOnly<span class="signature-attributes">opt</span>, collidableOnly<span class="signature-attributes">opt</span>)</span><span class="type-signature"> → {<a href="Overlays.html#.RayToOverlayIntersectionResult">Overlays.RayToOverlayIntersectionResult</a>}</span></h4>
    

    



<div class="description">
    Find the closest 3D overlay intersected by a <a href="global.html#PickRay">PickRay</a>.
</div>









    <h5>Parameters:</h5>
    

<table class="params">
    <thead>
    <tr>
        
        <th>Name</th>
        

        <th>Type</th>

        
        <th>Attributes</th>
        

        
        <th>Default</th>
        

        <th class="last">Description</th>
    </tr>
    </thead>

    <tbody>
    

        <tr>
            
                <td class="name"><code>pickRay</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#PickRay">PickRay</a></span>


            
            </td>

            
                <td class="attributes">
                

                

                
                </td>
            

            
                <td class="default">
                
                </td>
            

            <td class="description last">The PickRay to use for finding overlays.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>precisionPicking</code></td>
            

            <td class="type">
            
                
<span class="param-type">boolean</span>


            
            </td>

            
                <td class="attributes">
                
                    &lt;optional&gt;<br>
                

                

                
                </td>
            

            
                <td class="default">
                
                    false
                
                </td>
            

            <td class="description last"><em>Unused</em>; exists to match Entity API.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>overlayIDsToInclude</code></td>
            

            <td class="type">
            
                
<span class="param-type">Array.&lt;<a href="Uuid.html">Uuid</a>&gt;</span>


            
            </td>

            
                <td class="attributes">
                
                    &lt;optional&gt;<br>
                

                

                
                </td>
            

            
                <td class="default">
                
                    []
                
                </td>
            

            <td class="description last">Whitelist for intersection test. If empty then the result isn't limited
    to overlays in the list.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>overlayIDsToExclude</code></td>
            

            <td class="type">
            
                
<span class="param-type">Array.&lt;<a href="Uuid.html">Uuid</a>&gt;</span>


            
            </td>

            
                <td class="attributes">
                
                    &lt;optional&gt;<br>
                

                

                
                </td>
            

            
                <td class="default">
                
                    []
                
                </td>
            

            <td class="description last">Blacklist for intersection test. If empty then the result doesn't
    exclude overlays in the list.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>visibleOnly</code></td>
            

            <td class="type">
            
                
<span class="param-type">boolean</span>


            
            </td>

            
                <td class="attributes">
                
                    &lt;optional&gt;<br>
                

                

                
                </td>
            

            
                <td class="default">
                
                    false
                
                </td>
            

            <td class="description last"><em>Unused</em>; exists to match Entity API.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>collidableOnly</code></td>
            

            <td class="type">
            
                
<span class="param-type">boolean</span>


            
            </td>

            
                <td class="attributes">
                
                    &lt;optional&gt;<br>
                

                

                
                </td>
            

            
                <td class="default">
                
                    false
                
                </td>
            

            <td class="description last"><em>Unused</em>; exists to match Entity API.</td>
        </tr>

    
    </tbody>
</table>






<dl class="details">

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    
</dl>













<h5>Returns:</h5>

        
<div class="param-desc">
    The closest 3D overlay intersected by <code>pickRay</code>, taking
    into account <code>overlayIDsToInclude</code> and <code>overlayIDsToExclude</code> if they're not empty.
</div>



<dl>
    <dt>
        Type
    </dt>
    <dd>
        
<span class="param-type"><a href="Overlays.html#.RayToOverlayIntersectionResult">Overlays.RayToOverlayIntersectionResult</a></span>


    </dd>
</dl>

    




    <h5>Example</h5>
    
        <p class="code-caption">Create a cube overlay in front of your avatar. Report 3D overlay intersection details for mouse 
    clicks.</p>
    
    <pre class="prettyprint"><code><span class="kwd">var</span><span class="pln"> overlay </span><span class="pun">=</span><span class="pln"> </span><span class="typ">Overlays</span><span class="pun">.</span><span class="pln">addOverlay</span><span class="pun">(</span><span class="str">"cube"</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    position</span><span class="pun">:</span><span class="pln"> </span><span class="typ">Vec3</span><span class="pun">.</span><span class="pln">sum</span><span class="pun">(</span><span class="typ">MyAvatar</span><span class="pun">.</span><span class="pln">position</span><span class="pun">,</span><span class="pln"> </span><span class="typ">Vec3</span><span class="pun">.</span><span class="pln">multiplyQbyV</span><span class="pun">(</span><span class="typ">MyAvatar</span><span class="pun">.</span><span class="pln">orientation</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> x</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0</span><span class="pun">,</span><span class="pln"> y</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0</span><span class="pun">,</span><span class="pln"> z</span><span class="pun">:</span><span class="pln"> </span><span class="pun">-</span><span class="lit">3</span><span class="pln"> </span><span class="pun">})),</span><span class="pln">
    rotation</span><span class="pun">:</span><span class="pln"> </span><span class="typ">MyAvatar</span><span class="pun">.</span><span class="pln">orientation</span><span class="pun">,</span><span class="pln">
    dimensions</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> x</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0.3</span><span class="pun">,</span><span class="pln"> y</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0.3</span><span class="pun">,</span><span class="pln"> z</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0.3</span><span class="pln"> </span><span class="pun">},</span><span class="pln">
    solid</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">true</span><span class="pln">
</span><span class="pun">});</span><span class="pln">

</span><span class="typ">Controller</span><span class="pun">.</span><span class="pln">mousePressEvent</span><span class="pun">.</span><span class="pln">connect</span><span class="pun">(</span><span class="kwd">function</span><span class="pln"> </span><span class="pun">(</span><span class="kwd">event</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">var</span><span class="pln"> pickRay </span><span class="pun">=</span><span class="pln"> </span><span class="typ">Camera</span><span class="pun">.</span><span class="pln">computePickRay</span><span class="pun">(</span><span class="kwd">event</span><span class="pun">.</span><span class="pln">x</span><span class="pun">,</span><span class="pln"> </span><span class="kwd">event</span><span class="pun">.</span><span class="pln">y</span><span class="pun">);</span><span class="pln">
    </span><span class="kwd">var</span><span class="pln"> intersection </span><span class="pun">=</span><span class="pln"> </span><span class="typ">Overlays</span><span class="pun">.</span><span class="pln">findRayIntersection</span><span class="pun">(</span><span class="pln">pickRay</span><span class="pun">);</span><span class="pln">
    </span><span class="kwd">print</span><span class="pun">(</span><span class="str">"Intersection: "</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> JSON</span><span class="pun">.</span><span class="pln">stringify</span><span class="pun">(</span><span class="pln">intersection</span><span class="pun">));</span><span class="pln">
</span><span class="pun">});</span></code></pre>



        
            

    

    
    <h4 class="name" id=".findRayIntersectionVector"><span class="type-signature">(static) </span>findRayIntersectionVector<span class="signature">(pickRay, precisionPicking<span class="signature-attributes">opt</span>, overlayIDsToInclude<span class="signature-attributes">opt</span>, overlayIDsToExclude<span class="signature-attributes">opt</span>, visibleOnly<span class="signature-attributes">opt</span>, collidableOnly<span class="signature-attributes">opt</span>)</span><span class="type-signature"> → {<a href="Overlays.html#.RayToOverlayIntersectionResult">Overlays.RayToOverlayIntersectionResult</a>}</span></h4>
    

    



<div class="description">
    Find the closest 3D overlay intersected by a <a href="global.html#PickRay">PickRay</a>.
</div>









    <h5>Parameters:</h5>
    

<table class="params">
    <thead>
    <tr>
        
        <th>Name</th>
        

        <th>Type</th>

        
        <th>Attributes</th>
        

        
        <th>Default</th>
        

        <th class="last">Description</th>
    </tr>
    </thead>

    <tbody>
    

        <tr>
            
                <td class="name"><code>pickRay</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#PickRay">PickRay</a></span>


            
            </td>

            
                <td class="attributes">
                

                

                
                </td>
            

            
                <td class="default">
                
                </td>
            

            <td class="description last">The PickRay to use for finding overlays.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>precisionPicking</code></td>
            

            <td class="type">
            
                
<span class="param-type">boolean</span>


            
            </td>

            
                <td class="attributes">
                
                    &lt;optional&gt;<br>
                

                

                
                </td>
            

            
                <td class="default">
                
                    false
                
                </td>
            

            <td class="description last"><em>Unused</em>; exists to match Entity API.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>overlayIDsToInclude</code></td>
            

            <td class="type">
            
                
<span class="param-type">Array.&lt;<a href="Uuid.html">Uuid</a>&gt;</span>


            
            </td>

            
                <td class="attributes">
                
                    &lt;optional&gt;<br>
                

                

                
                </td>
            

            
                <td class="default">
                
                    []
                
                </td>
            

            <td class="description last">Whitelist for intersection test. If empty then the result isn't limited
    to overlays in the list.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>overlayIDsToExclude</code></td>
            

            <td class="type">
            
                
<span class="param-type">Array.&lt;<a href="Uuid.html">Uuid</a>&gt;</span>


            
            </td>

            
                <td class="attributes">
                
                    &lt;optional&gt;<br>
                

                

                
                </td>
            

            
                <td class="default">
                
                    []
                
                </td>
            

            <td class="description last">Blacklist for intersection test. If empty then the result doesn't
    exclude overlays in the list.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>visibleOnly</code></td>
            

            <td class="type">
            
                
<span class="param-type">boolean</span>


            
            </td>

            
                <td class="attributes">
                
                    &lt;optional&gt;<br>
                

                

                
                </td>
            

            
                <td class="default">
                
                    false
                
                </td>
            

            <td class="description last"><em>Unused</em>; exists to match Entity API.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>collidableOnly</code></td>
            

            <td class="type">
            
                
<span class="param-type">boolean</span>


            
            </td>

            
                <td class="attributes">
                
                    &lt;optional&gt;<br>
                

                

                
                </td>
            

            
                <td class="default">
                
                    false
                
                </td>
            

            <td class="description last"><em>Unused</em>; exists to match Entity API.</td>
        </tr>

    
    </tbody>
</table>






<dl class="details">

    

    

    

    

    

    

    

    
        <dt class="important tag-deprecated">Deprecated:</dt><dd><ul class="dummy"><li>Use <a href="Overlays.html#.findRayIntersection">Overlays.findRayIntersection</a> instead; it has identical parameters and results.</li></ul></dd>
    

    

    

    

    

    

    

    

    
</dl>













<h5>Returns:</h5>

        
<div class="param-desc">
    The closest 3D overlay intersected by <code>pickRay</code>, taking
    into account <code>overlayIDsToInclude</code> and <code>overlayIDsToExclude</code> if they're not empty.
</div>



<dl>
    <dt>
        Type
    </dt>
    <dd>
        
<span class="param-type"><a href="Overlays.html#.RayToOverlayIntersectionResult">Overlays.RayToOverlayIntersectionResult</a></span>


    </dd>
</dl>

    





        
            

    

    
    <h4 class="name" id=".getKeyboardFocusOverlay"><span class="type-signature">(static) </span>getKeyboardFocusOverlay<span class="signature">()</span><span class="type-signature"> → {<a href="Uuid.html">Uuid</a>}</span></h4>
    

    



<div class="description">
    Get the ID of the Web3D overlay that has keyboard focus.
</div>













<dl class="details">

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    
</dl>













<h5>Returns:</h5>

        
<div class="param-desc">
    The ID of the <a href="Overlays.html#.OverlayType">web3d</a> overlay that has focus, if any, otherwise 
    <code>null</code>.
</div>



<dl>
    <dt>
        Type
    </dt>
    <dd>
        
<span class="param-type"><a href="Uuid.html">Uuid</a></span>


    </dd>
</dl>

    





        
            

    

    
    <h4 class="name" id=".getOverlayAtPoint"><span class="type-signature">(static) </span>getOverlayAtPoint<span class="signature">(point)</span><span class="type-signature"> → {<a href="Uuid.html">Uuid</a>}</span></h4>
    

    



<div class="description">
    Get the ID of the 2D overlay at a particular point on the screen or HUD.
</div>









    <h5>Parameters:</h5>
    

<table class="params">
    <thead>
    <tr>
        
        <th>Name</th>
        

        <th>Type</th>

        

        

        <th class="last">Description</th>
    </tr>
    </thead>

    <tbody>
    

        <tr>
            
                <td class="name"><code>point</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#Vec2">Vec2</a></span>


            
            </td>

            

            

            <td class="description last">The point to check for an overlay.</td>
        </tr>

    
    </tbody>
</table>






<dl class="details">

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    
</dl>













<h5>Returns:</h5>

        
<div class="param-desc">
    The ID of the 2D overlay at the specified point if found, otherwise <code>null</code>.
</div>



<dl>
    <dt>
        Type
    </dt>
    <dd>
        
<span class="param-type"><a href="Uuid.html">Uuid</a></span>


    </dd>
</dl>

    




    <h5>Example</h5>
    
        <p class="code-caption">Create a 2D overlay and add an event function that reports the overlay clicked on, if any.</p>
    
    <pre class="prettyprint"><code><span class="kwd">var</span><span class="pln"> overlay </span><span class="pun">=</span><span class="pln"> </span><span class="typ">Overlays</span><span class="pun">.</span><span class="pln">addOverlay</span><span class="pun">(</span><span class="str">"rectangle"</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    bounds</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> x</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span><span class="pln"> y</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span><span class="pln"> width</span><span class="pun">:</span><span class="pln"> </span><span class="lit">200</span><span class="pun">,</span><span class="pln"> height</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pln"> </span><span class="pun">},</span><span class="pln">
    color</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> red</span><span class="pun">:</span><span class="pln"> </span><span class="lit">255</span><span class="pun">,</span><span class="pln"> green</span><span class="pun">:</span><span class="pln"> </span><span class="lit">255</span><span class="pun">,</span><span class="pln"> blue</span><span class="pun">:</span><span class="pln"> </span><span class="lit">255</span><span class="pln"> </span><span class="pun">}</span><span class="pln">
</span><span class="pun">});</span><span class="pln">
</span><span class="kwd">print</span><span class="pun">(</span><span class="str">"Created: "</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> overlay</span><span class="pun">);</span><span class="pln">

</span><span class="typ">Controller</span><span class="pun">.</span><span class="pln">mousePressEvent</span><span class="pun">.</span><span class="pln">connect</span><span class="pun">(</span><span class="kwd">function</span><span class="pln"> </span><span class="pun">(</span><span class="kwd">event</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">var</span><span class="pln"> overlay </span><span class="pun">=</span><span class="pln"> </span><span class="typ">Overlays</span><span class="pun">.</span><span class="pln">getOverlayAtPoint</span><span class="pun">({</span><span class="pln"> x</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">event</span><span class="pun">.</span><span class="pln">x</span><span class="pun">,</span><span class="pln"> y</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">event</span><span class="pun">.</span><span class="pln">y </span><span class="pun">});</span><span class="pln">
    </span><span class="kwd">print</span><span class="pun">(</span><span class="str">"Clicked: "</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> overlay</span><span class="pun">);</span><span class="pln">
</span><span class="pun">});</span></code></pre>



        
            

    

    
    <h4 class="name" id=".getOverlayObject"><span class="type-signature">(static) </span>getOverlayObject<span class="signature">(overlayID)</span><span class="type-signature"> → {object}</span></h4>
    

    



<div class="description">
    Get the overlay script object.
</div>









    <h5>Parameters:</h5>
    

<table class="params">
    <thead>
    <tr>
        
        <th>Name</th>
        

        <th>Type</th>

        

        

        <th class="last">Description</th>
    </tr>
    </thead>

    <tbody>
    

        <tr>
            
                <td class="name"><code>overlayID</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="Uuid.html">Uuid</a></span>


            
            </td>

            

            

            <td class="description last">The ID of the overlay to get the script object of.</td>
        </tr>

    
    </tbody>
</table>






<dl class="details">

    

    

    

    

    

    

    

    
        <dt class="important tag-deprecated">Deprecated:</dt><dd><ul class="dummy"><li>This function is deprecated and will soon be removed.</li></ul></dd>
    

    

    

    

    

    

    

    

    
</dl>













<h5>Returns:</h5>

        
<div class="param-desc">
    The script object for the overlay if found.
</div>



<dl>
    <dt>
        Type
    </dt>
    <dd>
        
<span class="param-type">object</span>


    </dd>
</dl>

    





        
            

    

    
    <h4 class="name" id=".getOverlaysProperties"><span class="type-signature">(static) </span>getOverlaysProperties<span class="signature">(propertiesById)</span><span class="type-signature"> → {object.&lt;<a href="Uuid.html">Uuid</a>, <a href="Overlays.html#.OverlayProperties">Overlays.OverlayProperties</a>&gt;}</span></h4>
    

    



<div class="description">
    Get the values of multiple overlays' properties.
</div>









    <h5>Parameters:</h5>
    

<table class="params">
    <thead>
    <tr>
        
        <th>Name</th>
        

        <th>Type</th>

        

        

        <th class="last">Description</th>
    </tr>
    </thead>

    <tbody>
    

        <tr>
            
                <td class="name"><code>propertiesById</code></td>
            

            <td class="type">
            
                
<span class="param-type">object.&lt;<a href="Uuid.html">Uuid</a>, Array.&lt;string&gt;&gt;</span>


            
            </td>

            

            

            <td class="description last">An object with overlay IDs as keys and arrays of the names of 
    properties to get for each as values.</td>
        </tr>

    
    </tbody>
</table>






<dl class="details">

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    
</dl>













<h5>Returns:</h5>

        
<div class="param-desc">
    An object with overlay IDs as keys and
    <a href="Overlays.html#.OverlayProperties">OverlayProperties</a> as values.
</div>



<dl>
    <dt>
        Type
    </dt>
    <dd>
        
<span class="param-type">object.&lt;<a href="Uuid.html">Uuid</a>, <a href="Overlays.html#.OverlayProperties">Overlays.OverlayProperties</a>&gt;</span>


    </dd>
</dl>

    




    <h5>Example</h5>
    
        <p class="code-caption">Create two cube overlays in front of your avatar then get some of their properties.</p>
    
    <pre class="prettyprint"><code><span class="kwd">var</span><span class="pln"> overlayA </span><span class="pun">=</span><span class="pln"> </span><span class="typ">Overlays</span><span class="pun">.</span><span class="pln">addOverlay</span><span class="pun">(</span><span class="str">"cube"</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    position</span><span class="pun">:</span><span class="pln"> </span><span class="typ">Vec3</span><span class="pun">.</span><span class="pln">sum</span><span class="pun">(</span><span class="typ">MyAvatar</span><span class="pun">.</span><span class="pln">position</span><span class="pun">,</span><span class="pln"> </span><span class="typ">Vec3</span><span class="pun">.</span><span class="pln">multiplyQbyV</span><span class="pun">(</span><span class="typ">MyAvatar</span><span class="pun">.</span><span class="pln">orientation</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> x</span><span class="pun">:</span><span class="pln"> </span><span class="pun">-</span><span class="lit">0.3</span><span class="pun">,</span><span class="pln"> y</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0</span><span class="pun">,</span><span class="pln"> z</span><span class="pun">:</span><span class="pln"> </span><span class="pun">-</span><span class="lit">3</span><span class="pln"> </span><span class="pun">})),</span><span class="pln">
    rotation</span><span class="pun">:</span><span class="pln"> </span><span class="typ">MyAvatar</span><span class="pun">.</span><span class="pln">orientation</span><span class="pun">,</span><span class="pln">
    dimensions</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> x</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0.3</span><span class="pun">,</span><span class="pln"> y</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0.3</span><span class="pun">,</span><span class="pln"> z</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0.3</span><span class="pln"> </span><span class="pun">},</span><span class="pln">
    solid</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">true</span><span class="pln">
</span><span class="pun">});</span><span class="pln">
</span><span class="kwd">var</span><span class="pln"> overlayB </span><span class="pun">=</span><span class="pln"> </span><span class="typ">Overlays</span><span class="pun">.</span><span class="pln">addOverlay</span><span class="pun">(</span><span class="str">"cube"</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    position</span><span class="pun">:</span><span class="pln"> </span><span class="typ">Vec3</span><span class="pun">.</span><span class="pln">sum</span><span class="pun">(</span><span class="typ">MyAvatar</span><span class="pun">.</span><span class="pln">position</span><span class="pun">,</span><span class="pln"> </span><span class="typ">Vec3</span><span class="pun">.</span><span class="pln">multiplyQbyV</span><span class="pun">(</span><span class="typ">MyAvatar</span><span class="pun">.</span><span class="pln">orientation</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> x</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0.3</span><span class="pun">,</span><span class="pln"> y</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0</span><span class="pun">,</span><span class="pln"> z</span><span class="pun">:</span><span class="pln"> </span><span class="pun">-</span><span class="lit">3</span><span class="pln"> </span><span class="pun">})),</span><span class="pln">
    rotation</span><span class="pun">:</span><span class="pln"> </span><span class="typ">MyAvatar</span><span class="pun">.</span><span class="pln">orientation</span><span class="pun">,</span><span class="pln">
    dimensions</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> x</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0.3</span><span class="pun">,</span><span class="pln"> y</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0.3</span><span class="pun">,</span><span class="pln"> z</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0.3</span><span class="pln"> </span><span class="pun">},</span><span class="pln">
    solid</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">true</span><span class="pln">
</span><span class="pun">});</span><span class="pln">
</span><span class="kwd">var</span><span class="pln"> propertiesToGet </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{};</span><span class="pln">
propertiesToGet</span><span class="pun">[</span><span class="pln">overlayA</span><span class="pun">]</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="pun">[</span><span class="str">"color"</span><span class="pun">,</span><span class="pln"> </span><span class="str">"alpha"</span><span class="pun">];</span><span class="pln">
propertiesToGet</span><span class="pun">[</span><span class="pln">overlayB</span><span class="pun">]</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="pun">[</span><span class="str">"dimensions"</span><span class="pun">];</span><span class="pln">
</span><span class="kwd">var</span><span class="pln"> properties </span><span class="pun">=</span><span class="pln"> </span><span class="typ">Overlays</span><span class="pun">.</span><span class="pln">getOverlaysProperties</span><span class="pun">(</span><span class="pln">propertiesToGet</span><span class="pun">);</span><span class="pln">
</span><span class="kwd">print</span><span class="pun">(</span><span class="str">"Overlays properties: "</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> JSON</span><span class="pun">.</span><span class="pln">stringify</span><span class="pun">(</span><span class="pln">properties</span><span class="pun">));</span></code></pre>



        
            

    

    
    <h4 class="name" id=".getOverlayType"><span class="type-signature">(static) </span>getOverlayType<span class="signature">(overlayID)</span><span class="type-signature"> → {<a href="Overlays.html#.OverlayType">Overlays.OverlayType</a>}</span></h4>
    

    



<div class="description">
    Get the type of an overlay.
</div>









    <h5>Parameters:</h5>
    

<table class="params">
    <thead>
    <tr>
        
        <th>Name</th>
        

        <th>Type</th>

        

        

        <th class="last">Description</th>
    </tr>
    </thead>

    <tbody>
    

        <tr>
            
                <td class="name"><code>overlayID</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="Uuid.html">Uuid</a></span>


            
            </td>

            

            

            <td class="description last">The ID of the overlay to get the type of.</td>
        </tr>

    
    </tbody>
</table>






<dl class="details">

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    
</dl>













<h5>Returns:</h5>

        
<div class="param-desc">
    The type of the overlay if found, otherwise an empty string.
</div>



<dl>
    <dt>
        Type
    </dt>
    <dd>
        
<span class="param-type"><a href="Overlays.html#.OverlayType">Overlays.OverlayType</a></span>


    </dd>
</dl>

    




    <h5>Example</h5>
    
        <p class="code-caption">Create an overlay in front of your avatar then get and report its type.</p>
    
    <pre class="prettyprint"><code><span class="kwd">var</span><span class="pln"> overlay </span><span class="pun">=</span><span class="pln"> </span><span class="typ">Overlays</span><span class="pun">.</span><span class="pln">addOverlay</span><span class="pun">(</span><span class="str">"cube"</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    position</span><span class="pun">:</span><span class="pln"> </span><span class="typ">Vec3</span><span class="pun">.</span><span class="pln">sum</span><span class="pun">(</span><span class="typ">MyAvatar</span><span class="pun">.</span><span class="pln">position</span><span class="pun">,</span><span class="pln"> </span><span class="typ">Vec3</span><span class="pun">.</span><span class="pln">multiplyQbyV</span><span class="pun">(</span><span class="typ">MyAvatar</span><span class="pun">.</span><span class="pln">orientation</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> x</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0</span><span class="pun">,</span><span class="pln"> y</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0</span><span class="pun">,</span><span class="pln"> z</span><span class="pun">:</span><span class="pln"> </span><span class="pun">-</span><span class="lit">3</span><span class="pln"> </span><span class="pun">})),</span><span class="pln">
    rotation</span><span class="pun">:</span><span class="pln"> </span><span class="typ">MyAvatar</span><span class="pun">.</span><span class="pln">orientation</span><span class="pun">,</span><span class="pln">
    dimensions</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> x</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0.3</span><span class="pun">,</span><span class="pln"> y</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0.3</span><span class="pun">,</span><span class="pln"> z</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0.3</span><span class="pln"> </span><span class="pun">},</span><span class="pln">
    solid</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">true</span><span class="pln">
</span><span class="pun">});</span><span class="pln">
</span><span class="kwd">var</span><span class="pln"> type </span><span class="pun">=</span><span class="pln"> </span><span class="typ">Overlays</span><span class="pun">.</span><span class="pln">getOverlayType</span><span class="pun">(</span><span class="pln">overlay</span><span class="pun">);</span><span class="pln">
</span><span class="kwd">print</span><span class="pun">(</span><span class="str">"Type: "</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> type</span><span class="pun">);</span></code></pre>



        
            

    

    
    <h4 class="name" id=".getProperties"><span class="type-signature">(static) </span>getProperties<span class="signature">(overlayID, properties)</span><span class="type-signature"> → {<a href="Overlays.html#.OverlayProperties">Overlays.OverlayProperties</a>}</span></h4>
    

    



<div class="description">
    Get the values of an overlay's properties.
</div>









    <h5>Parameters:</h5>
    

<table class="params">
    <thead>
    <tr>
        
        <th>Name</th>
        

        <th>Type</th>

        

        

        <th class="last">Description</th>
    </tr>
    </thead>

    <tbody>
    

        <tr>
            
                <td class="name"><code>overlayID</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="Uuid.html">Uuid</a></span>


            
            </td>

            

            

            <td class="description last">The ID of the overlay.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>properties</code></td>
            

            <td class="type">
            
                
<span class="param-type">Array.&lt;string&gt;</span>


            
            </td>

            

            

            <td class="description last">An array of names of properties to get the values of.</td>
        </tr>

    
    </tbody>
</table>






<dl class="details">

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    
</dl>













<h5>Returns:</h5>

        
<div class="param-desc">
    The values of valid properties if the overlay can be found, otherwise 
    <code>undefined</code>.
</div>



<dl>
    <dt>
        Type
    </dt>
    <dd>
        
<span class="param-type"><a href="Overlays.html#.OverlayProperties">Overlays.OverlayProperties</a></span>


    </dd>
</dl>

    




    <h5>Example</h5>
    
        <p class="code-caption">Create an overlay in front of your avatar then report some of its properties.</p>
    
    <pre class="prettyprint"><code><span class="kwd">var</span><span class="pln"> overlay </span><span class="pun">=</span><span class="pln"> </span><span class="typ">Overlays</span><span class="pun">.</span><span class="pln">addOverlay</span><span class="pun">(</span><span class="str">"cube"</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    position</span><span class="pun">:</span><span class="pln"> </span><span class="typ">Vec3</span><span class="pun">.</span><span class="pln">sum</span><span class="pun">(</span><span class="typ">MyAvatar</span><span class="pun">.</span><span class="pln">position</span><span class="pun">,</span><span class="pln"> </span><span class="typ">Vec3</span><span class="pun">.</span><span class="pln">multiplyQbyV</span><span class="pun">(</span><span class="typ">MyAvatar</span><span class="pun">.</span><span class="pln">orientation</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> x</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0</span><span class="pun">,</span><span class="pln"> y</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0</span><span class="pun">,</span><span class="pln"> z</span><span class="pun">:</span><span class="pln"> </span><span class="pun">-</span><span class="lit">3</span><span class="pln"> </span><span class="pun">})),</span><span class="pln">
    rotation</span><span class="pun">:</span><span class="pln"> </span><span class="typ">MyAvatar</span><span class="pun">.</span><span class="pln">orientation</span><span class="pun">,</span><span class="pln">
    dimensions</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> x</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0.3</span><span class="pun">,</span><span class="pln"> y</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0.3</span><span class="pun">,</span><span class="pln"> z</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0.3</span><span class="pln"> </span><span class="pun">},</span><span class="pln">
    solid</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">true</span><span class="pln">
</span><span class="pun">});</span><span class="pln">
</span><span class="kwd">var</span><span class="pln"> properties </span><span class="pun">=</span><span class="pln"> </span><span class="typ">Overlays</span><span class="pun">.</span><span class="pln">getProperties</span><span class="pun">(</span><span class="pln">overlay</span><span class="pun">,</span><span class="pln"> </span><span class="pun">[</span><span class="str">"color"</span><span class="pun">,</span><span class="pln"> </span><span class="str">"alpha"</span><span class="pun">,</span><span class="pln"> </span><span class="str">"grabbable"</span><span class="pun">]);</span><span class="pln">
</span><span class="kwd">print</span><span class="pun">(</span><span class="str">"Overlay properties: "</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> JSON</span><span class="pun">.</span><span class="pln">stringify</span><span class="pun">(</span><span class="pln">properties</span><span class="pun">));</span></code></pre>



        
            

    

    
    <h4 class="name" id=".getProperty"><span class="type-signature">(static) </span>getProperty<span class="signature">(overlayID, property)</span><span class="type-signature"> → {object}</span></h4>
    

    



<div class="description">
    Get the value of a 3D overlay's property.
</div>









    <h5>Parameters:</h5>
    

<table class="params">
    <thead>
    <tr>
        
        <th>Name</th>
        

        <th>Type</th>

        

        

        <th class="last">Description</th>
    </tr>
    </thead>

    <tbody>
    

        <tr>
            
                <td class="name"><code>overlayID</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="Uuid.html">Uuid</a></span>


            
            </td>

            

            

            <td class="description last">The ID of the overlay. <em>Must be for a 3D <a href="Overlays.html#.OverlayType">OverlayType</a>.</em></td>
        </tr>

    

        <tr>
            
                <td class="name"><code>property</code></td>
            

            <td class="type">
            
                
<span class="param-type">string</span>


            
            </td>

            

            

            <td class="description last">The name of the property value to get.</td>
        </tr>

    
    </tbody>
</table>






<dl class="details">

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    
</dl>













<h5>Returns:</h5>

        
<div class="param-desc">
    The value of the property if the 3D overlay and property can be found, otherwise
    <code>undefined</code>.
</div>



<dl>
    <dt>
        Type
    </dt>
    <dd>
        
<span class="param-type">object</span>


    </dd>
</dl>

    




    <h5>Example</h5>
    
        <p class="code-caption">Create an overlay in front of your avatar then report its alpha property value.</p>
    
    <pre class="prettyprint"><code><span class="kwd">var</span><span class="pln"> overlay </span><span class="pun">=</span><span class="pln"> </span><span class="typ">Overlays</span><span class="pun">.</span><span class="pln">addOverlay</span><span class="pun">(</span><span class="str">"cube"</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    position</span><span class="pun">:</span><span class="pln"> </span><span class="typ">Vec3</span><span class="pun">.</span><span class="pln">sum</span><span class="pun">(</span><span class="typ">MyAvatar</span><span class="pun">.</span><span class="pln">position</span><span class="pun">,</span><span class="pln"> </span><span class="typ">Vec3</span><span class="pun">.</span><span class="pln">multiplyQbyV</span><span class="pun">(</span><span class="typ">MyAvatar</span><span class="pun">.</span><span class="pln">orientation</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> x</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0</span><span class="pun">,</span><span class="pln"> y</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0</span><span class="pun">,</span><span class="pln"> z</span><span class="pun">:</span><span class="pln"> </span><span class="pun">-</span><span class="lit">3</span><span class="pln"> </span><span class="pun">})),</span><span class="pln">
    rotation</span><span class="pun">:</span><span class="pln"> </span><span class="typ">MyAvatar</span><span class="pun">.</span><span class="pln">orientation</span><span class="pun">,</span><span class="pln">
    dimensions</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> x</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0.3</span><span class="pun">,</span><span class="pln"> y</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0.3</span><span class="pun">,</span><span class="pln"> z</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0.3</span><span class="pln"> </span><span class="pun">},</span><span class="pln">
    solid</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">true</span><span class="pln">
</span><span class="pun">});</span><span class="pln">
</span><span class="kwd">var</span><span class="pln"> alpha </span><span class="pun">=</span><span class="pln"> </span><span class="typ">Overlays</span><span class="pun">.</span><span class="pln">getProperty</span><span class="pun">(</span><span class="pln">overlay</span><span class="pun">,</span><span class="pln"> </span><span class="str">"alpha"</span><span class="pun">);</span><span class="pln">
</span><span class="kwd">print</span><span class="pun">(</span><span class="str">"Overlay alpha: "</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> alpha</span><span class="pun">);</span></code></pre>



        
            

    

    
    <h4 class="name" id=".height"><span class="type-signature">(static) </span>height<span class="signature">()</span><span class="type-signature"> → {number}</span></h4>
    

    



<div class="description">
    Get the height of the window or HUD.
</div>













<dl class="details">

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    
</dl>













<h5>Returns:</h5>

        
<div class="param-desc">
    The height, in pixels, of the Interface window if in desktop mode or the HUD if in HMD mode.
</div>



<dl>
    <dt>
        Type
    </dt>
    <dd>
        
<span class="param-type">number</span>


    </dd>
</dl>

    





        
            

    

    
    <h4 class="name" id=".hoverEnterOverlay"><span class="type-signature">(static) </span>hoverEnterOverlay<span class="signature">(overlayID, event)</span><span class="type-signature"> → {Signal}</span></h4>
    

    



<div class="description">
    Triggered when a mouse cursor starts hovering over an overlay. Only occurs for 3D overlays (unless you use 
    <a href="Overlays.html#.sendHoverEnterOverlay">sendHoverEnterOverlay</a> for a 2D overlay).
</div>









    <h5>Parameters:</h5>
    

<table class="params">
    <thead>
    <tr>
        
        <th>Name</th>
        

        <th>Type</th>

        

        

        <th class="last">Description</th>
    </tr>
    </thead>

    <tbody>
    

        <tr>
            
                <td class="name"><code>overlayID</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="Uuid.html">Uuid</a></span>


            
            </td>

            

            

            <td class="description last">The ID of the overlay the mouse moved event occurred on.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>event</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#PointerEvent">PointerEvent</a></span>


            
            </td>

            

            

            <td class="description last">The mouse move event details.</td>
        </tr>

    
    </tbody>
</table>






<dl class="details">

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    
</dl>













<h5>Returns:</h5>

        


<dl>
    <dt>
        Type
    </dt>
    <dd>
        
<span class="param-type">Signal</span>


    </dd>
</dl>

    




    <h5>Example</h5>
    
        <p class="code-caption">Create a cube overlay in front of your avatar and report when you start hovering your mouse over
    it.</p>
    
    <pre class="prettyprint"><code><span class="kwd">var</span><span class="pln"> overlay </span><span class="pun">=</span><span class="pln"> </span><span class="typ">Overlays</span><span class="pun">.</span><span class="pln">addOverlay</span><span class="pun">(</span><span class="str">"cube"</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    position</span><span class="pun">:</span><span class="pln"> </span><span class="typ">Vec3</span><span class="pun">.</span><span class="pln">sum</span><span class="pun">(</span><span class="typ">MyAvatar</span><span class="pun">.</span><span class="pln">position</span><span class="pun">,</span><span class="pln"> </span><span class="typ">Vec3</span><span class="pun">.</span><span class="pln">multiplyQbyV</span><span class="pun">(</span><span class="typ">MyAvatar</span><span class="pun">.</span><span class="pln">orientation</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> x</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0</span><span class="pun">,</span><span class="pln"> y</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0</span><span class="pun">,</span><span class="pln"> z</span><span class="pun">:</span><span class="pln"> </span><span class="pun">-</span><span class="lit">3</span><span class="pln"> </span><span class="pun">})),</span><span class="pln">
    rotation</span><span class="pun">:</span><span class="pln"> </span><span class="typ">MyAvatar</span><span class="pun">.</span><span class="pln">orientation</span><span class="pun">,</span><span class="pln">
    dimensions</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> x</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0.3</span><span class="pun">,</span><span class="pln"> y</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0.3</span><span class="pun">,</span><span class="pln"> z</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0.3</span><span class="pln"> </span><span class="pun">},</span><span class="pln">
    solid</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">true</span><span class="pln">
</span><span class="pun">});</span><span class="pln">
</span><span class="kwd">print</span><span class="pun">(</span><span class="str">"Overlay: "</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> overlay</span><span class="pun">);</span><span class="pln">
</span><span class="typ">Overlays</span><span class="pun">.</span><span class="pln">hoverEnterOverlay</span><span class="pun">.</span><span class="pln">connect</span><span class="pun">(</span><span class="kwd">function</span><span class="pun">(</span><span class="pln">overlayID</span><span class="pun">,</span><span class="pln"> </span><span class="kwd">event</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">print</span><span class="pun">(</span><span class="str">"Hover enter: "</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> overlayID</span><span class="pun">);</span><span class="pln">
</span><span class="pun">});</span></code></pre>



        
            

    

    
    <h4 class="name" id=".hoverLeaveOverlay"><span class="type-signature">(static) </span>hoverLeaveOverlay<span class="signature">(overlayID, event)</span><span class="type-signature"> → {Signal}</span></h4>
    

    



<div class="description">
    Triggered when a mouse cursor finishes hovering over an overlay. Only occurs for 3D overlays (unless you use 
    <a href="Overlays.html#.sendHoverLeaveOverlay">sendHoverLeaveOverlay</a> for a 2D overlay).
</div>









    <h5>Parameters:</h5>
    

<table class="params">
    <thead>
    <tr>
        
        <th>Name</th>
        

        <th>Type</th>

        

        

        <th class="last">Description</th>
    </tr>
    </thead>

    <tbody>
    

        <tr>
            
                <td class="name"><code>overlayID</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="Uuid.html">Uuid</a></span>


            
            </td>

            

            

            <td class="description last">The ID of the overlay the hover leave event occurred on.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>event</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#PointerEvent">PointerEvent</a></span>


            
            </td>

            

            

            <td class="description last">The hover leave event details.</td>
        </tr>

    
    </tbody>
</table>






<dl class="details">

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    
</dl>













<h5>Returns:</h5>

        


<dl>
    <dt>
        Type
    </dt>
    <dd>
        
<span class="param-type">Signal</span>


    </dd>
</dl>

    





        
            

    

    
    <h4 class="name" id=".hoverOverOverlay"><span class="type-signature">(static) </span>hoverOverOverlay<span class="signature">(overlayID, event)</span><span class="type-signature"> → {Signal}</span></h4>
    

    



<div class="description">
    Triggered when a mouse cursor continues hovering over an overlay. Only occurs for 3D overlays (unless you use 
    <a href="Overlays.html#.sendHoverOverOverlay">sendHoverOverOverlay</a> for a 2D overlay).
</div>









    <h5>Parameters:</h5>
    

<table class="params">
    <thead>
    <tr>
        
        <th>Name</th>
        

        <th>Type</th>

        

        

        <th class="last">Description</th>
    </tr>
    </thead>

    <tbody>
    

        <tr>
            
                <td class="name"><code>overlayID</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="Uuid.html">Uuid</a></span>


            
            </td>

            

            

            <td class="description last">The ID of the overlay the hover over event occurred on.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>event</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#PointerEvent">PointerEvent</a></span>


            
            </td>

            

            

            <td class="description last">The hover over event details.</td>
        </tr>

    
    </tbody>
</table>






<dl class="details">

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    
</dl>













<h5>Returns:</h5>

        


<dl>
    <dt>
        Type
    </dt>
    <dd>
        
<span class="param-type">Signal</span>


    </dd>
</dl>

    





        
            

    

    
    <h4 class="name" id=".isAddedOverly"><span class="type-signature">(static) </span>isAddedOverly<span class="signature">(overlayID)</span><span class="type-signature"> → {boolean}</span></h4>
    

    



<div class="description">
    Check if there is an overlay of a given ID.
</div>









    <h5>Parameters:</h5>
    

<table class="params">
    <thead>
    <tr>
        
        <th>Name</th>
        

        <th>Type</th>

        

        

        <th class="last">Description</th>
    </tr>
    </thead>

    <tbody>
    

        <tr>
            
                <td class="name"><code>overlayID</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="Uuid.html">Uuid</a></span>


            
            </td>

            

            

            <td class="description last">The ID to check.</td>
        </tr>

    
    </tbody>
</table>






<dl class="details">

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    
</dl>













<h5>Returns:</h5>

        
<div class="param-desc">
    <code>true</code> if an overlay with the given ID exists, <code>false</code> otherwise.
</div>



<dl>
    <dt>
        Type
    </dt>
    <dd>
        
<span class="param-type">boolean</span>


    </dd>
</dl>

    





        
            

    

    
    <h4 class="name" id=".isLoaded"><span class="type-signature">(static) </span>isLoaded<span class="signature">(overlayID)</span><span class="type-signature"> → {boolean}</span></h4>
    

    



<div class="description">
    Check whether an overlay's assets have been loaded. For example, for an <code>image</code> overlay the result indicates
whether its image has been loaded.
</div>









    <h5>Parameters:</h5>
    

<table class="params">
    <thead>
    <tr>
        
        <th>Name</th>
        

        <th>Type</th>

        

        

        <th class="last">Description</th>
    </tr>
    </thead>

    <tbody>
    

        <tr>
            
                <td class="name"><code>overlayID</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="Uuid.html">Uuid</a></span>


            
            </td>

            

            

            <td class="description last">The ID of the overlay to check.</td>
        </tr>

    
    </tbody>
</table>






<dl class="details">

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    
</dl>













<h5>Returns:</h5>

        
<div class="param-desc">
    <code>true</code> if the overlay's assets have been loaded, otherwise <code>false</code>.
</div>



<dl>
    <dt>
        Type
    </dt>
    <dd>
        
<span class="param-type">boolean</span>


    </dd>
</dl>

    




    <h5>Example</h5>
    
        <p class="code-caption">Create an image overlay and report whether its image is loaded after 1s.</p>
    
    <pre class="prettyprint"><code><span class="kwd">var</span><span class="pln"> overlay </span><span class="pun">=</span><span class="pln"> </span><span class="typ">Overlays</span><span class="pun">.</span><span class="pln">addOverlay</span><span class="pun">(</span><span class="str">"image"</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    bounds</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> x</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span><span class="pln"> y</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span><span class="pln"> width</span><span class="pun">:</span><span class="pln"> </span><span class="lit">200</span><span class="pun">,</span><span class="pln"> height</span><span class="pun">:</span><span class="pln"> </span><span class="lit">200</span><span class="pln"> </span><span class="pun">},</span><span class="pln">
    imageURL</span><span class="pun">:</span><span class="pln"> </span><span class="str">"https://content.highfidelity.com/DomainContent/production/Particles/wispy-smoke.png"</span><span class="pln">
</span><span class="pun">});</span><span class="pln">
</span><span class="typ">Script</span><span class="pun">.</span><span class="pln">setTimeout</span><span class="pun">(</span><span class="kwd">function</span><span class="pln"> </span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">var</span><span class="pln"> isLoaded </span><span class="pun">=</span><span class="pln"> </span><span class="typ">Overlays</span><span class="pun">.</span><span class="pln">isLoaded</span><span class="pun">(</span><span class="pln">overlay</span><span class="pun">);</span><span class="pln">
    </span><span class="kwd">print</span><span class="pun">(</span><span class="str">"Image loaded: "</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> isLoaded</span><span class="pun">);</span><span class="pln">
</span><span class="pun">},</span><span class="pln"> </span><span class="lit">1000</span><span class="pun">);</span></code></pre>



        
            

    

    
    <h4 class="name" id=".mouseDoublePressOffOverlay"><span class="type-signature">(static) </span>mouseDoublePressOffOverlay<span class="signature">()</span><span class="type-signature"> → {Signal}</span></h4>
    

    



<div class="description">
    Triggered when a mouse double press event occurs on something other than a 3D overlay.
</div>













<dl class="details">

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    
</dl>













<h5>Returns:</h5>

        


<dl>
    <dt>
        Type
    </dt>
    <dd>
        
<span class="param-type">Signal</span>


    </dd>
</dl>

    





        
            

    

    
    <h4 class="name" id=".mouseDoublePressOnOverlay"><span class="type-signature">(static) </span>mouseDoublePressOnOverlay<span class="signature">(overlayID, event)</span><span class="type-signature"> → {Signal}</span></h4>
    

    



<div class="description">
    Triggered when a mouse double press event occurs on an overlay. Only occurs for 3D overlays.
</div>









    <h5>Parameters:</h5>
    

<table class="params">
    <thead>
    <tr>
        
        <th>Name</th>
        

        <th>Type</th>

        

        

        <th class="last">Description</th>
    </tr>
    </thead>

    <tbody>
    

        <tr>
            
                <td class="name"><code>overlayID</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="Uuid.html">Uuid</a></span>


            
            </td>

            

            

            <td class="description last">The ID of the overlay the mouse double press event occurred on.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>event</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#PointerEvent">PointerEvent</a></span>


            
            </td>

            

            

            <td class="description last">The mouse double press event details.</td>
        </tr>

    
    </tbody>
</table>






<dl class="details">

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    
</dl>













<h5>Returns:</h5>

        


<dl>
    <dt>
        Type
    </dt>
    <dd>
        
<span class="param-type">Signal</span>


    </dd>
</dl>

    





        
            

    

    
    <h4 class="name" id=".mouseMoveOnOverlay"><span class="type-signature">(static) </span>mouseMoveOnOverlay<span class="signature">(overlayID, event)</span><span class="type-signature"> → {Signal}</span></h4>
    

    



<div class="description">
    Triggered when a mouse move event occurs on an overlay. Only occurs for 3D overlays (unless you use 
    <a href="Overlays.html#.sendMouseMoveOnOverlay">sendMouseMoveOnOverlay</a> for a 2D overlay).
</div>









    <h5>Parameters:</h5>
    

<table class="params">
    <thead>
    <tr>
        
        <th>Name</th>
        

        <th>Type</th>

        

        

        <th class="last">Description</th>
    </tr>
    </thead>

    <tbody>
    

        <tr>
            
                <td class="name"><code>overlayID</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="Uuid.html">Uuid</a></span>


            
            </td>

            

            

            <td class="description last">The ID of the overlay the mouse moved event occurred on.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>event</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#PointerEvent">PointerEvent</a></span>


            
            </td>

            

            

            <td class="description last">The mouse move event details.</td>
        </tr>

    
    </tbody>
</table>






<dl class="details">

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    
</dl>













<h5>Returns:</h5>

        


<dl>
    <dt>
        Type
    </dt>
    <dd>
        
<span class="param-type">Signal</span>


    </dd>
</dl>

    





        
            

    

    
    <h4 class="name" id=".mousePressOffOverlay"><span class="type-signature">(static) </span>mousePressOffOverlay<span class="signature">()</span><span class="type-signature"> → {Signal}</span></h4>
    

    



<div class="description">
    Triggered when a mouse press event occurs on something other than a 3D overlay.
</div>













<dl class="details">

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    
</dl>













<h5>Returns:</h5>

        


<dl>
    <dt>
        Type
    </dt>
    <dd>
        
<span class="param-type">Signal</span>


    </dd>
</dl>

    





        
            

    

    
    <h4 class="name" id=".mousePressOnOverlay"><span class="type-signature">(static) </span>mousePressOnOverlay<span class="signature">(overlayID, event)</span><span class="type-signature"> → {Signal}</span></h4>
    

    



<div class="description">
    Triggered when a mouse press event occurs on an overlay. Only occurs for 3D overlays (unless you use 
    <a href="Overlays.html#.sendMousePressOnOverlay">sendMousePressOnOverlay</a> for a 2D overlay).
</div>









    <h5>Parameters:</h5>
    

<table class="params">
    <thead>
    <tr>
        
        <th>Name</th>
        

        <th>Type</th>

        

        

        <th class="last">Description</th>
    </tr>
    </thead>

    <tbody>
    

        <tr>
            
                <td class="name"><code>overlayID</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="Uuid.html">Uuid</a></span>


            
            </td>

            

            

            <td class="description last">The ID of the overlay the mouse press event occurred on.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>event</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#PointerEvent">PointerEvent</a></span>


            
            </td>

            

            

            <td class="description last">The mouse press event details.</td>
        </tr>

    
    </tbody>
</table>






<dl class="details">

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    
</dl>













<h5>Returns:</h5>

        


<dl>
    <dt>
        Type
    </dt>
    <dd>
        
<span class="param-type">Signal</span>


    </dd>
</dl>

    




    <h5>Example</h5>
    
        <p class="code-caption">Create a cube overlay in front of your avatar and report mouse clicks on it.</p>
    
    <pre class="prettyprint"><code><span class="kwd">var</span><span class="pln"> overlay </span><span class="pun">=</span><span class="pln"> </span><span class="typ">Overlays</span><span class="pun">.</span><span class="pln">addOverlay</span><span class="pun">(</span><span class="str">"cube"</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    position</span><span class="pun">:</span><span class="pln"> </span><span class="typ">Vec3</span><span class="pun">.</span><span class="pln">sum</span><span class="pun">(</span><span class="typ">MyAvatar</span><span class="pun">.</span><span class="pln">position</span><span class="pun">,</span><span class="pln"> </span><span class="typ">Vec3</span><span class="pun">.</span><span class="pln">multiplyQbyV</span><span class="pun">(</span><span class="typ">MyAvatar</span><span class="pun">.</span><span class="pln">orientation</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> x</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0</span><span class="pun">,</span><span class="pln"> y</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0</span><span class="pun">,</span><span class="pln"> z</span><span class="pun">:</span><span class="pln"> </span><span class="pun">-</span><span class="lit">3</span><span class="pln"> </span><span class="pun">})),</span><span class="pln">
    rotation</span><span class="pun">:</span><span class="pln"> </span><span class="typ">MyAvatar</span><span class="pun">.</span><span class="pln">orientation</span><span class="pun">,</span><span class="pln">
    dimensions</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> x</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0.3</span><span class="pun">,</span><span class="pln"> y</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0.3</span><span class="pun">,</span><span class="pln"> z</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0.3</span><span class="pln"> </span><span class="pun">},</span><span class="pln">
    solid</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">true</span><span class="pln">
</span><span class="pun">});</span><span class="pln">
</span><span class="kwd">print</span><span class="pun">(</span><span class="str">"My overlay: "</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> overlay</span><span class="pun">);</span><span class="pln">

</span><span class="typ">Overlays</span><span class="pun">.</span><span class="pln">mousePressOnOverlay</span><span class="pun">.</span><span class="pln">connect</span><span class="pun">(</span><span class="kwd">function</span><span class="pun">(</span><span class="pln">overlayID</span><span class="pun">,</span><span class="pln"> </span><span class="kwd">event</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="pln">overlayID </span><span class="pun">===</span><span class="pln"> overlay</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
        </span><span class="kwd">print</span><span class="pun">(</span><span class="str">"Clicked on my overlay"</span><span class="pun">);</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
</span><span class="pun">});</span></code></pre>



        
            

    

    
    <h4 class="name" id=".mouseReleaseOnOverlay"><span class="type-signature">(static) </span>mouseReleaseOnOverlay<span class="signature">(overlayID, event)</span><span class="type-signature"> → {Signal}</span></h4>
    

    



<div class="description">
    Triggered when a mouse release event occurs on an overlay. Only occurs for 3D overlays (unless you use 
    <a href="Overlays.html#.sendMouseReleaseOnOverlay">sendMouseReleaseOnOverlay</a> for a 2D overlay).
</div>









    <h5>Parameters:</h5>
    

<table class="params">
    <thead>
    <tr>
        
        <th>Name</th>
        

        <th>Type</th>

        

        

        <th class="last">Description</th>
    </tr>
    </thead>

    <tbody>
    

        <tr>
            
                <td class="name"><code>overlayID</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="Uuid.html">Uuid</a></span>


            
            </td>

            

            

            <td class="description last">The ID of the overlay the mouse release event occurred on.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>event</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#PointerEvent">PointerEvent</a></span>


            
            </td>

            

            

            <td class="description last">The mouse release event details.</td>
        </tr>

    
    </tbody>
</table>






<dl class="details">

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    
</dl>













<h5>Returns:</h5>

        


<dl>
    <dt>
        Type
    </dt>
    <dd>
        
<span class="param-type">Signal</span>


    </dd>
</dl>

    





        
            

    

    
    <h4 class="name" id=".overlayDeleted"><span class="type-signature">(static) </span>overlayDeleted<span class="signature">(overlayID)</span><span class="type-signature"> → {Signal}</span></h4>
    

    



<div class="description">
    Triggered when an overlay is deleted.
</div>









    <h5>Parameters:</h5>
    

<table class="params">
    <thead>
    <tr>
        
        <th>Name</th>
        

        <th>Type</th>

        

        

        <th class="last">Description</th>
    </tr>
    </thead>

    <tbody>
    

        <tr>
            
                <td class="name"><code>overlayID</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="Uuid.html">Uuid</a></span>


            
            </td>

            

            

            <td class="description last">The ID of the overlay that was deleted.</td>
        </tr>

    
    </tbody>
</table>






<dl class="details">

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    
</dl>













<h5>Returns:</h5>

        


<dl>
    <dt>
        Type
    </dt>
    <dd>
        
<span class="param-type">Signal</span>


    </dd>
</dl>

    




    <h5>Example</h5>
    
        <p class="code-caption">Create an overlay then delete it after 1s.</p>
    
    <pre class="prettyprint"><code><span class="kwd">var</span><span class="pln"> overlay </span><span class="pun">=</span><span class="pln"> </span><span class="typ">Overlays</span><span class="pun">.</span><span class="pln">addOverlay</span><span class="pun">(</span><span class="str">"cube"</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    position</span><span class="pun">:</span><span class="pln"> </span><span class="typ">Vec3</span><span class="pun">.</span><span class="pln">sum</span><span class="pun">(</span><span class="typ">MyAvatar</span><span class="pun">.</span><span class="pln">position</span><span class="pun">,</span><span class="pln"> </span><span class="typ">Vec3</span><span class="pun">.</span><span class="pln">multiplyQbyV</span><span class="pun">(</span><span class="typ">MyAvatar</span><span class="pun">.</span><span class="pln">orientation</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> x</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0</span><span class="pun">,</span><span class="pln"> y</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0</span><span class="pun">,</span><span class="pln"> z</span><span class="pun">:</span><span class="pln"> </span><span class="pun">-</span><span class="lit">3</span><span class="pln"> </span><span class="pun">})),</span><span class="pln">
    rotation</span><span class="pun">:</span><span class="pln"> </span><span class="typ">MyAvatar</span><span class="pun">.</span><span class="pln">orientation</span><span class="pun">,</span><span class="pln">
    dimensions</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> x</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0.3</span><span class="pun">,</span><span class="pln"> y</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0.3</span><span class="pun">,</span><span class="pln"> z</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0.3</span><span class="pln"> </span><span class="pun">},</span><span class="pln">
    solid</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">true</span><span class="pln">
</span><span class="pun">});</span><span class="pln">
</span><span class="kwd">print</span><span class="pun">(</span><span class="str">"Overlay: "</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> overlay</span><span class="pun">);</span><span class="pln">

</span><span class="typ">Overlays</span><span class="pun">.</span><span class="pln">overlayDeleted</span><span class="pun">.</span><span class="pln">connect</span><span class="pun">(</span><span class="kwd">function</span><span class="pun">(</span><span class="pln">overlayID</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">print</span><span class="pun">(</span><span class="str">"Deleted: "</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> overlayID</span><span class="pun">);</span><span class="pln">
</span><span class="pun">});</span><span class="pln">
</span><span class="typ">Script</span><span class="pun">.</span><span class="pln">setTimeout</span><span class="pun">(</span><span class="kwd">function</span><span class="pln"> </span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="typ">Overlays</span><span class="pun">.</span><span class="pln">deleteOverlay</span><span class="pun">(</span><span class="pln">overlay</span><span class="pun">);</span><span class="pln">
</span><span class="pun">},</span><span class="pln"> </span><span class="lit">1000</span><span class="pun">);</span></code></pre>



        
            

    

    
    <h4 class="name" id=".sendHoverEnterOverlay"><span class="type-signature">(static) </span>sendHoverEnterOverlay<span class="signature">(id, event)</span><span class="type-signature"></span></h4>
    

    



<div class="description">
    Generate a hover enter event on an overlay.
</div>









    <h5>Parameters:</h5>
    

<table class="params">
    <thead>
    <tr>
        
        <th>Name</th>
        

        <th>Type</th>

        

        

        <th class="last">Description</th>
    </tr>
    </thead>

    <tbody>
    

        <tr>
            
                <td class="name"><code>id</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="Uuid.html">Uuid</a></span>


            
            </td>

            

            

            <td class="description last">The ID of the overlay to generate a hover enter event on.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>event</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#PointerEvent">PointerEvent</a></span>


            
            </td>

            

            

            <td class="description last">The hover enter event details.</td>
        </tr>

    
    </tbody>
</table>






<dl class="details">

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    
</dl>


















        
            

    

    
    <h4 class="name" id=".sendHoverLeaveOverlay"><span class="type-signature">(static) </span>sendHoverLeaveOverlay<span class="signature">(overlayID, event)</span><span class="type-signature"></span></h4>
    

    



<div class="description">
    Generate a hover leave event on an overlay.
</div>









    <h5>Parameters:</h5>
    

<table class="params">
    <thead>
    <tr>
        
        <th>Name</th>
        

        <th>Type</th>

        

        

        <th class="last">Description</th>
    </tr>
    </thead>

    <tbody>
    

        <tr>
            
                <td class="name"><code>overlayID</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="Uuid.html">Uuid</a></span>


            
            </td>

            

            

            <td class="description last">The ID of the overlay to generate a hover leave event on.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>event</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#PointerEvent">PointerEvent</a></span>


            
            </td>

            

            

            <td class="description last">The hover leave event details.</td>
        </tr>

    
    </tbody>
</table>






<dl class="details">

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    
</dl>


















        
            

    

    
    <h4 class="name" id=".sendHoverOverOverlay"><span class="type-signature">(static) </span>sendHoverOverOverlay<span class="signature">(overlayID, event)</span><span class="type-signature"></span></h4>
    

    



<div class="description">
    Generate a hover over event on an overlay.
</div>









    <h5>Parameters:</h5>
    

<table class="params">
    <thead>
    <tr>
        
        <th>Name</th>
        

        <th>Type</th>

        

        

        <th class="last">Description</th>
    </tr>
    </thead>

    <tbody>
    

        <tr>
            
                <td class="name"><code>overlayID</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="Uuid.html">Uuid</a></span>


            
            </td>

            

            

            <td class="description last">The ID of the overlay to generate a hover over event on.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>event</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#PointerEvent">PointerEvent</a></span>


            
            </td>

            

            

            <td class="description last">The hover over event details.</td>
        </tr>

    
    </tbody>
</table>






<dl class="details">

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    
</dl>


















        
            

    

    
    <h4 class="name" id=".sendMouseMoveOnOverlay"><span class="type-signature">(static) </span>sendMouseMoveOnOverlay<span class="signature">(overlayID, event)</span><span class="type-signature"></span></h4>
    

    



<div class="description">
    Generate a mouse move event on an overlay.
</div>









    <h5>Parameters:</h5>
    

<table class="params">
    <thead>
    <tr>
        
        <th>Name</th>
        

        <th>Type</th>

        

        

        <th class="last">Description</th>
    </tr>
    </thead>

    <tbody>
    

        <tr>
            
                <td class="name"><code>overlayID</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="Uuid.html">Uuid</a></span>


            
            </td>

            

            

            <td class="description last">The ID of the overlay to generate a mouse move event on.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>event</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#PointerEvent">PointerEvent</a></span>


            
            </td>

            

            

            <td class="description last">The mouse move event details.</td>
        </tr>

    
    </tbody>
</table>






<dl class="details">

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    
</dl>


















        
            

    

    
    <h4 class="name" id=".sendMousePressOnOverlay"><span class="type-signature">(static) </span>sendMousePressOnOverlay<span class="signature">(overlayID, event)</span><span class="type-signature"></span></h4>
    

    



<div class="description">
    Generate a mouse press event on an overlay.
</div>









    <h5>Parameters:</h5>
    

<table class="params">
    <thead>
    <tr>
        
        <th>Name</th>
        

        <th>Type</th>

        

        

        <th class="last">Description</th>
    </tr>
    </thead>

    <tbody>
    

        <tr>
            
                <td class="name"><code>overlayID</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="Uuid.html">Uuid</a></span>


            
            </td>

            

            

            <td class="description last">The ID of the overlay to generate a mouse press event on.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>event</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#PointerEvent">PointerEvent</a></span>


            
            </td>

            

            

            <td class="description last">The mouse press event details.</td>
        </tr>

    
    </tbody>
</table>






<dl class="details">

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    
</dl>

















    <h5>Example</h5>
    
        <p class="code-caption">Create a 2D rectangle overlay plus a 3D cube overlay and generate mousePressOnOverlay events for the 2D
overlay.</p>
    
    <pre class="prettyprint"><code><span class="kwd">var</span><span class="pln"> overlay </span><span class="pun">=</span><span class="pln"> </span><span class="typ">Overlays</span><span class="pun">.</span><span class="pln">addOverlay</span><span class="pun">(</span><span class="str">"cube"</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    position</span><span class="pun">:</span><span class="pln"> </span><span class="typ">Vec3</span><span class="pun">.</span><span class="pln">sum</span><span class="pun">(</span><span class="typ">MyAvatar</span><span class="pun">.</span><span class="pln">position</span><span class="pun">,</span><span class="pln"> </span><span class="typ">Vec3</span><span class="pun">.</span><span class="pln">multiplyQbyV</span><span class="pun">(</span><span class="typ">MyAvatar</span><span class="pun">.</span><span class="pln">orientation</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> x</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0</span><span class="pun">,</span><span class="pln"> y</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0</span><span class="pun">,</span><span class="pln"> z</span><span class="pun">:</span><span class="pln"> </span><span class="pun">-</span><span class="lit">3</span><span class="pln"> </span><span class="pun">})),</span><span class="pln">
    rotation</span><span class="pun">:</span><span class="pln"> </span><span class="typ">MyAvatar</span><span class="pun">.</span><span class="pln">orientation</span><span class="pun">,</span><span class="pln">
    dimensions</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> x</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0.3</span><span class="pun">,</span><span class="pln"> y</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0.3</span><span class="pun">,</span><span class="pln"> z</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0.3</span><span class="pln"> </span><span class="pun">},</span><span class="pln">
    solid</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">true</span><span class="pln">
</span><span class="pun">});</span><span class="pln">
</span><span class="kwd">print</span><span class="pun">(</span><span class="str">"3D overlay: "</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> overlay</span><span class="pun">);</span><span class="pln">

</span><span class="kwd">var</span><span class="pln"> overlay </span><span class="pun">=</span><span class="pln"> </span><span class="typ">Overlays</span><span class="pun">.</span><span class="pln">addOverlay</span><span class="pun">(</span><span class="str">"rectangle"</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    bounds</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> x</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span><span class="pln"> y</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span><span class="pln"> width</span><span class="pun">:</span><span class="pln"> </span><span class="lit">200</span><span class="pun">,</span><span class="pln"> height</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pln"> </span><span class="pun">},</span><span class="pln">
    color</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> red</span><span class="pun">:</span><span class="pln"> </span><span class="lit">255</span><span class="pun">,</span><span class="pln"> green</span><span class="pun">:</span><span class="pln"> </span><span class="lit">255</span><span class="pun">,</span><span class="pln"> blue</span><span class="pun">:</span><span class="pln"> </span><span class="lit">255</span><span class="pln"> </span><span class="pun">}</span><span class="pln">
</span><span class="pun">});</span><span class="pln">
</span><span class="kwd">print</span><span class="pun">(</span><span class="str">"2D overlay: "</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> overlay</span><span class="pun">);</span><span class="pln">

</span><span class="com">// Overlays.mousePressOnOverlay by default applies only to 3D overlays.</span><span class="pln">
</span><span class="typ">Overlays</span><span class="pun">.</span><span class="pln">mousePressOnOverlay</span><span class="pun">.</span><span class="pln">connect</span><span class="pun">(</span><span class="kwd">function</span><span class="pun">(</span><span class="pln">overlayID</span><span class="pun">,</span><span class="pln"> </span><span class="kwd">event</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">print</span><span class="pun">(</span><span class="str">"Clicked: "</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> overlayID</span><span class="pun">);</span><span class="pln">
</span><span class="pun">});</span><span class="pln">

</span><span class="typ">Controller</span><span class="pun">.</span><span class="pln">mousePressEvent</span><span class="pun">.</span><span class="pln">connect</span><span class="pun">(</span><span class="kwd">function</span><span class="pln"> </span><span class="pun">(</span><span class="kwd">event</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="com">// Overlays.getOverlayAtPoint applies only to 2D overlays.</span><span class="pln">
    </span><span class="kwd">var</span><span class="pln"> overlay </span><span class="pun">=</span><span class="pln"> </span><span class="typ">Overlays</span><span class="pun">.</span><span class="pln">getOverlayAtPoint</span><span class="pun">({</span><span class="pln"> x</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">event</span><span class="pun">.</span><span class="pln">x</span><span class="pun">,</span><span class="pln"> y</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">event</span><span class="pun">.</span><span class="pln">y </span><span class="pun">});</span><span class="pln">
    </span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="pln">overlay</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
        </span><span class="typ">Overlays</span><span class="pun">.</span><span class="pln">sendMousePressOnOverlay</span><span class="pun">(</span><span class="pln">overlay</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
            type</span><span class="pun">:</span><span class="pln"> </span><span class="str">"press"</span><span class="pun">,</span><span class="pln">
            id</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0</span><span class="pun">,</span><span class="pln">
            pos2D</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">event</span><span class="pln">
        </span><span class="pun">});</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
</span><span class="pun">});</span></code></pre>



        
            

    

    
    <h4 class="name" id=".sendMouseReleaseOnOverlay"><span class="type-signature">(static) </span>sendMouseReleaseOnOverlay<span class="signature">(overlayID, event)</span><span class="type-signature"></span></h4>
    

    



<div class="description">
    Generate a mouse release event on an overlay.
</div>









    <h5>Parameters:</h5>
    

<table class="params">
    <thead>
    <tr>
        
        <th>Name</th>
        

        <th>Type</th>

        

        

        <th class="last">Description</th>
    </tr>
    </thead>

    <tbody>
    

        <tr>
            
                <td class="name"><code>overlayID</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="Uuid.html">Uuid</a></span>


            
            </td>

            

            

            <td class="description last">The ID of the overlay to generate a mouse release event on.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>event</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#PointerEvent">PointerEvent</a></span>


            
            </td>

            

            

            <td class="description last">The mouse release event details.</td>
        </tr>

    
    </tbody>
</table>






<dl class="details">

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    
</dl>


















        
            

    

    
    <h4 class="name" id=".setKeyboardFocusOverlay"><span class="type-signature">(static) </span>setKeyboardFocusOverlay<span class="signature">(overlayID)</span><span class="type-signature"></span></h4>
    

    



<div class="description">
    Set the Web3D overlay that has keyboard focus.
</div>









    <h5>Parameters:</h5>
    

<table class="params">
    <thead>
    <tr>
        
        <th>Name</th>
        

        <th>Type</th>

        

        

        <th class="last">Description</th>
    </tr>
    </thead>

    <tbody>
    

        <tr>
            
                <td class="name"><code>overlayID</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="Uuid.html">Uuid</a></span>


            
            </td>

            

            

            <td class="description last">The ID of the <a href="Overlays.html#.OverlayType">web3d</a> overlay to set keyboard focus to. Use 
    <a href="Uuid.html">Uuid.NULL</a> or <code>null</code> to unset keyboard focus from an overlay.</td>
        </tr>

    
    </tbody>
</table>






<dl class="details">

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    
</dl>


















        
            

    

    
    <h4 class="name" id=".textSize"><span class="type-signature">(static) </span>textSize<span class="signature">(overlayID, text)</span><span class="type-signature"> → {<a href="global.html#Size">Size</a>}</span></h4>
    

    



<div class="description">
    Calculates the size of the given text in the specified overlay if it is a text overlay.
</div>









    <h5>Parameters:</h5>
    

<table class="params">
    <thead>
    <tr>
        
        <th>Name</th>
        

        <th>Type</th>

        

        

        <th class="last">Description</th>
    </tr>
    </thead>

    <tbody>
    

        <tr>
            
                <td class="name"><code>overlayID</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="Uuid.html">Uuid</a></span>


            
            </td>

            

            

            <td class="description last">The ID of the overlay to use for calculation.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>text</code></td>
            

            <td class="type">
            
                
<span class="param-type">string</span>


            
            </td>

            

            

            <td class="description last">The string to calculate the size of.</td>
        </tr>

    
    </tbody>
</table>






<dl class="details">

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    
</dl>













<h5>Returns:</h5>

        
<div class="param-desc">
    The size of the <code>text</code> if the overlay is a text overlay, otherwise
    <code>{ height: 0, width : 0 }</code>. If the overlay is a 2D overlay, the size is in pixels; if the overlay is a 3D
    overlay, the size is in meters.
</div>



<dl>
    <dt>
        Type
    </dt>
    <dd>
        
<span class="param-type"><a href="global.html#Size">Size</a></span>


    </dd>
</dl>

    




    <h5>Example</h5>
    
        <p class="code-caption">Calculate the size of "hello" in a 3D text overlay.</p>
    
    <pre class="prettyprint"><code><span class="kwd">var</span><span class="pln"> overlay </span><span class="pun">=</span><span class="pln"> </span><span class="typ">Overlays</span><span class="pun">.</span><span class="pln">addOverlay</span><span class="pun">(</span><span class="str">"text3d"</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    position</span><span class="pun">:</span><span class="pln"> </span><span class="typ">Vec3</span><span class="pun">.</span><span class="pln">sum</span><span class="pun">(</span><span class="typ">MyAvatar</span><span class="pun">.</span><span class="pln">position</span><span class="pun">,</span><span class="pln"> </span><span class="typ">Vec3</span><span class="pun">.</span><span class="pln">multiplyQbyV</span><span class="pun">(</span><span class="typ">MyAvatar</span><span class="pun">.</span><span class="pln">orientation</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> x</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0</span><span class="pun">,</span><span class="pln"> y</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0</span><span class="pun">,</span><span class="pln"> z</span><span class="pun">:</span><span class="pln"> </span><span class="pun">-</span><span class="lit">2</span><span class="pln"> </span><span class="pun">})),</span><span class="pln">
    rotation</span><span class="pun">:</span><span class="pln"> </span><span class="typ">MyAvatar</span><span class="pun">.</span><span class="pln">orientation</span><span class="pun">,</span><span class="pln">
    text</span><span class="pun">:</span><span class="pln"> </span><span class="str">"hello"</span><span class="pun">,</span><span class="pln">
    lineHeight</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0.2</span><span class="pln">
</span><span class="pun">});</span><span class="pln">
</span><span class="kwd">var</span><span class="pln"> textSize </span><span class="pun">=</span><span class="pln"> </span><span class="typ">Overlays</span><span class="pun">.</span><span class="pln">textSize</span><span class="pun">(</span><span class="pln">overlay</span><span class="pun">,</span><span class="pln"> </span><span class="str">"hello"</span><span class="pun">);</span><span class="pln">
</span><span class="kwd">print</span><span class="pun">(</span><span class="str">"Size of \"hello\": "</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> JSON</span><span class="pun">.</span><span class="pln">stringify</span><span class="pun">(</span><span class="pln">textSize</span><span class="pun">));</span></code></pre>



        
            

    

    
    <h4 class="name" id=".width"><span class="type-signature">(static) </span>width<span class="signature">()</span><span class="type-signature"> → {number}</span></h4>
    

    



<div class="description">
    Get the width of the window or HUD.
</div>













<dl class="details">

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    
</dl>













<h5>Returns:</h5>

        
<div class="param-desc">
    The width, in pixels, of the Interface window if in desktop mode or the HUD if in HMD mode.
</div>



<dl>
    <dt>
        Type
    </dt>
    <dd>
        
<span class="param-type">number</span>


    </dd>
</dl>

    





        
    

    
        <h3 class="subsection-title">Type Definitions</h3>

        
                
<h4 class="name" id=".Circle3DProperties">Circle3DProperties</h4>




<div class="description">
    These are the properties of a <code>circle3d</code> <a href="Overlays.html#.OverlayType">OverlayType</a>.
</div>



    <h5>Type:</h5>
    <ul>
        <li>
            
<span class="param-type">object</span>


        </li>
    </ul>





    <h5 class="subsection-title">Properties:</h5>

    

<table class="props">
    <thead>
    <tr>
        
        <th>Name</th>
        

        <th>Type</th>

        

        
        <th>Default</th>
        

        <th class="last">Description</th>
    </tr>
    </thead>

    <tbody>
    

        <tr>
            
                <td class="name"><code>type</code></td>
            

            <td class="type">
            
                
<span class="param-type">string</span>


            
            </td>

            

            
                <td class="default">
                
                    circle3d
                
                </td>
            

            <td class="description last">Has the value <code>"circle3d"</code>. <em>Read-only.</em></td>
        </tr>

    

        <tr>
            
                <td class="name"><code>pulseMax</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    0
                
                </td>
            

            <td class="description last">The maximum value of the pulse multiplier.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>pulseMin</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    0
                
                </td>
            

            <td class="description last">The minimum value of the pulse multiplier.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>pulsePeriod</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    1
                
                </td>
            

            <td class="description last">The duration of the color and alpha pulse, in seconds. A pulse multiplier value goes from
    <code>pulseMin</code> to <code>pulseMax</code>, then <code>pulseMax</code> to <code>pulseMin</code> in one period.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>alphaPulse</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    0
                
                </td>
            

            <td class="description last">If non-zero, the alpha of the overlay is pulsed: the alpha value is multiplied by the
    current pulse multiplier value each frame. If &gt; 0 the pulse multiplier is applied in phase with the pulse period; if &lt; 0
    the pulse multiplier is applied out of phase with the pulse period. (The magnitude of the property isn't otherwise
    used.)</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>colorPulse</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    0
                
                </td>
            

            <td class="description last">If non-zero, the color of the overlay is pulsed: the color value is multiplied by the
    current pulse multiplier value each frame. If &gt; 0 the pulse multiplier is applied in phase with the pulse period; if &lt; 0
    the pulse multiplier is applied out of phase with the pulse period. (The magnitude of the property isn't otherwise
    used.)</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>visible</code></td>
            

            <td class="type">
            
                
<span class="param-type">boolean</span>


            
            </td>

            

            
                <td class="default">
                
                    true
                
                </td>
            

            <td class="description last">If <code>true</code>, the overlay is rendered, otherwise it is not rendered.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>name</code></td>
            

            <td class="type">
            
                
<span class="param-type">string</span>


            
            </td>

            

            
                <td class="default">
                
                    ""
                
                </td>
            

            <td class="description last">A friendly name for the overlay.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>position</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#Vec3">Vec3</a></span>


            
            </td>

            

            
                <td class="default">
                
                </td>
            

            <td class="description last">The position of the overlay center. Synonyms: <code>p1</code>, <code>point</code>, and
    <code>start</code>.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>localPosition</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#Vec3">Vec3</a></span>


            
            </td>

            

            
                <td class="default">
                
                </td>
            

            <td class="description last">The local position of the overlay relative to its parent if the overlay has a
    <code>parentID</code> set, otherwise the same value as <code>position</code>.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>rotation</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#Quat">Quat</a></span>


            
            </td>

            

            
                <td class="default">
                
                </td>
            

            <td class="description last">The orientation of the overlay. Synonym: <code>orientation</code>.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>localRotation</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#Quat">Quat</a></span>


            
            </td>

            

            
                <td class="default">
                
                </td>
            

            <td class="description last">The orientation of the overlay relative to its parent if the overlay has a
    <code>parentID</code> set, otherwise the same value as <code>rotation</code>.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>isSolid</code></td>
            

            <td class="type">
            
                
<span class="param-type">boolean</span>


            
            </td>

            

            
                <td class="default">
                
                    false
                
                </td>
            

            <td class="description last">Synonyms: <ode>solid, <code>isFilled</code>, and <code>filled</code>
    Antonyms: <code>isWire</code> and <code>wire</code>.</ode></td>
        </tr>

    

        <tr>
            
                <td class="name"><code>isDashedLine</code></td>
            

            <td class="type">
            
                
<span class="param-type">boolean</span>


            
            </td>

            

            
                <td class="default">
                
                    false
                
                </td>
            

            <td class="description last">If <code>true</code>, a dashed line is drawn on the overlay's edges. Synonym:
    <code>dashed</code>.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>ignoreRayIntersection</code></td>
            

            <td class="type">
            
                
<span class="param-type">boolean</span>


            
            </td>

            

            
                <td class="default">
                
                    false
                
                </td>
            

            <td class="description last">If <code>true</code>,
    <a href="Overlays.html#.findRayIntersection">findRayIntersection</a> ignores the overlay.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>drawInFront</code></td>
            

            <td class="type">
            
                
<span class="param-type">boolean</span>


            
            </td>

            

            
                <td class="default">
                
                    false
                
                </td>
            

            <td class="description last">If <code>true</code>, the overlay is rendered in front of other overlays that don't
    have <code>drawInFront</code> set to <code>true</code>, and in front of entities.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>grabbable</code></td>
            

            <td class="type">
            
                
<span class="param-type">boolean</span>


            
            </td>

            

            
                <td class="default">
                
                    false
                
                </td>
            

            <td class="description last">Signal to grabbing scripts whether or not this overlay can be grabbed.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>parentID</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="Uuid.html">Uuid</a></span>


            
            </td>

            

            
                <td class="default">
                
                    null
                
                </td>
            

            <td class="description last">The avatar, entity, or overlay that the overlay is parented to.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>parentJointIndex</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    65535
                
                </td>
            

            <td class="description last">Integer value specifying the skeleton joint that the overlay is attached to if
    <code>parentID</code> is an avatar skeleton. A value of <code>65535</code> means "no joint".</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>dimensions</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#Vec2">Vec2</a></span>


            
            </td>

            

            
                <td class="default">
                
                    1,1
                
                </td>
            

            <td class="description last">The dimensions of the overlay. Synonyms: <code>scale</code>, <code>size</code>.
    <em>Not used.</em></td>
        </tr>

    

        <tr>
            
                <td class="name"><code>startAt</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    0
                
                </td>
            

            <td class="description last">The counter-clockwise angle from the overlay's x-axis that drawing starts at, in degrees.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>endAt</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    360
                
                </td>
            

            <td class="description last">The counter-clockwise angle from the overlay's x-axis that drawing ends at, in degrees.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>outerRadius</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    1
                
                </td>
            

            <td class="description last">The outer radius of the overlay, in meters. Synonym: <code>radius</code>.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>innerRadius</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    0
                
                </td>
            

            <td class="description last">The inner radius of the overlay, in meters.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>color</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#Color">Color</a></span>


            
            </td>

            

            
                <td class="default">
                
                    255,255,255
                
                </td>
            

            <td class="description last">The color of the overlay. Setting this value also sets the values of 
    <code>innerStartColor</code>, <code>innerEndColor</code>, <code>outerStartColor</code>, and <code>outerEndColor</code>.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>startColor</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#Color">Color</a></span>


            
            </td>

            

            
                <td class="default">
                
                </td>
            

            <td class="description last">Sets the values of <code>innerStartColor</code> and <code>outerStartColor</code>.
    <em>Write-only.</em></td>
        </tr>

    

        <tr>
            
                <td class="name"><code>endColor</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#Color">Color</a></span>


            
            </td>

            

            
                <td class="default">
                
                </td>
            

            <td class="description last">Sets the values of <code>innerEndColor</code> and <code>outerEndColor</code>.
    <em>Write-only.</em></td>
        </tr>

    

        <tr>
            
                <td class="name"><code>innerColor</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#Color">Color</a></span>


            
            </td>

            

            
                <td class="default">
                
                </td>
            

            <td class="description last">Sets the values of <code>innerStartColor</code> and <code>innerEndColor</code>.
    <em>Write-only.</em></td>
        </tr>

    

        <tr>
            
                <td class="name"><code>outerColor</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#Color">Color</a></span>


            
            </td>

            

            
                <td class="default">
                
                </td>
            

            <td class="description last">Sets the values of <code>outerStartColor</code> and <code>outerEndColor</code>.
    <em>Write-only.</em></td>
        </tr>

    

        <tr>
            
                <td class="name"><code>innerStartcolor</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#Color">Color</a></span>


            
            </td>

            

            
                <td class="default">
                
                </td>
            

            <td class="description last">The color at the inner start point of the overlay. <em>Write-only.</em></td>
        </tr>

    

        <tr>
            
                <td class="name"><code>innerEndColor</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#Color">Color</a></span>


            
            </td>

            

            
                <td class="default">
                
                </td>
            

            <td class="description last">The color at the inner end point of the overlay. <em>Write-only.</em></td>
        </tr>

    

        <tr>
            
                <td class="name"><code>outerStartColor</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#Color">Color</a></span>


            
            </td>

            

            
                <td class="default">
                
                </td>
            

            <td class="description last">The color at the outer start point of the overlay. <em>Write-only.</em></td>
        </tr>

    

        <tr>
            
                <td class="name"><code>outerEndColor</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#Color">Color</a></span>


            
            </td>

            

            
                <td class="default">
                
                </td>
            

            <td class="description last">The color at the outer end point of the overlay. <em>Write-only.</em></td>
        </tr>

    

        <tr>
            
                <td class="name"><code>alpha</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    0.5
                
                </td>
            

            <td class="description last">The opacity of the overlay, <code>0.0</code> - <code>1.0</code>. Setting this value also sets
    the values of <code>innerStartAlpha</code>, <code>innerEndAlpha</code>, <code>outerStartAlpha</code>, and 
    <code>outerEndAlpha</code>. Synonym: <code>Alpha</code>; <em>write-only</em>.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>startAlpha</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                </td>
            

            <td class="description last">Sets the values of <code>innerStartAlpha</code> and <code>outerStartAlpha</code>.
    <em>Write-only.</em></td>
        </tr>

    

        <tr>
            
                <td class="name"><code>endAlpha</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                </td>
            

            <td class="description last">Sets the values of <code>innerEndAlpha</code> and <code>outerEndAlpha</code>.
    <em>Write-only.</em></td>
        </tr>

    

        <tr>
            
                <td class="name"><code>innerAlpha</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                </td>
            

            <td class="description last">Sets the values of <code>innerStartAlpha</code> and <code>innerEndAlpha</code>.
    <em>Write-only.</em></td>
        </tr>

    

        <tr>
            
                <td class="name"><code>outerAlpha</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                </td>
            

            <td class="description last">Sets the values of <code>outerStartAlpha</code> and <code>outerEndAlpha</code>.
    <em>Write-only.</em></td>
        </tr>

    

        <tr>
            
                <td class="name"><code>innerStartAlpha</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    0
                
                </td>
            

            <td class="description last">The alpha at the inner start point of the overlay. <em>Write-only.</em></td>
        </tr>

    

        <tr>
            
                <td class="name"><code>innerEndAlpha</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    0
                
                </td>
            

            <td class="description last">The alpha at the inner end point of the overlay. <em>Write-only.</em></td>
        </tr>

    

        <tr>
            
                <td class="name"><code>outerStartAlpha</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    0
                
                </td>
            

            <td class="description last">The alpha at the outer start point of the overlay. <em>Write-only.</em></td>
        </tr>

    

        <tr>
            
                <td class="name"><code>outerEndAlpha</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    0
                
                </td>
            

            <td class="description last">The alpha at the outer end point of the overlay. <em>Write-only.</em></td>
        </tr>

    

        <tr>
            
                <td class="name"><code>hasTickMarks</code></td>
            

            <td class="type">
            
                
<span class="param-type">boolean</span>


            
            </td>

            

            
                <td class="default">
                
                    false
                
                </td>
            

            <td class="description last">If <code>true</code>, tick marks are drawn.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>majorTickMarksAngle</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    0
                
                </td>
            

            <td class="description last">The angle between major tick marks, in degrees.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>minorTickMarksAngle</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    0
                
                </td>
            

            <td class="description last">The angle between minor tick marks, in degrees.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>majorTickMarksLength</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    0
                
                </td>
            

            <td class="description last">The length of the major tick marks, in meters. A positive value draws tick marks
    outwards from the inner radius; a negative value draws tick marks inwards from the outer radius.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>minorTickMarksLength</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    0
                
                </td>
            

            <td class="description last">The length of the minor tick marks, in meters. A positive value draws tick marks
    outwards from the inner radius; a negative value draws tick marks inwards from the outer radius.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>majorTickMarksColor</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#Color">Color</a></span>


            
            </td>

            

            
                <td class="default">
                
                    0,0,0
                
                </td>
            

            <td class="description last">The color of the major tick marks.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>minorTickMarksColor</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#Color">Color</a></span>


            
            </td>

            

            
                <td class="default">
                
                    0,0,0
                
                </td>
            

            <td class="description last">The color of the minor tick marks.</td>
        </tr>

    
    </tbody>
</table>




<dl class="details">

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    
</dl>






            
                
<h4 class="name" id=".CubeProperties">CubeProperties</h4>




<div class="description">
    These are the properties of a <code>cube</code> <a href="Overlays.html#.OverlayType">OverlayType</a>.
</div>



    <h5>Type:</h5>
    <ul>
        <li>
            
<span class="param-type">object</span>


        </li>
    </ul>





    <h5 class="subsection-title">Properties:</h5>

    

<table class="props">
    <thead>
    <tr>
        
        <th>Name</th>
        

        <th>Type</th>

        

        
        <th>Default</th>
        

        <th class="last">Description</th>
    </tr>
    </thead>

    <tbody>
    

        <tr>
            
                <td class="name"><code>type</code></td>
            

            <td class="type">
            
                
<span class="param-type">string</span>


            
            </td>

            

            
                <td class="default">
                
                    cube
                
                </td>
            

            <td class="description last">Has the value <code>"cube"</code>. <em>Read-only.</em></td>
        </tr>

    

        <tr>
            
                <td class="name"><code>color</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#Color">Color</a></span>


            
            </td>

            

            
                <td class="default">
                
                    255,255,255
                
                </td>
            

            <td class="description last">The color of the overlay.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>alpha</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    0.7
                
                </td>
            

            <td class="description last">The opacity of the overlay, <code>0.0</code> - <code>1.0</code>.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>pulseMax</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    0
                
                </td>
            

            <td class="description last">The maximum value of the pulse multiplier.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>pulseMin</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    0
                
                </td>
            

            <td class="description last">The minimum value of the pulse multiplier.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>pulsePeriod</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    1
                
                </td>
            

            <td class="description last">The duration of the color and alpha pulse, in seconds. A pulse multiplier value goes from
    <code>pulseMin</code> to <code>pulseMax</code>, then <code>pulseMax</code> to <code>pulseMin</code> in one period.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>alphaPulse</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    0
                
                </td>
            

            <td class="description last">If non-zero, the alpha of the overlay is pulsed: the alpha value is multiplied by the
    current pulse multiplier value each frame. If &gt; 0 the pulse multiplier is applied in phase with the pulse period; if &lt; 0
    the pulse multiplier is applied out of phase with the pulse period. (The magnitude of the property isn't otherwise
    used.)</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>colorPulse</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    0
                
                </td>
            

            <td class="description last">If non-zero, the color of the overlay is pulsed: the color value is multiplied by the
    current pulse multiplier value each frame. If &gt; 0 the pulse multiplier is applied in phase with the pulse period; if &lt; 0
    the pulse multiplier is applied out of phase with the pulse period. (The magnitude of the property isn't otherwise
    used.)</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>visible</code></td>
            

            <td class="type">
            
                
<span class="param-type">boolean</span>


            
            </td>

            

            
                <td class="default">
                
                    true
                
                </td>
            

            <td class="description last">If <code>true</code>, the overlay is rendered, otherwise it is not rendered.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>name</code></td>
            

            <td class="type">
            
                
<span class="param-type">string</span>


            
            </td>

            

            
                <td class="default">
                
                    ""
                
                </td>
            

            <td class="description last">A friendly name for the overlay.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>position</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#Vec3">Vec3</a></span>


            
            </td>

            

            
                <td class="default">
                
                </td>
            

            <td class="description last">The position of the overlay center. Synonyms: <code>p1</code>, <code>point</code>, and
    <code>start</code>.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>localPosition</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#Vec3">Vec3</a></span>


            
            </td>

            

            
                <td class="default">
                
                </td>
            

            <td class="description last">The local position of the overlay relative to its parent if the overlay has a
    <code>parentID</code> set, otherwise the same value as <code>position</code>.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>rotation</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#Quat">Quat</a></span>


            
            </td>

            

            
                <td class="default">
                
                </td>
            

            <td class="description last">The orientation of the overlay. Synonym: <code>orientation</code>.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>localRotation</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#Quat">Quat</a></span>


            
            </td>

            

            
                <td class="default">
                
                </td>
            

            <td class="description last">The orientation of the overlay relative to its parent if the overlay has a
    <code>parentID</code> set, otherwise the same value as <code>rotation</code>.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>isSolid</code></td>
            

            <td class="type">
            
                
<span class="param-type">boolean</span>


            
            </td>

            

            
                <td class="default">
                
                    false
                
                </td>
            

            <td class="description last">Synonyms: <ode>solid, <code>isFilled</code>, and <code>filled</code>.
    Antonyms: <code>isWire</code> and <code>wire</code>.</ode></td>
        </tr>

    

        <tr>
            
                <td class="name"><code>isDashedLine</code></td>
            

            <td class="type">
            
                
<span class="param-type">boolean</span>


            
            </td>

            

            
                <td class="default">
                
                    false
                
                </td>
            

            <td class="description last">If <code>true</code>, a dashed line is drawn on the overlay's edges. Synonym:
    <code>dashed</code>.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>ignoreRayIntersection</code></td>
            

            <td class="type">
            
                
<span class="param-type">boolean</span>


            
            </td>

            

            
                <td class="default">
                
                    false
                
                </td>
            

            <td class="description last">If <code>true</code>,
    <a href="Overlays.html#.findRayIntersection">findRayIntersection</a> ignores the overlay.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>drawInFront</code></td>
            

            <td class="type">
            
                
<span class="param-type">boolean</span>


            
            </td>

            

            
                <td class="default">
                
                    false
                
                </td>
            

            <td class="description last">If <code>true</code>, the overlay is rendered in front of other overlays that don't
    have <code>drawInFront</code> set to <code>true</code>, and in front of entities.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>grabbable</code></td>
            

            <td class="type">
            
                
<span class="param-type">boolean</span>


            
            </td>

            

            
                <td class="default">
                
                    false
                
                </td>
            

            <td class="description last">Signal to grabbing scripts whether or not this overlay can be grabbed.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>parentID</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="Uuid.html">Uuid</a></span>


            
            </td>

            

            
                <td class="default">
                
                    null
                
                </td>
            

            <td class="description last">The avatar, entity, or overlay that the overlay is parented to.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>parentJointIndex</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    65535
                
                </td>
            

            <td class="description last">Integer value specifying the skeleton joint that the overlay is attached to if
    <code>parentID</code> is an avatar skeleton. A value of <code>65535</code> means "no joint".</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>dimensions</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#Vec3">Vec3</a></span>


            
            </td>

            

            
                <td class="default">
                
                </td>
            

            <td class="description last">The dimensions of the overlay. Synonyms: <code>scale</code>, <code>size</code>.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>borderSize</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                </td>
            

            <td class="description last">Not used.</td>
        </tr>

    
    </tbody>
</table>




<dl class="details">

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    
</dl>






            
                
<h4 class="name" id=".GridProperties">GridProperties</h4>




<div class="description">
    These are the properties of a <code>grid</code> <a href="Overlays.html#.OverlayType">OverlayType</a>.
</div>



    <h5>Type:</h5>
    <ul>
        <li>
            
<span class="param-type">object</span>


        </li>
    </ul>





    <h5 class="subsection-title">Properties:</h5>

    

<table class="props">
    <thead>
    <tr>
        
        <th>Name</th>
        

        <th>Type</th>

        

        
        <th>Default</th>
        

        <th class="last">Description</th>
    </tr>
    </thead>

    <tbody>
    

        <tr>
            
                <td class="name"><code>type</code></td>
            

            <td class="type">
            
                
<span class="param-type">string</span>


            
            </td>

            

            
                <td class="default">
                
                    grid
                
                </td>
            

            <td class="description last">Has the value <code>"grid"</code>. <em>Read-only.</em></td>
        </tr>

    

        <tr>
            
                <td class="name"><code>color</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#Color">Color</a></span>


            
            </td>

            

            
                <td class="default">
                
                    255,255,255
                
                </td>
            

            <td class="description last">The color of the overlay.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>alpha</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    0.7
                
                </td>
            

            <td class="description last">The opacity of the overlay, <code>0.0</code> - <code>1.0</code>.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>pulseMax</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    0
                
                </td>
            

            <td class="description last">The maximum value of the pulse multiplier.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>pulseMin</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    0
                
                </td>
            

            <td class="description last">The minimum value of the pulse multiplier.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>pulsePeriod</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    1
                
                </td>
            

            <td class="description last">The duration of the color and alpha pulse, in seconds. A pulse multiplier value goes from
    <code>pulseMin</code> to <code>pulseMax</code>, then <code>pulseMax</code> to <code>pulseMin</code> in one period.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>alphaPulse</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    0
                
                </td>
            

            <td class="description last">If non-zero, the alpha of the overlay is pulsed: the alpha value is multiplied by the
    current pulse multiplier value each frame. If &gt; 0 the pulse multiplier is applied in phase with the pulse period; if &lt; 0
    the pulse multiplier is applied out of phase with the pulse period. (The magnitude of the property isn't otherwise
    used.)</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>colorPulse</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    0
                
                </td>
            

            <td class="description last">If non-zero, the color of the overlay is pulsed: the color value is multiplied by the
    current pulse multiplier value each frame. If &gt; 0 the pulse multiplier is applied in phase with the pulse period; if &lt; 0
    the pulse multiplier is applied out of phase with the pulse period. (The magnitude of the property isn't otherwise
    used.)</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>visible</code></td>
            

            <td class="type">
            
                
<span class="param-type">boolean</span>


            
            </td>

            

            
                <td class="default">
                
                    true
                
                </td>
            

            <td class="description last">If <code>true</code>, the overlay is rendered, otherwise it is not rendered.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>name</code></td>
            

            <td class="type">
            
                
<span class="param-type">string</span>


            
            </td>

            

            
                <td class="default">
                
                    ""
                
                </td>
            

            <td class="description last">A friendly name for the overlay.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>position</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#Vec3">Vec3</a></span>


            
            </td>

            

            
                <td class="default">
                
                </td>
            

            <td class="description last">The position of the overlay center. Synonyms: <code>p1</code>, <code>point</code>, and
    <code>start</code>.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>localPosition</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#Vec3">Vec3</a></span>


            
            </td>

            

            
                <td class="default">
                
                </td>
            

            <td class="description last">The local position of the overlay relative to its parent if the overlay has a
    <code>parentID</code> set, otherwise the same value as <code>position</code>.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>rotation</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#Quat">Quat</a></span>


            
            </td>

            

            
                <td class="default">
                
                </td>
            

            <td class="description last">The orientation of the overlay. Synonym: <code>orientation</code>.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>localRotation</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#Quat">Quat</a></span>


            
            </td>

            

            
                <td class="default">
                
                </td>
            

            <td class="description last">The orientation of the overlay relative to its parent if the overlay has a
    <code>parentID</code> set, otherwise the same value as <code>rotation</code>.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>isSolid</code></td>
            

            <td class="type">
            
                
<span class="param-type">boolean</span>


            
            </td>

            

            
                <td class="default">
                
                    false
                
                </td>
            

            <td class="description last">Synonyms: <ode>solid, <code>isFilled</code>, and <code>filled</code>.
    Antonyms: <code>isWire</code> and <code>wire</code>.</ode></td>
        </tr>

    

        <tr>
            
                <td class="name"><code>isDashedLine</code></td>
            

            <td class="type">
            
                
<span class="param-type">boolean</span>


            
            </td>

            

            
                <td class="default">
                
                    false
                
                </td>
            

            <td class="description last">If <code>true</code>, a dashed line is drawn on the overlay's edges. Synonym:
    <code>dashed</code>.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>ignoreRayIntersection</code></td>
            

            <td class="type">
            
                
<span class="param-type">boolean</span>


            
            </td>

            

            
                <td class="default">
                
                    false
                
                </td>
            

            <td class="description last">If <code>true</code>,
    <a href="Overlays.html#.findRayIntersection">findRayIntersection</a> ignores the overlay.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>drawInFront</code></td>
            

            <td class="type">
            
                
<span class="param-type">boolean</span>


            
            </td>

            

            
                <td class="default">
                
                    false
                
                </td>
            

            <td class="description last">If <code>true</code>, the overlay is rendered in front of other overlays that don't
    have <code>drawInFront</code> set to <code>true</code>, and in front of entities.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>grabbable</code></td>
            

            <td class="type">
            
                
<span class="param-type">boolean</span>


            
            </td>

            

            
                <td class="default">
                
                    false
                
                </td>
            

            <td class="description last">Signal to grabbing scripts whether or not this overlay can be grabbed.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>parentID</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="Uuid.html">Uuid</a></span>


            
            </td>

            

            
                <td class="default">
                
                    null
                
                </td>
            

            <td class="description last">The avatar, entity, or overlay that the overlay is parented to.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>parentJointIndex</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    65535
                
                </td>
            

            <td class="description last">Integer value specifying the skeleton joint that the overlay is attached to if
    <code>parentID</code> is an avatar skeleton. A value of <code>65535</code> means "no joint".</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>dimensions</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#Vec2">Vec2</a></span>


            
            </td>

            

            
                <td class="default">
                
                    1,1
                
                </td>
            

            <td class="description last">The dimensions of the overlay. Synonyms: <code>scale</code>, <code>size</code>.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>followCamera</code></td>
            

            <td class="type">
            
                
<span class="param-type">boolean</span>


            
            </td>

            

            
                <td class="default">
                
                    true
                
                </td>
            

            <td class="description last">If <code>true</code>, the grid is always visible even as the camera moves to another
    position.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>majorGridEvery</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    5
                
                </td>
            

            <td class="description last">Integer number of <code>minorGridEvery</code> intervals at which to draw a thick grid 
    line. Minimum value = <code>1</code>.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>minorGridEvery</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    1
                
                </td>
            

            <td class="description last">Real number of meters at which to draw thin grid lines. Minimum value = 
    <code>0.001</code>.</td>
        </tr>

    
    </tbody>
</table>




<dl class="details">

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    
</dl>






            
                
<h4 class="name" id=".Image3DProperties">Image3DProperties</h4>




<div class="description">
    These are the properties of an <code>image3d</code> <a href="Overlays.html#.OverlayType">OverlayType</a>.
</div>



    <h5>Type:</h5>
    <ul>
        <li>
            
<span class="param-type">object</span>


        </li>
    </ul>





    <h5 class="subsection-title">Properties:</h5>

    

<table class="props">
    <thead>
    <tr>
        
        <th>Name</th>
        

        <th>Type</th>

        

        
        <th>Default</th>
        

        <th class="last">Description</th>
    </tr>
    </thead>

    <tbody>
    

        <tr>
            
                <td class="name"><code>type</code></td>
            

            <td class="type">
            
                
<span class="param-type">string</span>


            
            </td>

            

            
                <td class="default">
                
                    image3d
                
                </td>
            

            <td class="description last">Has the value <code>"image3d"</code>. <em>Read-only.</em></td>
        </tr>

    

        <tr>
            
                <td class="name"><code>color</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#Color">Color</a></span>


            
            </td>

            

            
                <td class="default">
                
                    255,255,255
                
                </td>
            

            <td class="description last">The color of the overlay.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>alpha</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    0.7
                
                </td>
            

            <td class="description last">The opacity of the overlay, <code>0.0</code> - <code>1.0</code>.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>pulseMax</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    0
                
                </td>
            

            <td class="description last">The maximum value of the pulse multiplier.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>pulseMin</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    0
                
                </td>
            

            <td class="description last">The minimum value of the pulse multiplier.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>pulsePeriod</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    1
                
                </td>
            

            <td class="description last">The duration of the color and alpha pulse, in seconds. A pulse multiplier value goes from
    <code>pulseMin</code> to <code>pulseMax</code>, then <code>pulseMax</code> to <code>pulseMin</code> in one period.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>alphaPulse</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    0
                
                </td>
            

            <td class="description last">If non-zero, the alpha of the overlay is pulsed: the alpha value is multiplied by the
    current pulse multiplier value each frame. If &gt; 0 the pulse multiplier is applied in phase with the pulse period; if &lt; 0
    the pulse multiplier is applied out of phase with the pulse period. (The magnitude of the property isn't otherwise
    used.)</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>colorPulse</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    0
                
                </td>
            

            <td class="description last">If non-zero, the color of the overlay is pulsed: the color value is multiplied by the
    current pulse multiplier value each frame. If &gt; 0 the pulse multiplier is applied in phase with the pulse period; if &lt; 0
    the pulse multiplier is applied out of phase with the pulse period. (The magnitude of the property isn't otherwise
    used.)</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>visible</code></td>
            

            <td class="type">
            
                
<span class="param-type">boolean</span>


            
            </td>

            

            
                <td class="default">
                
                    true
                
                </td>
            

            <td class="description last">If <code>true</code>, the overlay is rendered, otherwise it is not rendered.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>name</code></td>
            

            <td class="type">
            
                
<span class="param-type">string</span>


            
            </td>

            

            
                <td class="default">
                
                    ""
                
                </td>
            

            <td class="description last">A friendly name for the overlay.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>position</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#Vec3">Vec3</a></span>


            
            </td>

            

            
                <td class="default">
                
                </td>
            

            <td class="description last">The position of the overlay center. Synonyms: <code>p1</code>, <code>point</code>, and 
    <code>start</code>.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>localPosition</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#Vec3">Vec3</a></span>


            
            </td>

            

            
                <td class="default">
                
                </td>
            

            <td class="description last">The local position of the overlay relative to its parent if the overlay has a
    <code>parentID</code> set, otherwise the same value as <code>position</code>.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>rotation</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#Quat">Quat</a></span>


            
            </td>

            

            
                <td class="default">
                
                </td>
            

            <td class="description last">The orientation of the overlay. Synonym: <code>orientation</code>.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>localRotation</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#Quat">Quat</a></span>


            
            </td>

            

            
                <td class="default">
                
                </td>
            

            <td class="description last">The orientation of the overlay relative to its parent if the overlay has a
    <code>parentID</code> set, otherwise the same value as <code>rotation</code>.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>isSolid</code></td>
            

            <td class="type">
            
                
<span class="param-type">boolean</span>


            
            </td>

            

            
                <td class="default">
                
                    false
                
                </td>
            

            <td class="description last">Synonyms: <ode>solid, <code>isFilled</code>, and <code>filled</code>.
    Antonyms: <code>isWire</code> and <code>wire</code>.</ode></td>
        </tr>

    

        <tr>
            
                <td class="name"><code>isDashedLine</code></td>
            

            <td class="type">
            
                
<span class="param-type">boolean</span>


            
            </td>

            

            
                <td class="default">
                
                    false
                
                </td>
            

            <td class="description last">If <code>true</code>, a dashed line is drawn on the overlay's edges. Synonym:
    <code>dashed</code>.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>ignoreRayIntersection</code></td>
            

            <td class="type">
            
                
<span class="param-type">boolean</span>


            
            </td>

            

            
                <td class="default">
                
                    false
                
                </td>
            

            <td class="description last">If <code>true</code>, 
    <a href="Overlays.html#.findRayIntersection">findRayIntersection</a> ignores the overlay.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>drawInFront</code></td>
            

            <td class="type">
            
                
<span class="param-type">boolean</span>


            
            </td>

            

            
                <td class="default">
                
                    false
                
                </td>
            

            <td class="description last">If <code>true</code>, the overlay is rendered in front of other overlays that don't
    have <code>drawInFront</code> set to <code>true</code>, and in front of entities.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>grabbable</code></td>
            

            <td class="type">
            
                
<span class="param-type">boolean</span>


            
            </td>

            

            
                <td class="default">
                
                    false
                
                </td>
            

            <td class="description last">Signal to grabbing scripts whether or not this overlay can be grabbed.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>parentID</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="Uuid.html">Uuid</a></span>


            
            </td>

            

            
                <td class="default">
                
                    null
                
                </td>
            

            <td class="description last">The avatar, entity, or overlay that the overlay is parented to.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>parentJointIndex</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    65535
                
                </td>
            

            <td class="description last">Integer value specifying the skeleton joint that the overlay is attached to if
    <code>parentID</code> is an avatar skeleton. A value of <code>65535</code> means "no joint".</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>dimensions</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#Vec2">Vec2</a></span>


            
            </td>

            

            
                <td class="default">
                
                    1,1
                
                </td>
            

            <td class="description last">The dimensions of the overlay. Synonyms: <code>scale</code>, <code>size</code>.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>isFacingAvatar</code></td>
            

            <td class="type">
            
                
<span class="param-type">boolean</span>


            
            </td>

            

            
                <td class="default">
                
                </td>
            

            <td class="description last">If <code>true</code>, the overlay is rotated to face the user's camera about an axis
    parallel to the user's avatar's "up" direction.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>url</code></td>
            

            <td class="type">
            
                
<span class="param-type">string</span>


            
            </td>

            

            
                <td class="default">
                
                </td>
            

            <td class="description last">The URL of the PNG or JPG image to display.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>subImage</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#Rect">Rect</a></span>


            
            </td>

            

            
                <td class="default">
                
                </td>
            

            <td class="description last">The portion of the image to display. Defaults to the full image.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>emissive</code></td>
            

            <td class="type">
            
                
<span class="param-type">boolean</span>


            
            </td>

            

            
                <td class="default">
                
                </td>
            

            <td class="description last">If <code>true</code>, the overlay is displayed at full brightness, otherwise it is rendered
    with scene lighting.</td>
        </tr>

    
    </tbody>
</table>




<dl class="details">

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    
</dl>






            
                
<h4 class="name" id=".ImageProperties">ImageProperties</h4>




<div class="description">
    These are the properties of an <code>image</code> <a href="Overlays.html#.OverlayType">OverlayType</a>.
</div>



    <h5>Type:</h5>
    <ul>
        <li>
            
<span class="param-type">object</span>


        </li>
    </ul>





    <h5 class="subsection-title">Properties:</h5>

    

<table class="props">
    <thead>
    <tr>
        
        <th>Name</th>
        

        <th>Type</th>

        

        
        <th>Default</th>
        

        <th class="last">Description</th>
    </tr>
    </thead>

    <tbody>
    

        <tr>
            
                <td class="name"><code>bounds</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#Rect">Rect</a></span>


            
            </td>

            

            
                <td class="default">
                
                </td>
            

            <td class="description last">The position and size of the image display area, in pixels. <em>Write-only.</em></td>
        </tr>

    

        <tr>
            
                <td class="name"><code>x</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                </td>
            

            <td class="description last">Integer left, x-coordinate value of the image display area = <code>bounds.x</code>.
    <em>Write-only.</em></td>
        </tr>

    

        <tr>
            
                <td class="name"><code>y</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                </td>
            

            <td class="description last">Integer top, y-coordinate value of the image display area = <code>bounds.y</code>.
    <em>Write-only.</em></td>
        </tr>

    

        <tr>
            
                <td class="name"><code>width</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                </td>
            

            <td class="description last">Integer width of the image display area = <code>bounds.width</code>. <em>Write-only.</em></td>
        </tr>

    

        <tr>
            
                <td class="name"><code>height</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                </td>
            

            <td class="description last">Integer height of the image display area = <code>bounds.height</code>. <em>Write-only.</em></td>
        </tr>

    

        <tr>
            
                <td class="name"><code>imageURL</code></td>
            

            <td class="type">
            
                
<span class="param-type">string</span>


            
            </td>

            

            
                <td class="default">
                
                </td>
            

            <td class="description last">The URL of the image file to display. The image is scaled to fit to the <code>bounds</code>.
    <em>Write-only.</em></td>
        </tr>

    

        <tr>
            
                <td class="name"><code>subImage</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#Vec2">Vec2</a></span>


            
            </td>

            

            
                <td class="default">
                
                    0,0
                
                </td>
            

            <td class="description last">Integer coordinates of the top left pixel to start using image content from.
    <em>Write-only.</em></td>
        </tr>

    

        <tr>
            
                <td class="name"><code>color</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#Color">Color</a></span>


            
            </td>

            

            
                <td class="default">
                
                    0,0,0
                
                </td>
            

            <td class="description last">The color to apply over the top of the image to colorize it. <em>Write-only.</em></td>
        </tr>

    

        <tr>
            
                <td class="name"><code>alpha</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    0.0
                
                </td>
            

            <td class="description last">The opacity of the color applied over the top of the image, <code>0.0</code> - 
    <code>1.0</code>. <em>Write-only.</em></td>
        </tr>

    

        <tr>
            
                <td class="name"><code>visible</code></td>
            

            <td class="type">
            
                
<span class="param-type">boolean</span>


            
            </td>

            

            
                <td class="default">
                
                    true
                
                </td>
            

            <td class="description last">If <code>true</code>, the overlay is rendered, otherwise it is not rendered.
    <em>Write-only.</em></td>
        </tr>

    
    </tbody>
</table>




<dl class="details">

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    
</dl>






            
                
<h4 class="name" id=".Line3DProperties">Line3DProperties</h4>




<div class="description">
    These are the properties of a <code>line3d</code> <a href="Overlays.html#.OverlayType">OverlayType</a>.
</div>



    <h5>Type:</h5>
    <ul>
        <li>
            
<span class="param-type">object</span>


        </li>
    </ul>





    <h5 class="subsection-title">Properties:</h5>

    

<table class="props">
    <thead>
    <tr>
        
        <th>Name</th>
        

        <th>Type</th>

        

        
        <th>Default</th>
        

        <th class="last">Description</th>
    </tr>
    </thead>

    <tbody>
    

        <tr>
            
                <td class="name"><code>type</code></td>
            

            <td class="type">
            
                
<span class="param-type">string</span>


            
            </td>

            

            
                <td class="default">
                
                    line3d
                
                </td>
            

            <td class="description last">Has the value <code>"line3d"</code>. <em>Read-only.</em></td>
        </tr>

    

        <tr>
            
                <td class="name"><code>color</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#Color">Color</a></span>


            
            </td>

            

            
                <td class="default">
                
                    255,255,255
                
                </td>
            

            <td class="description last">The color of the overlay.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>alpha</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    0.7
                
                </td>
            

            <td class="description last">The opacity of the overlay, <code>0.0</code> - <code>1.0</code>.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>pulseMax</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    0
                
                </td>
            

            <td class="description last">The maximum value of the pulse multiplier.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>pulseMin</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    0
                
                </td>
            

            <td class="description last">The minimum value of the pulse multiplier.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>pulsePeriod</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    1
                
                </td>
            

            <td class="description last">The duration of the color and alpha pulse, in seconds. A pulse multiplier value goes from
    <code>pulseMin</code> to <code>pulseMax</code>, then <code>pulseMax</code> to <code>pulseMin</code> in one period.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>alphaPulse</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    0
                
                </td>
            

            <td class="description last">If non-zero, the alpha of the overlay is pulsed: the alpha value is multiplied by the
    current pulse multiplier value each frame. If &gt; 0 the pulse multiplier is applied in phase with the pulse period; if &lt; 0
    the pulse multiplier is applied out of phase with the pulse period. (The magnitude of the property isn't otherwise
    used.)</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>colorPulse</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    0
                
                </td>
            

            <td class="description last">If non-zero, the color of the overlay is pulsed: the color value is multiplied by the
    current pulse multiplier value each frame. If &gt; 0 the pulse multiplier is applied in phase with the pulse period; if &lt; 0
    the pulse multiplier is applied out of phase with the pulse period. (The magnitude of the property isn't otherwise
    used.)</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>visible</code></td>
            

            <td class="type">
            
                
<span class="param-type">boolean</span>


            
            </td>

            

            
                <td class="default">
                
                    true
                
                </td>
            

            <td class="description last">If <code>true</code>, the overlay is rendered, otherwise it is not rendered.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>name</code></td>
            

            <td class="type">
            
                
<span class="param-type">string</span>


            
            </td>

            

            
                <td class="default">
                
                    ""
                
                </td>
            

            <td class="description last">A friendly name for the overlay.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>position</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#Vec3">Vec3</a></span>


            
            </td>

            

            
                <td class="default">
                
                </td>
            

            <td class="description last">The position of the overlay center. Synonyms: <code>p1</code>, <code>point</code>, and
    <code>start</code>.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>localPosition</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#Vec3">Vec3</a></span>


            
            </td>

            

            
                <td class="default">
                
                </td>
            

            <td class="description last">The local position of the overlay relative to its parent if the overlay has a
    <code>parentID</code> set, otherwise the same value as <code>position</code>.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>rotation</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#Quat">Quat</a></span>


            
            </td>

            

            
                <td class="default">
                
                </td>
            

            <td class="description last">The orientation of the overlay. Synonym: <code>orientation</code>.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>localRotation</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#Quat">Quat</a></span>


            
            </td>

            

            
                <td class="default">
                
                </td>
            

            <td class="description last">The orientation of the overlay relative to its parent if the overlay has a
    <code>parentID</code> set, otherwise the same value as <code>rotation</code>.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>isSolid</code></td>
            

            <td class="type">
            
                
<span class="param-type">boolean</span>


            
            </td>

            

            
                <td class="default">
                
                    false
                
                </td>
            

            <td class="description last">Synonyms: <ode>solid, <code>isFilled</code>, and <code>filled</code>.
    Antonyms: <code>isWire</code> and <code>wire</code>.</ode></td>
        </tr>

    

        <tr>
            
                <td class="name"><code>isDashedLine</code></td>
            

            <td class="type">
            
                
<span class="param-type">boolean</span>


            
            </td>

            

            
                <td class="default">
                
                    false
                
                </td>
            

            <td class="description last">If <code>true</code>, a dashed line is drawn on the overlay's edges. Synonym:
    <code>dashed</code>.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>ignoreRayIntersection</code></td>
            

            <td class="type">
            
                
<span class="param-type">boolean</span>


            
            </td>

            

            
                <td class="default">
                
                    false
                
                </td>
            

            <td class="description last">If <code>true</code>,
    <a href="Overlays.html#.findRayIntersection">findRayIntersection</a> ignores the overlay.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>drawInFront</code></td>
            

            <td class="type">
            
                
<span class="param-type">boolean</span>


            
            </td>

            

            
                <td class="default">
                
                    false
                
                </td>
            

            <td class="description last">If <code>true</code>, the overlay is rendered in front of other overlays that don't
    have <code>drawInFront</code> set to <code>true</code>, and in front of entities.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>grabbable</code></td>
            

            <td class="type">
            
                
<span class="param-type">boolean</span>


            
            </td>

            

            
                <td class="default">
                
                    false
                
                </td>
            

            <td class="description last">Signal to grabbing scripts whether or not this overlay can be grabbed.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>parentID</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="Uuid.html">Uuid</a></span>


            
            </td>

            

            
                <td class="default">
                
                    null
                
                </td>
            

            <td class="description last">The avatar, entity, or overlay that the overlay is parented to.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>parentJointIndex</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    65535
                
                </td>
            

            <td class="description last">Integer value specifying the skeleton joint that the overlay is attached to if
    <code>parentID</code> is an avatar skeleton. A value of <code>65535</code> means "no joint".</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>endParentID</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="Uuid.html">Uuid</a></span>


            
            </td>

            

            
                <td class="default">
                
                    null
                
                </td>
            

            <td class="description last">The avatar, entity, or overlay that the end point of the line is parented to.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>endParentJointIndex</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    65535
                
                </td>
            

            <td class="description last">Integer value specifying the skeleton joint that the end point of the line is
    attached to if <code>parentID</code> is an avatar skeleton. A value of <code>65535</code> means "no joint".</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>start</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#Vec3">Vec3</a></span>


            
            </td>

            

            
                <td class="default">
                
                </td>
            

            <td class="description last">The start point of the line. Synonyms: <code>startPoint</code>, <code>p1</code>, and
    <code>position</code>.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>end</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#Vec3">Vec3</a></span>


            
            </td>

            

            
                <td class="default">
                
                </td>
            

            <td class="description last">The end point of the line. Synonyms: <code>endPoint</code> and <code>p2</code>.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>localStart</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#Vec3">Vec3</a></span>


            
            </td>

            

            
                <td class="default">
                
                </td>
            

            <td class="description last">The local position of the overlay relative to its parent if the overlay has a
    <code>parentID</code> set, otherwise the same value as <code>start</code>. Synonym: <code>localPosition</code>.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>localEnd</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#Vec3">Vec3</a></span>


            
            </td>

            

            
                <td class="default">
                
                </td>
            

            <td class="description last">The local position of the overlay relative to its parent if the overlay has a
    <code>endParentID</code> set, otherwise the same value as <code>end</code>.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>length</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                </td>
            

            <td class="description last">The length of the line, in meters. This can be set after creating a line with start and end
    points.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>glow</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    0
                
                </td>
            

            <td class="description last">If <code>glow &gt; 0</code>, the line is rendered with a glow.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>lineWidth</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    0.02
                
                </td>
            

            <td class="description last">If <code>glow &gt; 0</code>, this is the width of the glow, in meters.</td>
        </tr>

    
    </tbody>
</table>




<dl class="details">

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    
</dl>






            
                
<h4 class="name" id=".ModelProperties">ModelProperties</h4>




<div class="description">
    These are the properties of a <code>model</code> <a href="Overlays.html#.OverlayType">OverlayType</a>.
</div>



    <h5>Type:</h5>
    <ul>
        <li>
            
<span class="param-type">object</span>


        </li>
    </ul>





    <h5 class="subsection-title">Properties:</h5>

    

<table class="props">
    <thead>
    <tr>
        
        <th>Name</th>
        

        <th>Type</th>

        

        
        <th>Default</th>
        

        <th class="last">Description</th>
    </tr>
    </thead>

    <tbody>
    

        <tr>
            
                <td class="name"><code>type</code></td>
            

            <td class="type">
            
                
<span class="param-type">string</span>


            
            </td>

            

            
                <td class="default">
                
                    sphere
                
                </td>
            

            <td class="description last">Has the value <code>"model"</code>. <em>Read-only.</em></td>
        </tr>

    

        <tr>
            
                <td class="name"><code>color</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#Color">Color</a></span>


            
            </td>

            

            
                <td class="default">
                
                    255,255,255
                
                </td>
            

            <td class="description last">The color of the overlay.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>alpha</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    0.7
                
                </td>
            

            <td class="description last">The opacity of the overlay, <code>0.0</code> - <code>1.0</code>.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>pulseMax</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    0
                
                </td>
            

            <td class="description last">The maximum value of the pulse multiplier.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>pulseMin</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    0
                
                </td>
            

            <td class="description last">The minimum value of the pulse multiplier.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>pulsePeriod</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    1
                
                </td>
            

            <td class="description last">The duration of the color and alpha pulse, in seconds. A pulse multiplier value goes from
    <code>pulseMin</code> to <code>pulseMax</code>, then <code>pulseMax</code> to <code>pulseMin</code> in one period.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>alphaPulse</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    0
                
                </td>
            

            <td class="description last">If non-zero, the alpha of the overlay is pulsed: the alpha value is multiplied by the
    current pulse multiplier value each frame. If &gt; 0 the pulse multiplier is applied in phase with the pulse period; if &lt; 0
    the pulse multiplier is applied out of phase with the pulse period. (The magnitude of the property isn't otherwise
    used.)</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>colorPulse</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    0
                
                </td>
            

            <td class="description last">If non-zero, the color of the overlay is pulsed: the color value is multiplied by the
    current pulse multiplier value each frame. If &gt; 0 the pulse multiplier is applied in phase with the pulse period; if &lt; 0
    the pulse multiplier is applied out of phase with the pulse period. (The magnitude of the property isn't otherwise
    used.)</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>visible</code></td>
            

            <td class="type">
            
                
<span class="param-type">boolean</span>


            
            </td>

            

            
                <td class="default">
                
                    true
                
                </td>
            

            <td class="description last">If <code>true</code>, the overlay is rendered, otherwise it is not rendered.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>name</code></td>
            

            <td class="type">
            
                
<span class="param-type">string</span>


            
            </td>

            

            
                <td class="default">
                
                    ""
                
                </td>
            

            <td class="description last">A friendly name for the overlay.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>position</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#Vec3">Vec3</a></span>


            
            </td>

            

            
                <td class="default">
                
                </td>
            

            <td class="description last">The position of the overlay center. Synonyms: <code>p1</code>, <code>point</code>, and
    <code>start</code>.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>localPosition</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#Vec3">Vec3</a></span>


            
            </td>

            

            
                <td class="default">
                
                </td>
            

            <td class="description last">The local position of the overlay relative to its parent if the overlay has a
    <code>parentID</code> set, otherwise the same value as <code>position</code>.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>rotation</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#Quat">Quat</a></span>


            
            </td>

            

            
                <td class="default">
                
                </td>
            

            <td class="description last">The orientation of the overlay. Synonym: <code>orientation</code>.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>localRotation</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#Quat">Quat</a></span>


            
            </td>

            

            
                <td class="default">
                
                </td>
            

            <td class="description last">The orientation of the overlay relative to its parent if the overlay has a
    <code>parentID</code> set, otherwise the same value as <code>rotation</code>.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>isSolid</code></td>
            

            <td class="type">
            
                
<span class="param-type">boolean</span>


            
            </td>

            

            
                <td class="default">
                
                    false
                
                </td>
            

            <td class="description last">Synonyms: <ode>solid, <code>isFilled</code>, and <code>filled</code>.
    Antonyms: <code>isWire</code> and <code>wire</code>.</ode></td>
        </tr>

    

        <tr>
            
                <td class="name"><code>isDashedLine</code></td>
            

            <td class="type">
            
                
<span class="param-type">boolean</span>


            
            </td>

            

            
                <td class="default">
                
                    false
                
                </td>
            

            <td class="description last">If <code>true</code>, a dashed line is drawn on the overlay's edges. Synonym:
    <code>dashed</code>.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>ignoreRayIntersection</code></td>
            

            <td class="type">
            
                
<span class="param-type">boolean</span>


            
            </td>

            

            
                <td class="default">
                
                    false
                
                </td>
            

            <td class="description last">If <code>true</code>,
    <a href="Overlays.html#.findRayIntersection">findRayIntersection</a> ignores the overlay.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>drawInFront</code></td>
            

            <td class="type">
            
                
<span class="param-type">boolean</span>


            
            </td>

            

            
                <td class="default">
                
                    false
                
                </td>
            

            <td class="description last">If <code>true</code>, the overlay is rendered in front of other overlays that don't
    have <code>drawInFront</code> set to <code>true</code>, and in front of entities.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>grabbable</code></td>
            

            <td class="type">
            
                
<span class="param-type">boolean</span>


            
            </td>

            

            
                <td class="default">
                
                    false
                
                </td>
            

            <td class="description last">Signal to grabbing scripts whether or not this overlay can be grabbed.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>parentID</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="Uuid.html">Uuid</a></span>


            
            </td>

            

            
                <td class="default">
                
                    null
                
                </td>
            

            <td class="description last">The avatar, entity, or overlay that the overlay is parented to.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>parentJointIndex</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    65535
                
                </td>
            

            <td class="description last">Integer value specifying the skeleton joint that the overlay is attached to if
    <code>parentID</code> is an avatar skeleton. A value of <code>65535</code> means "no joint".</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>url</code></td>
            

            <td class="type">
            
                
<span class="param-type">string</span>


            
            </td>

            

            
                <td class="default">
                
                </td>
            

            <td class="description last">The URL of the FBX or OBJ model used for the overlay.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>dimensions</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#Vec3">Vec3</a></span>


            
            </td>

            

            
                <td class="default">
                
                </td>
            

            <td class="description last">The dimensions of the overlay. Synonym: <code>size</code>.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>scale</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#Vec3">Vec3</a></span>


            
            </td>

            

            
                <td class="default">
                
                </td>
            

            <td class="description last">The scale factor applied to the model's dimensions.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>textures</code></td>
            

            <td class="type">
            
                
<span class="param-type">object.&lt;name, url&gt;</span>


            
            </td>

            

            
                <td class="default">
                
                </td>
            

            <td class="description last">Maps the named textures in the model to the JPG or PNG images in the urls.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>jointNames</code></td>
            

            <td class="type">
            
                
<span class="param-type">Array.&lt;string&gt;</span>


            
            </td>

            

            
                <td class="default">
                
                </td>
            

            <td class="description last">The names of the joints - if any - in the model. <em>Read-only</em></td>
        </tr>

    

        <tr>
            
                <td class="name"><code>jointRotations</code></td>
            

            <td class="type">
            
                
<span class="param-type">Array.&lt;<a href="global.html#Quat">Quat</a>&gt;</span>


            
            </td>

            

            
                <td class="default">
                
                </td>
            

            <td class="description last">The relative rotations of the model's joints.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>jointTranslations</code></td>
            

            <td class="type">
            
                
<span class="param-type">Array.&lt;<a href="global.html#Vec3">Vec3</a>&gt;</span>


            
            </td>

            

            
                <td class="default">
                
                </td>
            

            <td class="description last">The relative translations of the model's joints.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>jointOrientations</code></td>
            

            <td class="type">
            
                
<span class="param-type">Array.&lt;<a href="global.html#Quat">Quat</a>&gt;</span>


            
            </td>

            

            
                <td class="default">
                
                </td>
            

            <td class="description last">The absolute orientations of the model's joints, in world coordinates.
    <em>Read-only</em></td>
        </tr>

    

        <tr>
            
                <td class="name"><code>jointPositions</code></td>
            

            <td class="type">
            
                
<span class="param-type">Array.&lt;<a href="global.html#Vec3">Vec3</a>&gt;</span>


            
            </td>

            

            
                <td class="default">
                
                </td>
            

            <td class="description last">The absolute positions of the model's joints, in world coordinates.
    <em>Read-only</em></td>
        </tr>

    

        <tr>
            
                <td class="name"><code>animationSettings.url</code></td>
            

            <td class="type">
            
                
<span class="param-type">string</span>


            
            </td>

            

            
                <td class="default">
                
                    ""
                
                </td>
            

            <td class="description last">The URL of an FBX file containing an animation to play.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>animationSettings.fps</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    0
                
                </td>
            

            <td class="description last">The frame rate (frames/sec) to play the animation at.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>animationSettings.firstFrame</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    0
                
                </td>
            

            <td class="description last">The frame to start playing at.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>animationSettings.lastFrame</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    0
                
                </td>
            

            <td class="description last">The frame to finish playing at.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>animationSettings.running</code></td>
            

            <td class="type">
            
                
<span class="param-type">boolean</span>


            
            </td>

            

            
                <td class="default">
                
                    false
                
                </td>
            

            <td class="description last">Whether or not the animation is playing.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>animationSettings.loop</code></td>
            

            <td class="type">
            
                
<span class="param-type">boolean</span>


            
            </td>

            

            
                <td class="default">
                
                    false
                
                </td>
            

            <td class="description last">Whether or not the animation should repeat in a loop.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>animationSettings.hold</code></td>
            

            <td class="type">
            
                
<span class="param-type">boolean</span>


            
            </td>

            

            
                <td class="default">
                
                    false
                
                </td>
            

            <td class="description last">Whether or not when the animation finishes, the rotations and 
    translations of the last frame played should be maintained.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>animationSettings.allowTranslation</code></td>
            

            <td class="type">
            
                
<span class="param-type">boolean</span>


            
            </td>

            

            
                <td class="default">
                
                    false
                
                </td>
            

            <td class="description last">Whether or not translations contained in the animation should
    be played.</td>
        </tr>

    
    </tbody>
</table>




<dl class="details">

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    
</dl>






            
                
<h4 class="name" id=".OverlayProperties">OverlayProperties</h4>




<div class="description">
    <p>Different overlay types have different properties:</p>
<table>
  <thead>
    <tr><th><a href="Overlays.html#.OverlayType">OverlayType</a></th><th>Overlay Properties</th></tr>
  </thead>
  <tbody>
    <tr><td><code>circle3d</code></td><td><a href="Overlays.html#.Circle3DProperties">Circle3DProperties</a></td></tr>
    <tr><td><code>cube</code></td><td><a href="Overlays.html#.CubeProperties">CubeProperties</a></td></tr>
    <tr><td><code>grid</code></td><td><a href="Overlays.html#.GridProperties">GridProperties</a></td></tr>
    <tr><td><code>image</code></td><td><a href="Overlays.html#.ImageProperties">ImageProperties</a></td></tr>
    <tr><td><code>image3d</code></td><td><a href="Overlays.html#.Image3DProperties">Image3DProperties</a></td></tr>
    <tr><td><code>line3d</code></td><td><a href="Overlays.html#.Line3DProperties">Line3DProperties</a></td></tr>
    <tr><td><code>model</code></td><td><a href="Overlays.html#.ModelProperties">ModelProperties</a></td></tr>
    <tr><td><code>rectangle</code></td><td><a href="Overlays.html#.RectangleProperties">RectangleProperties</a></td></tr>
    <tr><td><code>rectangle3d</code></td><td><a href="Overlays.html#.Rectangle3DProperties">Rectangle3DProperties</a></td></tr>
    <tr><td><code>shape</code></td><td><a href="Overlays.html#.ShapeProperties">ShapeProperties</a></td></tr>
    <tr><td><code>sphere</code></td><td><a href="Overlays.html#.SphereProperties">SphereProperties</a></td></tr>
    <tr><td><code>text</code></td><td><a href="Overlays.html#.TextProperties">TextProperties</a></td></tr>
    <tr><td><code>text3d</code></td><td><a href="Overlays.html#.Text3DProperties">Text3DProperties</a></td></tr>
    <tr><td><code>web3d</code></td><td><a href="Overlays.html#.Web3DProperties">Web3DProperties</a></td></tr>
  </tbody>
</table>
</div>



    <h5>Type:</h5>
    <ul>
        <li>
            
<span class="param-type">object</span>


        </li>
    </ul>





<dl class="details">

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    
</dl>






            
                
<h4 class="name" id=".OverlayType">OverlayType</h4>




<div class="description">
    <p>An overlay may be one of the following types:</p>
<table>
  <thead>
    <tr><th>Value</th><th>2D/3D</th><th>Description</th></tr>
  </thead>
  <tbody>
    <tr><td><code>circle3d</code></td><td>3D</td><td>A circle.</td></tr>
    <tr><td><code>cube</code></td><td>3D</td><td>A cube. Can also use a <code>shape</code> overlay to create a 
    cube.</td></tr>
    <tr><td><code>grid</code></td><td>3D</td><td>A grid of lines in a plane.</td></tr>
    <tr><td><code>image</code></td><td>2D</td><td>An image. Synonym: <code>billboard</code>.</td></tr>
    <tr><td><code>image3d</code></td><td>3D</td><td>An image.</td></tr>
    <tr><td><code>line3d</code></td><td>3D</td><td>A line.</td></tr>
    <tr><td><code>model</code></td><td>3D</td><td>A model.</td></tr>
    <tr><td><code>rectangle</code></td><td>2D</td><td>A rectangle.</td></tr>
    <tr><td><code>rectangle3d</code></td><td>3D</td><td>A rectangle.</td></tr>
    <tr><td><code>shape</code></td><td>3D</td><td>A geometric shape, such as a cube, sphere, or cylinder.</td></tr>
    <tr><td><code>sphere</code></td><td>3D</td><td>A sphere. Can also use a <code>shape</code> overlay to create a 
    sphere.</td></tr>
    <tr><td><code>text</code></td><td>2D</td><td>Text.</td></tr>
    <tr><td><code>text3d</code></td><td>3D</td><td>Text.</td></tr>
    <tr><td><code>web3d</code></td><td>3D</td><td>Web content.</td></tr>
  </tbody>
</table>
<p>2D overlays are rendered on the display surface in desktop mode and on the HUD surface in HMD mode. 3D overlays are
rendered at a position and orientation in-world.</p><p>
</p><p>Each overlay type has different <a href="Overlays.html#.OverlayProperties">OverlayProperties</a>.</p>
</div>



    <h5>Type:</h5>
    <ul>
        <li>
            
<span class="param-type">string</span>


        </li>
    </ul>





<dl class="details">

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    
</dl>






            
                
<h4 class="name" id=".RayToOverlayIntersectionResult">RayToOverlayIntersectionResult</h4>






    <h5>Type:</h5>
    <ul>
        <li>
            
<span class="param-type">object</span>


        </li>
    </ul>





    <h5 class="subsection-title">Properties:</h5>

    

<table class="props">
    <thead>
    <tr>
        
        <th>Name</th>
        

        <th>Type</th>

        

        

        <th class="last">Description</th>
    </tr>
    </thead>

    <tbody>
    

        <tr>
            
                <td class="name"><code>intersects</code></td>
            

            <td class="type">
            
                
<span class="param-type">boolean</span>


            
            </td>

            

            

            <td class="description last"><code>true</code> if the <a href="global.html#PickRay">PickRay</a> intersected with a 3D overlay, otherwise
    <code>false</code>.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>overlayID</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="Uuid.html">Uuid</a></span>


            
            </td>

            

            

            <td class="description last">The UUID of the overlay that was intersected.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>distance</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            

            <td class="description last">The distance from the <a href="global.html#PickRay">PickRay</a> origin to the intersection point.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>surfaceNormal</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#Vec3">Vec3</a></span>


            
            </td>

            

            

            <td class="description last">The normal of the overlay surface at the intersection point.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>intersection</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#Vec3">Vec3</a></span>


            
            </td>

            

            

            <td class="description last">The position of the intersection point.</td>
        </tr>

    
    </tbody>
</table>




<dl class="details">

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    
</dl>






            
                
<h4 class="name" id=".Rectangle3DProperties">Rectangle3DProperties</h4>




<div class="description">
    These are the properties of a <code>rectangle3d</code> <a href="Overlays.html#.OverlayType">OverlayType</a>.
</div>



    <h5>Type:</h5>
    <ul>
        <li>
            
<span class="param-type">object</span>


        </li>
    </ul>





    <h5 class="subsection-title">Properties:</h5>

    

<table class="props">
    <thead>
    <tr>
        
        <th>Name</th>
        

        <th>Type</th>

        

        
        <th>Default</th>
        

        <th class="last">Description</th>
    </tr>
    </thead>

    <tbody>
    

        <tr>
            
                <td class="name"><code>type</code></td>
            

            <td class="type">
            
                
<span class="param-type">string</span>


            
            </td>

            

            
                <td class="default">
                
                    rectangle3d
                
                </td>
            

            <td class="description last">Has the value <code>"rectangle3d"</code>. <em>Read-only.</em></td>
        </tr>

    

        <tr>
            
                <td class="name"><code>color</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#Color">Color</a></span>


            
            </td>

            

            
                <td class="default">
                
                    255,255,255
                
                </td>
            

            <td class="description last">The color of the overlay.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>alpha</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    0.7
                
                </td>
            

            <td class="description last">The opacity of the overlay, <code>0.0</code> - <code>1.0</code>.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>pulseMax</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    0
                
                </td>
            

            <td class="description last">The maximum value of the pulse multiplier.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>pulseMin</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    0
                
                </td>
            

            <td class="description last">The minimum value of the pulse multiplier.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>pulsePeriod</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    1
                
                </td>
            

            <td class="description last">The duration of the color and alpha pulse, in seconds. A pulse multiplier value goes from
    <code>pulseMin</code> to <code>pulseMax</code>, then <code>pulseMax</code> to <code>pulseMin</code> in one period.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>alphaPulse</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    0
                
                </td>
            

            <td class="description last">If non-zero, the alpha of the overlay is pulsed: the alpha value is multiplied by the
    current pulse multiplier value each frame. If &gt; 0 the pulse multiplier is applied in phase with the pulse period; if &lt; 0
    the pulse multiplier is applied out of phase with the pulse period. (The magnitude of the property isn't otherwise
    used.)</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>colorPulse</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    0
                
                </td>
            

            <td class="description last">If non-zero, the color of the overlay is pulsed: the color value is multiplied by the
    current pulse multiplier value each frame. If &gt; 0 the pulse multiplier is applied in phase with the pulse period; if &lt; 0
    the pulse multiplier is applied out of phase with the pulse period. (The magnitude of the property isn't otherwise
    used.)</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>visible</code></td>
            

            <td class="type">
            
                
<span class="param-type">boolean</span>


            
            </td>

            

            
                <td class="default">
                
                    true
                
                </td>
            

            <td class="description last">If <code>true</code>, the overlay is rendered, otherwise it is not rendered.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>name</code></td>
            

            <td class="type">
            
                
<span class="param-type">string</span>


            
            </td>

            

            
                <td class="default">
                
                    ""
                
                </td>
            

            <td class="description last">A friendly name for the overlay.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>position</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#Vec3">Vec3</a></span>


            
            </td>

            

            
                <td class="default">
                
                </td>
            

            <td class="description last">The position of the overlay center. Synonyms: <code>p1</code>, <code>point</code>, and
    <code>start</code>.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>localPosition</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#Vec3">Vec3</a></span>


            
            </td>

            

            
                <td class="default">
                
                </td>
            

            <td class="description last">The local position of the overlay relative to its parent if the overlay has a
    <code>parentID</code> set, otherwise the same value as <code>position</code>.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>rotation</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#Quat">Quat</a></span>


            
            </td>

            

            
                <td class="default">
                
                </td>
            

            <td class="description last">The orientation of the overlay. Synonym: <code>orientation</code>.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>localRotation</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#Quat">Quat</a></span>


            
            </td>

            

            
                <td class="default">
                
                </td>
            

            <td class="description last">The orientation of the overlay relative to its parent if the overlay has a
    <code>parentID</code> set, otherwise the same value as <code>rotation</code>.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>isSolid</code></td>
            

            <td class="type">
            
                
<span class="param-type">boolean</span>


            
            </td>

            

            
                <td class="default">
                
                    false
                
                </td>
            

            <td class="description last">Synonyms: <ode>solid, <code>isFilled</code>, and <code>filled</code>.
    Antonyms: <code>isWire</code> and <code>wire</code>.</ode></td>
        </tr>

    

        <tr>
            
                <td class="name"><code>isDashedLine</code></td>
            

            <td class="type">
            
                
<span class="param-type">boolean</span>


            
            </td>

            

            
                <td class="default">
                
                    false
                
                </td>
            

            <td class="description last">If <code>true</code>, a dashed line is drawn on the overlay's edges. Synonym:
    <code>dashed</code>.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>ignoreRayIntersection</code></td>
            

            <td class="type">
            
                
<span class="param-type">boolean</span>


            
            </td>

            

            
                <td class="default">
                
                    false
                
                </td>
            

            <td class="description last">If <code>true</code>,
    <a href="Overlays.html#.findRayIntersection">findRayIntersection</a> ignores the overlay.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>drawInFront</code></td>
            

            <td class="type">
            
                
<span class="param-type">boolean</span>


            
            </td>

            

            
                <td class="default">
                
                    false
                
                </td>
            

            <td class="description last">If <code>true</code>, the overlay is rendered in front of other overlays that don't
    have <code>drawInFront</code> set to <code>true</code>, and in front of entities.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>grabbable</code></td>
            

            <td class="type">
            
                
<span class="param-type">boolean</span>


            
            </td>

            

            
                <td class="default">
                
                    false
                
                </td>
            

            <td class="description last">Signal to grabbing scripts whether or not this overlay can be grabbed.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>parentID</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="Uuid.html">Uuid</a></span>


            
            </td>

            

            
                <td class="default">
                
                    null
                
                </td>
            

            <td class="description last">The avatar, entity, or overlay that the overlay is parented to.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>parentJointIndex</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    65535
                
                </td>
            

            <td class="description last">Integer value specifying the skeleton joint that the overlay is attached to if
    <code>parentID</code> is an avatar skeleton. A value of <code>65535</code> means "no joint".</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>dimensions</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#Vec2">Vec2</a></span>


            
            </td>

            

            
                <td class="default">
                
                    1,1
                
                </td>
            

            <td class="description last">The dimensions of the overlay. Synonyms: <code>scale</code>, <code>size</code>.</td>
        </tr>

    
    </tbody>
</table>




<dl class="details">

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    
</dl>






            
                
<h4 class="name" id=".RectangleProperties">RectangleProperties</h4>




<div class="description">
    These are the properties of a <code>rectangle</code> <a href="Overlays.html#.OverlayType">OverlayType</a>.
</div>



    <h5>Type:</h5>
    <ul>
        <li>
            
<span class="param-type">object</span>


        </li>
    </ul>





    <h5 class="subsection-title">Properties:</h5>

    

<table class="props">
    <thead>
    <tr>
        
        <th>Name</th>
        

        <th>Type</th>

        

        
        <th>Default</th>
        

        <th class="last">Description</th>
    </tr>
    </thead>

    <tbody>
    

        <tr>
            
                <td class="name"><code>bounds</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#Rect">Rect</a></span>


            
            </td>

            

            
                <td class="default">
                
                </td>
            

            <td class="description last">The position and size of the rectangle, in pixels. <em>Write-only.</em></td>
        </tr>

    

        <tr>
            
                <td class="name"><code>x</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                </td>
            

            <td class="description last">Integer left, x-coordinate value = <code>bounds.x</code>. <em>Write-only.</em></td>
        </tr>

    

        <tr>
            
                <td class="name"><code>y</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                </td>
            

            <td class="description last">Integer top, y-coordinate value = <code>bounds.y</code>. <em>Write-only.</em></td>
        </tr>

    

        <tr>
            
                <td class="name"><code>width</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                </td>
            

            <td class="description last">Integer width of the rectangle = <code>bounds.width</code>. <em>Write-only.</em></td>
        </tr>

    

        <tr>
            
                <td class="name"><code>height</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                </td>
            

            <td class="description last">Integer height of the rectangle = <code>bounds.height</code>. <em>Write-only.</em></td>
        </tr>

    

        <tr>
            
                <td class="name"><code>color</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#Color">Color</a></span>


            
            </td>

            

            
                <td class="default">
                
                    0,0,0
                
                </td>
            

            <td class="description last">The color of the overlay. <em>Write-only.</em></td>
        </tr>

    

        <tr>
            
                <td class="name"><code>alpha</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    1.0
                
                </td>
            

            <td class="description last">The opacity of the overlay, <code>0.0</code> - <code>1.0</code>. <em>Write-only.</em></td>
        </tr>

    

        <tr>
            
                <td class="name"><code>borderWidth</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    1
                
                </td>
            

            <td class="description last">Integer width of the border, in pixels. The border is drawn within the rectangle's bounds.
    It is not drawn unless either <code>borderColor</code> or <code>borderAlpha</code> are specified. <em>Write-only.</em></td>
        </tr>

    

        <tr>
            
                <td class="name"><code>radius</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    0
                
                </td>
            

            <td class="description last">Integer corner radius, in pixels. <em>Write-only.</em></td>
        </tr>

    

        <tr>
            
                <td class="name"><code>borderColor</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#Color">Color</a></span>


            
            </td>

            

            
                <td class="default">
                
                    0,0,0
                
                </td>
            

            <td class="description last">The color of the border. <em>Write-only.</em></td>
        </tr>

    

        <tr>
            
                <td class="name"><code>borderAlpha</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    1.0
                
                </td>
            

            <td class="description last">The opacity of the border, <code>0.0</code> - <code>1.0</code>.
    <em>Write-only.</em></td>
        </tr>

    

        <tr>
            
                <td class="name"><code>visible</code></td>
            

            <td class="type">
            
                
<span class="param-type">boolean</span>


            
            </td>

            

            
                <td class="default">
                
                    true
                
                </td>
            

            <td class="description last">If <code>true</code>, the overlay is rendered, otherwise it is not rendered.
    <em>Write-only.</em></td>
        </tr>

    
    </tbody>
</table>




<dl class="details">

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    
</dl>






            
                
<h4 class="name" id=".ShapeProperties">ShapeProperties</h4>




<div class="description">
    These are the properties of a <code>shape</code> <a href="Overlays.html#.OverlayType">OverlayType</a>.
</div>



    <h5>Type:</h5>
    <ul>
        <li>
            
<span class="param-type">object</span>


        </li>
    </ul>





    <h5 class="subsection-title">Properties:</h5>

    

<table class="props">
    <thead>
    <tr>
        
        <th>Name</th>
        

        <th>Type</th>

        

        
        <th>Default</th>
        

        <th class="last">Description</th>
    </tr>
    </thead>

    <tbody>
    

        <tr>
            
                <td class="name"><code>type</code></td>
            

            <td class="type">
            
                
<span class="param-type">string</span>


            
            </td>

            

            
                <td class="default">
                
                    shape
                
                </td>
            

            <td class="description last">Has the value <code>"shape"</code>. <em>Read-only.</em></td>
        </tr>

    

        <tr>
            
                <td class="name"><code>color</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#Color">Color</a></span>


            
            </td>

            

            
                <td class="default">
                
                    255,255,255
                
                </td>
            

            <td class="description last">The color of the overlay.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>alpha</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    0.7
                
                </td>
            

            <td class="description last">The opacity of the overlay, <code>0.0</code> - <code>1.0</code>.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>pulseMax</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    0
                
                </td>
            

            <td class="description last">The maximum value of the pulse multiplier.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>pulseMin</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    0
                
                </td>
            

            <td class="description last">The minimum value of the pulse multiplier.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>pulsePeriod</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    1
                
                </td>
            

            <td class="description last">The duration of the color and alpha pulse, in seconds. A pulse multiplier value goes from
    <code>pulseMin</code> to <code>pulseMax</code>, then <code>pulseMax</code> to <code>pulseMin</code> in one period.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>alphaPulse</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    0
                
                </td>
            

            <td class="description last">If non-zero, the alpha of the overlay is pulsed: the alpha value is multiplied by the
    current pulse multiplier value each frame. If &gt; 0 the pulse multiplier is applied in phase with the pulse period; if &lt; 0
    the pulse multiplier is applied out of phase with the pulse period. (The magnitude of the property isn't otherwise
    used.)</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>colorPulse</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    0
                
                </td>
            

            <td class="description last">If non-zero, the color of the overlay is pulsed: the color value is multiplied by the
    current pulse multiplier value each frame. If &gt; 0 the pulse multiplier is applied in phase with the pulse period; if &lt; 0
    the pulse multiplier is applied out of phase with the pulse period. (The magnitude of the property isn't otherwise
    used.)</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>visible</code></td>
            

            <td class="type">
            
                
<span class="param-type">boolean</span>


            
            </td>

            

            
                <td class="default">
                
                    true
                
                </td>
            

            <td class="description last">If <code>true</code>, the overlay is rendered, otherwise it is not rendered.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>name</code></td>
            

            <td class="type">
            
                
<span class="param-type">string</span>


            
            </td>

            

            
                <td class="default">
                
                    ""
                
                </td>
            

            <td class="description last">A friendly name for the overlay.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>position</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#Vec3">Vec3</a></span>


            
            </td>

            

            
                <td class="default">
                
                </td>
            

            <td class="description last">The position of the overlay center. Synonyms: <code>p1</code>, <code>point</code>, and
    <code>start</code>.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>localPosition</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#Vec3">Vec3</a></span>


            
            </td>

            

            
                <td class="default">
                
                </td>
            

            <td class="description last">The local position of the overlay relative to its parent if the overlay has a
    <code>parentID</code> set, otherwise the same value as <code>position</code>.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>rotation</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#Quat">Quat</a></span>


            
            </td>

            

            
                <td class="default">
                
                </td>
            

            <td class="description last">The orientation of the overlay. Synonym: <code>orientation</code>.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>localRotation</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#Quat">Quat</a></span>


            
            </td>

            

            
                <td class="default">
                
                </td>
            

            <td class="description last">The orientation of the overlay relative to its parent if the overlay has a
    <code>parentID</code> set, otherwise the same value as <code>rotation</code>.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>isSolid</code></td>
            

            <td class="type">
            
                
<span class="param-type">boolean</span>


            
            </td>

            

            
                <td class="default">
                
                    false
                
                </td>
            

            <td class="description last">Synonyms: <ode>solid, <code>isFilled</code>, and <code>filled</code>.
    Antonyms: <code>isWire</code> and <code>wire</code>.</ode></td>
        </tr>

    

        <tr>
            
                <td class="name"><code>isDashedLine</code></td>
            

            <td class="type">
            
                
<span class="param-type">boolean</span>


            
            </td>

            

            
                <td class="default">
                
                    false
                
                </td>
            

            <td class="description last">If <code>true</code>, a dashed line is drawn on the overlay's edges. Synonym:
    <code>dashed</code>.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>ignoreRayIntersection</code></td>
            

            <td class="type">
            
                
<span class="param-type">boolean</span>


            
            </td>

            

            
                <td class="default">
                
                    false
                
                </td>
            

            <td class="description last">If <code>true</code>,
    <a href="Overlays.html#.findRayIntersection">findRayIntersection</a> ignores the overlay.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>drawInFront</code></td>
            

            <td class="type">
            
                
<span class="param-type">boolean</span>


            
            </td>

            

            
                <td class="default">
                
                    false
                
                </td>
            

            <td class="description last">If <code>true</code>, the overlay is rendered in front of other overlays that don't
    have <code>drawInFront</code> set to <code>true</code>, and in front of entities.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>grabbable</code></td>
            

            <td class="type">
            
                
<span class="param-type">boolean</span>


            
            </td>

            

            
                <td class="default">
                
                    false
                
                </td>
            

            <td class="description last">Signal to grabbing scripts whether or not this overlay can be grabbed.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>parentID</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="Uuid.html">Uuid</a></span>


            
            </td>

            

            
                <td class="default">
                
                    null
                
                </td>
            

            <td class="description last">The avatar, entity, or overlay that the overlay is parented to.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>parentJointIndex</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    65535
                
                </td>
            

            <td class="description last">Integer value specifying the skeleton joint that the overlay is attached to if
    <code>parentID</code> is an avatar skeleton. A value of <code>65535</code> means "no joint".</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>dimensions</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#Vec3">Vec3</a></span>


            
            </td>

            

            
                <td class="default">
                
                </td>
            

            <td class="description last">The dimensions of the overlay. Synonyms: <code>scale</code>, <code>size</code>.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>shape</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#Shape">Shape</a></span>


            
            </td>

            

            
                <td class="default">
                
                    Hexagon
                
                </td>
            

            <td class="description last">The geometrical shape of the overlay.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>borderSize</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                </td>
            

            <td class="description last">Not used.</td>
        </tr>

    
    </tbody>
</table>




<dl class="details">

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    
</dl>






            
                
<h4 class="name" id=".SphereProperties">SphereProperties</h4>




<div class="description">
    These are the properties of a <code>sphere</code> <a href="Overlays.html#.OverlayType">OverlayType</a>.
</div>



    <h5>Type:</h5>
    <ul>
        <li>
            
<span class="param-type">object</span>


        </li>
    </ul>





    <h5 class="subsection-title">Properties:</h5>

    

<table class="props">
    <thead>
    <tr>
        
        <th>Name</th>
        

        <th>Type</th>

        

        
        <th>Default</th>
        

        <th class="last">Description</th>
    </tr>
    </thead>

    <tbody>
    

        <tr>
            
                <td class="name"><code>type</code></td>
            

            <td class="type">
            
                
<span class="param-type">string</span>


            
            </td>

            

            
                <td class="default">
                
                    sphere
                
                </td>
            

            <td class="description last">Has the value <code>"sphere"</code>. <em>Read-only.</em></td>
        </tr>

    

        <tr>
            
                <td class="name"><code>color</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#Color">Color</a></span>


            
            </td>

            

            
                <td class="default">
                
                    255,255,255
                
                </td>
            

            <td class="description last">The color of the overlay.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>alpha</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    0.7
                
                </td>
            

            <td class="description last">The opacity of the overlay, <code>0.0</code> - <code>1.0</code>.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>pulseMax</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    0
                
                </td>
            

            <td class="description last">The maximum value of the pulse multiplier.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>pulseMin</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    0
                
                </td>
            

            <td class="description last">The minimum value of the pulse multiplier.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>pulsePeriod</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    1
                
                </td>
            

            <td class="description last">The duration of the color and alpha pulse, in seconds. A pulse multiplier value goes from
    <code>pulseMin</code> to <code>pulseMax</code>, then <code>pulseMax</code> to <code>pulseMin</code> in one period.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>alphaPulse</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    0
                
                </td>
            

            <td class="description last">If non-zero, the alpha of the overlay is pulsed: the alpha value is multiplied by the
    current pulse multiplier value each frame. If &gt; 0 the pulse multiplier is applied in phase with the pulse period; if &lt; 0
    the pulse multiplier is applied out of phase with the pulse period. (The magnitude of the property isn't otherwise
    used.)</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>colorPulse</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    0
                
                </td>
            

            <td class="description last">If non-zero, the color of the overlay is pulsed: the color value is multiplied by the
    current pulse multiplier value each frame. If &gt; 0 the pulse multiplier is applied in phase with the pulse period; if &lt; 0
    the pulse multiplier is applied out of phase with the pulse period. (The magnitude of the property isn't otherwise
    used.)</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>visible</code></td>
            

            <td class="type">
            
                
<span class="param-type">boolean</span>


            
            </td>

            

            
                <td class="default">
                
                    true
                
                </td>
            

            <td class="description last">If <code>true</code>, the overlay is rendered, otherwise it is not rendered.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>name</code></td>
            

            <td class="type">
            
                
<span class="param-type">string</span>


            
            </td>

            

            
                <td class="default">
                
                    ""
                
                </td>
            

            <td class="description last">A friendly name for the overlay.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>position</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#Vec3">Vec3</a></span>


            
            </td>

            

            
                <td class="default">
                
                </td>
            

            <td class="description last">The position of the overlay center. Synonyms: <code>p1</code>, <code>point</code>, and
    <code>start</code>.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>localPosition</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#Vec3">Vec3</a></span>


            
            </td>

            

            
                <td class="default">
                
                </td>
            

            <td class="description last">The local position of the overlay relative to its parent if the overlay has a
    <code>parentID</code> set, otherwise the same value as <code>position</code>.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>rotation</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#Quat">Quat</a></span>


            
            </td>

            

            
                <td class="default">
                
                </td>
            

            <td class="description last">The orientation of the overlay. Synonym: <code>orientation</code>.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>localRotation</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#Quat">Quat</a></span>


            
            </td>

            

            
                <td class="default">
                
                </td>
            

            <td class="description last">The orientation of the overlay relative to its parent if the overlay has a
    <code>parentID</code> set, otherwise the same value as <code>rotation</code>.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>isSolid</code></td>
            

            <td class="type">
            
                
<span class="param-type">boolean</span>


            
            </td>

            

            
                <td class="default">
                
                    false
                
                </td>
            

            <td class="description last">Synonyms: <ode>solid, <code>isFilled</code>, and <code>filled</code>.
    Antonyms: <code>isWire</code> and <code>wire</code>.</ode></td>
        </tr>

    

        <tr>
            
                <td class="name"><code>isDashedLine</code></td>
            

            <td class="type">
            
                
<span class="param-type">boolean</span>


            
            </td>

            

            
                <td class="default">
                
                    false
                
                </td>
            

            <td class="description last">If <code>true</code>, a dashed line is drawn on the overlay's edges. Synonym:
    <code>dashed</code>.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>ignoreRayIntersection</code></td>
            

            <td class="type">
            
                
<span class="param-type">boolean</span>


            
            </td>

            

            
                <td class="default">
                
                    false
                
                </td>
            

            <td class="description last">If <code>true</code>,
    <a href="Overlays.html#.findRayIntersection">findRayIntersection</a> ignores the overlay.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>drawInFront</code></td>
            

            <td class="type">
            
                
<span class="param-type">boolean</span>


            
            </td>

            

            
                <td class="default">
                
                    false
                
                </td>
            

            <td class="description last">If <code>true</code>, the overlay is rendered in front of other overlays that don't
    have <code>drawInFront</code> set to <code>true</code>, and in front of entities.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>grabbable</code></td>
            

            <td class="type">
            
                
<span class="param-type">boolean</span>


            
            </td>

            

            
                <td class="default">
                
                    false
                
                </td>
            

            <td class="description last">Signal to grabbing scripts whether or not this overlay can be grabbed.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>parentID</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="Uuid.html">Uuid</a></span>


            
            </td>

            

            
                <td class="default">
                
                    null
                
                </td>
            

            <td class="description last">The avatar, entity, or overlay that the overlay is parented to.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>parentJointIndex</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    65535
                
                </td>
            

            <td class="description last">Integer value specifying the skeleton joint that the overlay is attached to if
    <code>parentID</code> is an avatar skeleton. A value of <code>65535</code> means "no joint".</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>dimensions</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#Vec3">Vec3</a></span>


            
            </td>

            

            
                <td class="default">
                
                </td>
            

            <td class="description last">The dimensions of the overlay. Synonyms: <code>scale</code>, <code>size</code>.</td>
        </tr>

    
    </tbody>
</table>




<dl class="details">

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    
</dl>






            
                
<h4 class="name" id=".Text3DProperties">Text3DProperties</h4>




<div class="description">
    These are the properties of a <code>text3d</code> <a href="Overlays.html#.OverlayType">OverlayType</a>.
</div>



    <h5>Type:</h5>
    <ul>
        <li>
            
<span class="param-type">object</span>


        </li>
    </ul>





    <h5 class="subsection-title">Properties:</h5>

    

<table class="props">
    <thead>
    <tr>
        
        <th>Name</th>
        

        <th>Type</th>

        

        
        <th>Default</th>
        

        <th class="last">Description</th>
    </tr>
    </thead>

    <tbody>
    

        <tr>
            
                <td class="name"><code>type</code></td>
            

            <td class="type">
            
                
<span class="param-type">string</span>


            
            </td>

            

            
                <td class="default">
                
                    text3d
                
                </td>
            

            <td class="description last">Has the value <code>"text3d"</code>. <em>Read-only.</em></td>
        </tr>

    

        <tr>
            
                <td class="name"><code>color</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#Color">Color</a></span>


            
            </td>

            

            
                <td class="default">
                
                    255,255,255
                
                </td>
            

            <td class="description last">The color of the overlay.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>alpha</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    0.7
                
                </td>
            

            <td class="description last">The opacity of the overlay, <code>0.0</code> - <code>1.0</code>.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>pulseMax</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    0
                
                </td>
            

            <td class="description last">The maximum value of the pulse multiplier.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>pulseMin</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    0
                
                </td>
            

            <td class="description last">The minimum value of the pulse multiplier.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>pulsePeriod</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    1
                
                </td>
            

            <td class="description last">The duration of the color and alpha pulse, in seconds. A pulse multiplier value goes from
    <code>pulseMin</code> to <code>pulseMax</code>, then <code>pulseMax</code> to <code>pulseMin</code> in one period.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>alphaPulse</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    0
                
                </td>
            

            <td class="description last">If non-zero, the alpha of the overlay is pulsed: the alpha value is multiplied by the
    current pulse multiplier value each frame. If &gt; 0 the pulse multiplier is applied in phase with the pulse period; if &lt; 0
    the pulse multiplier is applied out of phase with the pulse period. (The magnitude of the property isn't otherwise
    used.)</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>colorPulse</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    0
                
                </td>
            

            <td class="description last">If non-zero, the color of the overlay is pulsed: the color value is multiplied by the
    current pulse multiplier value each frame. If &gt; 0 the pulse multiplier is applied in phase with the pulse period; if &lt; 0
    the pulse multiplier is applied out of phase with the pulse period. (The magnitude of the property isn't otherwise
    used.)</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>visible</code></td>
            

            <td class="type">
            
                
<span class="param-type">boolean</span>


            
            </td>

            

            
                <td class="default">
                
                    true
                
                </td>
            

            <td class="description last">If <code>true</code>, the overlay is rendered, otherwise it is not rendered.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>name</code></td>
            

            <td class="type">
            
                
<span class="param-type">string</span>


            
            </td>

            

            
                <td class="default">
                
                    ""
                
                </td>
            

            <td class="description last">A friendly name for the overlay.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>position</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#Vec3">Vec3</a></span>


            
            </td>

            

            
                <td class="default">
                
                </td>
            

            <td class="description last">The position of the overlay center. Synonyms: <code>p1</code>, <code>point</code>, and
    <code>start</code>.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>localPosition</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#Vec3">Vec3</a></span>


            
            </td>

            

            
                <td class="default">
                
                </td>
            

            <td class="description last">The local position of the overlay relative to its parent if the overlay has a
    <code>parentID</code> set, otherwise the same value as <code>position</code>.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>rotation</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#Quat">Quat</a></span>


            
            </td>

            

            
                <td class="default">
                
                </td>
            

            <td class="description last">The orientation of the overlay. Synonym: <code>orientation</code>.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>localRotation</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#Quat">Quat</a></span>


            
            </td>

            

            
                <td class="default">
                
                </td>
            

            <td class="description last">The orientation of the overlay relative to its parent if the overlay has a
    <code>parentID</code> set, otherwise the same value as <code>rotation</code>.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>isSolid</code></td>
            

            <td class="type">
            
                
<span class="param-type">boolean</span>


            
            </td>

            

            
                <td class="default">
                
                    false
                
                </td>
            

            <td class="description last">Synonyms: <ode>solid, <code>isFilled</code>, and <code>filled</code>.
    Antonyms: <code>isWire</code> and <code>wire</code>.</ode></td>
        </tr>

    

        <tr>
            
                <td class="name"><code>isDashedLine</code></td>
            

            <td class="type">
            
                
<span class="param-type">boolean</span>


            
            </td>

            

            
                <td class="default">
                
                    false
                
                </td>
            

            <td class="description last">If <code>true</code>, a dashed line is drawn on the overlay's edges. Synonym:
    <code>dashed</code>.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>ignoreRayIntersection</code></td>
            

            <td class="type">
            
                
<span class="param-type">boolean</span>


            
            </td>

            

            
                <td class="default">
                
                    false
                
                </td>
            

            <td class="description last">If <code>true</code>,
    <a href="Overlays.html#.findRayIntersection">findRayIntersection</a> ignores the overlay.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>drawInFront</code></td>
            

            <td class="type">
            
                
<span class="param-type">boolean</span>


            
            </td>

            

            
                <td class="default">
                
                    false
                
                </td>
            

            <td class="description last">If <code>true</code>, the overlay is rendered in front of other overlays that don't
    have <code>drawInFront</code> set to <code>true</code>, and in front of entities.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>grabbable</code></td>
            

            <td class="type">
            
                
<span class="param-type">boolean</span>


            
            </td>

            

            
                <td class="default">
                
                    false
                
                </td>
            

            <td class="description last">Signal to grabbing scripts whether or not this overlay can be grabbed.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>parentID</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="Uuid.html">Uuid</a></span>


            
            </td>

            

            
                <td class="default">
                
                    null
                
                </td>
            

            <td class="description last">The avatar, entity, or overlay that the overlay is parented to.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>parentJointIndex</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    65535
                
                </td>
            

            <td class="description last">Integer value specifying the skeleton joint that the overlay is attached to if
    <code>parentID</code> is an avatar skeleton. A value of <code>65535</code> means "no joint".</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>dimensions</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#Vec2">Vec2</a></span>


            
            </td>

            

            
                <td class="default">
                
                    1,1
                
                </td>
            

            <td class="description last">The dimensions of the overlay. Synonyms: <code>scale</code>, <code>size</code>.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>isFacingAvatar</code></td>
            

            <td class="type">
            
                
<span class="param-type">boolean</span>


            
            </td>

            

            
                <td class="default">
                
                </td>
            

            <td class="description last">If <code>true</code>, the overlay is rotated to face the user's camera about an axis
    parallel to the user's avatar's "up" direction.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>text</code></td>
            

            <td class="type">
            
                
<span class="param-type">string</span>


            
            </td>

            

            
                <td class="default">
                
                    ""
                
                </td>
            

            <td class="description last">The text to display. Text does not automatically wrap; use <code>\n</code> for a line break.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>textAlpha</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    1
                
                </td>
            

            <td class="description last">The text alpha value.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>backgroundColor</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#Color">Color</a></span>


            
            </td>

            

            
                <td class="default">
                
                    0,0,0
                
                </td>
            

            <td class="description last">The background color.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>backgroundAlpha</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    0.7
                
                </td>
            

            <td class="description last">The background alpha value.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>lineHeight</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    1
                
                </td>
            

            <td class="description last">The height of a line of text in meters.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>leftMargin</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    0.1
                
                </td>
            

            <td class="description last">The left margin, in meters.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>topMargin</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    0.1
                
                </td>
            

            <td class="description last">The top margin, in meters.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>rightMargin</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    0.1
                
                </td>
            

            <td class="description last">The right margin, in meters.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>bottomMargin</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    0.1
                
                </td>
            

            <td class="description last">The bottom margin, in meters.</td>
        </tr>

    
    </tbody>
</table>




<dl class="details">

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    
</dl>






            
                
<h4 class="name" id=".TextProperties">TextProperties</h4>




<div class="description">
    These are the properties of a <code>text</code> <a href="Overlays.html#.OverlayType">OverlayType</a>.
</div>



    <h5>Type:</h5>
    <ul>
        <li>
            
<span class="param-type">object</span>


        </li>
    </ul>





    <h5 class="subsection-title">Properties:</h5>

    

<table class="props">
    <thead>
    <tr>
        
        <th>Name</th>
        

        <th>Type</th>

        

        
        <th>Default</th>
        

        <th class="last">Description</th>
    </tr>
    </thead>

    <tbody>
    

        <tr>
            
                <td class="name"><code>bounds</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#Rect">Rect</a></span>


            
            </td>

            

            
                <td class="default">
                
                </td>
            

            <td class="description last">The position and size of the rectangle, in pixels. <em>Write-only.</em></td>
        </tr>

    

        <tr>
            
                <td class="name"><code>x</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                </td>
            

            <td class="description last">Integer left, x-coordinate value = <code>bounds.x</code>. <em>Write-only.</em></td>
        </tr>

    

        <tr>
            
                <td class="name"><code>y</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                </td>
            

            <td class="description last">Integer top, y-coordinate value = <code>bounds.y</code>. <em>Write-only.</em></td>
        </tr>

    

        <tr>
            
                <td class="name"><code>width</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                </td>
            

            <td class="description last">Integer width of the rectangle = <code>bounds.width</code>. <em>Write-only.</em></td>
        </tr>

    

        <tr>
            
                <td class="name"><code>height</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                </td>
            

            <td class="description last">Integer height of the rectangle = <code>bounds.height</code>. <em>Write-only.</em></td>
        </tr>

    

        <tr>
            
                <td class="name"><code>margin</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    0
                
                </td>
            

            <td class="description last">Sets the <code>leftMargin</code> and <code>topMargin</code> values, in pixels.
    <em>Write-only.</em></td>
        </tr>

    

        <tr>
            
                <td class="name"><code>leftMargin</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    0
                
                </td>
            

            <td class="description last">The left margin's size, in pixels. <em>Write-only.</em></td>
        </tr>

    

        <tr>
            
                <td class="name"><code>topMargin</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    0
                
                </td>
            

            <td class="description last">The top margin's size, in pixels. <em>Write-only.</em></td>
        </tr>

    

        <tr>
            
                <td class="name"><code>text</code></td>
            

            <td class="type">
            
                
<span class="param-type">string</span>


            
            </td>

            

            
                <td class="default">
                
                    ""
                
                </td>
            

            <td class="description last">The text to display. Text does not automatically wrap; use <code>\n</code> for a line break. Text
    is clipped to the <code>bounds</code>. <em>Write-only.</em></td>
        </tr>

    

        <tr>
            
                <td class="name"><code>font.size</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    18
                
                </td>
            

            <td class="description last">The size of the text, in pixels. <em>Write-only.</em></td>
        </tr>

    

        <tr>
            
                <td class="name"><code>lineHeight</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    18
                
                </td>
            

            <td class="description last">The height of a line of text, in pixels. <em>Write-only.</em></td>
        </tr>

    

        <tr>
            
                <td class="name"><code>color</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#Color">Color</a></span>


            
            </td>

            

            
                <td class="default">
                
                    255,255,255
                
                </td>
            

            <td class="description last">The color of the text. Synonym: <code>textColor</code>. <em>Write-only.</em></td>
        </tr>

    

        <tr>
            
                <td class="name"><code>alpha</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    1.0
                
                </td>
            

            <td class="description last">The opacity of the overlay, <code>0.0</code> - <code>1.0</code>. <em>Write-only.</em></td>
        </tr>

    

        <tr>
            
                <td class="name"><code>backgroundColor</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#Color">Color</a></span>


            
            </td>

            

            
                <td class="default">
                
                    0,0,0
                
                </td>
            

            <td class="description last">The color of the background rectangle. <em>Write-only.</em></td>
        </tr>

    

        <tr>
            
                <td class="name"><code>backgroundAlpha</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    0.7
                
                </td>
            

            <td class="description last">The opacity of the background rectangle. <em>Write-only.</em></td>
        </tr>

    

        <tr>
            
                <td class="name"><code>visible</code></td>
            

            <td class="type">
            
                
<span class="param-type">boolean</span>


            
            </td>

            

            
                <td class="default">
                
                    true
                
                </td>
            

            <td class="description last">If <code>true</code>, the overlay is rendered, otherwise it is not rendered.
    <em>Write-only.</em></td>
        </tr>

    
    </tbody>
</table>




<dl class="details">

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    
</dl>






            
                
<h4 class="name" id=".Web3DProperties">Web3DProperties</h4>




<div class="description">
    These are the properties of a <code>web3d</code> <a href="Overlays.html#.OverlayType">OverlayType</a>.
</div>



    <h5>Type:</h5>
    <ul>
        <li>
            
<span class="param-type">object</span>


        </li>
    </ul>





    <h5 class="subsection-title">Properties:</h5>

    

<table class="props">
    <thead>
    <tr>
        
        <th>Name</th>
        

        <th>Type</th>

        

        
        <th>Default</th>
        

        <th class="last">Description</th>
    </tr>
    </thead>

    <tbody>
    

        <tr>
            
                <td class="name"><code>type</code></td>
            

            <td class="type">
            
                
<span class="param-type">string</span>


            
            </td>

            

            
                <td class="default">
                
                    web3d
                
                </td>
            

            <td class="description last">Has the value <code>"web3d"</code>. <em>Read-only.</em></td>
        </tr>

    

        <tr>
            
                <td class="name"><code>color</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#Color">Color</a></span>


            
            </td>

            

            
                <td class="default">
                
                    255,255,255
                
                </td>
            

            <td class="description last">The color of the overlay.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>alpha</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    0.7
                
                </td>
            

            <td class="description last">The opacity of the overlay, <code>0.0</code> - <code>1.0</code>.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>pulseMax</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    0
                
                </td>
            

            <td class="description last">The maximum value of the pulse multiplier.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>pulseMin</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    0
                
                </td>
            

            <td class="description last">The minimum value of the pulse multiplier.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>pulsePeriod</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    1
                
                </td>
            

            <td class="description last">The duration of the color and alpha pulse, in seconds. A pulse multiplier value goes from
    <code>pulseMin</code> to <code>pulseMax</code>, then <code>pulseMax</code> to <code>pulseMin</code> in one period.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>alphaPulse</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    0
                
                </td>
            

            <td class="description last">If non-zero, the alpha of the overlay is pulsed: the alpha value is multiplied by the
    current pulse multiplier value each frame. If &gt; 0 the pulse multiplier is applied in phase with the pulse period; if &lt; 0
    the pulse multiplier is applied out of phase with the pulse period. (The magnitude of the property isn't otherwise
    used.)</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>colorPulse</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    0
                
                </td>
            

            <td class="description last">If non-zero, the color of the overlay is pulsed: the color value is multiplied by the
    current pulse multiplier value each frame. If &gt; 0 the pulse multiplier is applied in phase with the pulse period; if &lt; 0
    the pulse multiplier is applied out of phase with the pulse period. (The magnitude of the property isn't otherwise
    used.)</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>visible</code></td>
            

            <td class="type">
            
                
<span class="param-type">boolean</span>


            
            </td>

            

            
                <td class="default">
                
                    true
                
                </td>
            

            <td class="description last">If <code>true</code>, the overlay is rendered, otherwise it is not rendered.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>name</code></td>
            

            <td class="type">
            
                
<span class="param-type">string</span>


            
            </td>

            

            
                <td class="default">
                
                    ""
                
                </td>
            

            <td class="description last">A friendly name for the overlay.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>position</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#Vec3">Vec3</a></span>


            
            </td>

            

            
                <td class="default">
                
                </td>
            

            <td class="description last">The position of the overlay center. Synonyms: <code>p1</code>, <code>point</code>, and 
    <code>start</code>.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>localPosition</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#Vec3">Vec3</a></span>


            
            </td>

            

            
                <td class="default">
                
                </td>
            

            <td class="description last">The local position of the overlay relative to its parent if the overlay has a
    <code>parentID</code> set, otherwise the same value as <code>position</code>.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>rotation</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#Quat">Quat</a></span>


            
            </td>

            

            
                <td class="default">
                
                </td>
            

            <td class="description last">The orientation of the overlay. Synonym: <code>orientation</code>.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>localRotation</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#Quat">Quat</a></span>


            
            </td>

            

            
                <td class="default">
                
                </td>
            

            <td class="description last">The orientation of the overlay relative to its parent if the overlay has a
    <code>parentID</code> set, otherwise the same value as <code>rotation</code>.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>isSolid</code></td>
            

            <td class="type">
            
                
<span class="param-type">boolean</span>


            
            </td>

            

            
                <td class="default">
                
                    false
                
                </td>
            

            <td class="description last">Synonyms: <ode>solid, <code>isFilled</code>, and <code>filled</code>.
    Antonyms: <code>isWire</code> and <code>wire</code>.</ode></td>
        </tr>

    

        <tr>
            
                <td class="name"><code>isDashedLine</code></td>
            

            <td class="type">
            
                
<span class="param-type">boolean</span>


            
            </td>

            

            
                <td class="default">
                
                    false
                
                </td>
            

            <td class="description last">If <code>true</code>, a dashed line is drawn on the overlay's edges. Synonym:
    <code>dashed</code>.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>ignoreRayIntersection</code></td>
            

            <td class="type">
            
                
<span class="param-type">boolean</span>


            
            </td>

            

            
                <td class="default">
                
                    false
                
                </td>
            

            <td class="description last">If <code>true</code>, 
    <a href="Overlays.html#.findRayIntersection">findRayIntersection</a> ignores the overlay.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>drawInFront</code></td>
            

            <td class="type">
            
                
<span class="param-type">boolean</span>


            
            </td>

            

            
                <td class="default">
                
                    false
                
                </td>
            

            <td class="description last">If <code>true</code>, the overlay is rendered in front of other overlays that don't
    have <code>drawInFront</code> set to <code>true</code>, and in front of entities.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>grabbable</code></td>
            

            <td class="type">
            
                
<span class="param-type">boolean</span>


            
            </td>

            

            
                <td class="default">
                
                    false
                
                </td>
            

            <td class="description last">Signal to grabbing scripts whether or not this overlay can be grabbed.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>parentID</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="Uuid.html">Uuid</a></span>


            
            </td>

            

            
                <td class="default">
                
                    null
                
                </td>
            

            <td class="description last">The avatar, entity, or overlay that the overlay is parented to.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>parentJointIndex</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    65535
                
                </td>
            

            <td class="description last">Integer value specifying the skeleton joint that the overlay is attached to if
    <code>parentID</code> is an avatar skeleton. A value of <code>65535</code> means "no joint".</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>isFacingAvatar</code></td>
            

            <td class="type">
            
                
<span class="param-type">boolean</span>


            
            </td>

            

            
                <td class="default">
                
                </td>
            

            <td class="description last">If <code>true</code>, the overlay is rotated to face the user's camera about an axis
    parallel to the user's avatar's "up" direction.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>url</code></td>
            

            <td class="type">
            
                
<span class="param-type">string</span>


            
            </td>

            

            
                <td class="default">
                
                </td>
            

            <td class="description last">The URL of the Web page to display.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>scriptURL</code></td>
            

            <td class="type">
            
                
<span class="param-type">string</span>


            
            </td>

            

            
                <td class="default">
                
                    ""
                
                </td>
            

            <td class="description last">The URL of a JavaScript file to inject into the Web page.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>dpi</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    30
                
                </td>
            

            <td class="description last">The dots per inch to display the Web page at, on the overlay.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>dimensions</code></td>
            

            <td class="type">
            
                
<span class="param-type"><a href="global.html#Vec2">Vec2</a></span>


            
            </td>

            

            
                <td class="default">
                
                    1,1
                
                </td>
            

            <td class="description last">The size of the overlay to display the Web page on, in meters. Synonyms: 
    <code>scale</code>, <code>size</code>.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>maxFPS</code></td>
            

            <td class="type">
            
                
<span class="param-type">number</span>


            
            </td>

            

            
                <td class="default">
                
                    10
                
                </td>
            

            <td class="description last">The maximum update rate for the Web overlay content, in frames/second.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>showKeyboardFocusHighlight</code></td>
            

            <td class="type">
            
                
<span class="param-type">boolean</span>


            
            </td>

            

            
                <td class="default">
                
                    true
                
                </td>
            

            <td class="description last">If <code>true</code>, the Web overlay is highlighted when it has
    keyboard focus.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>inputMode</code></td>
            

            <td class="type">
            
                
<span class="param-type">string</span>


            
            </td>

            

            
                <td class="default">
                
                    Touch
                
                </td>
            

            <td class="description last">The user input mode to use - either <code>"Touch"</code> or <code>"Mouse"</code>.</td>
        </tr>

    
    </tbody>
</table>




<dl class="details">

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    
</dl>






            
    

    
</article>