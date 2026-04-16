import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import { handbookSections } from "../../data/handbook";

export default function HandbookScreen() {
  const [sectionIndex, setSectionIndex] = useState(0);
  const [chapterIndex, setChapterIndex] = useState(0);
  const section = handbookSections[sectionIndex];
  const chapter = section?.content[chapterIndex];

  if (!section) return null;

  function goToSection(nextIndex: number) {
    setSectionIndex(nextIndex);
    setChapterIndex(0);
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#0a0f1e" }}>
      <View style={styles.header}>
        <Text style={styles.emoji}>{section.emoji}</Text>
        <Text style={styles.title}>{section.title}</Text>
        <Text style={styles.summary}>{section.summary}</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {chapter ? (
          <View style={styles.page}>
            <Text style={styles.chapterHeading}>{chapterIndex + 1}. {chapter.heading}</Text>
            {chapter.body.map((para: string, index: number) => (
              <Text key={index} style={styles.body}>{para}</Text>
            ))}
            {chapter.tip ? (
              <View style={styles.tipBox}>
                <Text style={styles.tipEmoji}>💡</Text>
                <Text style={styles.tip}>{chapter.tip}</Text>
              </View>
            ) : null}
          </View>
        ) : (
          <View style={styles.page}>
            <Text style={styles.chapterHeading}>No chapter available</Text>
          </View>
        )}

        <View style={styles.chapterNav}>
          <TouchableOpacity
            disabled={chapterIndex === 0}
            onPress={() => setChapterIndex((currentIndex) => Math.max(0, currentIndex - 1))}
          >
            <Text style={[styles.sectionNavBtn, chapterIndex === 0 && styles.disabledBtn]}>← Prev Chapter</Text>
          </TouchableOpacity>
          <Text style={styles.sectionNavTitle}>
            Chapter {Math.min(chapterIndex + 1, section.content.length)} / {section.content.length}
          </Text>
          <TouchableOpacity
            disabled={chapterIndex >= section.content.length - 1}
            onPress={() => setChapterIndex((currentIndex) => Math.min(section.content.length - 1, currentIndex + 1))}
          >
            <Text
              style={[
                styles.sectionNavBtn,
                chapterIndex >= section.content.length - 1 && styles.disabledBtn,
              ]}
            >
              Next Chapter →
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={styles.sectionNav}>
        <TouchableOpacity disabled={sectionIndex === 0} onPress={() => goToSection(sectionIndex - 1)}>
          <Text style={[styles.sectionNavBtn, sectionIndex === 0 && styles.disabledBtn]}>← Prev Section</Text>
        </TouchableOpacity>
        <Text style={styles.sectionNavTitle}>{section.title}</Text>
        <TouchableOpacity
          disabled={sectionIndex >= handbookSections.length - 1}
          onPress={() => goToSection(sectionIndex + 1)}
        >
          <Text
            style={[
              styles.sectionNavBtn,
              sectionIndex >= handbookSections.length - 1 && styles.disabledBtn,
            ]}
          >
            Next Section →
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    paddingTop: 24,
    paddingBottom: 8,
    backgroundColor: "#0a0f1e",
  },
  emoji: {
    fontSize: 40,
    marginBottom: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 4,
  },
  summary: {
    color: "#b0b8d0",
    fontSize: 14,
    textAlign: "center",
    marginBottom: 8,
    paddingHorizontal: 16,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
  page: {
    backgroundColor: "#181f2e",
    borderRadius: 18,
    padding: 20,
    marginVertical: 12,
    minHeight: 340,
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
  chapterHeading: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4fd1c5",
    marginBottom: 8,
  },
  body: {
    color: "#e2e8f0",
    fontSize: 15,
    marginBottom: 8,
    lineHeight: 22,
  },
  tipBox: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "#f4a30022",
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },
  tipEmoji: {
    fontSize: 18,
    marginRight: 6,
    marginTop: 2,
  },
  tip: {
    color: "#f4a300",
    fontSize: 14,
    flex: 1,
  },
  chapterNav: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 12,
    gap: 12,
  },
  sectionNav: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#0a0f1e",
  },
  sectionNavBtn: {
    color: "#4fd1c5",
    fontWeight: "bold",
    fontSize: 15,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  sectionNavTitle: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
    flex: 1,
    textAlign: "center",
  },
  disabledBtn: {
    color: "#334155",
  },
});
