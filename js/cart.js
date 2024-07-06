'use strict';


let tshirts = [
	{
		"id": "tshirts",
		"sizeGrid":`<div class="modal">
				<div class="modal-container">
					<div class="modal-black"></div>
					<div class="modal-sizecare create">
						<div class="modal-sizecare-content">
							<p>How to choose the size properly</p>
							<p>Choose your T-shirt/sweatshirt/hoodie and measure it with a tailor tape</p>
							<p>The width on the dimensional grid is indicated by the letter A, measure under the armpits, from seam to seam, as shown by the red line. </p>
							<p>The length on the dimensional grid is indicated by the letter B, measure from the neck to the very bottom of the item, as shown by the red line. </p>
							<p>The length of the sleeves on the dimensional grid is indicated by the letter C, if it is a sweatshirt or hoodie, measure from the neck to the very end of the sleeve, if it is a T-shirt, then as shown by the red line. </p>
							<p>Then, compare your measurements with our size table, having estimated plus/minus a couple of centimeters and choose the size. </p>
							<p><img src="https://cdn.jolybell.com/images/j4xilwW5TH8W17B.png" alt=""></p>
							<table>
								<thead>
								<tr>
								<th>(cm)</th>
								<th>A</th>
								<th>B</th>
								<th>C</th>
								</tr>
								</thead>
								<tbody><tr>
								<td>XS</td>
								<td>45</td>
								<td>65</td>
								<td>21</td>
								</tr>
								<tr>
								<td>S</td>
								<td>48</td>
								<td>67</td>
								<td>21</td>
								</tr>
								<tr>
								<td>M</td>
								<td>50</td>
								<td>68</td>
								<td>22</td>
								</tr>
								<tr>
								<td>L</td>
								<td>52</td>
								<td>68</td>
								<td>22</td>
								</tr>
								<tr>
								<td>XL</td>
								<td>54</td>
								<td>69</td>
								<td>23</td>
								</tr>
								<tr>
								<td>XXL</td>
								<td>57</td>
								<td>70</td>
								<td>24</td>
								</tr>
								<tr>
								<td>XXXL</td>
								<td>59</td>
								<td>72</td>
								<td>25</td>
								</tr>
								</tbody></table>
								<p><em>Permissible deviation in length and width is (±) 1-2 cm.</em></p>
						</div>
						<div class="modal-sizecare-icon"><svg class="cross" xmlns="http://www.w3.org/2000/svg" viewBox=""><polygon points="15,0.54 14.46,0 7.5,6.96 0.54,0 0,0.54 6.96,7.5 0,14.46 0.54,15 7.5,8.04 14.46,15 15,14.46 8.04,7.5"></polygon></svg></div>
					</div>
				</div>
			</div>`,
			"care":`<div class="modal">
				<div class="modal-container">
					<div class="modal-black"></div>
					<div class="modal-sizecare">
						<div class="modal-sizecare-content">
							<h4 id="standard-care-rules">Standard care rules:</h4>
							<p>Wash in the inside out state, in a washing machine only, delicate cycle, up to 40 degrees, not more than 600 rpm, don't tumble-dry, dry only on a hanger, without sunrays hitting the fabric. Don't iron the print with an 
								iron.</p>
						</div>
						<div class="modal-sizecare-icon"><svg class="cross" xmlns="http://www.w3.org/2000/svg" viewBox=""><polygon points="15,0.54 14.46,0 7.5,6.96 0.54,0 0,0.54 6.96,7.5 0,14.46 0.54,15 7.5,8.04 14.46,15 15,14.46 8.04,7.5"></polygon></svg></div>
					</div>
				</div>
			</div>`
	},
	{
	"id": 31,
	"name": "Ultra Black T-shirt",
	"images": ["https://cdn.jolybell.com/images/cGNahzAeoJFmDUy.webp?width=492&height=540&quality=90", "https://cdn.jolybell.com/images/LSyXeObk9FlRptz.webp?width=491&height=540&quality=90", "https://cdn.jolybell.com/images/4P8heH1duHEpC7S.webp?width=777&height=540&quality=90"],
	"price": 25,
	"description": `<p>Thin. Light. Ultra black.</p>
	<p>The limited edition B.O.M.J T-shirt is the first unit of a counter-brand clothing line. Stunning quality combined with a refined approach to detail, which big-name bloated companies cannot boast.</p>
	<p>Penye fabric</p>
	<p>Combination: 95% cotton, 5% spandex. Density 170 gm/m²</p>`,
	"sizes": ["XS", "S", "M", "L","XL", "2XL"]
},
	{
	"id": 32,
	"name": "Marginal Black",
	"images": ["https://cdn.jolybell.com/images/9THrvo8ZaDcllU2.webp?width=387&height=360&quality=85","	https://cdn.jolybell.com/images/9ccUK29cPLXg9xK.webp?width=491&height=540&quality=90"],
	"price": 25,
	"description":`<p>Everyone's perception is different</p><p>Penye fabric</p><p>Combination: 95% cotton, 5% spandex</p>`,
	"sizes": [ "XS","S", "M", "L","XL", "2XL","3XL"]
},
{
	"id": 33,
	"name": "B.O.M.J White",
	"images": ["https://cdn.jolybell.com/images/23krhtEjb4SgZcQ.webp?width=387&height=360&quality=85","	https://cdn.jolybell.com/images/Q1eA8G3HR8Idq3x.webp?width=491&height=540&quality=90"],
	"price": 25,
	"description":`<p>Thin. Light. White.</p><p>T-shirt of the B.O.M.J line - the first unit of the counter-brand clothing line. Brilliant quality combined with a refined approach to details, that big-name puffed-up companies can't brag about.</p><p>Penye fabric</p><p>Combination: 95% cotton, 5% spandex. Density 170 gm/m²</p>`,
	"sizes": [ "XS","S", "M", "L", "XL","2XL","3XL"]
},
{
	"id": 34,
	"name": "T-Shirt 13",
	"images": ["https://cdn.jolybell.com/images/poU66k2O6sJ2IIk.webp?width=387&height=360&quality=85", "https://cdn.jolybell.com/images/zgvtJdq6MRGC8as.webp?width=491&height=540&quality=90"],
	"price": 14.33,
	"description":`<p>T-shirt without print from the  B.O.M.J counter-brand line</p><p>Stunning quality in compatibility with a refined approach to detail, which eminent bloated firms cannot boast of.</p><p>Pleasant to the touch fabric of the peñe variety.</p><p>Composition: 95% cotton, 5% spandex. Density 170 g/m²</p>`,
	"sizes": ["S", "M", "L", "XL","2XL","3XL"]
},
{
	"id": 35,
	"name": "B.O.M.J Black",
	"images": ["https://cdn.jolybell.com/images/ucPsORdrx3gjKUU.webp?width=387&height=360&quality=85","	https://cdn.jolybell.com/images/6KqdoQNQqbJ8RKy.webp?width=491&height=540&quality=90", "https://cdn.jolybell.com/images/v5wgeZmy0P2AsTu.webp?width=838&height=540&quality=90"],
	"price": 25,
	"description":`<p>Thin. Light. Black.</p><p>T-shirt of the B.O.M.J line - the first unit of the counter-brand clothing line. Brilliant quality combined with a refined approach to details, that big-name puffed-up companies can't brag about.</p><p>Penye fabric</p><p>Combination: 95% cotton, 5% spandex. Density 170 gm/m²</p>`,
	"sizes": ["XS", "S", "M", "L","XL", "2XL","3XL"]
},
{
	"id": 36,
	"name": "Oversize T-Shirt 05",
	"images": ["https://cdn.jolybell.com/images/JucJqNthb8z0F5M.webp?width=387&height=360&quality=85","https://cdn.jolybell.com/images/cVCn4yBEfgtP4oD.webp?width=520&height=540&quality=90", "https://cdn.jolybell.com/images/KFEG7AtLg6DSxdX.webp?width=361&height=540&quality=90","https://cdn.jolybell.com/images/M1uimGzc6kmqoTd.webp?width=361&height=540&quality=90"],
	"price": 16,
	"description":`<p>Oversize is when everything around you adapts to you. Freedom of movement, style, thoughts. Disrupt and break the boundaries of a strict silhouette. Free cut is now your calling card.</p><p>Pleasant fabric made of dense high-quality cotton with the addition of spandex, which is responsible for wear resistance. Also it doesn’t shrink and doesn’t fade with numerous washes.</p><p>Composition: 100% Cotton. Density 240 g/m²</p><p><em>Model height 190 cm, weight 90 kg. Size - L</em></p>`,
	"sizes": ["S", "M", "L", "XL", "2XL","3XL"]
}
];

