import React from "react";
import Oops from "img/pets/IMG_0430.jpg";
import Nana from "img/pets/IMG_2529.jpg";
import Jack from "img/pets/396707034.jpg";
import Millie from "img/pets/IMG_0327.jpg";
import Chia from "img/pets/IMG_0542.jpg";
import MsKitty from "img/pets/20191205_205151.jpg";

const HelloPets = () => {
	return (
		<div>
			<h1>Meet My Pets</h1>
			<p>
				I am super grateful for the pets in my life. I think they are
				awesome, even if they are assholes sometimes. I never formally
				went to adopt a pet. How I got them are an amalgamation of
				circumstance and life changes. Never would I exchange their
				companionship for something else in this world.
			</p>
			<p>
				Today I will just go over today how I met these critters. In the
				future I am sure each animal will have its own dedicated story
				on how I met them.
			</p>
			<p>
				Take for example, my first cat Oops. Yeah, he is a cute little
				guy. I was living by myself in an apartment that was too hot for
				a person to stay sane in. I was all alone, working, and not
				doing much else. Thankfully, I had some good friends who let me
				know I needed something else alive in my apartment. I was
				thinking about adopting a cat, but that is a big responsibility.
				One was thrusted into my life. Meet Oops.
			</p>
			<img
				src={Oops}
				alt="Opps the cat"
				className="m-2"
				style={{width: "80%"}}
			/>
			<p>
				Next is Nana. Sweet sweet Nana. I met Nana shortly after I met
				my fiancé Lizzy. She loved me the moment she laid eyes on me.
				Lizzy took a little while longer, I think. Nana and I really
				took off and the rest is history. Her days are mostly spent
				sleeping. Old dogs deserve to sleep all day.
			</p>
			<img
				src={Nana}
				alt="Nana the goat"
				className="m-2"
				style={{width: "80%"}}
			/>
			<p>
				After Liz and I had moved in together, she lamented that we
				needed another pet. More accurately we needed some more cat
				energy in the house. After all Oops couldn’t be the only cat?
				Boy did the universe deliver. While Liz and I were walking home,
				this tiny black critter was running up the sidewalk and jumped
				right into my arms. He quickly grew from a few pounds to 17
				pounds. Jack is a big boy and can be mean, but overall a sweet
				boy. Kind of.
			</p>
			<img
				src={Jack}
				alt="Jack the panther"
				className="m-2"
				style={{width: "80%"}}
			/>
			<p>
				Next is Millie the bean-wise. Bean-wise is not my own invention,
				rather the title that was earned and given by her mother,
				Lizzy’s sister. Millie came into my life full time after Lizzy’s
				sister Emily moved in with us. It is a great arrangement and I
				love this sweet dog. In this dog’s life, I am a distant foot
				note whenever her mom comes into the picture.
			</p>
			<img
				src={Millie}
				alt="Millie the bean"
				className="m-2"
				style={{width: "80%"}}
			/>
			<p>
				The newest edition to the pack is Chia. This little critter was
				dropped on me very suddenly and quickly. I had no idea there was
				another dog coming into the picture. Liz and Emily came home one
				day and looked at me like I was in trouble. They were right. The
				wiener is only about 7 months old, and is one rambunctious
				puppy. She has a feisty personality. Chia is also a sucker for
				anything food related.
			</p>
			<img
				src={Chia}
				alt="Chia the seed"
				className="m-2"
				style={{width: "80%"}}
			/>
			<p>
				Finally, we have Ms. Kitty. This sweet girl left us late last
				year. She was a beautiful old lady that took no shit from
				anyone. She is sorely missed.
			</p>
			<img
				src={MsKitty}
				alt="Ms.Kitty the sassy"
				className="m-2"
				style={{width: "80%"}}
			/>
			<p>
				I don’t post many pictures on social media, however if a picture
				is requested of one my furry friends I will be quick to oblige.
			</p>
		</div>
	);
};

export default HelloPets;