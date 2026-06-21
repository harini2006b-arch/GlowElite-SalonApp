import React, { useState } from "react";
import { motion } from "framer-motion";

import SearchBar from "../components/SearchBar";
import SalonCard from "../components/SalonCard";

import "../styles/ExploreSalons.css";

const salons = [
{
id:1,
name:"Glow Elite Studio",
location:"Indiranagar",
rating:4.9,
score:96,
image:"https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800"
},
{
id:2,
name:"Aura Luxury Salon",
location:"Koramangala",
rating:4.8,
score:94,
image:"https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800"
},
{
id:3,
name:"Velvet Beauty Lounge",
location:"Whitefield",
rating:4.9,
score:97,
image:"https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?w=800"
},
{
id:4,
name:"Royal Glam Studio",
location:"HSR Layout",
rating:4.8,
score:95,
image:"https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800"
},
{
id:5,
name:"The Luxe Salon",
location:"MG Road",
rating:4.9,
score:98,
image:"https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800"
},
{
id:6,
name:"Majestic Beauty Hub",
location:"Jayanagar",
rating:4.7,
score:93,
image:"https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800"
},
{
id:7,
name:"Elite Makeover Studio",
location:"BTM Layout",
rating:4.8,
score:95,
image:"https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800"
},
{
id:8,
name:"Blush Beauty Lounge",
location:"Hebbal",
rating:4.9,
score:97,
image:"https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800"
},
{
id:9,
name:"Signature Salon",
location:"Marathahalli",
rating:4.8,
score:95,
image:"https://images.unsplash.com/photo-1600948836101-f9ffda59d250?w=800"
},
{
id:10,
name:"Diamond Beauty Studio",
location:"Yelahanka",
rating:4.7,
score:91,
image:"https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800"
},
{
id:11,
name:"Luxury Looks",
location:"Rajajinagar",
rating:4.8,
score:94,
image:"https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=800"
},
{
id:12,
name:"Urban Glow Salon",
location:"Banashankari",
rating:4.9,
score:96,
image:"https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?w=800"
},
{
id:13,
name:"Beauty Republic",
location:"Malleshwaram",
rating:4.8,
score:95,
image:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800"
},
{
id:14,
name:"Aura Premium Studio",
location:"Bellandur",
rating:4.9,
score:97,
image:"https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800"
}
];

function ExploreSalons() {

const [searchTerm, setSearchTerm] = useState("");

const filteredSalons = salons.filter(
(salon) =>
salon.name
.toLowerCase()
.includes(searchTerm.toLowerCase()) ||

salon.location
.toLowerCase()
.includes(searchTerm.toLowerCase())
);

return (

<div className="explore-page">

<div className="container">

<motion.h1
className="explore-title"
initial={{
opacity:0,
y:-40
}}
animate={{
opacity:1,
y:0
}}
transition={{
duration:0.8
}}
>
Discover Bangalore's Finest Luxury Salons
</motion.h1>

<SearchBar
searchTerm={searchTerm}
setSearchTerm={setSearchTerm}
/>

<div className="row g-4">

{filteredSalons.length > 0 ? (

filteredSalons.map((salon) => (

<motion.div
className="col-xl-3 col-lg-4 col-md-6"
key={salon.id}
initial={{
opacity:0,
y:50
}}
animate={{
opacity:1,
y:0
}}
transition={{
duration:0.6,
delay:salon.id * 0.08
}}
>
<SalonCard salon={salon}/>
</motion.div>

))

) : (

<div className="text-center mt-5">

<h2
style={{
color:"#D4AF37"
}}
>
No Salon Found 
</h2>

<p
style={{
color:"#ccc"
}}
>
Try searching another salon
or location
</p>

</div>

)}

</div>

</div>

</div>

);
}

export default ExploreSalons;