let bags = [
	{
		"id": "bags"
	},
	{
	"id": 1,
	"name": "Military Full",
	"images": ["	https://cdn.jolybell.com/images/Yrn1fZrn2jdiyc6.webp?width=387&height=360&quality=85","https://cdn.jolybell.com/images/n5mO0CaKBeRXCzu.webp?width=540&height=540&quality=90 ","https://cdn.jolybell.com/images/Bgvu89uqdcnYouC.webp?width=540&height=540&quality=90 ","https://cdn.jolybell.com/images/s78rOhDePZ6Cn5j.webp?width=540&height=540&quality=90 "," https://cdn.jolybell.com/images/n1HhP6Dh3O4zGK9.webp?width=540&height=540&quality=90","https://cdn.jolybell.com/images/6gn2E4Dw1SMvlus.webp?width=540&height=540&quality=90","https://cdn.jolybell.com/images/a2axwHQ5GQzncqH.webp?width=540&height=540&quality=90 "," https://cdn.jolybell.com/images/EjMVsROlW3lsKWb.webp?width=540&height=540&quality=90"],
	"price": 127.5,
	"description":`<h4 id="the-main-advantages-of-the-military-full-backpack">The main advantages of the “Military Full” backpack:</h4>
	<ol>
<li><p>Two-piece design with multiple pockets and internal mesh compartments for easy storage.</p>
</li>
<li><p>Built-in back pocket</p>
</li>
<li><p>Strong two-way YKK zippers provide secure closure of all compartments.</p>
</li>
<li><p>Ergonomic shoulder straps 5 cm wide, adjustable in length for comfortable wear.</p>
</li>
<li><p>Padded, ventilated back and adjustable waist belt with Fastex closure for extra comfort and back support.</p>
</li>
<li><p>Lateral volume adjustments allow you to adjust the backpack for loading.</p>
</li>
<li><p>MOLLE straps on the outside of the backpack for easy attachment of additional items.</p>
</li>
<li><p>D-rings on the shoulder straps for attaching various accessories.</p>
</li>
<li><p>The use of thick Cordura 1000D nylon fabric with water-repellent impregnation and PU coating provides strength and abrasion resistance.</p>
</li>
<li><p>The optimal volume of a backpack for urban conditions and the possibility of effective use in hostilities for a long time.</p>
</li>
</ol>`,
	"sizeGrid":`<div class="modal">
				<div class="modal-container">
					<div class="modal-black"></div>
					<div class="modal-sizecare">
						<div class="modal-sizecare-content">
							<table>
								<thead>
								<tr>
								<th>Height</th>
								<th>Width</th>
								<th>Depth</th>
								</tr>
								</thead>
								<tbody><tr>
								<td>50 cm</td>
								<td>30 cm</td>
								<td>35 cm</td>
								</tr>
								</tbody></table>
								<ol>
								<li>Laptop compartment: height 45 cm, width 28 cm</li>
								<li>Tablet compartment: height 23 cm, width 21 cm</li>
								<li>Back pocket: height 40 cm, width 28 cm</li>
								</ol>
								<p>General section: height 50 cm, width 30 cm</p>
								<p>Volume 50l</p>
						</div>
						<div class="modal-sizecare-icon"><svg class="cross" xmlns="http://www.w3.org/2000/svg" viewBox=""><polygon points="15,0.54 14.46,0 7.5,6.96 0.54,0 0,0.54 6.96,7.5 0,14.46 0.54,15 7.5,8.04 14.46,15 15,14.46 8.04,7.5"></polygon></svg></div>
					</div>
				</div>
			</div>`,
	"care":`<div class="modal">
				<div class="modal-container">
					<div class="modal-black"></div>
					<div class="modal-sizecare">
						<div class="modal-sizecare-content">
							<h4 id="standard-care-rules">Standard Care Rules:</h4><p>Hand wash at a temperature not exceeding 40 °</p><p>(Dirt can be easily washed off with a cloth and soap)</p><p>It is recommended to wash the backpack in the washing machine at a temperature not exceeding 40 degrees. Optimal 30-40℃. Too hot water "seals" the dirt, it will be more difficult to get rid of it.</p>
						</div>
						<div class="modal-sizecare-icon"><svg class="cross" xmlns="http://www.w3.org/2000/svg" viewBox=""><polygon points="15,0.54 14.46,0 7.5,6.96 0.54,0 0,0.54 6.96,7.5 0,14.46 0.54,15 7.5,8.04 14.46,15 15,14.46 8.04,7.5"></polygon></svg></div>
					</div>
				</div>
			</div>`
},
	{
	"id": 2,
	"name": "JOLY.BAG PLUS BLACK",
	"images": ["https://cdn.jolybell.com/images/3jvxhtEgPL5GwBl.webp?width=387&height=360&quality=85"," https://cdn.jolybell.com/images/eyUQPMSKtC8GyPR.webp?width=272&height=540&quality=90"," https://cdn.jolybell.com/images/35S8GVMz5jOdtCb.webp?width=353&height=540&quality=90","https://cdn.jolybell.com/images/vCe2vj8WU3mnQVz.webp?width=556&height=540&quality=90 ","https://cdn.jolybell.com/images/hIWBz2I0Wl4HWza.webp?width=472&height=540&quality=90 "," https://cdn.jolybell.com/images/CFWRTpftcQsN8z6.webp?width=810&height=540&quality=90"," https://cdn.jolybell.com/images/6AmiqVaqX0OzCqc.webp?width=810&height=540&quality=90"," https://cdn.jolybell.com/images/P1lV1l8PVPBB3YJ.webp?width=380&height=540&quality=90"],
	"price": 93.5,
	"description":`<p>Solid. Comfortable. Conservatism. Shove everything into me. I don't care what diagonal your laptop is and how much it weighs. Kicking me with legs or cherishing - both ways I'll always be in my original state, without fake humble - only metal is more solid than my fabric. I'm sure you liked my pocket on the shoulder strap or a secret pocket on the back, you think it's comfy, but it's not - it is the whole me, that is comfortable.</p><p>Main characteristics:</p><ul>
<li>Waterproof material (Water may penetrate through the zip).</li>
<li>Damping cushions inside of the back, with isolon inserts. The outside is covered with a special mesh. </li>
<li>Has pockets for 17” laptops and tablets.</li>
<li>Convenient when accessing small items through the front pocket.</li>
<li>There is a hidden pocket on the shoulder strap and a large one on the back.</li>
<li>Lots of compartments for personal items.</li>
</ul><p>Fabric: Cordura.
Weight: 800 grams.
Capacity: 20 litres.</p>`,
	"sizeGrid":`<div class="modal">
	<div class="modal-container">
		<div class="modal-black"></div>
		<div class="modal-sizecare">
			<div class="modal-sizecare-content">
				<p><img src="https://cdn.jolybell.com/images/BqOcHdz6vEG9RxX.png" alt=""></p><table>
<thead>
<tr>
<th>Height</th>
<th>Width</th>
<th>Depth</th>
</tr>
</thead>
<tbody><tr>
<td>45 cm</td>
<td>31 cm</td>
<td>15 cm</td>
</tr>
</tbody></table>
			</div>
			<div class="modal-sizecare-icon"><svg class="cross" xmlns="http://www.w3.org/2000/svg" viewBox=""><polygon points="15,0.54 14.46,0 7.5,6.96 0.54,0 0,0.54 6.96,7.5 0,14.46 0.54,15 7.5,8.04 14.46,15 15,14.46 8.04,7.5"></polygon></svg></div>
		</div>
	</div>
</div>`,
"care":`<div class="modal">
	<div class="modal-container">
		<div class="modal-black"></div>
		<div class="modal-sizecare">
			<div class="modal-sizecare-content">
				<h4 id="standard-care-rules">Standard care rules:</h4>
				<p>Hand wash at a temperature of up to 40°</p>
				<p>(Dirt can be easily washed off with a cloth and soap)</p><p>Do not use bleach and powders that contain chlorine, conditioners.</p>
			</div>
			<div class="modal-sizecare-icon"><svg class="cross" xmlns="http://www.w3.org/2000/svg" viewBox=""><polygon points="15,0.54 14.46,0 7.5,6.96 0.54,0 0,0.54 6.96,7.5 0,14.46 0.54,15 7.5,8.04 14.46,15 15,14.46 8.04,7.5"></polygon></svg></div>
		</div>
	</div>
</div>`
},
{
	"id": 3,
	"name": "JOLY.BAG",
	"images": ["https://cdn.jolybell.com/images/1QRmhyynLUWvK1L.webp?width=387&height=360&quality=85"," https://cdn.jolybell.com/images/WPCEU3BZJBWGkW6.webp?width=409&height=540&quality=90"," https://cdn.jolybell.com/images/5RH0u4Hpev0H79x.webp?width=404&height=540&quality=90","https://cdn.jolybell.com/images/eA1uLeJgM8lwPHD.webp?width=465&height=540&quality=90 "," https://cdn.jolybell.com/images/TcxJnD7pNWcaZWC.webp?width=361&height=540&quality=90","https://cdn.jolybell.com/images/UdCd61IxKjaenAk.webp?width=361&height=540&quality=90 "," https://cdn.jolybell.com/images/MsbnEEugOAQKJIZ.webp?width=491&height=540&quality=90","https://cdn.jolybell.com/images/CYJDV7dNjnpGPr9.webp?width=561&height=540&quality=90 "],
	"price": 93.5,
	"description":`	<p>Main characteristics:</p><ul>
<li>Waterproof material</li>
<li>Damping cushions inside the back, with isolon inserts. The outside is covered with a special mesh.</li>
<li>Has pockets for 17” laptops and tablets</li>
<li>Inside pockets for personal items</li>
<li>Inside carabiner with key clasp</li>
<li>Zip side pockets</li>
<li>Top handle</li>
<li>Adjustable shoulder straps, mesh back.</li>
<li>Drawstring closure on top.</li>
<li>Large hidden pocket in the back made of velor, also a hidden pocket in the shoulder strap.</li>
</ul><p>Fabric: Cordura. Weight: 750 grams Capacity: 24 litres.</p><p>Pre-order! We expect delivery of a new batch of JOLY.BAG backpacks within 3 weeks. The pre-order gift comes with an item from a T-shirt to a hoodie. Specify the size of the item in the note when ordering.</p>`,
	"sizeGrid":`<div class="modal">
	<div class="modal-container">
		<div class="modal-black"></div>
		<div class="modal-sizecare">
			<div class="modal-sizecare-content">
				<table>
<thead>
<tr>
<th>Height</th>
<th>Width</th>
<th>Depth</th>
</tr>
</thead>
<tbody><tr>
<td>44 cm</td>
<td>35 cm</td>
<td>16 cm</td>
</tr>
</tbody></table><p>Laptop compartment width 29 cm.</p><p>The width of the tablet compartment is 22 cm.</p>
			</div>
			<div class="modal-sizecare-icon"><svg class="cross" xmlns="http://www.w3.org/2000/svg" viewBox=""><polygon points="15,0.54 14.46,0 7.5,6.96 0.54,0 0,0.54 6.96,7.5 0,14.46 0.54,15 7.5,8.04 14.46,15 15,14.46 8.04,7.5"></polygon></svg></div>
		</div>
	</div>
</div>`,
"care":`<div class="modal">
	<div class="modal-container">
		<div class="modal-black"></div>
		<div class="modal-sizecare">
			<div class="modal-sizecare-content">
				<h4 id="standard-care-rules">Standard care rules:</h4>
				<p>Hand wash at a temperature of up to 40°</p>
				<p>(Dirt can be easily washed off with a cloth and soap)</p><p>Do not use bleach and powders that contain chlorine, conditioners.</p>
			</div>
			<div class="modal-sizecare-icon"><svg class="cross" xmlns="http://www.w3.org/2000/svg" viewBox=""><polygon points="15,0.54 14.46,0 7.5,6.96 0.54,0 0,0.54 6.96,7.5 0,14.46 0.54,15 7.5,8.04 14.46,15 15,14.46 8.04,7.5"></polygon></svg></div>
		</div>
	</div>
</div>`
},
{
	"id": 4,
	"name": "JOLY.BAG Duo",
	"images": ["https://cdn.jolybell.com/images/LAlFHgA2KQHheyf.webp?width=387&height=360&quality=85","https://cdn.jolybell.com/images/r9ckDeNb25qRwru.webp?width=540&height=540&quality=90 ","https://cdn.jolybell.com/images/nTboOqrAXcqYIny.webp?width=540&height=540&quality=90 ","https://cdn.jolybell.com/images/f298gIHO4xhG8i2.webp?width=540&height=540&quality=90 ","https://cdn.jolybell.com/images/DyPRQX5LIwgGSA4.webp?width=540&height=540&quality=90 ","https://cdn.jolybell.com/images/4Jq3pBDrwL8GYYQ.webp?width=540&height=540&quality=90 "," https://cdn.jolybell.com/images/SX4vLN156aUk8AA.webp?width=413&height=540&quality=90","https://cdn.jolybell.com/images/zgF43KMwnnUIjW1.webp?width=462&height=540&quality=90 "],
	"price": 93.5,
	"description":`<p>The double bottom backpack offers easy organization, protection for electronic devices, plenty of pockets and a durable construction made from quality material.</p><ol>
<li><p>Double bottom: The convenient design of the backpack allows you to divide the interior space, placing dirty things or shoes separately from clean ones.</p>
</li>
<li><p>Main large pocket: Inside this compartment, there is a dedicated compartment for a laptop, as well as a mesh pocket for accessories.</p>
</li>
<li><p>Outside pocket: Outside pocket is perfect for storing small items.</p>
</li>
<li><p>Side pockets: The backpack has small additional pockets on the sides for various accessories.</p>
</li>
<li><p>Built-in back pocket: A unique hidden pocket on the back of the backpack is designed to securely store your laptop, tablet and other accessories.</p>
</li>
<li><p>Material: The backpack is made of heavy-duty 500D Cordura, which is water-repellent and wear-resistant.</p>
</li>
</ol>`,
	"sizeGrid":`<div class="modal">
	<div class="modal-container">
		<div class="modal-black"></div>
		<div class="modal-sizecare">
			<div class="modal-sizecare-content">
				<table>
<thead>
<tr>
<th>Height</th>
<th>Width</th>
<th>Depth</th>
</tr>
</thead>
<tbody><tr>
<td>45 cm</td>
<td>31 cm</td>
<td>15 cm</td>
</tr>
</tbody></table><p>Laptop compartment: height 36 cm, width 27 cm</p><p>Back pocket: height 27 cm, width 27 cm</p><p>Side pockets: width 15 cm, height 10-14 cm</p><p>Volume 26 L</p>
			</div>
			<div class="modal-sizecare-icon"><svg class="cross" xmlns="http://www.w3.org/2000/svg" viewBox=""><polygon points="15,0.54 14.46,0 7.5,6.96 0.54,0 0,0.54 6.96,7.5 0,14.46 0.54,15 7.5,8.04 14.46,15 15,14.46 8.04,7.5"></polygon></svg></div>
		</div>
	</div>
</div>`,
"care":`<div class="modal">
	<div class="modal-container">
		<div class="modal-black"></div>
		<div class="modal-sizecare">
			<div class="modal-sizecare-content">
				<h4 id="standard-care-rules">Standard Care Rules:</h4><p>Hand wash at a temperature not exceeding 40 °</p><p>(Dirt can be easily washed off with a cloth and soap)</p><p>It is recommended to wash the backpack in the washing machine at a temperature not exceeding 40 degrees. Optimal 30-40℃. Too hot water "seals" the dirt, it will be more difficult to get rid of it.</p>
			</div>
			<div class="modal-sizecare-icon"><svg class="cross" xmlns="http://www.w3.org/2000/svg" viewBox=""><polygon points="15,0.54 14.46,0 7.5,6.96 0.54,0 0,0.54 6.96,7.5 0,14.46 0.54,15 7.5,8.04 14.46,15 15,14.46 8.04,7.5"></polygon></svg></div>
		</div>
	</div>
</div>`
},
{
	"id": 5,
	"name": "JOLY.BAG Urban Plus 15.6",
	"images": ["	https://cdn.jolybell.com/images/98E7wtFx3c2nWMA.webp?width=387&height=360&quality=85"," https://cdn.jolybell.com/images/t41N4PO5owR7jF5.webp?width=355&height=540&quality=90","https://cdn.jolybell.com/images/ncpMz6XFDCkZXs7.webp?width=355&height=540&quality=90","https://cdn.jolybell.com/images/79XbIAj46ld3vbR.webp?width=671&height=540&quality=90 "," https://cdn.jolybell.com/images/figurRu1t6DgDhD.webp?width=609&height=540&quality=90"," https://cdn.jolybell.com/images/7wIPZGBOonxRMjO.webp?width=393&height=540&quality=90","https://cdn.jolybell.com/images/g7GoTdWjnsChVvx.webp?width=455&height=540&quality=90"],
	"price": 93.5,
	"description":`<p>The enlarged version of the JOLY.BAG Urban backpack</p><p>Main characteristics:</p><ul>
<li>Waterproof material</li>
<li>The back is made out of mesh</li>
<li>Pocket for a 15.6” laptop</li>
<li>Lots of pockets for personal items</li>
<li>Hidden back in-seam pocket (for a phone, wallet, passport)</li>
<li>Hidden strap pocket</li>
</ul><p>Cordura fabric (CORDURA). The weight of the backpack is 625 grams. Capacity 20 litres</p>`,
	"sizeGrid":`<div class="modal">
	<div class="modal-container">
		<div class="modal-black"></div>
		<div class="modal-sizecare">
			<div class="modal-sizecare-content">
				<table>
<thead>
<tr>
<th>Height</th>
<th>Width</th>
<th>Depth</th>
</tr>
</thead>
<tbody><tr>
<td>45 cm</td>
<td>29 cm</td>
<td>15 cm</td>
</tr>
</tbody></table>
			</div>
			<div class="modal-sizecare-icon"><svg class="cross" xmlns="http://www.w3.org/2000/svg" viewBox=""><polygon points="15,0.54 14.46,0 7.5,6.96 0.54,0 0,0.54 6.96,7.5 0,14.46 0.54,15 7.5,8.04 14.46,15 15,14.46 8.04,7.5"></polygon></svg></div>
		</div>
	</div>
</div>`,
"care":`<div class="modal">
	<div class="modal-container">
		<div class="modal-black"></div>
		<div class="modal-sizecare">
			<div class="modal-sizecare-content">
				<h4 id="standard-care-rules">Standard care rules:</h4>
				<p>Hand wash at a temperature of up to 40°</p>
				<p>(Dirt can be easily washed off with a cloth and soap)</p><p>Do not use bleach and powders that contain chlorine, conditioners.</p>
			</div>
			<div class="modal-sizecare-icon"><svg class="cross" xmlns="http://www.w3.org/2000/svg" viewBox=""><polygon points="15,0.54 14.46,0 7.5,6.96 0.54,0 0,0.54 6.96,7.5 0,14.46 0.54,15 7.5,8.04 14.46,15 15,14.46 8.04,7.5"></polygon></svg></div>
		</div>
	</div>
</div>`
},
{
	"id": 6,
	"name": "JOLY.FOLIO",
	"images":[ "https://cdn.jolybell.com/images/tzWCB0i9K4TABVM.webp?width=387&height=360&quality=85","https://cdn.jolybell.com/images/0ULLRpWeRcpxp66.webp?width=439&height=540&quality=90 "," https://cdn.jolybell.com/images/Lo0TSQ6sbXwUMid.webp?width=439&height=540&quality=90"," https://cdn.jolybell.com/images/ctmSOjMIkALOuOj.webp?width=439&height=540&quality=90"," https://cdn.jolybell.com/images/NYGugS0es3uGgnM.webp?width=413&height=540&quality=90"," https://cdn.jolybell.com/images/Va0jwXnfF8Ei3l6.webp?width=811&height=540&quality=90","https://cdn.jolybell.com/images/wlBHwUgL9hNUQkU.webp?width=361&height=540&quality=90 ","https://cdn.jolybell.com/images/CoAX0JG9nUyrteq.webp?width=361&height=540&quality=90 "],
	"price": 60,
	"description":`<p>Bag for a laptop. Detachable, adjustable shoulder strap, top handles, embossed logo on the front, zip on the top, main interior compartment, laptop compartment, tablet compartment. Two compartments for personal items, a belt for the suitcase's handles on the back, waterproof material.</p><p>The cloth Cordura. Weight 650 grams.</p>`,
	"sizeGrid":`<div class="modal">
				<div class="modal-container">
					<div class="modal-black"></div>
					<div class="modal-sizecare">
						<div class="modal-sizecare-content">
							<table>
<thead>
<tr>
<th>Height</th>
<th>Width</th>
<th>Depth</th>
</tr>
</thead>
<tbody><tr>
<td>33 cm</td>
<td>43 cm</td>
<td>8 cm</td>
</tr>
</tbody></table><p>Laptop compartment width 39 cm</p><p>Tablet compartment width 22 cm</p><p>Handle's height 8 cm</p>
						</div>
						<div class="modal-sizecare-icon"><svg class="cross" xmlns="http://www.w3.org/2000/svg" viewBox=""><polygon points="15,0.54 14.46,0 7.5,6.96 0.54,0 0,0.54 6.96,7.5 0,14.46 0.54,15 7.5,8.04 14.46,15 15,14.46 8.04,7.5"></polygon></svg></div>
					</div>
				</div>
			</div>`,
	"care":`<div class="modal">
				<div class="modal-container">
					<div class="modal-black"></div>
					<div class="modal-sizecare">
						<div class="modal-sizecare-content">
							<h4 id="standard-care-rules">Standard care rules:</h4>
				<p>Hand wash at a temperature of up to 40°</p>
				<p>(Dirt can be easily washed off with a cloth and soap)</p><p>Do not use bleach and powders that contain chlorine, conditioners.</p>f
						</div>
						<div class="modal-sizecare-icon"><svg class="cross" xmlns="http://www.w3.org/2000/svg" viewBox=""><polygon points="15,0.54 14.46,0 7.5,6.96 0.54,0 0,0.54 6.96,7.5 0,14.46 0.54,15 7.5,8.04 14.46,15 15,14.46 8.04,7.5"></polygon></svg></div>
					</div>
				</div>
			</div>`
}

];

