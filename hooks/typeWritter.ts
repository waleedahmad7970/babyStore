import { useState, useEffect } from "react";

type Segment = {
  text: string;
  bold?: boolean;
};

interface Options {
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
  leaveChars?: number; // 👈 how many characters to leave before next text
}

export function useTypewriter(
  sequences: Segment[][],
  {
    typingSpeed = 50,
    deletingSpeed = 30,
    pauseTime = 1500,
    leaveChars = 0,
  }: Options = {},
) {
  const [index, setIndex] = useState(0); // current sequence index
  const [displayed, setDisplayed] = useState<Segment[]>([]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentSequence = sequences[index];
    const totalChars = currentSequence.reduce(
      (sum, seg) => sum + seg.text.length,
      0,
    );

    let timeout: NodeJS.Timeout;

    if (!isDeleting && charIndex < totalChars) {
      // Typing forward
      timeout = setTimeout(() => {
        setDisplayed(getPartialSegments(currentSequence, charIndex + 1));
        setCharIndex((c) => c + 1);
      }, typingSpeed);
    } else if (isDeleting && charIndex > leaveChars) {
      // Deleting but stop at leaveChars
      timeout = setTimeout(() => {
        setDisplayed(getPartialSegments(currentSequence, charIndex - 1));
        setCharIndex((c) => c - 1);
      }, deletingSpeed);
    } else {
      // Pause before switching typing/deleting
      timeout = setTimeout(() => {
        if (!isDeleting) {
          setIsDeleting(true);
        } else {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % sequences.length);
        }
      }, pauseTime);
    }

    return () => clearTimeout(timeout);
  }, [
    charIndex,
    isDeleting,
    index,
    sequences,
    typingSpeed,
    deletingSpeed,
    pauseTime,
    leaveChars,
  ]);

  return displayed;
}

function getPartialSegments(sequence: Segment[], charCount: number): Segment[] {
  const result: Segment[] = [];
  let remaining = charCount;

  for (const seg of sequence) {
    if (remaining <= 0) break;
    const take = Math.min(remaining, seg.text.length);
    result.push({ text: seg.text.slice(0, take), bold: seg.bold });
    remaining -= take;
  }
  return result;
}
