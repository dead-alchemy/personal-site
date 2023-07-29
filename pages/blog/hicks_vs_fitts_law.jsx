import {BlogTemplate} from "../../components";

const HicksVsFittsLaw = () => (
	<BlogTemplate
		title={{
			title: "How Hicks and Fitts Law Drive User Experiences",
			subHeading:
				"How to manage Hicks and Fitts law when building user interfaces for our users",
			description:
				"How to build and manage user interfaces when building applications for our customers and users.",
			dateTime: "2023-07-29",
			humanDate: "July 29th, 2023",
			url: "hicks_vs_fitts_law",
		}}
	>
		<p>
			When building user interfaces, there are many governing laws and
			recommendations that one should consider when designing how users
			should interact with applications or other user interfaces. There
			are two laws however that provide that individuals should always
			consider when designing them, Hick’s Law, and Fitts’ Law. Violations
			of Hick’s Law and Fitts’ Law will cause user error, panic,
			confusion, and drive people away from experiences. Hick’s Law and
			Fitts’ Law are the building blocks of creating user interfaces that
			help our users make informed choices and avoid confusion when trying
			to make any decision.
		</p>
		<h3 id="fitts_law">Fitt’s Law</h3>
		<p>
			Fitts’ law is defined as that the time required to rapidly move to a
			target area is a function of the ratio between the distance to the
			target and the width of the target. In other words, it means that
			the speed someone can find something is directly correlated with the
			size and how close it is to where they are currently looking. The
			motion we use to interact with something initially beings with a
			rapid movement and then a finer tune movement as we get closer to
			our intended target. We can find things better if they are bigger
			and closer to where we are currently drawing attention.
		</p>
		<h4 id="violation_fitts">In Violation of Fitts’ Law</h4>
		<p>
			There are many examples of Fitts’ Law in action, but we will look at
			an example of where it can cause material harm and its importance
			when considering design decisions. Bradley provides a concise
			summary of an event where in 1996 Chrysler was being investigated
			over complaints that Jeep Cherokees were accelerating instead of
			braking as drivers intended. Chrysler cited the cause of this
			complaint was that drivers were hitting the gas pedal instead of the
			brake pedal and that users were at fault. However, during the design
			and creation of the Jeep, it was uncovered that the pedals were
			moved a few inches to the left reducing the distance between the gas
			and brake pedal. This then caused drivers to hit the gas pedal
			instead of the brake pedal as they were too close together. Chrysler
			had violated Fitts’ law by placing the pedals too closely together.
		</p>
		<h4 id="desgin_fitts">How to Design Towards Fitts’ Law</h4>
		<p>
			We can take Fitts’ law and help us design better interfaces for our
			users that better help them and guide them by providing what actions
			or information they need in bigger context as well as closer to what
			they are interacting it. Take for example a simple button. Budiu
			provides a recommendation that buttons that users interact with
			should include a label if also accompanied by an icon. By including
			this label as well as the icon, we naturally enlarge the area of the
			button for users to interact making our button easier to acquire
			according to Fitts’ Law.
		</p>
		<p>
			On the other hand, we can make items that our users need to have,
			but should not normally interact with smaller than the other
			interactable elements on the screen or spacing them farther away
			from other elements. Examples of these sorts of interactions are
			things like opening the engine bay of a car. Normally on gas powered
			cars, opening the hood of the engine bay is much smaller than other
			elements in the driver’s view, and farther away from other elements
			that a driver would need to interact with. This can cause disaster
			for those who are driving if they inadvertently interact with it.
			Manufacturers have taken this interaction and moved it farther away
			from things like the steering wheel or turn signals and made it
			smaller than other elements, so it is harder for users to interact
			with unless they are specifically looking for it.
		</p>
		<p>
			To further highlight the significance of Fitts’ law, we will review
			a study conducted by Juras, Slomka, and Latash (2009) in which
			participants were instructed to jump on targets of various sizes and
			distances, measuring preparation and movement times. In summary of
			this study, participants took longer to prepare for jumping on
			smaller targets than jumping on larger targets. When gathering
			information, we take longer to interact with something that is
			smaller as we adjust for our fine motor movement. In situations
			where individuals do not have time to adjust for these fine
			movements, like for example slamming on a brake pedal, this could
			potentially lead to mistakes.
		</p>
		<h3 id="hicks_law">Hick’s Law</h3>
		<p>
			As defined by Hick, Hick’s law states that the response time in
			simple decision tasks is a linear function of the transmitted
			information. To provide more context into this definition it can be
			said that the amount of time it takes to decide is directly
			correlated with the number of choices that are present. The more
			choices that are present to make means that it takes longer to
			decide.
		</p>
		<h4 id="violation_hicks">In Violation of Hick’s Law</h4>
		<p>
			The New York Times reports of the story in June of 2008, individuals
			living in Hawaii were notified that a ballistic missile strike was
			incoming and to take immediate shelter. The alert was sent by
			mistake and was rolled back 38 minutes later. Citizens and guests of
			Hawaii were sent into a panic by this alert and caused numerous
			investigations into how a mistake of this magnitude could have been
			made. The cause was ultimately determined to be a bad user
			interface. The options to send out the alerts, including live and
			test alerts from the Hawaii Emergency Management Agency were many,
			bundled closely together, and had little contrast from each other.
			Hick’s law has been violated as a decision to send a test alert took
			too long as there were too many choices to make in one screen.
		</p>
		<h3 id="consider">Which and When Should We Consider Each Law</h3>
		<p>
			Unlike the laws of gravity and thermodynamics, Fitts’ and Hick’s
			Laws can be moved and broken if it is the right place. Often one
			cannot place all the elements we need close together or separate out
			choices that users can interact with. One reason to use one over the
			other is the users understanding or mastery over the interface or
			process. To help us understand the differences we will refer to
			Logan, Ulrich, and Lindsey’s study (2016) in how users of varying
			types interacted with keyboards and typing tests. Here we will go
			over that experience with a system that can overcome the limitations
			of Fitts’ and Hick’s Laws.
		</p>
		<p>
			In this study it was concluded that those who use a standard typing
			technique using the QWERTY keyboard layout can type faster and more
			consistently than those who use a nonstandard technique or use less
			fingers than the standard model. If we study a standard QWERTY
			keyboard, we are found with many keys that are very close together
			and are often the same size and dimension. Also, many keys that are
			commonly used together are spaced away from each other.
		</p>
		<p>
			In studying this interaction and why it’s used to measure Fitts’ and
			Hick’s law, we need to understand that using more fingers to find a
			key is a complication of Hick’s law. Standard typists use all ten of
			their fingers to interact with a keyboard, while nonstandard typists
			use less than 10. According to Hick’s law those who use less than 10
			fingers to type on a keyboard should be faster at typing a key as
			they have less choices to interact with that key. The inverse,
			however, is true. Mastery or repeated interaction with a system,
			even if it has a lot of choices, makes users faster with the
			intended system.
		</p>
		<p>
			This is the case because with practice individuals learn that
			certain fingers play certain roles when interacting with systems.
			One finger oversees certain letters, and when using all those
			fingers, typists using a standard finger layout can outperform
			nonstandard typists as this mastery of which fingers are used for
			what role outperform those who give one finger more roles. Users
			naturally find a balance between Fitts’ and Hick’s law as they
			interact with a system more.
		</p>
		<p>
			We can further balance our systems and user interfaces when
			designing it by considering how much training our users will have
			with a system. We do not need to remove choices from a system if the
			users of the system are well versed in the system. Other examples of
			this phenomenon are musical instruments like pianos and accordions
			where keys or notes are played with the same finger as they learn a
			new song. These instruments have many keys and choices, but users
			naturally find a balance between the two laws to create or reproduce
			music. When interacting with an interface repeatedly, users find the
			balance between these two laws to better help them be faster and
			more efficient than those who give themselves more options
			(fingers).
		</p>
		<h3 id="conculsion">Conculsion</h3>
		<p>
			It is important to balance the Fitts’ and Hick’s law, however, users
			if given enough experience will find this balance and incorporate
			that into their workflow. Choices do not have to be removed if users
			are expected to be trained and develop mastery over specific
			interfaces. One does need to consider if their application will
			warrant enough interaction that users will naturally gain this
			affinity, or if design choices need to be made to help guide the
			user as they may be unfamiliar with the interface of do not interact
			with it often enough.
		</p>
		<h3>References</h3>
		<ul style={{listStyleType: "none"}}>
			<li>
				Bradley, S. (2010, March 22). How To Improve Usability With
				Fitts’ and Hick’s Laws. Vanseo Design. Retrieved from
				https://vanseodesign.com/web-design/fitts-law-hicks-law/
			</li>
			<li>
				Budiu, R. (2022, July 31). Fitts’s Law and Its Applications in
				UX. Nielsen Norman Group. Retrieved from
				https://www.nngroup.com/articles/fitts-law/
			</li>
			<li>
				Fitts, Paul M. (June 1954). The Information Capacity of the
				Human Motor System in Controlling the Amplitude of Movement.
				Journal of Experimental Psychology.{" "}
			</li>
			<li>
				Hick, W.E. (1952). On the Rate of Gain of Information. Quarterly
				Journal of Experimental Psychology. Retrieved from
				http://www2.psychology.uiowa.edu/faculty/mordkoff/InfoProc/pdfs/Hick%201952.pdf
			</li>
			<li>
				Hick’s and Fitts’ laws: Two important psychological principles
				to consider when designing navigational menu structures. (2015,
				February 19). The Usability People. Retrieved from
				https://www.theusabilitypeople.com/thought_leadership/hick-s-and-fitt-s-laws-two-important-psychological-principles-consider-when
			</li>
			<li>
				Juras, G., Slomka, K., & Latash, M. (2009). Violations of Fitts’
				Law in a Ballistic Task. Journal of Motor Behavior, 41(6),
				525–528. https://doi-org.mylibrary.wilmu.edu/10.3200/35-08-015
			</li>
			<li>
				Logan, G. D., Ulrich, J. E., & Lindsey, D. R. B. (2016).
				Different (key)strokes for different folks: How standard and
				nonstandard typists balance Fitts’ law and Hick’s law. Journal
				of Experimental Psychology. Human Perception & Performance,
				42(12), 2084–2102.
				https://doi-org.mylibrary.wilmu.edu/10.1037/xhp0000272
			</li>
		</ul>
	</BlogTemplate>
);

export default HicksVsFittsLaw;