let hoodies = [
	{
		"id": "hoodies",
		"sizeGrid":`<div class="modal">
				<div class="modal-container">
					<div class="modal-black"></div>
					<div class="modal-sizecare">
						<div class="modal-sizecare-content">
							<p>How to choose the size properly</p>
							<p>Choose your T-shirt/sweatshirt/hoodie and measure it with a tailor tape</p>
							<p>The width on the dimensional grid is indicated by the letter A, measure under the armpits, from seam to seam, as shown by the red line. </p>
							<p>The length on the dimensional grid is indicated by the letter B, measure from the neck to the very bottom of the item, as shown by the red line. </p>
							<p>The length of the sleeves on the dimensional grid is indicated by the letter C, if it is a sweatshirt or hoodie, measure from the neck to the very end of the sleeve, if it is a T-shirt, then as shown by the red line. </p>
							<p>Then, compare your measurements with our size table, having estimated plus/minus a couple of centimeters and choose the size. </p>
							<p><img src="https://cdn.jolybell.com/images/0gotTEnHaBWwg8d.png" alt=""></p>
							<table>
							<thead>
							<tr>
							<th>(cm)</th>
							<th>A</th>
							<th>B</th>
							<th>C</th>
							</tr>
							</thead>
							<tbody><tr>
							<td>XS</td>
							<td>52</td>
							<td>68</td>
							<td>75</td>
							</tr>
							<tr>
							<td>S</td>
							<td>54</td>
							<td>70</td>
							<td>75</td>
							</tr>
							<tr>
							<td>M</td>
							<td>56</td>
							<td>70</td>
							<td>75</td>
							</tr>
							<tr>
							<td>L</td>
							<td>58</td>
							<td>71</td>
							<td>75</td>
							</tr>
							<tr>
							<td>XL</td>
							<td>60</td>
							<td>73</td>
							<td>78</td>
							</tr>
							<tr>
							<td>2XL</td>
							<td>63</td>
							<td>76</td>
							<td>82</td>
							</tr>
							<tr>
							<td>3XL</td>
							<td>68</td>
							<td>80</td>
							<td>83</td>
							</tr>
							</tbody></table>
							<p><em>Permissible deviation in length and width is (±) 1-2 cm.</em></p>
						</div>
						<div class="modal-sizecare-icon"><svg class="cross" xmlns="http://www.w3.org/2000/svg" viewBox=""><polygon points="15,0.54 14.46,0 7.5,6.96 0.54,0 0,0.54 6.96,7.5 0,14.46 0.54,15 7.5,8.04 14.46,15 15,14.46 8.04,7.5"></polygon></svg></div>
					</div>
				</div>
			</div>` ,
		"care":`<div class="modal">
				<div class="modal-container">
					<div class="modal-black"></div>
					<div class="modal-sizecare">
						<div class="modal-sizecare-content">
							<h4 id="standard-care-rules">Standard care rules:</h4>
							<p>Wash in the inside out state, in a washing machine only, up to 40 degrees, don't tumble-dry, dry on a hanger only, without sunrays hitting the fabric. Don't iron the print with an iron.</p>
						</div>
						<div class="modal-sizecare-icon"><svg class="cross" xmlns="http://www.w3.org/2000/svg" viewBox=""><polygon points="15,0.54 14.46,0 7.5,6.96 0.54,0 0,0.54 6.96,7.5 0,14.46 0.54,15 7.5,8.04 14.46,15 15,14.46 8.04,7.5"></polygon></svg></div>
					</div>
				</div>
			</div>`
	},
	{
	"id": 11,
	"name": "Hoodie Marginal Black",
	"images": ["https://cdn.jolybell.com/images/EwBTpwiDkN2IKFQ.webp?width=387&height=360&quality=85","https://cdn.jolybell.com/images/XbJyJQ9hVDAIcPN.webp?width=549&height=540&quality=90 ","https://cdn.jolybell.com/images/jNHa8tgXl8wKIqg.webp?width=339&height=540&quality=90 ","https://cdn.jolybell.com/images/22BDyez0jvIrMrz.webp?width=361&height=540&quality=90 ","https://cdn.jolybell.com/images/bI9B6UQCYVaMMjt.webp?width=361&height=540&quality=90 ","https://cdn.jolybell.com/images/SGBxuaEZ9EN9Lia.webp?width=358&height=540&quality=90 ","https://cdn.jolybell.com/images/1hkBM9Zn6awLtkR.webp?width=361&height=540&quality=90 ","https://cdn.jolybell.com/images/Pf4hiGS0a5QjHyd.webp?width=361&height=540&quality=90 "],
	"price": 47,
	"description":`<p>Still counter-brand, but warmer. It's not love that warms, but the fabric.</p><p>Combination: 60% cotton, 40% polyester. Density 320 gm/m²</p>`,
	"sizes": [ "XS","S", "M", "L","XL", "2XL","3XL"]
},
	{
	"id": 12,
	"name": "Hoodie Simple Black",
	"images": ["https://cdn.jolybell.com/images/VvTql0tekfVV9KC.webp?width=387&height=360&quality=85"," https://cdn.jolybell.com/images/nnbpgTGY2rEIj4u.webp?width=549&height=540&quality=90"],
	"price": 31,
	"description":`<p>Just black. Nothing more.</p>
<p>There are hidden in-seam pockets on the sides for your phone and other stuff.</p>
<p>Combination: 100% cotton. Density 220 gm/m² </p>
<p>"This hoodie has no fleece, lighter and thinner than others, which have prints"</p>`,
	"sizes": [ "XS","S", "M", "L","XL", "2XL","3XL"]
},
{
	"id": 13,
	"name": "Ultra Black Hoodie",
	"images": ["https://cdn.jolybell.com/images/TxUcsqU1rtGPVxj.webp?width=387&height=360&quality=85","https://cdn.jolybell.com/images/V3ts7kqirAqvfnf.webp?width=550&height=540&quality=90 "," https://cdn.jolybell.com/images/J3Foii9mbGmzXGN.webp?width=361&height=540&quality=90"," https://cdn.jolybell.com/images/Pvv1tTZljqp9eNP.webp?width=361&height=540&quality=90","https://cdn.jolybell.com/images/K1nYhNNaZPvTUAf.webp?width=361&height=540&quality=90 "," https://cdn.jolybell.com/images/SQIdZseOyWp6oY5.webp?width=361&height=540&quality=90"],
	"price": 47,
	"description":`<p>Still counter-brand, but warmer. It's not love that warms, but the fabric.</p><p>Combination: 60% cotton, 40% polyester. Density 320 gm/m²</p>`,
	"sizes": [ "XS","S", "M", "L","XL", "2XL","3XL"]
},
{
	"id": 14,
	"name": "Hoodie B.O.M.J Black",
	"images": ["https://cdn.jolybell.com/images/n1BQ3mrJaPlON2Z.webp?width=387&height=360&quality=85"," https://cdn.jolybell.com/images/GwK5UaA9LUWMHHZ.webp?width=549&height=540&quality=90"," https://cdn.jolybell.com/images/uvOOiQOB9xD41Rx.webp?width=361&height=540&quality=90"," https://cdn.jolybell.com/images/6A5Z9W2fH93BzR0.webp?width=361&height=540&quality=90"," https://cdn.jolybell.com/images/mcGhV9BQHxrlz73.webp?width=361&height=540&quality=90","https://cdn.jolybell.com/images/9Ed1Jz8ZIXKTAtr.webp?width=361&height=540&quality=90 ","https://cdn.jolybell.com/images/bpUptTMlimTLZcN.webp?width=361&height=540&quality=90 ","https://cdn.jolybell.com/images/bqhxkuDyntXObyZ.webp?width=358&height=540&quality=90 "],
	"price": 47,
	"description":`<p>Still counter-brand, but warmer. It's not love that warms, but the fabric.</p><p>Combination: 60% cotton, 40% polyester. Density 320 gm/m²</p>`,
	"sizes": [ "XS","S", "M", "L","XL", "2XL","3XL"]
},
{
	"id": 15,
	"name": "Black Hoodie",
	"images":[ "https://cdn.jolybell.com/images/xvrILhJWs8s6fXN.webp?width=387&height=360&quality=85"," https://cdn.jolybell.com/images/O1dyjFYmuogxPs9.webp?width=550&height=540&quality=90","https://cdn.jolybell.com/images/LEuIfcdq1n8Iz3s.webp?width=361&height=540&quality=90 ","https://cdn.jolybell.com/images/2ij8q6zt4DgIRUQ.webp?width=361&height=540&quality=90 ","https://cdn.jolybell.com/images/hQFfwjGIHKPRBRP.webp?width=361&height=540&quality=90 "," https://cdn.jolybell.com/images/sj98oNHpBgoi7ID.webp?width=361&height=540&quality=90"," https://cdn.jolybell.com/images/GMadMJ8wHtlwwBs.webp?width=361&height=540&quality=90","https://cdn.jolybell.com/images/foTRkT8GRltXIoH.webp?width=361&height=540&quality=90 "],
	"price": 47,
	"description":`<p>Anglicisms will not pass</p><p>Combination: 60% cotton, 40% polyester. Density 320 gm/m²</p>`,
	"sizes": [ "XS","S", "M", "L","XL", "2XL","3XL"]
},
{
	"id": 16,
	"name": "Hoodie B.O.M.J White",
	"images": ["https://cdn.jolybell.com/images/CpuXO0VEH8GE87J.webp?width=387&height=360&quality=85","https://cdn.jolybell.com/images/l8wMY8uvCnY3GYc.webp?width=549&height=540&quality=90 ","https://cdn.jolybell.com/images/y4Qo4HrWvdkbtuk.webp?width=358&height=540&quality=90 ","https://cdn.jolybell.com/images/6j52IO3sWd80ImD.webp?width=350&height=540&quality=90 ","https://cdn.jolybell.com/images/4Ff675oGbJDeipJ.webp?width=361&height=540&quality=90 "," https://cdn.jolybell.com/images/WYLTz20vzPzvByT.webp?width=361&height=540&quality=90","https://cdn.jolybell.com/images/kxT8wZnzOPhhAn9.webp?width=361&height=540&quality=90 "],
	"price": 47,
	"description":`<p>Still counter-brand, but warmer. It's not love that warms, but the fabric.</p><p>Combination: 60% cotton, 40% polyester. Density 320 gm/m²</p>`,
	"sizes": [ "XS","S", "M", "L","XL", "2XL","3XL"]
}

];

