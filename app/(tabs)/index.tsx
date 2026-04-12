import React, { useRef, useState } from "react";
import { View, Text, StyleSheet, Dimensions, SafeAreaView } from "react-native";
import Carousel from "react-native-snap-carousel";
import { handbookSections } from "../../data/handbook";

const { width } = Dimensions.get("window");

export default function HandbookScreen() {
  const [sectionIndex, setSectionIndex] = useState(0);
  const section = handbookSections[sectionIndex];
  const carouselRef = useRef<Carousel<any>>(null);

  if (!section) return null;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#0a0f1e" }}>
      <View style={styles.header}>
        <Text style={styles.emoji}>{section.emoji}</Text>
        <Text style={styles.title}>{section.title}</Text>
        <Text style={styles.summary}>{section.summary}</Text>
      </View>
      <Carousel
        ref={carouselRef}
        data={section.content}
        renderItem={({ item, index }: any) => (
          <View style={styles.page}>
            <Text style={styles.chapterHeading}>{index + 1}. {item.heading}</Text>
            {item.body.map((para: string, i: number) => (
              <Text key={i} style={styles.body}>{para}</Text>
            ))}
            {item.tip && (
              <View style={styles.tipBox}>
                <Text style={styles.tipEmoji}>💡</Text>
                <Text style={styles.tip}>{item.tip}</Text>
              </View>
            )}
          </View>
        )}
        sliderWidth={width}
        itemWidth={width * 0.92}
        layout={"default"}
        inactiveSlideScale={0.96}
        inactiveSlideOpacity={0.7}
        containerCustomStyle={{ flexGrow: 0 }}
        contentContainerCustomStyle={{ alignItems: "center" }}
      />
      <View style={styles.sectionNav}>
        <Text
          style={[styles.sectionNavBtn, sectionIndex === 0 && styles.disabledBtn]}
          onPress={() => sectionIndex > 0 && setSectionIndex(sectionIndex - 1)}
        >
          ← Prev Section
        </Text>
        <Text style={styles.sectionNavTitle}>{section.title}</Text>
        <Text
          style={[styles.sectionNavBtn, sectionIndex === handbookSections.length - 1 && styles.disabledBtn]}
          onPress={() => sectionIndex < handbookSections.length - 1 && setSectionIndex(sectionIndex + 1)}
        >
          Next Section →
        </Text>
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
