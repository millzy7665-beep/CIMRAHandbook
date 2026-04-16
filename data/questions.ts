export type Question = {
	id: number;
	category: string;
	question: string;
	options: string[];
	correctIndex: number;
	explanation: string;
};

export const questions: Question[] = [
	{
		id: 1,
		category: "Rules of the Road",
		question: "Which side of the road must traffic use in the Cayman Islands?",
		options: ["The left-hand side", "The right-hand side", "The centre lane", "Either side if clear"],
		correctIndex: 0,
		explanation:
			"The Cayman Islands follows British road-use convention, so all traffic travels on the left-hand side of the road.",
	},
	{
		id: 2,
		category: "Rules of the Road",
		question: "After overtaking another vehicle, where should you return?",
		options: ["To the left side of the road", "To the middle of the road", "To the right lane", "Anywhere with space"],
		correctIndex: 0,
		explanation:
			"After overtaking, you should return to the left side of the road when it is safe to do so.",
	},
	{
		id: 3,
		category: "Right of Way",
		question: "Who has priority at a roundabout?",
		options: ["Traffic already in the roundabout", "Traffic waiting to enter", "The largest vehicle", "Vehicles signalling right"],
		correctIndex: 0,
		explanation:
			"You must give way to traffic that is already circulating in the roundabout.",
	},
	{
		id: 4,
		category: "Right of Way",
		question: "Which lane should you normally use for the first exit at a roundabout?",
		options: ["The left lane", "The right lane", "Any lane", "The centre lane only"],
		correctIndex: 0,
		explanation:
			"Keep to the left lane for the first exit unless road markings say otherwise.",
	},
	{
		id: 5,
		category: "Right of Way",
		question: "When should you signal left on a roundabout if taking a later exit?",
		options: ["After passing the exit before yours", "As soon as you enter", "Only when stopping", "You do not need to signal left"],
		correctIndex: 0,
		explanation:
			"If going beyond the first exit, you signal left once you pass the exit before the one you plan to take.",
	},
	{
		id: 6,
		category: "Hazards & Safety",
		question: "Where is overtaking prohibited according to the handbook?",
		options: ["On a solid white centre line", "On a straight road with good visibility", "On a broken white line when safe", "After checking mirrors"],
		correctIndex: 0,
		explanation:
			"You must not overtake on a solid white centre line or in marked no-overtaking zones.",
	},
	{
		id: 7,
		category: "Hazards & Safety",
		question: "What should you do before overtaking?",
		options: ["Check mirrors, signal, check blind spot, and assess the gap", "Accelerate immediately", "Sound the horn and pull out", "Move right without signalling"],
		correctIndex: 0,
		explanation:
			"Safe overtaking starts with checking mirrors, signalling, checking the blind spot, and ensuring the gap is sufficient.",
	},
	{
		id: 8,
		category: "Hazards & Safety",
		question: "What should you do if another vehicle is overtaking you?",
		options: ["Maintain your speed and move left slightly", "Speed up to stop them passing", "Brake sharply", "Move toward the centre line"],
		correctIndex: 0,
		explanation:
			"When being overtaken, maintain your speed and give the overtaking vehicle room by keeping left.",
	},
	{
		id: 9,
		category: "Rules of the Road",
		question: "What is the normal lane discipline on a multi-lane road?",
		options: ["Keep left unless overtaking or turning right", "Stay in the right lane", "Use whichever lane looks fastest", "Drive in the centre lane only"],
		correctIndex: 0,
		explanation:
			"The handbook says to keep left unless overtaking or preparing to turn right.",
	},
	{
		id: 10,
		category: "Rules of the Road",
		question: "What does a broken white centre line mean?",
		options: ["You may cross it when safe", "You must never cross it", "It marks a bus lane", "Traffic must stop"],
		correctIndex: 0,
		explanation:
			"Broken white lines may be crossed when it is safe, unlike solid white lines.",
	},
	{
		id: 11,
		category: "Rules of the Road",
		question: "If the nearest line in a double white line system is solid, what must you do?",
		options: ["Do not cross it except for permitted exceptions", "Cross it freely when clear", "Use it only for overtaking", "Ignore it if you signal first"],
		correctIndex: 0,
		explanation:
			"If the line nearest you is solid, you must not cross it except in limited cases such as turning into premises or when directed by signage.",
	},
	{
		id: 12,
		category: "Licensing & Law",
		question: "What must you do at a red traffic light?",
		options: ["Stop at or before the stop line", "Slow down and continue", "Proceed if no one is coming", "Stop only if pedestrians are present"],
		correctIndex: 0,
		explanation:
			"A red light means stop at or before the stop line and do not proceed until green.",
	},
	{
		id: 13,
		category: "Licensing & Law",
		question: "What does an amber traffic light mean?",
		options: ["Stop unless stopping would be unsafe or you have crossed the line", "Speed up to clear the junction", "Proceed with full right of way", "Treat it the same as green"],
		correctIndex: 0,
		explanation:
			"Amber means stop unless you have already crossed the line or are too close to stop safely.",
	},
	{
		id: 14,
		category: "Licensing & Law",
		question: "What should you do at a green light?",
		options: ["Proceed only if it is safe and the junction is clear", "Drive through without checking", "Assume pedestrians must wait", "Sound the horn before moving"],
		correctIndex: 0,
		explanation:
			"A green light allows you to proceed, but only when it is safe and without endangering pedestrians or other traffic.",
	},
	{
		id: 15,
		category: "Licensing & Law",
		question: "What does a flashing amber light require?",
		options: ["Proceed with caution and give way to pedestrians", "Stop and wait for green", "Ignore it if the road is empty", "Use the horn before moving"],
		correctIndex: 0,
		explanation:
			"A flashing amber light means proceed carefully and give way to pedestrians.",
	},
	{
		id: 16,
		category: "Licensing & Law",
		question: "When should you use your horn?",
		options: ["Only as a safety warning in danger", "To greet other riders", "When annoyed in traffic", "To tell people to move faster"],
		correctIndex: 0,
		explanation:
			"The horn is a safety device and should only be used to warn others of potential danger.",
	},
	{
		id: 17,
		category: "Licensing & Law",
		question: "When must you avoid using the horn in built-up areas unless there is an emergency?",
		options: ["Between 11:00 pm and 7:00 am", "Between 8:00 am and 5:00 pm", "At lunchtime", "On Sundays only"],
		correctIndex: 0,
		explanation:
			"The handbook says you must not use the horn between 11:00 pm and 7:00 am in built-up areas unless there is a traffic emergency.",
	},
	{
		id: 18,
		category: "Hazards & Safety",
		question: "Which of these is NOT a safe place to overtake?",
		options: ["Near a pedestrian crossing", "On a clear straight road with room", "When the road markings allow it", "After checking mirrors and blind spot"],
		correctIndex: 0,
		explanation:
			"You should never overtake near pedestrian crossings, junctions, or brows of hills.",
	},
];

export const categories = Array.from(new Set(questions.map((question) => question.category)));

export const getQuestionsByCategory = (category: string) =>
	questions.filter((q) => q.category === category);

export const getRandomQuestions = (count: number): Question[] => {
	const shuffled = [...questions].sort(() => Math.random() - 0.5);
	return shuffled.slice(0, Math.min(count, shuffled.length));
};