let sweatshirts = [
	{
		"id": "sweatshirts",
		"sizeGrid": `<div class="modal">
				<div class="modal-container">
					<div class="modal-black"></div>
					<div class="modal-sizecare">
						<div class="modal-sizecare-content">
							<p>How to choose the size properly</p>
							<p>Choose your T-shirt/sweatshirt/hoodie and measure it with a tailor tape</p>
							<p>The width on the dimensional grid is indicated by the letter A, measure under the armpits, from seam to seam, as shown by the red line. </p>
							<p>The length on the dimensional grid is indicated by the letter B, measure from the neck to the very bottom of the item, as shown by the red line. </p>
							<p>The length of the sleeves on the dimensional grid is indicated by the letter C, if it is a sweatshirt or hoodie, measure from the neck to the very end of the sleeve, if it is a T-shirt, then as shown by the red line. </p>
							<p>Then, compare your measurements with our size table, having estimated plus/minus a couple of centimeters and choose the size. </p>
							<p><img src="https://cdn.jolybell.com/images/LIULTU7ouczG1yH.png" alt=""></p>
							<table>
							<thead>
							<tr>
							<th>(cm)</th>
							<th>A</th>
							<th>B</th>
							<th>C</th>
							</tr>
							</thead>
							<tbody><tr>
							<td>XS</td>
							<td>52</td>
							<td>69</td>
							<td>76</td>
							</tr>
							<tr>
							<td>S</td>
							<td>54</td>
							<td>70</td>
							<td>76</td>
							</tr>
							<tr>
							<td>M</td>
							<td>56</td>
							<td>71</td>
							<td>78</td>
							</tr>
							<tr>
							<td>L</td>
							<td>58</td>
							<td>73</td>
							<td>78</td>
							</tr>
							<tr>
							<td>XL</td>
							<td>60</td>
							<td>75</td>
							<td>80</td>
							</tr>
							<tr>
							<td>2XL</td>
							<td>62</td>
							<td>78</td>
							<td>84</td>
							</tr>
							<tr>
							<td>3XL</td>
							<td>66</td>
							<td>80</td>
							<td>85</td>
							</tr>
							</tbody></table>
							<p><em>Permissible deviation in length and width is (±) 1-2 cm.</em></p>
						</div>
						<div class="modal-sizecare-icon"><svg class="cross" xmlns="http://www.w3.org/2000/svg" viewBox=""><polygon points="15,0.54 14.46,0 7.5,6.96 0.54,0 0,0.54 6.96,7.5 0,14.46 0.54,15 7.5,8.04 14.46,15 15,14.46 8.04,7.5"></polygon></svg></div>
					</div>
				</div>
			</div>`,
		"care":`<div class="modal">
				<div class="modal-container">
					<div class="modal-black"></div>
					<div class="modal-sizecare">
						<div class="modal-sizecare-content">
							<h4 id="standard-care-rules">Standard care rules:</h4>
							<p>Wash in the inside out state, in a washing machine only, up to 40 degrees, don't tumble-dry, dry on a hanger only, without sunrays hitting the fabric. Don't iron the print with an iron.</p>
						</div>
						<div class="modal-sizecare-icon"><svg class="cross" xmlns="http://www.w3.org/2000/svg" viewBox=""><polygon points="15,0.54 14.46,0 7.5,6.96 0.54,0 0,0.54 6.96,7.5 0,14.46 0.54,15 7.5,8.04 14.46,15 15,14.46 8.04,7.5"></polygon></svg></div>
					</div>
				</div>
			</div>`
	},
	{
	"id": 21,
	"name": "Ultra Black Sweatshirt",
	"images": ["https://cdn.jolybell.com/images/nWfZjCItxcSRSd5.webp?width=387&height=360&quality=85","	https://cdn.jolybell.com/images/Fd3qP1fgsG9bZ2U.webp?width=641&height=540&quality=90 "," https://cdn.jolybell.com/images/X9YBnLXIz3hQGYe.webp?width=361&height=540&quality=90"," https://cdn.jolybell.com/images/DOdxiF1dzUopkqZ.webp?width=361&height=540&quality=90","https://cdn.jolybell.com/images/71IHAQSRRctysLp.webp?width=361&height=540&quality=90 ","https://cdn.jolybell.com/images/N7sQYWaITmCwUak.webp?width=361&height=540&quality=90 ","https://cdn.jolybell.com/images/DniWKOntxevP2G4.webp?width=361&height=540&quality=90 "," https://cdn.jolybell.com/images/iNpp1BCIw361NJX.webp?width=338&height=540&quality=90"," https://cdn.jolybell.com/images/yGqIRJsbsBvkO26.webp?width=361&height=540&quality=90"],
	"price": 36.5,
	"description": "<p>Still counter-brand, but warmer. It's not love that warms, but the fabric.</p><p>Combination: 60% cotton, 40% polyester. Density 320 gm/m²</p>",
	"sizes": [ "XS","S", "M", "L","XL", "2XL","3XL"]
},
	{
	"id": 22,
	"name": "Jacket white",
	"images": ["https://cdn.jolybell.com/images/FtLWoLacppTT5J8.webp?width=387&height=360&quality=85","https://cdn.jolybell.com/images/11PoebjuplWkSUy.webp?width=641&height=540&quality=90","https://cdn.jolybell.com/images/VScSSrvljP080Uv.webp?width=361&height=540&quality=90 "," https://cdn.jolybell.com/images/YZWZy6skksQ5aG9.webp?width=361&height=540&quality=90"," https://cdn.jolybell.com/images/QUWrRne2x70VPqP.webp?width=361&height=540&quality=90"," https://cdn.jolybell.com/images/Tn1xh11qFH9NKu6.webp?width=361&height=540&quality=90","https://cdn.jolybell.com/images/QwTmY7xdTUoEXLD.webp?width=361&height=540&quality=90 "," https://cdn.jolybell.com/images/g3igI8lYgZQ8ayU.webp?width=361&height=540&quality=90"],
	"price": 36.5,
	"description": "<p>Anglicisms will not pass</p><p>Combination: 60% cotton, 40% polyester. Density 320 gm/m²</p>",
	"sizes": [ "XS","S", "M", "L","XL", "2XL","3XL"]
},
{
	"id": 23,
	"name": "JOLY.DOG",
	"images": ["https://cdn.jolybell.com/images/V54DF5z6teYhvGs.webp?width=387&height=360&quality=85"," https://cdn.jolybell.com/images/dlTxkvFCnPIU3QT.webp?width=641&height=540&quality=90"," https://cdn.jolybell.com/images/cCaz3XQzAVNPuyN.webp?width=361&height=540&quality=90","https://cdn.jolybell.com/images/ZI2WxsHZ0MOhych.webp?width=361&height=540&quality=90 "," https://cdn.jolybell.com/images/7Qc9cxadnmftDue.webp?width=361&height=540&quality=90","https://cdn.jolybell.com/images/Ej0FRB3sTydJG0w.webp?width=361&height=540&quality=90 ","https://cdn.jolybell.com/images/gVbwQil26jKjtqC.webp?width=361&height=540&quality=90 "],
	"price": 36.5,
	"description": "<p>Combination: 60% cotton, 40% polyester. Density 320 gm/m²</p>",
	"sizes": [ "XS","S", "M", "L","XL", "2XL","3XL"]
},
{
	"id": 24,
	"name": "JOLY.SHOT Simple White",
	"images":[ "https://cdn.jolybell.com/images/0TLhO7qkbxPM9SA.webp?width=387&height=360&quality=85","https://cdn.jolybell.com/images/0LTPEBYMNUXg2fm.webp?width=642&height=540&quality=90 "],
	"price": 36.5,
	"description": "<p>Just white. Nothing more.</p><p>There are hidden in-seam pockets on the sides for your phone and other stuff.</p><p>Combination: 100% cotton. Density 220gm/m²</p>",
	"sizes": [ "XS","S", "M", "L","XL", "2XL","3XL"]
},
{
	"id": 25,
	"name": "Jacket black",
	"images": ["https://cdn.jolybell.com/images/qHFO0z5G1dmYxqP.webp?width=387&height=360&quality=85","https://cdn.jolybell.com/images/MBJWXCWscJ7diEv.webp?width=641&height=540&quality=90","https://cdn.jolybell.com/images/XEMHzby4ggntrIK.webp?width=361&height=540&quality=90 ","https://cdn.jolybell.com/images/TvJyBIabN3EtMwK.webp?width=361&height=540&quality=90 "," https://cdn.jolybell.com/images/56ZAjAjkEJf7Cgk.webp?width=361&height=540&quality=90","https://cdn.jolybell.com/images/mDAyGnwct7OrMe8.webp?width=361&height=540&quality=90 ","https://cdn.jolybell.com/images/tI8lAmXMGUfUMjh.webp?width=361&height=540&quality=90 "," https://cdn.jolybell.com/images/AI9kQ21fRRnN66h.webp?width=361&height=540&quality=90"],
	"price": 36.5,
	"description": "<p>Anglicisms will not pass</p><p>Combination: 60% cotton, 40% polyester. Density 320 gm/m²</p>",
	"sizes": [ "XS","S", "M", "L","XL", "2XL","3XL"]
},
{
	"id": 26,
	"name": "JOLY.SHOT B.O.M.J Black",
	"images": ["https://cdn.jolybell.com/images/55qlqQNta3nmPHJ.webp?width=387&height=360&quality=85","https://cdn.jolybell.com/images/7SbLZKVpKaF1luB.webp?width=642&height=540&quality=90 "," https://cdn.jolybell.com/images/jApmkARwc2UBzuA.webp?width=361&height=540&quality=90"," https://cdn.jolybell.com/images/79P5KhZaMQZ2a7O.webp?width=361&height=540&quality=90"," https://cdn.jolybell.com/images/ZjtIJ7XRvnHdttI.webp?width=361&height=540&quality=90"],
	"price": 36.5,
	"description": "<p>Still counter-brand, but warmer. It's not love that warms, but the fabric.</p><p>Combination: 60% cotton, 40% polyester. Density 320 gm/m²</p>",
	"sizes": [ "XS","S", "M", "L","XL", "2XL","3XL"]
}

];

