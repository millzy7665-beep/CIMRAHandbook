import React, { useState, useMemo } from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, Dimensions } from "react-native";
import { questions, categories, getQuestionsByCategory } from "../../data/questions";

const { width } = Dimensions.get("window");

export default function QuizScreen() {
  const [started, setStarted] = useState(false);
  const [category, setCategory] = useState<string | null>(null);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);

  const quizQuestions = useMemo(() => {
    let pool = category ? getQuestionsByCategory(category) : questions;
    return [...pool].sort(() => Math.random() - 0.5).slice(0, 15);
  }, [category, started]);

  const handleSelect = (idx: number) => {
    if (selected !== null) return;
    setSelected(idx);
    setTimeout(() => {
      setAnswers((a) => [...a, idx]);
      if (current < quizQuestions.length - 1) {
        setCurrent((c) => c + 1);
        setSelected(null);
      } else {
        setShowResult(true);
      }
    }, 700);
  };

  const handleRestart = () => {
    setStarted(false);
    setCurrent(0);
    setSelected(null);
    setAnswers([]);
    setShowResult(false);
  };

  if (!started) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#0a0f1e" }}>
        <ScrollView contentContainerStyle={styles.startContainer}>
          <Text style={styles.quizTitle}>Practice Quiz</Text>
          <Text style={styles.quizDesc}>
            Test your knowledge with 15 random questions. Choose a topic or practise all.
          </Text>
          <View style={styles.categoryList}>
            <TouchableOpacity
              style={[styles.categoryBtn, !category && styles.selectedCat]}
              onPress={() => setCategory(null)}
            >
              <Text style={styles.categoryText}>All Topics</Text>
            </TouchableOpacity>
            {categories.map((cat) => (
              <TouchableOpacity
                key={cat}
                style={[styles.categoryBtn, category === cat && styles.selectedCat]}
                onPress={() => setCategory(cat)}
              >
                <Text style={styles.categoryText}>{cat}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <TouchableOpacity style={styles.startBtn} onPress={() => setStarted(true)}>
            <Text style={styles.startBtnText}>Start Quiz →</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }

  if (showResult) {
    const correct = answers.filter((a, i) => a === quizQuestions[i].correctIndex).length;
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#0a0f1e" }}>
        <View style={styles.resultContainer}>
          <Text style={styles.resultTitle}>Quiz Complete!</Text>
          <Text style={styles.resultScore}>{correct} / {quizQuestions.length} correct</Text>
          <Text style={styles.resultPercent}>{Math.round((correct / quizQuestions.length) * 100)}%</Text>
          <TouchableOpacity style={styles.startBtn} onPress={handleRestart}>
            <Text style={styles.startBtnText}>Try Again</Text>
          </TouchableOpacity>
          <ScrollView style={{ marginTop: 20 }}>
            {quizQuestions.map((q, i) => (
              <View key={q.id} style={styles.reviewBox}>
                <Text style={styles.reviewQ}>{i + 1}. {q.question}</Text>
                <Text style={answers[i] === q.correctIndex ? styles.correct : styles.incorrect}>
                  {answers[i] === q.correctIndex ? "✓ Correct" : "✗ Incorrect"}
                </Text>
                <Text style={styles.reviewA}>Correct: {q.options[q.correctIndex]}</Text>
                <Text style={styles.reviewExp}>{q.explanation}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }

  const q = quizQuestions[current];
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#0a0f1e" }}>
      <View style={styles.quizContainer}>
        <Text style={styles.qNum}>Question {current + 1} / {quizQuestions.length}</Text>
        <Text style={styles.qText}>{q.question}</Text>
        {q.options.map((opt, idx) => (
          <TouchableOpacity
            key={idx}
            style={[
              styles.optBtn,
              selected === idx && (idx === q.correctIndex ? styles.correctOpt : styles.incorrectOpt),
            ]}
            onPress={() => handleSelect(idx)}
            disabled={selected !== null}
          >
            <Text style={styles.optText}>{opt}</Text>
          </TouchableOpacity>
        ))}
        {selected !== null && (
          <Text style={selected === q.correctIndex ? styles.correct : styles.incorrect}>
            {selected === q.correctIndex ? "✓ Correct!" : "✗ Incorrect"}
          </Text>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  startContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  quizTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#4fd1c5",
    marginBottom: 10,
  },
  quizDesc: {
    color: "#b0b8d0",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 18,
  },
  categoryList: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 18,
  },
  categoryBtn: {
    backgroundColor: "#181f2e",
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 8,
    margin: 4,
  },
  selectedCat: {
    backgroundColor: "#4fd1c5",
  },
  categoryText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },
  startBtn: {
    backgroundColor: "#4fd1c5",
    borderRadius: 16,
    paddingHorizontal: 32,
    paddingVertical: 14,
    marginTop: 18,
  },
  startBtnText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  quizContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  qNum: {
    color: "#b0b8d0",
    fontSize: 15,
    marginBottom: 8,
  },
  qText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 18,
    textAlign: "center",
  },
  optBtn: {
    backgroundColor: "#181f2e",
    borderRadius: 12,
    padding: 14,
    marginVertical: 6,
    width: width * 0.8,
    alignItems: "center",
  },
  optText: {
    color: "#fff",
    fontSize: 16,
  },
  correctOpt: {
    backgroundColor: "#38b000",
  },
  incorrectOpt: {
    backgroundColor: "#e63946",
  },
  correct: {
    color: "#38b000",
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 10,
  },
  incorrect: {
    color: "#e63946",
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 10,
  },
  resultContainer: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  resultTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#4fd1c5",
    marginBottom: 10,
  },
  resultScore: {
    fontSize: 22,
    color: "#fff",
    marginBottom: 4,
  },
  resultPercent: {
    fontSize: 20,
    color: "#f4a300",
    marginBottom: 18,
  },
  reviewBox: {
    backgroundColor: "#181f2e",
    borderRadius: 12,
    padding: 14,
    marginBottom: 12,
  },
  reviewQ: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
    marginBottom: 4,
  },
  reviewA: {
    color: "#4fd1c5",
    fontSize: 14,
    marginBottom: 2,
  },
  reviewExp: {
    color: "#b0b8d0",
    fontSize: 13,
  },
});
