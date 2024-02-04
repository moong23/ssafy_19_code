"use client";
import Editor, { useMonaco } from "@monaco-editor/react";
import { useEffect } from "react";

const CodeArea = ({
  code,
  isFixable,
}: {
  code: string;
  isFixable: boolean;
}) => {
  const monaco = useMonaco();
  const preprocessedCode = escapeNewLinesInQuotes(code);

  /**
   * function to preprocess the code string to prevent unwatned newlines in quotes
   * @param str code string
   * @returns code string with newlines in quotes escaped
   */
  function escapeNewLinesInQuotes(str: string) {
    let inQuotes = false;
    let result = "";

    for (let i = 0; i < str.length; i++) {
      const char = str[i];

      // Toggle inQuotes when encountering a double quote,
      // but only if it's not escaped.
      if (char === '"' && (i === 0 || str[i - 1] !== "\\")) {
        inQuotes = !inQuotes;
      }

      // If in quotes and the character is a newline, escape it.
      if (inQuotes && char === "\n") {
        result += "\\n";
      } else {
        result += char;
      }
    }

    return result;
  }

  useEffect(() => {
    if (monaco) {
      // Define the custom theme
      monaco.editor.defineTheme("customTheme", {
        base: "vs-dark", // Base theme
        inherit: true, // Inherit rules from base theme
        rules: [], // Additional syntax rules
        colors: {
          "editor.background": "#282a36", // Custom background color
          // Define other custom colors if needed
        },
      });

      // Set the custom theme
      monaco.editor.setTheme("customTheme");
    }
  }, [monaco]);

  return (
    <div className="w-full h-full bg-[#282A36] py-8">
      <Editor
        height="100%"
        language="java"
        value={preprocessedCode}
        theme="customTheme" // Apply the custom theme
        options={{
          acceptSuggestionOnCommitCharacter: true,
          acceptSuggestionOnEnter: "on",
          accessibilitySupport: "auto",
          autoIndent: "brackets",
          automaticLayout: true,
          codeLens: true,
          colorDecorators: true,
          contextmenu: true,
          cursorBlinking: "blink",
          cursorSmoothCaretAnimation: "off",
          cursorStyle: "line",
          disableLayerHinting: false,
          disableMonospaceOptimizations: false,
          dragAndDrop: false,
          fixedOverflowWidgets: false,
          folding: true,
          foldingStrategy: "auto",
          fontLigatures: false,
          formatOnPaste: false,
          formatOnType: false,
          hideCursorInOverviewRuler: false,
          links: true,
          mouseWheelZoom: false,
          multiCursorMergeOverlapping: true,
          multiCursorModifier: "alt",
          overviewRulerBorder: true,
          overviewRulerLanes: 2,
          quickSuggestions: true,
          quickSuggestionsDelay: 100,
          readOnly: !isFixable,
          renderControlCharacters: false,
          renderFinalNewline: "off",
          renderLineHighlight: "all",
          renderWhitespace: "none",
          revealHorizontalRightPadding: 30,
          roundedSelection: true,
          rulers: [],
          scrollBeyondLastColumn: 5,
          scrollBeyondLastLine: true,
          selectOnLineNumbers: true,
          selectionClipboard: false,
          selectionHighlight: true,
          showFoldingControls: "mouseover",
          smoothScrolling: false,
          suggestOnTriggerCharacters: true,
          wordBasedSuggestions: "currentDocument",
          wordSeparators: "~!@#$%^&*()-=+[{]}|;:'\",.<>/?",
          wordWrap: "off",
          wordWrapBreakAfterCharacters: "\t})]?|&,;",
          wordWrapBreakBeforeCharacters: "{([+",
          wordWrapColumn: 80,
          wrappingIndent: "none",
        }}
      />
    </div>
  );
};

export default CodeArea;