let categories = [bags, hoodies, sweatshirts, tshirts];

let burger = document.querySelector('.header-bottom__mobile-icon');

burger.addEventListener('click', () => {
	let mobileBlack = document.querySelector('.header-bottom__mobile-black');
	let mobileMenu = document.querySelector('.header-bottom__mobile-menu');
	let mobileMenuClose = document.querySelector('.header-bottom__mobile-menu-icon');

	mobileBlack.style.display = 'block';
	setTimeout(() => {
        mobileBlack.style.opacity = '0.5';
    }, 1);
	mobileMenu.style.right = '0px';
	document.body.style.overflow = 'hidden';

	
	function closeMobileMenu(){
		mobileBlack.style.opacity = '0';
		mobileMenu.style.right = '-280px';
		setTimeout(() => {
		mobileBlack.style.display = 'none';
		}, 300);
		document.body.style.overflow = 'auto';
	}
	
	mobileMenuClose.addEventListener('click', () => {
		closeMobileMenu();
	})




	setTimeout( () => {
		mobileBlack.addEventListener('click',function(event) {
			if (event.target.classList.contains('header-bottom__mobile-black')) {
				closeMobileMenu();
			}
		});
		}, 300);
})


let headerCart = document.querySelector('.header-bottom-right__cost');
	function calculateHeaderCartPrice() {
				let jsonString = localStorage.getItem('cart');
				
			
				let cart = JSON.parse(jsonString);
			
				let totalPrice = cart.reduce((sum, item) => {
					return sum + item.count * item.price;
				}, 0);
			
				
				// totalDue.innerText = `${parseFloat(totalPrice)} USD`; 
				headerCart.innerHTML =`${parseFloat(totalPrice)} USD`; 
			}

