import type { Token, TokenType } from "../models/CodeBlockModel";

const PATTERNS: [RegExp, TokenType][] = [
  [/^\/\/[^\n]*/, "comment"],
  [/^\/\*[\s\S]*?\*\//, "comment"],
  [/^`(?:[^`\\]|\\.)*`/, "string"],
  [/^"(?:[^"\\]|\\.)*"/, "string"],
  [/^'(?:[^'\\]|\\.)*'/, "string"],
  [/^\d+(\.\d+)?/, "number"],
  [
    /^(?:import|export|from|default|const|let|var|function|return|if|else|for|while|class|extends|implements|new|this|typeof|keyof|as|type|interface|enum|namespace|declare|abstract|readonly|static|public|private|protected|async|await|of|in|instanceof|void|null|undefined|true|false|try|catch|finally|throw|switch|case|break|continue)\b/,
    "keyword",
  ],
  [
    /^(?:string|number|boolean|object|any|never|unknown|symbol|bigint|Array|Promise|Record|Partial|Required|Pick|Omit|Readonly|Map|Set|Date|Error|RegExp|Function)\b/,
    "type",
  ],
  [/^<\/?[A-Z][a-zA-Z0-9]*/, "tag"],
  [/^<\/?[a-z][a-zA-Z0-9]*/, "tag"],
  [/^[a-zA-Z_$][a-zA-Z0-9_$]*(?==)/, "attribute"],
  [/^[a-zA-Z_$][a-zA-Z0-9_$]*(?=\s*\()/, "function"],
  [/^[a-zA-Z_$][a-zA-Z0-9_$]*/, "variable"],
  [/^(?:===|!==|=>|>=|<=|&&|\|\||[+\-*/%=!<>&|^~?:])/, "operator"],
  [/^[{}[\]();,.<>]/, "punctuation"],
  [/^[\s\S]/, "plain"],
];

export function tokenize(code: string): Token[] {
  const tokens: Token[] = [];
  let remaining = code;

  while (remaining.length > 0) {
    let matched = false;

    for (const [pattern, type] of PATTERNS) {
      const match = remaining.match(pattern);

      if (match) {
        tokens.push({ type, value: match[0] });
        remaining = remaining.slice(match[0].length);
        matched = true;
        break;
      }
    }

    if (!matched) {
      tokens.push({ type: "plain", value: remaining[0] });
      remaining = remaining.slice(1);
    }
  }

  return tokens;
}
