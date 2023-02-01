import styles from "../../styles/blog.module.scss";
import BlogTitle from "../../components/BlogTitle";
import Code from "../../components/Code";
import Image from "next/image";

// @todo
// https://morioh.com/p/bbbce90d65c5 for cloudflare worker for our remote images.

const BuildTwitterBot = () => {
	return (
		<article className={styles["article"]}>
			<BlogTitle
				title={"How to Build a Twitter Bot"}
				subHeading={"Save Some Time and Learn from Me."}
				dateTime={"2023-01-31"}
				humanDate={"January 31st, 2021"}
			/>
			<p>
				Building a twitter bot looks deceptively easy. It really isn’t
				hard to do, but there are pitfalls that I landed in that made my
				life a lot harder. Here I am going to go over the major steps on
				how I built a simple twitter bot. I am also going to go over why
				I built it so you can see how you can make the mundane tasks a
				little better throughout your day. I will also highlight the big
				steps that cause me some headaches and how I would recommend
				avoiding them.
			</p>

			<h3>Requirements To Build A Twitter Bot</h3>
			<p>
				The requirements for this project are simple. Have Node.JS
				installed, an IDE or text editor you like, a twitter account you
				would like to turn into a bot. Also, some time will help you in
				this endeavor.
			</p>

			<h3>Why I build the Bot</h3>

			<p>
				I saw while scrolling mindlessly on my twitter feed my twitter
				friend asked for bot that would reminder her once a week to feed
				their isopods. This was a fun little project that my developer
				brain loved to tackle. Having fun with a new api, helping
				someone with a cool hobby, and using technology to wrap it with
				a bow. Right down my alley. First thing was first. The
				requirements for this project were simple. Tweet once a week
				with a person tagged in the tweet. Perfect.
			</p>

			<h3>Set Up</h3>

			<p>
				The first step in this whole process is to get a twitter account
				that you would like to turn into your bot account. For me I
				registered a dummy gmail account and used that to sign up for
				twitter. I got a handle I wanted that was clear what this
				account was for, I had the words isopod and bot in it. The easy
				part was over.
			</p>
			<p>
				Next up, we need to sign up for the api. Head over to
				https://developer.twitter.com/ and head over to the Join button
				that is on the home page. Fill out the form, and you are ready
				to begin your twitter journey!
			</p>

			{/* <Image
				src="https://i.imgur.com/inr1oSm.jpg"
				width={448}
				height={141}
				alt={
					"The twitter header with profile picture and developer portal"
				}
			/>

			<Image
				src="https://i.imgur.com/b6XFoMc.jpg"
				width={700}
				height={703}
				alt={"The app sign up form."}
			/> */}

			<p>
				Please ignore all keys that are generated for you at this time.
				We are going to need to reissue them with updated permissions in
				a few minutes.
			</p>

			<p>
				Now that you have a Twitter developer account, it’s time for us
				to crack some eggs. In these next steps we will change our bots
				permissions settings as well as generate some new keys for us in
				the process.
			</p>
			<p>
				First head to your developer dashboard. Here you will see the
				total tweets you have used for the month, as well as your new
				project name. Click the gear icon / app setting in that project.
				At the very bottom of the setting, you will see a card with
				“User authentication settings”. Click the edit icon. Here you
				have your app permissions as well as app info. Change your app
				permission to read and write, type of app to “Web App, Automated
				App or Bot”, and fill out the app info. You can use your
				machines local IP address (192.168…) for the Callback URI /
				Redirect URL information, and a personal site for your Website
				URL. Save these changes.
			</p>

			{/* <Image
				src="https://i.imgur.com/kMwqb0d.jpg"
				width={400}
				height={249}
				alt={
					"App permissions card. It is critical that this is updated if you want to create tweets to twitter."
				}
			/> */}

			<p>
				Next up, key generation. Head back to your dashboard, and hit
				the icon that looks like a key. Regenerate the following keys
				and keep notes of them: API Key and Secret, Bearer Token, and
				Access Token and Secret. These we will need to use to
				authenticate to the API. It is critical you appropriately
				updated your app permissions correctly or else you will not be
				able to post new content, only read existing content. I have
				more fun creating stuff on the interwebs than reading from it,
				but that’s just me.
			</p>

			<h3>The Code</h3>

			<p>
				We are here. We can code. Start a new node project using yarn
				init or npm init. Go ahead and add our packages that we want. I
				opted for these three:
				<Code>yarn add @netlify/functions dotenv twitter-api-v2</Code>
			</p>

			<p>
				We are cooking with gas at this point. I structured my project
				into 3 different folders: client, consts, and functions. First
				we will build our twitter client, then our functions. Our
				constants are there for our reference, or in my case that is
				were I put my canned tweets. At this point also add .env to your
				.gitignore file add add your tokens that you generated
				previously with that.
			</p>

			<p>
				Our clients code is simple. We are going to import TwitterApi
				from the corresponding package, pass our keys into that, and
				export it. Bare bones the file will look like this:
				<Code>
					const &#123;TwitterApi&#125; =
					require(&quot;twitter-api-v2&quot;);
					<br />
					const client = new TwitterApi(
					<br />
					&#123;
					<br />
					appKey: process.env.API_KEY,
					<br />
					appSecret: process.env.API_KEY_SECRET,
					<br />
					accessToken: process.env.API_ACCESS_TOKEN,
					<br />
					accessSecret: process.env.API_TOKEN_SECRET,
					<br />
					&#125;
					<br />
					);
					<br />
					const bearer = new TwitterApi(process.env.BEARER_TOKEN);
					<br />
					const twitterClient = client.readWrite;
					<br />
					const twitterBearer = bearer.readOnly;
					<br />
					<br />
					module.exports = &#123;twitterClient, twitterBearer&#125;;
					<br />
				</Code>
			</p>

			<p>
				Now in your functions, all you need is to import your new
				twitterClient, and then use your function to post!
				<Code>
					await twitterClient.v2.tweet(&quot;Hello World&quot;);
				</Code>
			</p>

			<p>Go forth and use this knowledge for good.</p>
		</article>
	);
};

export default BuildTwitterBot;