calculateHeaderCartPrice();

let cartButton = document.querySelector('.header-bottom-right__menu-cart');


// Example usage
// localStorage.clear();
// addProduct('31', 2, 2, 25);

function addProduct(id, count, sizeIndex, price) {
    // let storageProduct = { id, count, sizeIndex, price};
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Find if the product exists in the cart
    const index = cart.findIndex(item => item.id === id && item.sizeIndex === sizeIndex);

    if (index >= 0) {
		console.log(cart[index].count);
        // Update existing product count
        cart[index].count = Number(count) + Number(cart[index].count);
		console.log(cart[index].count);
		
    } else {
        // Add new product to the cart

        cart.push({ id, count, sizeIndex, price});
    }

    // Save updated cart back to local storage
    localStorage.setItem('cart', JSON.stringify(cart));
	// console.log(product.price)
}


function removeProduct(id, size){
	let cart = JSON.parse(localStorage.getItem('cart')) || [];
	
	cart = cart.filter(item => !(item.id === id && item.sizeIndex === size));
	
	localStorage.setItem('cart', JSON.stringify(cart));
}



function getCartProducts() {
    // Retrieve the cart data from local storage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Iterate over the cart items
    cart.forEach(product => {
        // Process each product
        console.log(`ID: ${product.id}, Count: ${product.count}, Size Index: ${product.sizeIndex}`);
        
        // Example: You can create new DOM elements or objects for each product
        createCartItemElement(product);
    });

}

