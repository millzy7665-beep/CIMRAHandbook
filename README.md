# Cayman Islands Motorcycle Licence Handbook App (CIMRS)

A professional, interactive, and fun offline handbook and quiz app for the Cayman Islands motorcycle licence, built with Expo (React Native).

## Features
- **Handbook Reader**: Swipeable, animated handbook with all official sections and chapters, including tips and summaries.
- **Practice Quiz**: 15-question quizzes with instant feedback, explanations, and review. Choose by topic or all topics.
- **Offline Support**: All content and quizzes work fully offline.
- **Modern UI**: Clean, accessible, and visually engaging design.
- **Fun & Interactive**: Animations, emoji, and instant feedback for an enjoyable learning experience.

## Getting Started
1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Run the app:**
   ```sh
   npm start
   ```
   Then follow Expo CLI instructions for iOS, Android, or web.

## Project Structure
- `app/(tabs)/HandbookScreen.tsx` — Handbook reader UI
- `app/(tabs)/QuizScreen.tsx` — Quiz/exam UI
- `data/handbook.ts` — Handbook content data
- `data/questions.ts` — Quiz questions and categories

## Assets
- App icon, splash, and adaptive icons in `assets/images/`

## Customization
- Edit handbook or quiz content in the `data/` folder.
- UI styles in each screen file.

## License
MIT
