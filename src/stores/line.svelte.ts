import count from "word-count";
import { charsCount } from "../utils/string";

class Line {
  public content: string;
  public words: number;
  public chars: number;

  constructor(content: string) {
    this.content = content;
    this.words = count(content);
    this.chars = charsCount(content);
  }
}

function createLineStore() {
  const lines: Line[] = $state([]);

  const load = () => {
    const data: string[] = JSON.parse(localStorage.getItem("lines") || "[]");
    console.log(data);
    for (let line of data) {
      console.log(line);
      lines.push(new Line(line));
    }
  };

  const save = () => {
    const data: string[] = lines.map((line) => line.content);
    localStorage.setItem("lines", JSON.stringify(data));
  };

  const push = (content: string) => {
    if (!content) {
      return;
    }

    lines.push(new Line(content));
  };

  const pop = () => {
    lines.pop();
  };

  const clear = () => {
    lines.splice(0, lines.length);
  };

  const last = (num: number) => {
    let ret = lines.slice(-num);

    if (ret.length < num) {
      return Array.from({ length: num - ret.length }, () => new Line("")).concat(ret);
    }

    return ret;
  };

  return {
    lines,
    get length() {
      return lines.length;
    },
    get wordCount() {
      return lines.reduce((acc, line) => acc + line.words, 0);
    },
    get charCount() {
      return lines.reduce((acc, line) => acc + line.chars, 0);
    },
    load,
    save,
    push,
    pop,
    clear,
    last,
  };
}

export const lineStore = createLineStore();
lineStore.load();