// Function to create DOM elements for a product (for example, in the cart UI)
function createCartItemElement(storageProduct) {
	console.log(storageProduct.count);
	let product;
	let category;

	for (let categoryArray of categories) {
		for (let productObject of categoryArray) {
		if (productObject.id == storageProduct.id) {
			product = productObject;
			category = categoryArray;
			break;
		}
		}
	}
	
	let cartList = document.querySelector('.modal__cart-list');
	let cartProduct = document.createElement('div');
	cartProduct.classList.add("modal__cart-product");
	cartProduct.setAttribute('id', product.id);
	cartProduct.innerHTML = `<a href="/product.html?id=${product.id}" class="modal__cart-product-img">
									<img src="${product.images[0]}" alt="">
								</a>
								<div class="modal__cart-product-info">
									<h2 class="modal__cart-product-name">${product.name}</h2>
									<div class="modal__cart-product-size">
										<div class="modal__cart-product-size-title">Size:</div>
										<div class="modal__cart-product-size-buttons">
										</div>
									</div>
									<div class="modal__cart-product-counter">
										<div class="modal__cart-product-counter-title">Quantity:</div>
										<div class="modal__cart-product-counter-button">
											<input type="text" class="modal__cart-product-counter-input" value="${storageProduct.count}">
											<button class="modal__cart-product-counter-plus"><svg class="plus" xmlns="http://www.w3.org/2000/svg" viewBox=""><path d="M9 4H5V0H4v4H0v1h4v4h1V5h4z"></path></svg></button>
											<button class="modal__cart-product-counter-minus">
												<svg class="minus" xmlns="http://www.w3.org/2000/svg" viewBox=""><path d="M9 4v1H0V4z"></path></svg>
											</button>
										</div>
									</div>
									<div class="modal__cart-product-price">
										<span class="modal__cart-product-price-current"> USD</span>
									</div>
									</div>
									<div class="modal__cart-product-delete">
									<svg class="cross2" xmlns="http://www.w3.org/2000/svg" viewBox=""><path d="M7 .6L6.4 0 3.5 2.9.6 0 0 .6l2.9 2.9L0 6.4l.6.6 2.9-2.9L6.4 7l.6-.6-2.9-2.9z"></path></svg>
									</div>`



	setTimeout(() =>{
		let cartInput = cartProduct.querySelector('.modal__cart-product-counter-input');
		let cartPlus = cartProduct.querySelector('.modal__cart-product-counter-plus');
		let cartMinus = cartProduct.querySelector('.modal__cart-product-counter-minus');
		let priceSpan = cartProduct.querySelector('.modal__cart-product-price-current');
		let totalDue = document.querySelector('.modal__cart-price-value');
		let headerCart = document.querySelector('.header-bottom-right__cost');
	
		

		let currentSizeIndex = storageProduct.sizeIndex;

		if (category == bags){
			let sizeCartBlock = cartProduct.querySelector('.modal__cart-product-size');
			sizeCartBlock.remove();
		} else{
			
			let sizeCartContainer = cartProduct.querySelector('.modal__cart-product-size-buttons');
			
			console.log(currentSizeIndex);
			
			product.sizes.forEach((button, index) => {
			let sizeCartButton = document.createElement('div');
			sizeCartButton.textContent = `${button}`;
			sizeCartButton.classList.add('modal__cart-product-size-item');
	
			if (index == currentSizeIndex) 
				sizeCartButton.setAttribute('active', 'true');
			else 
				sizeCartButton.setAttribute('active', 'false');
		
			sizeCartContainer.append(sizeCartButton);
			});
	
	
			let cartSizeButtons = cartProduct.querySelectorAll('.modal__cart-product-size-item');
	
			



			cartSizeButtons.forEach((item, index) => {
				item.addEventListener('click', () => {
					cartSizeButtons.forEach(item => item.setAttribute('active', 'false'));
					item.setAttribute('active', 'true');
					cartSizeButtons.forEach((item,index) => {
						if (item.getAttribute("active") == "true"){
							
							removeProduct(product.id, currentSizeIndex);
							
							currentSizeIndex = index;
							
							// CHECK IF ANY PRODUCT HAS SAME ID AND SIZE AND REMOVE ONE IF IT HAS
							let cart = JSON.parse(localStorage.getItem('cart')) || [];
						
							cart.forEach(item => {if (item.id === product.id && item.sizeIndex === currentSizeIndex){
								
							addProduct(product.id, 0, currentSizeIndex, product.price);

							setTimeout(() => {
								cartList.innerHTML = ``;
								getCartProducts();
								}, 500)
							}});

							addProduct(product.id, cartInput.value, currentSizeIndex, product.price);
						
						}
					})
				})
			});	
	
			}

			function calculateTotalPrice() {
				let jsonString = localStorage.getItem('cart');
				
			
				let cart = JSON.parse(jsonString);
			
				let totalPrice = cart.reduce((sum, item) => {
					return sum + item.count * item.price;
				}, 0);
			
				
				totalDue.innerText = `${parseFloat(totalPrice)} USD`; 
				headerCart.innerHTML =`${parseFloat(totalPrice)} USD`; 
			}
	
				function changeProductPrice(){
				let productPrice = parseFloat(`${product.price}`);
			
				const quantity = parseFloat(cartInput.value);
			
				const totalPrice = productPrice * quantity;
			
				priceSpan.textContent = `${parseFloat(totalPrice)} USD`;
				
				calculateTotalPrice();
				}
				

			let deleteButton = cartProduct.querySelector(`.modal__cart-product-delete`);

			deleteButton.addEventListener('click', () => {



			removeProduct(product.id, currentSizeIndex);
			cartProduct.remove();
			calculateTotalPrice();
			// let cart = JSON.parse(localStorage.getItem('cart')) || [];
			// console.log(cart);
			// cart = cart.filter(item => !(item.id === product.id && item.sizeIndex === active));
			// console.log(cart);
			// localStorage.setItem('cart', JSON.stringify(cart));
			
		})


	
			
		
		
		
			cartPlus.addEventListener('click', ()=>{
				if ( cartInput.value < 20){
					let currentValue = parseInt(cartInput.value);
					cartInput.value = currentValue + 1;
					addProduct(product.id, 1, currentSizeIndex, product.price);
					changeProductPrice();
				}
			})
		
			cartMinus.addEventListener('click', ()=>{
				if ( cartInput.value > 1){
					let currentValue = parseInt(cartInput.value);
					cartInput.value = currentValue - 1;
					addProduct(product.id, -1, currentSizeIndex, product.price);
					changeProductPrice();
				} else if (cartInput.value = 1){
					let currentValue = parseInt(cartInput.value);
					cartInput.value = currentValue - 1;
					removeProduct(product.id, currentSizeIndex);
					setTimeout(()=> cartProduct.remove(), 1000)
				
					calculateTotalPrice();
				}
			})


			let oldCartValue = Number(cartInput.value);


			cartInput.addEventListener('change', () => {
				let newCartValue = Number(cartInput.value);

				let difference = newCartValue - oldCartValue;
		
				if (newCartValue == 0) {
					removeProduct(product.id, currentSizeIndex);
					cartProduct.remove();
				} else {
					addProduct(product.id, difference, currentSizeIndex, product.price);
				}

				calculateTotalPrice();

				oldCartValue = newCartValue;
			});

			cartInput.addEventListener('input', (event) => {

				
                let value = cartInput.value;

                // Удаление всех нечисловых символов
                value = value.replace(/[^0-9]/g, cartInput.value);

                // Ограничение чисел до 20
                if (value !== '' && (isNaN(value) || parseInt(value, 10) > 20)) {
                    value = value.slice(0, value.length - 1);
                }
				if (value > 20) {
                    cartInput.value = 20;
                }
                // Обновление значения поля ввода
                cartInput	.value = value;
			})


			changeProductPrice();

	},1)



	
	cartList.appendChild(cartProduct);
}
// Example usage: Call this function when you need to update the cart display


