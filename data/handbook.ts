export type HandbookSection = {
	slug: string;
	title: string;
	emoji: string;
	summary: string;
	content: HandbookChapter[];
};

export type HandbookChapter = {
	heading: string;
	body: string[];
	tip?: string;
};

export const handbookSections: HandbookSection[] = [
	{
		slug: "rules-of-the-road",
		title: "Rules of the Road",
		emoji: "🛣️",
		summary:
			"Core traffic laws that every road user in the Cayman Islands must follow, from lane discipline to overtaking.",
		content: [
			{
				heading: "Drive on the Left",
				body: [
					"The Cayman Islands follows British road-use convention — all traffic travels on the LEFT-hand side of the road. This applies to all roads, including dual carriageways.",
					"When emerging from a junction or after overtaking, always return to the left side of the road.",
				],
				tip: "Visitors and tourists must take extra care, especially when turning — always look for traffic approaching from the right.",
			},
			{
				heading: "Roundabouts",
				body: [
					"Give way to traffic ALREADY in the roundabout (circulating traffic). Only enter when there is a safe gap.",
					"Signal left when you intend to take an exit. If going straight on or turning right, signal right on entry and left when you pass the exit before yours.",
					"Keep to the left lane for the first exit; use the right lane for exits beyond 12 o'clock.",
				],
			},
			{
				heading: "Overtaking",
				body: [
					"You may only overtake when it is safe and legal to do so. Never overtake on a solid white centre line, within 'No Overtaking' zone markings, or near junctions.",
					"Before overtaking: check mirrors, signal, check blind spot, assess the gap. The gap must be sufficient to complete the overtake and return safely.",
					"When being overtaken, maintain your speed and move left slightly to give the overtaking vehicle more space.",
				],
				tip: "Never overtake the vehicle ahead if it has signalled to turn right, is approaching a pedestrian crossing, or is on or near a brow of a hill.",
			},
			{
				heading: "Lane Discipline",
				body: [
					"Keep left unless overtaking. Do not travel in the centre or right lane of a multi-lane road unless overtaking or turning right.",
					"Broken white centre lines indicate that lanes may be crossed when safe. Solid white lines must not be crossed.",
					"Double white lines: if the line nearest to you is solid, you must not cross it except to turn into premises or if directed by signage.",
				],
			},
			{
				heading: "Traffic Signals",
				body: [
					"Red light: STOP at or before the stop line. Do not proceed until the light is green.",
					"Amber (yellow) light: STOP unless you have already crossed the stop line or are so close that stopping would be dangerous.",
					"Green light: Proceed if it is safe to do so. Give way to any pedestrians or traffic still in the junction.",
					"Flashing amber: Proceed with caution and give way to pedestrians.",
				],
			},
			{
				heading: "Using Your Horn",
				body: [
					"The horn is a safety device only. Use it to alert other road users of your presence in a potentially dangerous situation.",
					"Do NOT use the horn aggressively, to greet people, or when stationary in traffic queues.",
					"Do NOT use the horn between 11:00 pm and 7:00 am in built-up areas unless there is a traffic emergency.",
				],
			},
		],
	},
	// ...remaining handbookSections copied from web version...
];

export const getSectionBySlug = (slug: string) =>
	handbookSections.find((s) => s.slug === slug);
