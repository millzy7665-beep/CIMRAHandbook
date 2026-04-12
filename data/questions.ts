export type Question = {
	id: number;
	category: string;
	question: string;
	options: string[];
	correctIndex: number;
	explanation: string;
};

export const categories = [
	"Rules of the Road",
	"Road Signs",
	"Speed Limits",
	"Motorcycle Equipment",
	"Alcohol & Drugs",
	"Right of Way",
	"Hazards & Safety",
	"Licensing & Law",
];

export const questions: Question[] = [
	// ...full question array migrated from web version...
];

export const getQuestionsByCategory = (category: string) =>
	questions.filter((q) => q.category === category);

export const getRandomQuestions = (count: number): Question[] => {
	const shuffled = [...questions].sort(() => Math.random() - 0.5);
	return shuffled.slice(0, Math.min(count, shuffled.length));
};