function openCart(){

	
	let modalsContainer = document.querySelector('.modals');
	modalsContainer.innerHTML = `<div class="modal">
				<div class="modal-container">
					<div class="modal-black"></div>
					<div class="modal__cart">
						<button class="modal__cart-continue">
							<div class="modal__cart-continue-icon"><svg class="arrow4" xmlns="http://www.w3.org/2000/svg" viewBox=""><path d="M2.2 16L16.7 1.5c.4-.4.4-.9 0-1.3s-.9-.4-1.3 0L.3 15.4c-.4.4-.4.9 0 1.3l15.2 15.1c.2.2.4.3.6.3.2 0 .5-.1.6-.3.4-.4.4-.9 0-1.3L2.2 16z"></path></svg></div>
							<span>Continue shopping</span>
						</button>
						<div class="modal__cart-title">My purchases</div>
						<div class="modal__cart-list">
							
						</div>
						<div class="modal__cart-info">
							<div class="modal__cart-info-container">
								<div class="modal__cart-promo">
									<div class="modal__cart-promo-title">Promocode</div>
									<form action="" class="modal__cart-promo-form">
										<input type="text" class="modal__cart-promo-input" value="">
										<a href="/index.html" class="modal__cart-promo-button"><span>Apply</span></a>
									</form>
								</div>
								<div class="modal__cart-price">
									<span class="modal__cart-price-title">Total due:</span>
									<span class="modal__cart-price-value">0 USD</span>
								</div>
								<a href="/index.html" class="modal__cart-checkout">
									<span>Checkout</span>
								</a>
							</div>
						</div>
					</div>
				</div>
	</div>`;
	
	document.body.style.overflow = 'hidden';

	let modal= document.querySelector('.modal-container');

	let continueShopping = document.querySelector('.modal__cart-continue');

	let black = document.querySelector('.modal-black');
	
	let cart = document.querySelector('.modal__cart');



	getCartProducts();



	setTimeout(() => cart.style.right = "0px", 1);
	

	function closeCart(){
		black.style.opacity = '0';
		cart.style.right = "-380px";
		setTimeout(() => {
			modalsContainer.innerHTML = ``;
			document.body.style.overflow = 'auto';
		}, 500);
	};
	

	continueShopping.addEventListener('click', () => closeCart())

	setTimeout( () => {
	modal.addEventListener('click',function(event) {
		if (event.target.classList.contains('modal-container')) {
			closeCart();
		}
	});
	}, 350);
}



cartButton.addEventListener('click',() =>{
	openCart();

});


let yourOrder = document.querySelector('.your-order');

yourOrder.addEventListener('click', () => {
	let modalsContainer = document.querySelector('.modals');
	modalsContainer.innerHTML = `<div class="modal">
				<div class="modal-container">
					<div class="modal-black"></div>
					<div class="modal__order">
						<span class="modal__order-title">Order status</span>
						<form action="" class="modal__order-form">
							<div class="modal__order-form-container">
								<div class="modal__order-form-title">Order number</div>
								<input type="text" maxlength="225" class="modal__order-form-input">
							</div>
							<a href="/index.html" class="modal__order-form-button">
								<span>Find the order</span>
								<div class="modal__order-form-arrow"><svg class="arrow" xmlns="http://www.w3.org/2000/svg" viewBox=""><path d="M12 3.7v-.1-.1-.1c0-.1-.1-.1-.1-.2l-3-3C8.7 0 8.3 0 8.1.1s-.1.6 0 .8L10.3 3H.5c-.3 0-.5.2-.5.5s.2.5.5.5h9.8L8.1 6.1c-.1.2-.1.6 0 .8.2.1.6.1.8 0l3-3c0-.1 0-.1.1-.2z"></path></svg></div>
							</a>
						</form>
						<div class="modal-sizecare-icon"><svg class="cross" xmlns="http://www.w3.org/2000/svg" viewBox=""><polygon points="15,0.54 14.46,0 7.5,6.96 0.54,0 0,0.54 6.96,7.5 0,14.46 0.54,15 7.5,8.04 14.46,15 15,14.46 8.04,7.5"></polygon></svg></div>
					</div>
				</div>
	</div>`;

	let modalOrder = document.querySelector('.modal__order');

	let black = document.querySelector('.modal-black');
	let closeSizeCare = document.querySelector('.modal-sizecare-icon');

	let modal = document.querySelector('.modal-container')

	setTimeout(() => {
		modalOrder.classList.add('open');
	}, 100);
	document.body.style.overflow = 'hidden';


	function closePopup (){
		black.style.opacity = '0';
		modalOrder.classList.remove('open');
		modalOrder.classList.add('close');
		setTimeout(() => {
		modalsContainer.innerHTML = ``;
		document.body.style.overflow = 'auto';
	}, 500);
	}

	setTimeout( () => {

		modal.addEventListener('click',function(event) {
			if (event.target.classList.contains('modal-container')) {
				closePopup();
			}
		})
		}, 350);

	closeSizeCare.addEventListener('click', () => {
		closePopup();
		})
})